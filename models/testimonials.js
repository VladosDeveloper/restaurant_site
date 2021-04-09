const { Schema, model } = require("mongoose");

const testimonial = new Schema({
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

module.exports = model("Testimonial", testimonial);
