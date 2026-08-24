import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "node:fs";

const getServiceAccountFromEnvFile = () => {
  try {
    const envFile = fs.readFileSync(new URL("../../.env", import.meta.url), "utf8");
    const jsonStart = envFile.indexOf('{"type": "service_account"');
    const formattedJsonStart = envFile.indexOf('{\r\n  "type": "service_account"');
    const start = jsonStart === -1 ? formattedJsonStart : jsonStart;

    if (start === -1) {
      return null;
    }

    return JSON.parse(envFile.slice(start));
  } catch {
    return null;
  }
};

const getFirebaseAdminAuth = () => {
  const serviceAccount = getServiceAccountFromEnvFile();
  const projectId = process.env.FIREBASE_PROJECT_ID || serviceAccount?.project_id;
  const clientEmail =
    process.env.FIREBASE_CLIENT_EMAIL || serviceAccount?.client_email;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY || serviceAccount?.private_key;

  if (!projectId || !clientEmail || !privateKey) {
    console.error("Firebase Admin: Missing credentials", {
      hasProjectId: !!projectId,
      hasClientEmail: !!clientEmail,
      hasPrivateKey: !!privateKey,
    });
    throw new Error("Firebase Admin authentication is not configured.");
  }

  // Normalize newlines: Render may store \\n as literal backslash-n
  const normalizedKey = privateKey
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n");

  const app =
    getApps()[0] ??
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: normalizedKey,
      }),
    });

  return getAuth(app);
};

export default getFirebaseAdminAuth;
