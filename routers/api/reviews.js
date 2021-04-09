const express = require("express");
const router = express.Router();
const { cloudinary } = require("../../utils/cloudinary");
const upload = require("../../utils/multer");

const Review = require("../../models/testimonials");

router.get("/", async (req, res) => {
  await Review.find().then((item) => {
    res.json(item);
  });
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const fileStr = req.body.data.image;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr);
    const testimonial = new Review({
      image: uploadedResponse.secure_url,
      description: req.body.data.description,
      userName: req.body.data.userName,
    });
    await testimonial.save().then(() => {
      console.log("success");
      res.json({ msg: "Success" });
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

module.exports = router;
