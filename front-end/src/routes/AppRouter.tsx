import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/LandingPage";
import Login from "../pages/Login/LoginPage";
import Register from "../pages/Register/RegisterPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Songs from "../pages/Songs/Songs";
import Statistics from "../pages/Statistics/Statistics";
import ProtectedRoute from "./ProtectedRoute";
import Artist from "../pages/Artists/ArtistPage";
import Album from "../pages/Albums/Album";
import Genre from "../pages/Genres/GenrePage.tsx";
import Playlist from "../pages/Playlists/Playlist";
import Spotify from "../pages/LastFM/LastFMPage";
import Settings from "../pages/Settings/SettingsPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected Routes  */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="/albums" element={<Album />} />
        <Route path="/genres" element={<Genre />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
