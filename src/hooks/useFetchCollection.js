import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFetchCollection = (fbCollection) => {
    const [documents, setDocuments] = useState(null);
    useEffect(() => {
        const userCollection = collection(db, fbCollection);
        const orderDataQuery = query(userCollection, orderBy("blogCreatedDate", "desc"))
        const unsub = onSnapshot(orderDataQuery, (snapshot) => {
            let res = snapshot.docs.map((docs) => docs.data())
            setDocuments(res)
        })
        return () => unsub()
    },[fbCollection])

    return documents;

}