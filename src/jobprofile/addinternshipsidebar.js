import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const AddInternshipSidebar = () => {


    return <div>

                        <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/jobprofile/internship-details' className={({ isActive }) => (isActive ? 'mb-3 prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs active' : 'mb-3 prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs inactive')} >
                                        <span>Internship Details</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/jobprofile/stipend-perks' className={({ isActive }) => (isActive ? ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs active' : ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs inactive')} >
                                        <span>Stipend & Perks</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                
        </div>
     
}