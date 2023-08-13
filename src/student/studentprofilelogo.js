import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentProfileLogo = () => {


    return <div>
                <div className="tblt-vw-prfl1-dv cmpy-prfl-a2">
                    <div className="cmpy-prfl-a3" style={{borderRadius: '100px'}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5U2CHpliMtpWAoFmM6smVO_t0yErb3tfsg&usqp=CAU" className="cmpy-prfl-img1" style={{borderRadius: '100px', padding: '0', objectFit: "cover"}} />
                    </div>
                </div>
            </div>
     
}