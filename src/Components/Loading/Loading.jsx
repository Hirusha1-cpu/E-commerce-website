import React from "react";
import style from './loading.module.css';

const Loading = () => {
  return (
    <div
      className="relative top-0 left-0 w-screen h-screen flex flex-col gap-[20px] items-center justify-center
    bg-white z-[101]"
    >
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <h2 className="font-bold">Loading..</h2>
     
    </div>
  );
};

export default Loading;
