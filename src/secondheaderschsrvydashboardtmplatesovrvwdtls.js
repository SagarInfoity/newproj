
import './Content/Content/login.css';
import './App.css';
import './Content/Content/headerdashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const SecondHeaderSchSrvysdashboardforOverviewdeeppages = () => {


    return <div>

                <div className="content-header custom-blue box-shadow-4 cstm-hdrrr scndryhdrcstm" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "1px 60px 0", paddingBottom: "0" }}>
                        <div className="navbar-text nav-title" id="pageTitle">
                            <div>
                                <img src='https://res.cloudinary.com/infoi/image/upload/v1641466337/Header%20Logo/main-logo_ulakd4.svg' width="120" style={{marginTop: '-4px', height: '30px'}} />
                            </div>
                        </div>
                        
                        <div className="row nvhdrhde mbvw-dspn" style={{width: "100%", textAlign: "center", justifyContent: "center"}}>
                            <div>
                                <NavLink className={({ isActive }) => (isActive ? 'nvhdr active' : 'inactive')}>
                                    <button className="dshbdhdrbtn" id="staff">
                                        Staff
                                    </button>
                                </NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'nvhdr ' : 'inactive nvhdr active')}>
                                    <button className="dshbdhdrbtn" id="srvy">
                                        Survey
                                    </button>
                                </NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'nvhdr ' : 'inactive')}>
                                    <button className="dshbdhdrbtn" id="clsrm">
                                        Classroom
                                    </button>
                                </NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'nvhdr ' : 'inactive')}>
                                    <button className="dshbdhdrbtn" id="clsrm">
                                        Insights
                                    </button>
                                </NavLink>

                            </div>
                        </div>

                        <ul className="nav flex-row order-lg-2 mt--7px">
                            <li className="dropdown d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drpbtnndw">
                                        <div className="avatar">
                                            <div className="text-truncate csk-pfrl-nm" title='Username'>Username</div>
                                        </div>
                                        <i className="fa fa-caret-down hdr-fa-icon Aezakmi8"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="drpdwnmnu">
                                        <div className="dropdown-item btnclclclk">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1655208369/Dashboard/profile_icon.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Profile</div>
                                        </div>
                                        <div className="dropdown-item btnclclclk dspdsktp-n">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1645502515/Dashboard/jobs_nj9hip.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Staff</div>
                                        </div>
                                        <div className="dropdown-item btnclclclk dspdsktp-n">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1655115253/Dashboard/certificatee_ly9o3w.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Survey</div>
                                        </div>
                                        <div className="dropdown-item btnclclclk dspdsktp-n">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1645182960/Dashboard/dashboard_asd2cv.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Classroom</div>
                                        </div>
                                        <div className="dropdown-item btnclclclk drpdwnlastitm">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1638941210/Header%20Logo/logoutstf607712_mgmuyg.svg" width="22" height="20" alt="Logout Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Log out of Feedii</div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>

                    <div className='cstmm-hdrsnd'>
                        <div>
                            <NavLink className={({ isActive }) => (isActive ? 'nvhdr active' : 'nvhdr active')}>
                                <button className="dshbdhdrbtn">
                                    Overview
                                </button>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'nvhdr ' : 'inactive')}>
                                <button className="dshbdhdrbtn">
                                    Templates
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
     
}