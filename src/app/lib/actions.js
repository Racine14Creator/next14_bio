"use serve"

import { dbConnection } from "./db.config";
import { ContactModel } from "./models";

export const addContact = async (formData) => {
    const { email, message } = Object.fromEntries(formData)

    try {
        dbConnection()
        const newContact = new ContactModel({
            email, message
        })
        await newContact.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send your Message")
    }
}