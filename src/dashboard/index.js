import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/hiringcss.css';
import '../Content/Content/survery-css.css';
import { Headermain } from '../headermain';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const DashboardIndex = () => {

    const mysurvyy = (e) => {
        $('#mysrvy').addClass('active');
        $('#pndingsuvry').removeClass('active');
        $('#mmysrvv').show();
        $('#pnndnggsrvv').hide();
    }

    const pndngsrvyy = (e) => {
        $('#mysrvy').removeClass('active');
        $('#pndingsuvry').addClass('active');
        $('#mmysrvv').hide();
        $('#pnndnggsrvv').show();
    }

    const [selectedclass, setselectedclass] = useState();

    const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
    ];

    const slctdrpdwnoptions = [
        { label: 'All Classes', value: 'All Classes' },
        { label: 'Class 6th - A', value: 'Class 6th - A' },
    ];


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    }

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => {
        setShow3(true);
    }


    return <div>
        <Headermain />

        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd pt-1">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active pt-0 tbldtaa1" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12 mb-4">
                                    <h2 className="hdnczxccs">
                                        Hello, Nitin
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12">
                                    <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                        <div className="col-sm-9 mt-2 mb-2">
                                            <a href='https://infoity-coventry.netlify.app/' target="_blank">
                                                <div className="nwsrvdvdvd1 hvrdvcxz">Coventry University Students</div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3 text-right">
                                            <input className="nwsrvdvdvi1" placeholder="Search Student..." type="text" style={{width: "95%"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="mmysrvv">

                                <div className="cstm-mrgn cstmbracrdnn" id="accordion">

                                    <div>
                                        <div className="panel box no-border mb-0">
                                            <div id="c_2020" className="in collapse show">
                                                <div className="box-body row m-0">
                                                    <div className="table-responsive ht-auto">


                                                        <table id="nwsrvytbblll" className="table brdr-none cstmtable2 mntblcstmxz v-middle p-0 m-0 box">
                                                            <thead>
                                                                <tr className="cstmsrtbthdbrdr">
                                                                    <th className="pl-24px tblsccshdng" style={{padding: "0.8rem 0.5rem"}}>Students Name</th>
                                                                    <th className="tblsccshdng" style={{padding: "0.8rem 0.5rem"}}>Date Added / Modified</th>
                                                                    <th className="tblsccshdng" style={{padding: "0.8rem 0.5rem"}}>Review Progress</th>
                                                                    <th style={{padding: "0.8rem 0.5rem"}} />
                                                                </tr>
                                                            </thead>
                                                            <tbody className="ht-cstmtbdysvy cstmsrtbtbdybrdr cstmmxhtbdytbb2 cstmmxhtbdytbb2cxz">

                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5U2CHpliMtpWAoFmM6smVO_t0yErb3tfsg&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Alok Singh</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97311
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">May 20, 2023 - May 27, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoX1J3XxetP1PFojolzBKIflBncRju1mOvA&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Anamika Kumari</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97312
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">June 02, 2023 - June 15, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPuf2ZlP6bbOp_29p90V0u1fUHslZP_qTfQ&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Arvind Singh</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97313
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2stjG9Q5bEdZYo78ykAFGmChUtLMmYxFAQ&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Ravi Kumar</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97314
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGiIrHMzKOyH9fMyfrgxBC64VZcK1pwzL_A&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Krish Kumar</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97315
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvLRtA5t4W2uOSkbMdg2mPGt7gm4IQ7hyEA&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Dhruv</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97316
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXakDEi9q8sIvlZNI3j_jCj3k8pL5yJqSzMg&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Arjun</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97317
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uPXEyrXLvZq6LYKggwrWTXHlb1xGG589oQ&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Aahan</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97318
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslDXobKRxZrSbjHv07rFFNw9X2NywwgTiBg&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Aditi Singh</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97319
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `0%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4">
                                                                                <span className="tblsvprgstxt">Not Started</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8ioXloem7GF5QVUkheZGqFnWTN1efMK2eA&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Seema Devi</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97320
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jcFYyetCV44kE4wV82m7AFb0GtFjfR7BsA&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Aahana Rani</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97321
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV77UeyM3jGaVvrGfIUtm7aYqCR8O4Z05gQ&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Anjali Singh</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97322
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0x1htT8a8m5hOa7QTbMgDkgCRxjmHNQaWg&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Ajay Dudeja</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97323
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">July 12, 2023 - July 28, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ8g9Dtd1sWV93jeenBwmjoCz0nOzLxA3oQ&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Divya Singh</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97324
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link to='/student/studentdetails' className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" title>
                                                                            <div className="row m-0 col-sm-12 p-0">
                                                                                <div className="col-sm-2 p-0">
                                                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N0JnlsPb2s68-q5c_NHBGUR_Yeygn7L7E7xd4k98Mx6IPhhqvRw9cwSEXhCf04wb150&usqp=CAU" className="imgczxccs mr-3 mt-1" />
                                                                                </div>
                                                                                <div className="col-sm-8 p-0 pt-1">
                                                                                    <span className="blu-clr font-med">Raghav</span>
                                                                                    <div className="fs-14px pt-1"  style={{color: "#767e96"}}>
                                                                                        CAMS ID-97325
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">Aug 01, 2023 - Aug 09, 2023</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{ width: `100%` }}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4" >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <Link to='/student/studentreviewdetails'>
                                                                            <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                    </div>
                </div>
            </div>

        </div>



        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >

            <Modal.Header className="cstmmdlinfodv" closeButton></Modal.Header>

            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">

                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2">Student Name</p>
                            <div className="infomdvmdl3 col-sm-12 p-0 row m-0">
                                <div className="col-sm-4 pl-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Student
                                </div>
                                <div className="infomdvmdl2dvdr col-sm-1 m-0 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title>
                                    <i className="fa fa-envelope mr-7px"></i>
                                    Email
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infomdvmdl3 col-sm-12 mt-10px">
                        <h3 className="infomdvmdl3-h3">Class Name</h3>
                        <div readOnly className="infomdvmdl3-txtara"> Subjects </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>



        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">School</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">


                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                            <span className="text-truncate mdldvdv12d cstmwdmdl" title> School Name </span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Not Started</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>

                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                            <span className="text-truncate mdldvdv12d cstmwdmdl" title> School Name </span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Completed</span>
                        <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="cstmmdlptx">Unfortunately, results cannot be generated at this time as a sufficient number of surveys have not been completed by students.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

