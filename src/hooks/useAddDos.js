import { useState } from "react"
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export const useAddDos = (fbCollection) => {
    const [documents, setDocuments] = useState(null);
    const [addDocStatus,setaddDocStatus] = useState(false)
// add data
    const userCollection = collection(db, fbCollection)
    const addBlogData = async (doc) => {
        try {
            const pushAddData = await addDoc(userCollection, { ...doc, blogCreatedDate: serverTimestamp() })
            setDocuments(pushAddData)
            setaddDocStatus(true)
            
        }
        catch (err) {
             console.log(err)
        }
        setTimeout(()=>setaddDocStatus(false),3000)
    }
    return { addBlogData, documents, addDocStatus }
}