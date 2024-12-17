
'use client' ;
import {useState} from "react";
import { db } from "@/firebase/config";
import { deleteDoc, doc} from "firebase/firestore";




export const useDeleteDos = (fbCollection) => {
    const [deleteState,setDeleteState] = useState(false);
    

    const deleteBlogData = async (id) => {
        const docRef = doc(db,fbCollection, id);
        try {
           await deleteDoc(docRef)
           setDeleteState(true)
           setTimeout(()=>{setDeleteState(false)},3000)
        }
        catch (err) {
            console.log('err')
        }
    }

   
    return {deleteBlogData,deleteState}


};

