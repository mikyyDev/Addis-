import { Router } from "express";

import UserRouter from "./auth.js";
import PlaylistRouter from "./playlist.js";
import SongRouter from "./song.js";
import GenreRouter from "./genre.js";
import ArtistRouter from "./artist.js";
import AlbumRouter from "./album.js";
import statRoutes from "./stat.js";
import testRoutes from "./test.js";
import LastFMRouter from "./lastfm.js";

const router = Router();

router.use("/auth", UserRouter);
router.use("/playlist", PlaylistRouter);
router.use("/songs", SongRouter);
router.use("/genre", GenreRouter);
router.use("/artists", ArtistRouter);
router.use("/album", AlbumRouter);
router.use("/lastfm", LastFMRouter);
router.use("/stat", statRoutes);
router.use("/", testRoutes);

export default router;
