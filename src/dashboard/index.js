import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/hiringcss.css';
import { Headermain } from '../headermain';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const DashboardIndex = () => {

    
    const [showFilterDiv, setshowFilterDiv] = useState(false);

    const resetFilter = () => {
        $('#filtersearchinp1').val('');
        $('#fltrinp1').prop('checked', false);
        $('#fltrinp2').prop('checked', false);
        $('#fltrinp3').prop('checked', false);
        $('#fltrinp4').prop('checked', false);
        $('#fltrinp5').prop('checked', false);
        $('#fltrinp6').prop('checked', false);
        $('#fltrinp7').prop('checked', false);
        $('#fltrinp8').prop('checked', false);
        $('#fltrinp9').prop('checked', false);
        $('#fltrinp10').prop('checked', false);
        $('#fltrinp11').prop('checked', false);
    }
    
    function handleCheckboxChange1() {
    
        if ($('#fltrinp1').is(':checked')) {
            $('#typall').addClass('hide');
            $('#typreset').removeClass('hide');
        } else if ($('#fltrinp2').is(':checked')) {
            $('#typall').addClass('hide');
            $('#typreset').removeClass('hide');
        }
        else {
            $('#typreset').addClass('hide');
            $('#typall').removeClass('hide');
        }
    }
    
    function handleCheckboxChange2() {
    
        if ($('#fltrinp3').is(':checked')) {
            $('#sttsall').addClass('hide');
            $('#sttsreset').removeClass('hide');
        } else if ($('#fltrinp4').is(':checked')) {
            $('#sttsall').addClass('hide');
            $('#sttsreset').removeClass('hide');
        } else if ($('#fltrinp5').is(':checked')) {
            $('#sttsall').addClass('hide');
            $('#sttsreset').removeClass('hide');
        } else if ($('#fltrinp6').is(':checked')) {
            $('#sttsall').addClass('hide');
            $('#sttsreset').removeClass('hide');
        }
        else {
            $('#sttsreset').addClass('hide');
            $('#sttsall').removeClass('hide');
        }
    }

    
    function handleCheckboxChange3() {
    
        if ($('#fltrinp7').is(':checked')) {
            $('#loctnall').addClass('hide');
            $('#loctnreset').removeClass('hide');
        } else if ($('#fltrinp8').is(':checked')) {
            $('#loctnall').addClass('hide');
            $('#loctnreset').removeClass('hide');
        } else if ($('#fltrinp9').is(':checked')) {
            $('#loctnall').addClass('hide');
            $('#loctnreset').removeClass('hide');
        }
        else {
            $('#loctnreset').addClass('hide');
            $('#loctnall').removeClass('hide');
        }
    }

    
    function handleCheckboxChange4() {
    
        if ($('#fltrinp10').is(':checked')) {
            $('#dprmntall').addClass('hide');
            $('#dprmntreset').removeClass('hide');
        } else if ($('#fltrinp11').is(':checked')) {
            $('#dprmntall').addClass('hide');
            $('#dprmntreset').removeClass('hide');
        }
        else {
            $('#dprmntreset').addClass('hide');
            $('#dprmntall').removeClass('hide');
        }
    }

    const selectAllFilterOne = () => {
        $('#typall').addClass('hide');
        $('#typreset').removeClass('hide');
        $('#fltrinp1').prop('checked', true);
        $('#fltrinp2').prop('checked', true);
    }
    
    const resetAllFilterOne = () => {
        $('#typreset').addClass('hide');
        $('#typall').removeClass('hide');
        $('#fltrinp1').prop('checked', false);
        $('#fltrinp2').prop('checked', false);
    }
    
    const selectAllFilterTwo = () => {
        $('#sttsall').addClass('hide');
        $('#sttsreset').removeClass('hide');
        $('#fltrinp3').prop('checked', true);
        $('#fltrinp4').prop('checked', true);
        $('#fltrinp5').prop('checked', true);
        $('#fltrinp6').prop('checked', true);
    }
    
    const resetAllFilterTwo = () => {
        $('#sttsreset').addClass('hide');
        $('#sttsall').removeClass('hide');
        $('#fltrinp3').prop('checked', false);
        $('#fltrinp4').prop('checked', false);
        $('#fltrinp5').prop('checked', false);
        $('#fltrinp6').prop('checked', false);
    }
    
    const selectAllFilterThree = () => {
        $('#loctnall').addClass('hide');
        $('#loctnreset').removeClass('hide');
        $('#fltrinp7').prop('checked', true);
        $('#fltrinp8').prop('checked', true);
        $('#fltrinp9').prop('checked', true);
    }
    
    const resetAllFilterThree = () => {
        $('#loctnreset').addClass('hide');
        $('#loctnall').removeClass('hide');
        $('#fltrinp7').prop('checked', false);
        $('#fltrinp8').prop('checked', false);
        $('#fltrinp9').prop('checked', false);
    }
    
    const selectAllFilterFour = () => {
        $('#dprmntall').addClass('hide');
        $('#dprmntreset').removeClass('hide');
        $('#fltrinp10').prop('checked', true);
        $('#fltrinp11').prop('checked', true);
    }
    
    const resetAllFilterFour = () => {
        $('#dprmntreset').addClass('hide');
        $('#dprmntall').removeClass('hide');
        $('#fltrinp10').prop('checked', false);
        $('#fltrinp11').prop('checked', false);
    }

    const jobsclk = () => {
        $('#jobstb').addClass('active');
        $('#intrnshttb').removeClass('active');
    }

    const intrnshpclk = () => {
        $('#intrnshttb').addClass('active');
        $('#jobstb').removeClass('active');
    }

    function filtrsearchinp() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("filtersearchinp1");
        filter = input.value.toUpperCase();
        table = document.getElementById("tl11");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
              $('#nodtafndtbl1').hide();
            }
            else if (txtValue.toUpperCase().indexOf(filter) < -1) {
              $('#nodtafndtbl1').show();
            } else {
              tr[i].style.display = "none";
              $('#nodtafndtbl1').show(); 
            }
          }    
        }
    }

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-2p" id="login">
            
            <div className="jbdv1 pt-0" id="prflpg">

                <h3 className="jbdv2">All Students</h3>

                <div className="jbdv3">
                    <div className="jbdv4">
                        <div className="jbdv5">
                            <div className="jbdv5-1">
                                <div className="jbdv5-2">
                                    <div className="jbdv5-2a">
                                        <ul className="jbdv5-2b">
                                            <li className="jbdv5-2c">
                                                <a className="jbdv5-2d active" id='jobstb' onClick={jobsclk}>Students</a>
                                            </li>
                                            {/* <li className="jbdv5-2c">
                                                <a className="jbdv5-2d" id='intrnshttb' onClick={intrnshpclk}>Internships</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="jbdv5-3">
                                    <Link to='' className="jbdv5-3a">
                                        Bulk Update/Export
                                    </Link>
                                    <Link to='' className="jbdv5-3b">
                                        Add Candidate
                                    </Link>
                                    <button type="button" className="jbdv5-3c" onClick={() => setshowFilterDiv(!showFilterDiv)}>
                                        <i className="fa fa-filter jbdv5-3ci"></i>
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="jbdv6">
                            
                            {showFilterDiv && 
                                <div className="jbdv6-a1">
                                    <div className="jbdv6-a2">
                                        <div className="jbdv6-a3">
                                            <h5 className="jbdv6-a4">Filters</h5>
                                            <div className="jbdv6-a5">
                                                <button type="button" className="jbdv6-a6" onClick={() => resetFilter()}>Reset</button>
                                            </div>
                                        </div>
                                        <form noValidate>
                                            <div className="jbdv6-a7">
                                                <div className="jbdv6-a8">
                                                    <label className="jbdv6-a9">Name</label>
                                                </div>
                                                <div className="jbdv6-a10">
                                                    <input type='text' className="jbdv6-a11" id='filtersearchinp1' onChange={filtrsearchinp} />
                                                </div>
                                            </div>
                                            <div className="jbdv6-a12">
                                                <span className="jbdv6-a13">Type</span>
                                                <button type="button" className="jbdv6-a6" id="typall" onClick={() => selectAllFilterOne()}>All</button>
                                                <button type="button" className="jbdv6-a6 hide" id="typreset" onClick={() => resetAllFilterOne()}>Clear</button>
                                            </div>
                                            <div className="jbdv6-a14">
                                                <div className="jbdv6-a15">
                                                    <div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp1">
                                                                        <input className="jbdv6-a18" id="fltrinp1" type="checkbox" onChange={handleCheckboxChange1} />
                                                                        <span>Full Time</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp2">
                                                                        <input className="jbdv6-a18" id="fltrinp2" type="checkbox" onChange={handleCheckboxChange1} />
                                                                        <span>Part Time</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jbdv6-a12">
                                                <span className="jbdv6-a13">Status</span>
                                                <button type="button" className="jbdv6-a6" id="sttsall" onClick={() => selectAllFilterTwo()}>All</button>
                                                <button type="button" className="jbdv6-a6 hide" id="sttsreset" onClick={() => resetAllFilterTwo()}>Clear</button>
                                            </div>
                                            <div className="jbdv6-a14">
                                                <div className="jbdv6-a15">
                                                    <div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp3">
                                                                        <input className="jbdv6-a18" id="fltrinp3" type="checkbox" onClick={() => handleCheckboxChange2()} />
                                                                        <span>Active</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp4">
                                                                        <input className="jbdv6-a18" id="fltrinp4" type="checkbox" onClick={() => handleCheckboxChange2()} />
                                                                        <span>Hiring/Onboarding</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp5">
                                                                        <input className="jbdv6-a18" id="fltrinp5" type="checkbox" onClick={() => handleCheckboxChange2()} />
                                                                        <span>Not Registered</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp6">
                                                                        <input className="jbdv6-a18" id="fltrinp6" type="checkbox" onClick={() => handleCheckboxChange2()} />
                                                                        <span>Terminated</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jbdv6-a12">
                                                <span className="jbdv6-a13">Location</span>
                                                <button type="button" className="jbdv6-a6" id="loctnall" onClick={() => selectAllFilterThree()}>All</button>
                                                <button type="button" className="jbdv6-a6 hide" id="loctnreset" onClick={() => resetAllFilterThree()}>Clear</button>
                                            </div>
                                            <div className="jbdv6-a14">
                                                <div className="jbdv6-a15">
                                                    <div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp7">
                                                                        <input className="jbdv6-a18" id="fltrinp7" type="checkbox" onClick={() => handleCheckboxChange3()} />
                                                                        <span>N/A</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp8">
                                                                        <input className="jbdv6-a18" id="fltrinp8" type="checkbox" onClick={() => handleCheckboxChange3()} />
                                                                        <span>Remote</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp9">
                                                                        <input className="jbdv6-a18" id="fltrinp9" type="checkbox" onClick={() => handleCheckboxChange3()} />
                                                                        <span>New Delhi</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jbdv6-a12">
                                                <span className="jbdv6-a13">Department</span>
                                                <button type="button" className="jbdv6-a6" id="dprmntall" onClick={() => selectAllFilterFour()}>All</button>
                                                <button type="button" className="jbdv6-a6 hide" id="dprmntreset" onClick={() => resetAllFilterFour()}>Clear</button>
                                            </div>
                                            <div className="jbdv6-a14">
                                                <div className="jbdv6-a15">
                                                    <div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp10">
                                                                        <input className="jbdv6-a18" id="fltrinp10" type="checkbox" onClick={() => handleCheckboxChange4()} />
                                                                        <span>Fitness Training</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbdv6-a16">
                                                            <div className="w-100">
                                                                <div>
                                                                    <label className="jbdv6-a17" htmlFor="fltrinp11">
                                                                        <input className="jbdv6-a18" id="fltrinp11" type="checkbox" onClick={() => handleCheckboxChange4()} />
                                                                        <span>N/A</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }

                            <div className="jbdv6-b1">
                                <div className="jbdv6-b2">
                                    <div className="jbdv6-b3">
                                        <table className="jbdv6-b3-1" id='tl11'>
                                            <colgroup>
                                                <col width="200px" />
                                            </colgroup>
                                            <thead>
                                                <tr className="jbdv6-b3-2">
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Names</button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="tbdyhtcs">
                                                <tr id='nodtafndtbl1' style={{display: 'none'}}>
                                                    <td>
                                                    <div className="">
                                                        <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3">
                                                            <div className="cmpy-prfl-prjctsdv4">
                                                                <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                                                <div className="cmpy-prfl-prjctsdv5">No data found.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570405/Dashboard-Icons/alex_ujdyda.png' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <a href="/student/studentdetails" className="jbdv6-b3-9 nmdvhvrbt">Chin, Alex</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677569998/Dashboard-Icons/alison_m2zl3o.png' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Everert, Alison</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570173/Dashboard-Icons/female-3_bxkygc.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Baker, Ashley</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570270/Dashboard-Icons/female-4_y5erea.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Gonzalez, Deborah</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570021/Dashboard-Icons/emily_xua7b4.png' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Anderson, Emily</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570138/Dashboard-Icons/erin_vqihrm.png' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Maxwell, Erin</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570096/Dashboard-Icons/michael_jhkovk.png' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Michael</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570191/Dashboard-Icons/male-2_jcv1x0.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Kenneth</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570243/Dashboard-Icons/male-4_gnnw2n.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Roy</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570320/Dashboard-Icons/female-2_sq1nsn.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Teresa</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <img src='https://res.cloudinary.com/infoi/image/upload/v1677570370/Dashboard-Icons/male-3_y22uuc.jpg' className="jbdv6-b3-8" alt='Image' />
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Jesse</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <div className="jbdv6-b3-7-1">
                                                                    <div className="jbdv6-b3-7-2">GG</div>
                                                                </div>
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Gloria</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <div className="jbdv6-b3-7-1">
                                                                    <div className="jbdv6-b3-7-2">JL</div>
                                                                </div>
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Jane</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <div className="jbdv6-b3-7-1">
                                                                    <div className="jbdv6-b3-7-2">CG</div>
                                                                </div>
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Chris</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b3-5">
                                                        <div className="jbdv6-b3-6">
                                                            <div className="jbdv6-b3-7">
                                                                <div className="jbdv6-b3-7-1">
                                                                    <div className="jbdv6-b3-7-2">ZC</div>
                                                                </div>
                                                            </div>
                                                            <div className="jbdv6-b3-9 nmdvhvrbt">Zoya</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="jbdv6-b4">
                                        <table className="jbdv6-b4-1">
                                            <colgroup>
                                                <col width="180px" />
                                                <col width="180px" />
                                                <col width="260px" />
                                                <col width="200px" />
                                                <col width="200px" />
                                                <col width="200px" />
                                                <col width="140px" />
                                            </colgroup>
                                            
                                            <thead className="thdhtcs">
                                                <tr className="jbdv6-b3-2">
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Type</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Status</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Title</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Department</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Location</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Manager</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Start Date</button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="thdhtcs tbdtrhtcs">
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/student/studentreviewdetails'>
                                                            Start
                                                        </Link>
                                                    </td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">Full Time</td>   
                                                    <td className="jbdv6-b4-2">Active</td> 
                                                    <td className="jbdv6-b4-2">Trainer</td>   
                                                    <td className="jbdv6-b4-2">Fitness Training</td> 
                                                    <td className="jbdv6-b4-2">New Delhi</td>   
                                                    <td className="jbdv6-b4-2">-</td> 
                                                    <td className="jbdv6-b4-2">03/16/2023</td>                                                   
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="jbdv6-c1">
                                    <div>
                                        <div className="jbdv6-c2">
                                            <div className="jbdv6-c3">
                                                <div className="jbdv6-c3-1">
                                                    <span className="jbdv6-c3-2">1-21</span> (of 21)
                                                </div>
                                            </div>
                                            <div className="jbdv6-c4 crsr-dsbl">
                                                <button type="button" className="jbdv6-c4-1 disabld">
                                                    <i className="fa fa-chevron-left jbdv6-c4-2"></i>
                                                </button>
                                            </div>
                                            <div className="jbdv6-c5 crsr-dsbl">
                                                <button type="button" className="jbdv6-c4-1 mr-0 disabld">
                                                    <i className="fa fa-chevron-right jbdv6-c4-2"></i>
                                                </button>
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


        <br/><br/><br/><br/>



    </div>
}

// export default Details;

