import express from "express";

import { authenticateUser } from "../middleware/auth.middleware.js";

import {
  searchTracks,
  searchArtists,
  searchAlbums,
  getArtistInfo,
  getAlbumInfo,
  addTrackToLibrary,
} from "../controllers/lastfm.controller.js";

const router = express.Router();

router.use(authenticateUser);

router.get("/search", searchTracks);
router.get("/search/artists", searchArtists);
router.get("/search/albums", searchAlbums);
router.get("/artist", getArtistInfo);
router.get("/album", getAlbumInfo);
router.post("/add-to-library", addTrackToLibrary);

export default router;
