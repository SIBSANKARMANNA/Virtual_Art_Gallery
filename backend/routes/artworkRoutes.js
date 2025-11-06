// backend/routes/artworkRoutes.js
import express from "express";
import {
  getArtworks,
  getArtworkById,
  createArtwork,
  updateArtwork,
  deleteArtwork,
} from "../controllers/artworkController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.route("/").get(getArtworks).post(upload.single("image"), createArtwork);
router
  .route("/:id")
  .get(getArtworkById)
  .put(updateArtwork)
  .delete(deleteArtwork);

export default router;
