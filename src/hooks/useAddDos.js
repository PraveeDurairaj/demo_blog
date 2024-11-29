import { useState } from "react"
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export const useAddDos = (fbCollection) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState()
// add data
    const userCollection = collection(db, fbCollection)
    const addBlogData = async (doc) => {
        try {
            const pushAddData = await addDoc(userCollection, { ...doc, blogCreatedDate: serverTimestamp() })
            setDocuments(pushAddData)
        }
        catch (err) {
            setError(err.message)
        }
    }
    return { addBlogData, documents, error }
}