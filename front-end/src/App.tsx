import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";
import { useAuthStore } from "./store/auth.store";

function App() {
  const { getProfile } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile();
    }
  }, [getProfile]);

  return <AppRouter />;
}

export default App;
