const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Please enter the valid email"],
  },

  password: {
    type: String,
    trim: true,
    required: [true, "Password is required"],
  },

});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (oldPassword) {
  return await bcrypt.compare(oldPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
