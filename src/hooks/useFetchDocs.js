'use client' ;
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";




export const useFetchDocs = (collectionName,id) => {
    const [blog,setBlog] = useState(null);
    

    const getBlogData = async (id) => {
        const docRef = doc(db, collectionName, id);
        try {
            const docSnap = await getDoc(docRef);
            const res =  docSnap.data()
            setBlog(res)
            return blog;
        }
        catch (err) {
            console.log('err')
        }
    }
   
    return {getBlogData,blog}


};
