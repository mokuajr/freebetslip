import React, { useEffect, useState } from 'react'
import { db, storage, timestamp } from '../../Firebase/firebase';
import Newslayout from './Newslayout';
 

function Adverts() {
     const [advrts, setAdvrts] = useState([]);
    useEffect(() => {
         db.collection('adverts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //evry time anew post is added, fire  this code 
      setAdvrts(snapshot.docs.map(doc => ({
        id: doc.id,
        advt: doc.data()
      })))
     })
    },[])
    return (
        <div>
             {
                advrts.map(({id, advt}) => (
                <Newslayout 
                    key={id}  
                    advertId ={id}
                    timestamp = {advt.timestamp}
                    tittle={advt.tittle}
                    desc={advt.desc}
                    imageUrl={advt.imageUrl}
                    
                />
                ))
            }
        </div>
    )
}

export default Adverts