import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentProfileLogo = () => {


    return <div>
                <div className="tblt-vw-prfl1-dv cmpy-prfl-a2">
                    <div className="cmpy-prfl-a3" style={{borderRadius: '100px'}}>
                        <img src="https://res.cloudinary.com/infoi/image/upload/v1677570405/Dashboard-Icons/alex_ujdyda.png" className="cmpy-prfl-img1" style={{borderRadius: '100px', padding: '0'}} />
                    </div>
                </div>
            </div>
     
}