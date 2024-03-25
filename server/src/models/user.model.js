import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    profileAvatar: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
    },
    confirmPassword: {
      type: String,
      required: [
        true,
        "Password didn't match please enter above same Password!",
      ],
    },
  },
  { timestamps: true }
);
