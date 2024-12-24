'use client' ;
import {useState} from "react";
import { db } from "@/firebase/config";
import {doc, updateDoc,serverTimestamp} from "firebase/firestore";




export const useUpdateDoc = (fbCollection) => {
    const [updateState,setupdateState] = useState(false);
    

    const updateBlogData = async (id,docRef) => {
        const updateRef = doc(db, fbCollection, id);
        try {
           await updateDoc(updateRef,{...docRef})
           setupdateState(true)
           setTimeout(()=>{setupdateState(false)},3000)
        }
        catch (err) {
            console.log('err')
        }
    }

   
    return {updateBlogData,updateState}


};