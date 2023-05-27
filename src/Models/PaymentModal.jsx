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
    setDoc(doc(db, "categoryItems","categoryItem6"), { //(collection = category = table ekak, eka row ekak samana wenw atule thyena data wlat, id part ekata samanai collection id eka)
        title: "categoryItem title 6 ",
        img: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
  
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
