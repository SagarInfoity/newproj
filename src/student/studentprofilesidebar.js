import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentProfileSidebar = () => {


    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/student/studentdetails' className={({ isActive }) => (isActive ? 'prfl-ulla active' : 'prfl-ulla inactive')} >
                                        <span>Student Details</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/student/academicdetails' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Academic Details</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/student/coursedetails' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Course Details</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to='/student/address-info' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Address & Labour Groups</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/student/projects' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Projects</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/student/admins' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Administrators</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/student/permissions' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Permissions</span>
                                    </NavLink>
                                </li> */}
                            </ul>
                        </div>
                
        </div>
     
}