import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentReviewSidebar = () => {


    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/student/studentreviewdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 inactive')} >
                                        <img src="/images/check-icon.svg" className="prfl-ullacxzx1img" />
                                        <span>Verification (1/2)</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 inactive')} >
                                        <span>Your Information</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 inactive')} >
                                        <span>Plans (0/3)</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 inactive')} >
                                        <span>Info (0/2)</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 cmpny-prfl-ullacs3 inactive')} >
                                        <span>Review (0/1)</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                
        </div>
     
}