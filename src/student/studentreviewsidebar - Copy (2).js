import React, { useState, useRef, useEffect } from "react";
import { Accordion, AccordionItem} from '@szhsin/react-accordion';
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentReviewSidebar = () => {

    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                    <div>
                        <Accordion allowMultipleExpanded={false} className="lftsdbrrwldv1">
                            <AccordionItem className='active' header={
                                <div>
                                    <div>
                                        <span>Verification (1/3)</span>
                                    </div>
                                </div>
                            }>
                                <div>
                                    <div>
                                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                            <li>
                                                <NavLink to='/student/studentreviewdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/check-grnclr.svg" className="prfl-ullacxzx1img" />
                                                    <span>Student Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/student/studentreviewacademicdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Academic Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/student/studentreviewcoursedetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Course Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionItem>
                            <AccordionItem header={
                                <div>
                                    <div>
                                        <span>Sync (0/3)</span>
                                    </div>
                                </div>
                            }>
                                <div>
                                    <div>
                                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                            <li>
                                                <NavLink to='/student/studentsyncdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Student Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/student/studentsyncacademicdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Academic Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/student/studentsynccoursedetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Course Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionItem>
                            <AccordionItem header={
                                <div>
                                    <div>
                                        <span>Reviews (0/3)</span>
                                    </div>
                                </div>
                            }>
                                <div>
                                    <div>
                                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                            <li>
                                                <NavLink to='' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active dsbl-ullacxzxxz1' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive dsbl-ullacxzxxz1')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Student Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active dsbl-ullacxzxxz1' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive dsbl-ullacxzxxz1')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Academic Details</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active dsbl-ullacxzxxz1' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive dsbl-ullacxzxxz1')} >
                                                    <img src="/images/lock-outline.svg" className="prfl-ullacxzx1img" />
                                                    <span>Course Details</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                
        </div>
     
}