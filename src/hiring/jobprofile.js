import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/hiringcss.css';
import { DoubleHeaderMain } from '../doubleheadermain';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';

export const HiringJobProfile = () => {

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            } else {
              tr[i].style.display = "none"; 
            }
          }    
        }
    }

    const mdlsvbtnn = () => {
        window.location.href = '/jobprofile/internship-details';
    }

    const mdlsvbtnn2 = () => {
        window.location.href = '/jobprofile/job-details';
    }
      

    const shwmdldv1 = () => {
        $('#radioone').prop('checked', true);
        $('#mdldv1').removeClass('hide');
        $('#mdldv2').addClass('hide');
        $('#mdlbtn1').removeClass('hide');
        $('#mdlbtn2').addClass('hide');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('#mdldv2').removeClass('hide');
        $('#mdldv1').addClass('hide');
        $('#mdlbtn1').addClass('hide');
        $('#mdlbtn2').removeClass('hide');
    }

    return <div>
        <DoubleHeaderMain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="jbdv1" id="prflpg">

                <h3 className="jbdv2">Job Profile</h3>

                <div className="jbdv3">
                    <div className="jbdv4">
                        <div className="jbdv5">
                            <div className="jbdv5-1">
                                <div className="jbdv5-2">
                                    <div className="jbdv5-2a">
                                        <ul className="jbdv5-2b">
                                            <li className="jbdv5-2c">
                                                <a className="jbdv5-2d active" id='jobstb' onClick={jobsclk}>Jobs</a>
                                            </li>
                                            <li className="jbdv5-2c">
                                                <a className="jbdv5-2d" id='intrnshttb' onClick={intrnshpclk}>Internships</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="jbdv5-3">
                                    {/* <Link to='' className="jbdv5-3a">
                                        Bulk Update/Export
                                    </Link> */}
                                    <div className="jbdv5-3b" onClick={()=>{handleShow();}}>
                                        Add Job/Internship
                                    </div>
                                    <button type="button" className="jbdv5-3c" onClick={() => setshowFilterDiv(!showFilterDiv)}>
                                        <i className="fa fa-filter jbdv5-3ci"></i>
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="jbdv6">
                            
                            {showFilterDiv && 
                                <div className="jbdv6-a1 jbdv6-a1cs">
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
                                    <div className="jbdv6-b4">
                                        <div className="hide" id="errdv1">
                                            <div className="nodtadv1 brdr-top-none">
                                                <div>
                                                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                    <div className="nodtadv1txt">No Data Found</div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="jbdv6-b4-1 cstmtblhrng1" id="tl11">
                                            <colgroup>
                                                <col width="260px" />
                                                <col width="200px" />
                                                <col width="200px" />
                                                <col width="200px" />
                                                <col width="140px" />
                                            </colgroup>
                                            
                                            <thead className="thdhtcs">
                                                <tr className="jbdv6-b3-2">
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Title</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Status</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">No. of Candidates</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3">
                                                        <button type="button" className="jbdv6-b3-4">Posted Date</button>
                                                    </th>
                                                    <th className="jbdv6-b3-3 text-center">
                                                        <button type="button" className="jbdv6-b3-4">Actions</button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="thdhtcs tbdtrhtcs">
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Web Development
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-active">Active</div>
                                                    </td>
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Backend Developer
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-closed">Closed</div>
                                                    </td> 
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Web Development
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-active">Active</div>
                                                    </td>
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Backend Developer
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-closed">Closed</div>
                                                    </td> 
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Web Development
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-active">Active</div>
                                                    </td>
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Backend Developer
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-closed">Closed</div>
                                                    </td> 
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Web Development
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-active">Active</div>
                                                    </td>
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Backend Developer
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-closed">Closed</div>
                                                    </td> 
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Web Development
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-active">Active</div>
                                                    </td>
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
                                                </tr>
                                                <tr className="jbdv6-b3-2">
                                                    <td className="jbdv6-b4-2">
                                                        <Link to='/jobprofile/viewjob-details' className="jbttlhrng">
                                                            Backend Developer
                                                        </Link>
                                                    </td>   
                                                    <td className="jbdv6-b4-2">
                                                        <div className="sttsdvhrng-closed">Closed</div>
                                                    </td> 
                                                    <td className="jbdv6-b4-2 pl-5">05</td>   
                                                    <td className="jbdv6-b4-2">03/16/2023</td> 
                                                    <td className="jbdv6-b4-2 text-center">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndwhrng p-0">
                                                                <a className="cstmbtndrpdwnpdddhrng">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>
                                        
                                                            <Dropdown.Menu  className="tbl-drpdwnmnuhrng">
                                                                <Link to='/jobprofile/viewjob-details' className="tbl-dropdown-itemhrng dropdown-item">View Job</Link>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Post Similar Job</div>
                                                                <div className="tbl-dropdown-itemhrng dropdown-item">Add candidate</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>                                              
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


        <Modal show={show} onHide={handleClose} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>Select Opportunity</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Opportunity Type</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 cmpy-prfl-cspdd1 mb-0 mt-1">
                                <div className="cmpy-prfl-mdl2-dv5">
                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                        <div>
                                            <div class="cmpy-prfl-mdl2-dv7">
                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioone" name="radioone" value="Yes" checked />
                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                            </div>
                                        </div>
                                        <span class="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv1} for="radioone">Internship</span>
                                    </div>
                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                        <div>
                                            <div class="cmpy-prfl-mdl2-dv7">
                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiotwo" name="radioone" value="No" />
                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                            </div>
                                        </div>
                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv2} for="radiotwo">Job</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn mr-0" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Next
                </Button>
                <Button variant="primary modalRedBtn hide" id="mdlbtn2" onClick={mdlsvbtnn2}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

