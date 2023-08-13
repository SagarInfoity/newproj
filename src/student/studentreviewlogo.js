import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const StudentReviewLogo = () => {


    return <div>
                <div style={{borderBottom: '1px solid #d8dce2',paddingBottom: 20}}>
                    <div className="mt-2">
                        <div>
                            <Link to='/dashboard/index' >
                                <i className="fa fa-chevron-left fs-10px mr-2" style={{verticalAlign: 'text-top'}}></i>
                                <span style={{fontSize: 16}}>Back to Dashboard</span>
                            </Link>
                        </div>
                    </div>
                    <div className="tblt-vw-prfl1-dv cmpy-prfl-a2" style={{margin: '32px auto 8px', height: 64, width: 64}}>
                        <div className="cmpy-prfl-a3" style={{borderRadius: '100px', width: 64, height: 64, minWidth: 64, minHeight: 64}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5U2CHpliMtpWAoFmM6smVO_t0yErb3tfsg&usqp=CAU" className="cmpy-prfl-img1" style={{borderRadius: '100px', padding: '0', objectFit: "cover"}} />
                        </div>
                    </div>
                    <div>
                        <div className="studtlrvwlftsdbrdv1">
                            Alok Singh
                        </div>
                        <div className="studtlrvwlftsdbrdv2">
                            CAMS ID - 97311
                        </div>
                    </div>
                </div>
            </div>
     
}