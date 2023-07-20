import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CandidatesSidebar = () => {


    return <div>

                    <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <h5 className="cndth5">Hiring CHecklist</h5>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/candidates/basic-info' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs2 active' : 'prfl-ulla cmpny-prfl-ullacs2 inactive')} >
                                        <span>Basic Info</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Employment Type</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Job Details</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Offer Details</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Payroll Settings</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Benefits</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="prfl-ullacs2 cmpny-prfl-ullacs2 inactive" >
                                        <span>Review Offer</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                
        </div>
     
}