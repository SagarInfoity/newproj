import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { StudentProfileLogo } from './studentprofilelogo';
import { StudentProfileSidebar } from './studentprofilesidebar';
import { StudentProfileUsernameDetails } from './studentprofileusernmdtls';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const StudentDetails = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22 = () => setShow22(true);

    const editfld1 = () => {
        $('#fielddv1').addClass('hide');
        $('#fielddv1-1').removeClass('hide');
    }

    const savefld1 = () => {
        var inpp1 = $('#inpfld1');
        var inp1 = $('#inpfld1').val();
        var inperr1 = $('#inpflderr1');
        
        if(!inp1) {
            
            if(!inp1) {
                inperr1.show().text('This field cannot be empty');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            $('#fielddv1-1').addClass('hide');
            $('#fielddv1').removeClass('hide');
        }
    }

    const cancelfld1 = () => {
        var inpp1 = $('#inpfld1');
        var inp1 = $('#inpfld1').val();
        var inperr1 = $('#inpflderr1');

        inpp1.removeClass('errfldbrdr');
        inperr1.hide();

        $('#fielddv1-1').addClass('hide');
        $('#fielddv1').removeClass('hide');
    }
    

    const editfld2 = () => {
        $('#fielddv2').addClass('hide');
        $('#fielddv2-1').removeClass('hide');
    }

    const savefld2 = () => {
        var inpp2 = $('#inpfld2');
        var inp2 = $('#inpfld2').val();
        var inperr2 = $('#inpflderr2');
        
        if(!inp2) {
            
            if(!inp2) {
                inperr2.show().text('This field cannot be empty');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        }
        else {
            inpp2.removeClass('errfldbrdr');
            $('#fielddv2-1').addClass('hide');
            $('#fielddv2').removeClass('hide');
        }
    }

    const cancelfld2 = () => {
        var inpp2 = $('#inpfld2');
        var inp2 = $('#inpfld2').val();
        var inperr2 = $('#inpflderr2');

        inpp2.removeClass('errfldbrdr');
        inperr2.hide();

        $('#fielddv2-1').addClass('hide');
        $('#fielddv2').removeClass('hide');
    }

    const EmployeeList = [
        { value: 'Martha', label: 'Martha' },
        { value: 'Alex', label: 'Alex' },
        { value: 'Yu', label: 'Yu' },
        { value: 'King', label: 'King' },
        { value: 'Emily', label: 'Emily' },
        { value: 'Jesse', label: 'Jesse' },
        { value: 'Roy Hill', label: 'Roy Hill' }
    ];

    const GenderList = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ];

    const MaritalList = [
        { value: 'Married', label: 'Married' },
        { value: 'Single', label: 'Single' },
        { value: 'Divorced', label: 'Divorced' }
    ];

    const CountryList = [
        { value: 'India', label: 'India' },
        { value: 'UK', label: 'UK' },
        { value: 'US', label: 'US' }
    ];

    const StateList = [
        { value: 'New Delhi', label: 'New Delhi' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'Karnataka', label: 'Karnataka' }
    ];



    const [empDrpDwnValue, setEmpDrpDwnValue] = useState(null);

    const handleChange1 = e => {
        setEmpDrpDwnValue(e.value);
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

    var mobnum = $('#mdlinpfldmblnum1');
    $(mobnum).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    function isNumberKey(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
    }

    const mdlsvbtnn = () => {
        
        var slctdrpdwnvl = $('#mdlempdrpdwnvll').text();
        var slctdrpdwnvlerrmsg = $('#mdlinpflderrdrpdwn');

        if(slctdrpdwnvl == "" || slctdrpdwnvl == null) {
            
            if(slctdrpdwnvl === "" || slctdrpdwnvl === null) {
                slctdrpdwnvlerrmsg.show();
            }
            else {
                slctdrpdwnvlerrmsg.hide();
            }
        }
       
        else {
            slctdrpdwnvlerrmsg.hide();
            handleClose();
        }
    }


    const mdlsvbtnn3 = () => {
        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        
        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');

        if(!inp1 || !inp2 || !inp3) {
            
            if(!inp1) {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

        }
    }

    const mdlsvbtnn32 = () => {

        var inpp1 = $('#mdlinpfld421');
        var inpp2 = $('#mdlinpfld422');
        var inpp3 = $('#mdlinpfld423');
        
        var inp1 = $('#mdlinpfld421').val();
        var inp2 = $('#mdlinpfld422').val();
        var inp3 = $('#mdlinpfld423').val();
        
        var inperr1 = $('#mdlinpflderr421');
        var inperr2 = $('#mdlinpflderr422');
        var inperr3 = $('#mdlinpflderr423');

        if(!inp1 || !inp2 || !inp3) {
            
            if(!inp1) {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

        }

    }

    const rdobtnfldrdocxz1 = () => {
        $('#radio1').prop('checked', true);
    }

    const rdobtnfldrdocxz2 = () => {
        $('#radio2').prop('checked', true);
    }


    const editfldrdocxz1 = () =>  {
        $('#fldrdocxz1').addClass('hide');
        $('#fldrdocxz1-1').removeClass('hide');
    }


    const saverdobtnfld1 = () => {
        $('#fldrdocxz1-1').addClass('hide');
        $('#fldrdocxz1').removeClass('hide');
    }

    const cancelrdobtnfld1 = () => {
        $('#fldrdocxz1-1').addClass('hide');
        $('#fldrdocxz1').removeClass('hide');
    }

    

    const rdobtnfldrdocxzo1 = () => {
        $('#radioo1').prop('checked', true);
    }

    const rdobtnfldrdocxzo2 = () => {
        $('#radioo12').prop('checked', true);
    }


    const editfldrdocxz2 = () =>  {
        $('#fldrdocxz2').addClass('hide');
        $('#fldrdocxz2-1').removeClass('hide');
    }


    const saverdobtnfldo1 = () => {
        $('#fldrdocxz2-1').addClass('hide');
        $('#fldrdocxz2').removeClass('hide');
    }

    const cancelrdobtnfldo1 = () => {
        $('#fldrdocxz2-1').addClass('hide');
        $('#fldrdocxz2').removeClass('hide');
    }
    
    

    const rdobtnfldrdocxzo13 = () => {
        $('#radioo13').prop('checked', true);
    }

    const rdobtnfldrdocxzo23 = () => {
        $('#radioo14').prop('checked', true);
    }


    const editfldrdocxz3 = () =>  {
        $('#fldrdocxz3').addClass('hide');
        $('#fldrdocxz3-1').removeClass('hide');
    }


    const saverdobtnfldo3 = () => {
        $('#fldrdocxz3-1').addClass('hide');
        $('#fldrdocxz3').removeClass('hide');
    }

    const cancelrdobtnfldo3 = () => {
        $('#fldrdocxz3-1').addClass('hide');
        $('#fldrdocxz3').removeClass('hide');
    }
    
    

    const rdobtnfldrdocxzo14 = () => {
        $('#radioo15').prop('checked', true);
    }

    const rdobtnfldrdocxzo24 = () => {
        $('#radioo16').prop('checked', true);
    }


    const editfldrdocxz4 = () =>  {
        $('#fldrdocxz4').addClass('hide');
        $('#fldrdocxz4-1').removeClass('hide');
    }


    const saverdobtnfldo4 = () => {
        $('#fldrdocxz4-1').addClass('hide');
        $('#fldrdocxz4').removeClass('hide');
    }

    const cancelrdobtnfldo4 = () => {
        $('#fldrdocxz4-1').addClass('hide');
        $('#fldrdocxz4').removeClass('hide');
    }
    
    

    const rdobtnfldrdocxzo15 = () => {
        $('#radioo17').prop('checked', true);
    }

    const rdobtnfldrdocxzo25 = () => {
        $('#radioo18').prop('checked', true);
    }


    const editfldrdocxz5 = () =>  {
        $('#fldrdocxz5').addClass('hide');
        $('#fldrdocxz5-1').removeClass('hide');
    }


    const saverdobtnfldo5 = () => {
        $('#fldrdocxz5-1').addClass('hide');
        $('#fldrdocxz5').removeClass('hide');
    }

    const cancelrdobtnfldo5 = () => {
        $('#fldrdocxz5-1').addClass('hide');
        $('#fldrdocxz5').removeClass('hide');
    }

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-4">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <StudentProfileLogo />
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 36, paddingLeft: 10}}>
                        <StudentProfileSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mt-2 mb-2">
                        <StudentProfileUsernameDetails />
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>Basic Information</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2 hide">
                                                    <div onClick={()=>{handleShow2();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle mr-1"></i> Add Info
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={()=>{handleShow22();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen fs-10px mr-1"></i> Edit Info
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 mt-1 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">First Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">User first name</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Last Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">User last name</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Date of Birth (DOB)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">12 Mar 2000</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Gender</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Male</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Marital Status*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Married</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Passport Number</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">P123456</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="hide">
                                    <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3">
                                        <div className="cmpy-prfl-prjctsdv4">
                                            <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                            <div className="cmpy-prfl-prjctsdv5">No data found.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>Contact Information</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2 hide">
                                                    <div onClick={()=>{handleShow();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle mr-1"></i> Add Info
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={()=>{handleShow2();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen fs-10px mr-1"></i> Edit Info
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-3 mt-1 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Email</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">test@test.com</label>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Contact No.</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">9876XXXXXX</label>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Country</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">India</label>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">State</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">New Delhi</label>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">City</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">-</label>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">-</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="hide">
                                    <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3">
                                        <div className="cmpy-prfl-prjctsdv4">
                                            <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                            <div className="cmpy-prfl-prjctsdv5">No data found.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>Other Information</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-3 mt-1 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">CV Attached*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fldrdocxz1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Yes</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfldrdocxz1}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fldrdocxz1-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1 row m-0">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radio1" name="radio1" value="Yes" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxz1} for="radio1">Yes</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radio2" name="radio1" value="No" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxz1} for="radio2">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={saverdobtnfld1}>Save</span>
                                                        <span className="cmpy-prfl-a10 cstmcxz2">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelrdobtnfld1}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">SOP Attached*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fldrdocxz2">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Yes</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfldrdocxz2}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fldrdocxz2-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1 row m-0">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo1" name="radioo11" value="Yes" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo1} for="radioo11">Yes</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo12" name="radioo11" value="No" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo2} for="radioo11">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={saverdobtnfldo1}>Save</span>
                                                        <span className="cmpy-prfl-a10 cstmcxz2">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelrdobtnfldo1}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">LOR1 Attached*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fldrdocxz3">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Yes</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfldrdocxz3}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fldrdocxz3-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1 row m-0">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo13" name="radioo13" value="Yes" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo13} for="radioo13">Yes</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo14" name="radioo13" value="No" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo23} for="radioo14">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={saverdobtnfldo3}>Save</span>
                                                        <span className="cmpy-prfl-a10 cstmcxz2">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelrdobtnfldo3}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">LOR2 Attached*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fldrdocxz4">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Yes</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfldrdocxz4}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fldrdocxz4-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1 row m-0">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo15" name="radioo15" value="Yes" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo14} for="radioo15">Yes</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo16" name="radioo15" value="No" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo24} for="radioo16">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={saverdobtnfldo4}>Save</span>
                                                        <span className="cmpy-prfl-a10 cstmcxz2">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelrdobtnfldo4}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Work Experience</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fldrdocxz5">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">No</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfldrdocxz5}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fldrdocxz5-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1 row m-0">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo17" name="radioo17" value="Yes" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo15} for="radioo17">Yes</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioo18" name="radioo17" value="No" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn cstmicncxz"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtnfldrdocxzo25} for="radioo18">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={saverdobtnfldo5}>Save</span>
                                                        <span className="cmpy-prfl-a10 cstmcxz2">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelrdobtnfldo5}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="hide">
                                    <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3">
                                        <div className="cmpy-prfl-prjctsdv4">
                                            <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                            <div className="cmpy-prfl-prjctsdv5">No data found.</div>
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
        <Footer />


        <Modal show={show} onHide={handleClose} className="cmpy-prfl-mdl2" >
            <Modal.Header>
                <Modal.Title>CHANGE GGFGF'S HR CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div id="mdldv1">
                        <div className="cmpy-prfl-mdl2-dv3">
                            Employee Name
                        </div>
                        <div className="col-sm-6 pl-0">
                            <Select options={EmployeeList} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                            <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                            {empDrpDwnValue && <div style={{ display: 'none' }}>
                                <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show11} onHide={handleClose11} className="cmpy-prfl-mdl2" >
            <Modal.Header>
                <Modal.Title>CHANGE GGFGF'S HR CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div id="mdldv1">
                        <div className="cmpy-prfl-mdl2-dv3">
                            Employee Name
                        </div>
                        <div className="col-sm-6 pl-0">
                            <Select options={EmployeeList} defaultValue={{ label: "Roy Hill", value: 4 }} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                            <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                            {empDrpDwnValue && <div style={{ display: 'none' }}>
                                <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose11}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>Contact Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Email</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="Email" autocomplete="off" maxlength="30" defaultValue="test@test.com" />
                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Contact No. </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="Contact Number" autocomplete="off" maxlength="30" defaultValue="9876XXXXXX" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter number</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Country </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={CountryList} defaultValue={{value: 'India', label: 'India'}} className="crsr-pntr" value={CountryList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select country</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> State </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={StateList} defaultValue={{value: 'New Delhi', label: 'New Delhi'}} className="crsr-pntr" value={StateList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select state</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> City </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="City" autocomplete="off" maxlength="30" defaultValue="-" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter city</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Address </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="Address" autocomplete="off" maxlength="30" defaultValue="-" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter address</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose2}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn3}>
                    Add Data
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show22} onHide={handleClose22} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>General Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">First Name</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld421" placeholder="First Name" autocomplete="off" maxlength="30" defaultValue="User's First Name" />
                                    <div className="flderrmsgdv" id="mdlinpflderr421">Please enter first name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Last Name </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld422" placeholder="Last Name" autocomplete="off" maxlength="30" defaultValue="User's Last Name" />
                                    <div className="flderrmsgdv" id="mdlinpflderr422">Please enter last name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Date of Birth (DOB) </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="date" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='2023-07-26' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please select date</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Gender </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={GenderList} defaultValue={{value: 'Male', label: 'Male'}} className="crsr-pntr" value={GenderList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Martial Status* </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={MaritalList} defaultValue={{value: 'Married', label: 'Married'}} className="crsr-pntr" value={MaritalList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Passport Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='P123456' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please select date</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose22}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn32}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

