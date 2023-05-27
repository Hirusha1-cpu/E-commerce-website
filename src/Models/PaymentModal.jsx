import { Modal } from "@mui/material";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import db from "../Firebase/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useImperativeHandle(ref,()=>({
    handleOpen: () => setOpen(true)
  }))
  const addData = ()=>{
    setDoc(doc(db, "category/category2/category2","category2_item5"), { //(collection = category = table ekak, eka row ekak samana wenw atule thyena data wlat, id part ekata samanai collection id eka)
        title: "category2-title5 ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIzpE0RtC7z7mNKlGCfZVu-76ycBg8B0nPw&usqp=CAU",
        rating:2.3
  
      })
      .then(() => {
        console.log("Document written with ID: ");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }
  return (
    <div>
      <Modal open={open} onClose={handleClose} className="flex flex-col items-center justify-center">
        <div className="w-[90%] bg-white">
            <button onClick={addData}>Click</button>
        </div>
      </Modal>
    </div>
  );
};

export default forwardRef(PaymentModal);
