// backend/controllers/artworkController.js
import Artwork from "../models/Artwork.js";

// @desc Get all artworks
// @route GET /api/artworks
export const getArtworks = async (req, res) => {
  try {
    // await Artwork.deleteMany({}); // Clear existing artworks for testing purposes
    const artworks = await Artwork.find();
    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get single artwork
// @route GET /api/artworks/:id
export const getArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) return res.status(404).json({ message: "Artwork not found" });
    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create artwork
// @route POST /api/artworks
// export const createArtwork = async (req, res) => {
//   try {
//     const artwork = await Artwork.create(req.body);
//     res.status(201).json(artwork);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
export const createArtwork = async (req, res) => {
  try {
    const artworkData = {
      ...req.body,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl,
    };

    const artwork = await Artwork.create(artworkData);
    console.log('Artwork created with data:', artworkData);
    res.status(201).json(artwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// @desc Update artwork
// @route PUT /api/artworks/:id
export const updateArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!artwork) return res.status(404).json({ message: "Artwork not found" });
    res.status(200).json(artwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Delete artwork
// @route DELETE /api/artworks/:id
export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);
    if (!artwork) return res.status(404).json({ message: "Artwork not found" });
    res.status(200).json({ message: "Artwork deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
