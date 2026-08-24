/**
 * Extract a user-friendly error message from an unknown error.
 *
 * Priority:
 * 1. Backend response message (e.g. { message: "Email already registered" })
 * 2. Axios validation errors array (e.g. { errors: [{ message: "..." }] })
 * 3. Axios generic status-code message → replaced with friendly text
 * 4. Network / CORS errors → friendly offline message
 * 5. Plain Error.message
 * 6. Static fallback string
 */
export const getErrorMessage = (
  error: unknown,
  fallback: string,
): string => {
  // ── 1. Try to read the backend response body ──────────────────────
  if (typeof error === "object" && error !== null) {
    const maybeAxios = error as {
      response?: {
        data?: {
          message?: unknown;
          errors?: Array<{ message?: unknown }>;
        };
      };
    };

    const data = maybeAxios.response?.data;

    if (typeof data === "object" && data !== null) {
      // Top-level message
      if (typeof data.message === "string") {
        return data.message;
      }

      // Validation errors array
      if (Array.isArray(data.errors) && data.errors.length > 0) {
        const first = data.errors[0];
        if (typeof first?.message === "string") {
          return first.message;
        }
      }
    }
  }

  // ── 2. Axios / JS Error.message ──────────────────────────────────
  if (error instanceof Error) {
    const msg = error.message;

    // Axios wraps non-2xx responses like this:
    //   "Request failed with status code 400"
    const statusMatch = msg.match(/status code (\d+)/);
    if (statusMatch) {
      const code = Number(statusMatch[1]);

      if (code === 400) {
        return "Invalid request. Please check your input and try again.";
      }
      if (code === 401) {
        return "You are not authorized. Please sign in again.";
      }
      if (code === 403) {
        return "You don't have permission to do that.";
      }
      if (code === 404) {
        return "The requested resource was not found.";
      }
      if (code === 409) {
        return "This conflicts with existing data. Please try again.";
      }
      if (code === 422) {
        return "Please check your input and try again.";
      }
      if (code === 429) {
        return "Too many requests. Please wait a moment and try again.";
      }
      if (code >= 500) {
        return "Something went wrong on our end. Please try again later.";
      }

      return `Something went wrong (error ${code}). Please try again.`;
    }

    // Network / CORS / offline
    if (
      msg === "Network Error" ||
      msg.includes("Failed to fetch") ||
      msg.includes("ERR_FAILED") ||
      msg.includes("ERR_NETWORK")
    ) {
      return "Unable to connect to the server. Please check your internet connection and try again.";
    }

    return msg;
  }

  // ── 3. Static fallback ───────────────────────────────────────────
  return fallback;
};
