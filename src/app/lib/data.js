import { ContactModel } from "./models";
import { dbConnection } from "./db.config";


export const fetchContact = async () => {
    try {
        dbConnection()
        const contacts = await ContactModel.find({})
        return contacts
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch Contact :(")
    }
}