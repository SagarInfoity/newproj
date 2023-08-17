import React, { useState, useRef, useEffect } from "react";
import { Accordion, AccordionItem} from '@szhsin/react-accordion';
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";

export const StudentReviewSidebar = () => {

    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                    <div>
                                <div>
                                    <div className="lftsdbrvcdvxs1 lftsdbrvcdvxs1cs">
                                        <span>Review (1/3)</span>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                                    {/* <li>
                                                        <NavLink to='/student/studentreviewdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                            <svg data-tooltip-id="my-tooltip-1" className="lftsdbrullidsvxz1" width="18" height="18" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5986 0.999986L3.3994 8.19812L0.200195 4.99999" stroke="#fff" strokeWidth="2"></path></svg>
                                                            <svg data-tooltip-id="my-tooltip-1" className="lftsdbrullidsvxz1" width="18" height="18" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2FC991" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                                                            <span>Student Details</span>
                                                        </NavLink>
                                                        <ReactTooltip id="my-tooltip-1" place="top" content="In Progress" />
                                                    </li> */}
                                                    <li>
                                                        <NavLink to='/student/studentreviewdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                        {/* <svg data-tooltip-id="my-tooltip-2" className="lftsdbrullidsvxz2" width="18" height="18" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5986 0.999986L3.3994 8.19812L0.200195 4.99999" stroke="#fff" strokeWidth="2"></path></svg> */}
                                                        <svg data-tooltip-id="my-tooltip-2" className="lftsdbrullidsvxz2" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#91999f" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                                                            <span>Student Details</span>
                                                        </NavLink>
                                                        <ReactTooltip id="my-tooltip-2" place="top" content="In Progress" />
                                                    </li>
                                                    <li>
                                                        <NavLink to='/student/studentreviewacademicdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                        <svg data-tooltip-id="my-tooltip-3" className="lftsdbrullidsvxz3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ff5745" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z"></path></svg>
                                                            <span>Academic Details</span>
                                                        </NavLink>
                                                        <ReactTooltip id="my-tooltip-3" place="top" content="2 Errors" />
                                                    </li>
                                                    <li>
                                                        <NavLink to='/student/studentreviewcoursedetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                        {/* <svg data-tooltip-id="my-tooltip-4" className="lftsdbrullidsvxz4" xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 24 24"><path fill="rgb(18, 52, 102)" d="M4 22V8h3V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h3v14H4Zm8-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"></path></svg> */}
                                                        <svg data-tooltip-id="my-tooltip-4" className="lftsdbrullidsvxz2" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2FC991" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                                                            <span>Course Details</span>
                                                        </NavLink>
                                                        <ReactTooltip id="my-tooltip-4" place="top" content="Completed" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lftsdbrvcdvxs1">
                                        <span>Sync (0/3)</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                            <li>
                                                <NavLink to='/student/studentsyncdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                {/* <svg data-tooltip-id="my-tooltip-5" className="lftsdbrullidsvxz1" width="18" height="18" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5986 0.999986L3.3994 8.19812L0.200195 4.99999" stroke="#fff" strokeWidth="2"></path></svg> */}
                                                        <svg data-tooltip-id="my-tooltip-5" className="lftsdbrullidsvxz4" xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 24 24"><path fill="rgb(18, 52, 102)" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"/></svg>
                                                    <span>In Progress</span>
                                                </NavLink>
                                                <ReactTooltip id="my-tooltip-5" place="top" content="Locked" />
                                            </li>
                                            {/* <li>
                                                <NavLink to='/student/studentsyncacademicdetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                <svg data-tooltip-id="my-tooltip-6" className="lftsdbrullidsvxz2" width="18" height="18" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5986 0.999986L3.3994 8.19812L0.200195 4.99999" stroke="#fff" strokeWidth="2"></path></svg>
                                                    <span>Completed</span>
                                                </NavLink>
                                                <ReactTooltip id="my-tooltip-6" place="top" content="Completed" />
                                            </li>
                                            <li>
                                                <NavLink to='/student/studentsynccoursedetails' className={({ isActive }) => (isActive ? 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 active' : 'prfl-ulla prfl-ullacxzx1 prfl-ullacxzxxz1 cmpny-prfl-ullacs3 inactive')} >
                                                <svg data-tooltip-id="my-tooltip-7" className="lftsdbrullidsvxz3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ff5745" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z"></path></svg>
                                                    <span>Exited with error</span>
                                                </NavLink>
                                                <ReactTooltip id="my-tooltip-7" place="top" content="1 Error" />
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                        {/* <Accordion allowMultipleExpanded={false} className="lftsdbrrwldv1">
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
                        </Accordion> */}
                    </div>
                </div>
                
        </div>
     
}