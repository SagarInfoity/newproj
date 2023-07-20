import React, {useState, useEffect} from "react";
import $ from 'jquery';
import '../Content/Content/waiting.css';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const AccountVerifi = () => {


    return <div>
        <Headersignup />


        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="container wtmcst">
                <div className="wtdv1">
                    <div className="wtdv2">
                        <div>
                            <div className="wtdv2-dvv wtdv2-dvv1"></div>
                            <div className="wtdv2-dvv wtdv2-dvv2"></div>
                            <div className="wtdv2-dvv wtdv2-dvv3"></div>
                            <div className="wtdv2-dvv wtdv2-dvv4"></div>
                            <div className="wtdv2-dvv wtdv2-dvv5"></div>
                            <div className="wtdv2-dvv wtdv2-dvv6"></div>
                            <div className="wtdv2-dvv wtdv2-dvv7"></div>
                            <div className="wtdv2-dvv wtdv2-dvv8"></div>
                        </div>
                        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="wtdv2-svg"><path d="M71.56 141.12C109.977 141.12 141.12 109.977 141.12 71.56C141.12 33.1431 109.977 2 71.56 2C33.1431 2 2 33.1431 2 71.56C2 109.977 33.1431 141.12 71.56 141.12Z" stroke="#54D4F2" strokeWidth="3.9624" strokeMiterlimit="10" strokeLinecap="round" strokeDasharray="0.05 21.79"></path></svg>
                    </div>
                    <div className="wtdv3">
                        <div className="wtdv3-dv1">
                            <div>
                                <h2 className="wtdv3-dv1-h2">Sit back & Relax</h2>
                                <p className="wtdv3-dv1-p">While we're verifying your details, check your mail for verification code</p>
                                <div className="dspflx mbvwdspblk">
                                    <a className="wtdv3-dv1-a" id="wtdvbtn1">
                                        <span>I have verified</span>
                                    </a>
                                    <a className="wtdv3-dv1-btn" id="wtdvbtn2">
                                        <span id="rsndbtntxtt">Resend Link?</span>
                                        <span id="rsndbtnloader" style={{display: 'none', color: '#54d4f2'}}><i className="fa fa-circle-o-notch fa-spin"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="wtdv3-dv2">
                            <img className="wtdv3-dv2-img" src="../Images/waiting-imgg.jpg" />
                        </div>
                    </div>
                    <div id="msgdvacntvrfy" className="show">
                        <div className="errdvacntvrfysgnup col-sm-6 row" id="erclsdvdvv">
                            <div id="shwmsg" className="col-sm-10 pl-0">
                                Alert message here
                            </div>
                            <div className="col-sm-2 text-right">
                                <button className="msgHideBtn"></button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div id="msgdvacntvrfy" className="show">
                        <div className="errdvacntvrfysgnupgrn col-sm-6 row" id="erclsdvdvv">
                            <div id="shwmsg" className="col-sm-10 pl-0">
                                Success message here
                            </div>
                            <div className="col-sm-2 text-right">
                                <button className="msgHideBtn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}

// export default Details;