import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CandidateProfileLogo = () => {

    // const [height, setHeight] = useState("140px");
    // const [width, setWidth] = useState("140px");
    // const [lastScrollPosition, setLastScrollPosition] = useState(0);

    // useEffect(() => {
    //     function handleScroll() {
    //       const scrollPosition = window.scrollY;
    //       const scrollDirection =
    //         scrollPosition > lastScrollPosition ? "down" : "up";
    //       const newHeight =
    //         scrollDirection === "down" ? "115px" : "140px";
    //       const newWidth =
    //         scrollDirection === "down" ? "115px" : "140px";
    //       setHeight(newHeight);
    //       setWidth(newWidth);
    //       setLastScrollPosition(scrollPosition);
    //     }
    
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, [lastScrollPosition]);

    return <div>
                <div className="tblt-vw-prfl1-dv cmpy-prfl-a2 cmpy-prfl-a2cs2">
                    {/* <div className="cmpy-prfl-a3cs2" style={{ height, width }}> */}
                    <div className="cmpy-prfl-a3cs2">
                        <img src="/Images/user-profl.png" className="cmpy-prfl-img1 cmpy-prfl-img1cs" />
                    </div>
                </div>
            </div>
     
}