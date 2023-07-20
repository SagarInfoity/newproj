import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { DoubleHeaderMainForJobProfile } from '../doubleheadermainforjobprofile';
import { Footer } from '../footer';
import { AddJobSidebar } from './addjobsidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

export const ViewInternship_Details = () => {
    
    
    return <div>
        <DoubleHeaderMainForJobProfile />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
           <div className="row mt-6-cstm mt-5">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <div class="mt-3 pt-1 pl-1 mb-5">
                                <div>
                                    <Link to='/hiring/jobprofile' className="jbpfl-csa1">
                                        <i class="fa fa-chevron-left jbpfl-csa1-i"></i> Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 cmpy-prfl-a1 cmpy-prfl-a1cs cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mb-2">
                        <div style={{paddingTop: 20, paddingBottom: 32}}>
                            <h2 style={{fontSize: 16, lineHeight: '1.25', color: '#333e63', fontWeight: 100, fontFamily: 'Circular-Bold', margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                View internship details
                            </h2>
                        </div>
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-body" id="profile">
                                    <div className="hrngvwjbdv1 hrngvwjbdv1cs">
                                        <div className="hrngvwjbdv1-2 hrngvwjbdv1-2cs">
                                            <div className="hrngvwjbdv1-21" title="UI/UX Design internship">
                                                UI/UX Design internship
                                            </div>
                                            <div className="hrngvwjbdv1-22 hrngvwjbdv1-22cs" title="IT Department, HR Department">
                                                (IT Department, HR Department)
                                            </div>
                                            <div className="hrngvwjbdv1-23 hrngvwjbdv1-23cs">
                                                <span className="hrngvwjbdv1-23sp1">
                                                    <svg className="hrngvwjbdv1-23sp1svg1" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    <span className="hrngvwjbdv1-23sp1-1">Location</span>
                                                </span>
                                                <span className="hrngvwjbdv1-23sp2">
                                                    <svg className="hrngvwjbdv1-23sp1svg2" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                                    <span className="hrngvwjbdv1-23sp2-1">Work mode · Internship Type</span>
                                                </span>
                                            </div>
                                        </div>
                                        <button className="hrngvwjbdv1-3" type="button">
                                            <span className="hrngvwjbdv1-3spn1">
                                                <span>Add Candidate</span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hrngvwjbdv2 hrngvwjbdv2cs pb-0">
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-3">
                                                About Internship
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-2 pt-0 pl-3">
                                                Selected intern's day-to-day responsibilities include:
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <ul className="hrngvwjbdv2-4 pl-4">
                                                <li>Work with the product and development teams to understand user needs and requirements, and translate them into functional and visually appealing UI designs for web and mobile platforms</li>
                                                <li>Develop wireframes, prototypes, and visual designs for new features and improvements, ensuring they align with the overall brand guidelines and style</li>
                                                <li>Develop storyboards and user journey flow</li>
                                                <li>Conduct user research and usability testing to validate design decisions, identify areas for improvement, and ensure a positive user experience</li>
                                                <li>Collaborate with developers to ensure designs are implemented accurately with proper attention to detail and consistency across all screens</li>
                                                <li>Create and maintain design systems, style guides, and other documentation to ensure consistency across the app and its features</li>
                                                <li>Stay up-to-date with industry trends and design best practices, and contribute to the continuous improvement of the app's design and user experience</li>
                                            </ul>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-3">
                                                Skills Required 
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <ul className="hrngvwjbdv2-4 pl-4">
                                                <li>Adobe XD Figma Sketch UI & UX Design User Interface (UI) Development Wireframing</li>
                                                <li>Earn certifications in these skills</li>
                                                <li>Learn Wireframing</li>
                                                <li>Learn UI & UX Design</li>
                                                <li>Learn Figma</li>
                                            </ul>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-3">
                                                Only Those Candidates Can Apply Who
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <ul className="hrngvwjbdv2-4 pl-4">
                                                <li>are available for the work from home job/internship</li>
                                                <li>can start the work from home job/internship between 7th Mar'23 and 11th Apr'23</li>
                                                <li>are available for duration of 1 month</li>
                                                <li>have relevant skills and interests</li>
                                            </ul>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-3">
                                                Other Requirements
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <ul className="hrngvwjbdv2-4 pl-4">
                                                <li>Candidates pursuing a bachelor's degree in CS/IT or whose results are awaited for the final year can apply</li>
                                            </ul>
                                        </div>
                                        <div className="hrngvwjbdv2-1 mt-5">
                                            <div className="hrngvwjbdv2-2 pt-0">
                                                <b>Internship Starts</b> - 12 April 2023 (Internship Duration)
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-2 pt-0">
                                                <b>Number of openings</b> - 2
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-2 pt-0">
                                                <b>Stipend</b> - Rs. 12k /month
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-2 pt-0">
                                                <b>Pre-Placement Offer (PPO) CTC</b> - 1-2 LPA
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1">
                                            <div className="hrngvwjbdv2-2 pt-0">
                                                <b>Perks</b> - 5 days a week, health insurance
                                            </div>
                                        </div>
                                        <div className="hrngvwjbdv2-1 mt-5 mb-3">
                                            <div className="hrngvwjbdv2-2 pt-0 hrngvwjbdv2-2cs">Posted on - Mar 12, 2023</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
        


    </div>
}

// export default Details;

