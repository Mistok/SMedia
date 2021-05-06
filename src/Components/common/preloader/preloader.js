import preloader from "./preloader.svg";
import React from "react";
import Class from "./preloader.module.css";
let Preloader = (props) => {
    return  <div className={Class.preloader_container} >
                <img src={preloader}/>
            </div>
};

export default Preloader;