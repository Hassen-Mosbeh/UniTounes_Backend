const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // ensure case-insensitive emails
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{8,15}$/, // 8-15 digits
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    interests: {
      type: String,
      required: true,
    },
    loisir: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
