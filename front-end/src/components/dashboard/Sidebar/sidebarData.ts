import {
  LayoutDashboard,
  Music2,
  Users,
  Disc3,
  Tags,
  ListMusic,
  BarChart3,
  Settings,
  Radio,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Songs",
    path: "/songs",
    icon: Music2,
  },
  {
    title: "Artists",
    path: "/artists",
    icon: Users,
  },
  {
    title: "Albums",
    path: "/albums",
    icon: Disc3,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: Tags,
  },
  {
    title: "Playlists",
    path: "/playlists",
    icon: ListMusic,
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export const discoverItems = [
  {
    title: "Spotify",
    path: "/spotify",
    icon: Radio,
  },
];
