import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const getFirebaseApp = () => {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error("Firebase authentication is not configured.");
  }

  return getApps()[0] ?? initializeApp(firebaseConfig);
};

export const getFirebaseAuth = () => {
  return getAuth(getFirebaseApp());
};

export const getFirebaseAnalytics = async (): Promise<Analytics | null> => {
  if (!firebaseConfig.measurementId || !(await isSupported())) {
    return null;
  }

  return getAnalytics(getFirebaseApp());
};
