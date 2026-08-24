import axios from "axios";
import { env } from "../config/env.config.js";

export const lastfmRequest = async (params) => {
  try {
    const response = await axios.get(env.LASTFM_API_URL, {
      params: {
        ...params,

        api_key: env.LASTFM_API_KEY,

        format: "json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Last.fm API error:", error.response?.data || error.message);

    throw new Error("Last.fm service is currently unavailable");
  }
};
