import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const dbData = {
    category:[]
}

const getDataFromSubCollection = (collectionName,documentId,subCollectionName,setFunction) => {
   
    getDocs(collection(db, `${collectionName}/${subCollectionName}/${documentId}`)).then((querySnapshot) => {
        //console.log(querySnapshot);
        console.log('data read from collection');

       
        const dataArr = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            dataArr.push({...doc.data(),categoryId:doc.id});
            console.log(doc.id, " => ", doc.data());
        });
       // dbData[collectionName] = dataArr;
        //console.log(dataArr);
        setFunction(dataArr)
    })
   }



export default getDataFromSubCollection;