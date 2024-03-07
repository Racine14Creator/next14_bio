import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

export const ContactModel = mongoose.models.ContactModel || mongoose.model("ConctactModel", contactSchema)