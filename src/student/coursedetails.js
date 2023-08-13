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

export const StudentCourseDetails = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    
    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

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

    const PrevQualList = [
        { value: 'NA', label: 'NA' }
    ];

    const YearList = [
        { value: '2020', label: '2020' },
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' }
    ];

    const BoardList = [
        { value: 'CBSE', label: 'CBSE' },
        { value: 'IBSE', label: 'IBSE' }
    ];

    const InstitutionList = [
        { value: 'XYZ College', label: 'XYZ College' },
        { value: 'ABC College', label: 'ABC College' }
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
        { value: 'US', label: 'US' },
        { value: 'Crizac Ltd', label: 'Crizac Ltd' }
    ];

    const StateList = [
        { value: 'New Delhi', label: 'New Delhi' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'Karnataka', label: 'Karnataka' }
    ];

    const TwlthScoreStatusList = [
        { value: 'Verified Successful', label: 'Verified Successful' },
        { value: 'Cannot be Verified from Link', label: 'Cannot be Verified from Link' },
        { value: 'Does not have a Verification Link', label: 'Does not have a Verification Link' },
        { value: 'Fake Marksheet', label: 'Fake Marksheet' }
    ];

    const DegreeScoreStatusList = [
        { value: 'Univeristy Not in Naric List', label: 'Univeristy Not in Naric List' },
        { value: 'Verified Successful', label: 'Verified Successful' },
        { value: 'Cannot be Verified from Link', label: 'Cannot be Verified from Link' },
        { value: 'Does not have a Verification Link', label: 'Does not have a Verification Link' },
        { value: 'Fake Marksheet', label: 'Fake Marksheet' },
        { value: 'NA', label: 'NA' }
    ];

    const EnglishScoreStatusList = [
        { value: 'Verified Successful', label: 'Verified Successful' },
        { value: 'Cannot be Verified from Link', label: 'Cannot be Verified from Link' },
        { value: 'Does not have a Verification Link', label: 'Does not have a Verification Link' },
        { value: 'Fake Marksheet', label: 'Fake Marksheet' }
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
                                                <span>Course Information</span>
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
                                <div className="box-body" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 mt-1 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Course Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Biotechnology M Sc <br/> <span style={{color: 'rgba(18,62,108,0.7)', fontSize: '12px'}}>-Intake August/September/October/November 2022</span></label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">University Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Coventry University</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Country</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">Crizac Ltd</label>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Published Tuition Fees</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">16600.0000</label>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Scholarship</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">Contact For Scholarship</label>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Fees (CAS)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">€0</label>
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
                <Modal.Title>10TH MARKSHEET DETAILS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Board State*</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={StateList} defaultValue={{value: 'New Delhi', label: 'New Delhi'}} className="crsr-pntr" value={GenderList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select option</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Year of Passing*</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={YearList} defaultValue={{value: '2020', label: '2020'}} className="crsr-pntr" value={YearList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select option</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> English Marks </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='90' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
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
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header>
                <Modal.Title>COURSE INFORMATION</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Course Name</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='Biotechnology M Sc' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='Intake August/September/October/November 2022' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">University Name</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='Coventry University' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Country </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <Select options={CountryList} defaultValue={{value: 'Crizac Ltd', label: 'Crizac Ltd'}} className="crsr-pntr" value={CountryList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select option</div>
                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Published Tuition Fees </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="number" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='16600.0000' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Scholarship </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='Contact For Scholarship' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Fees (CAS) </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6 tekila6csinpcurncy" id="mdlinpfld423" autocomplete="off" maxlength="30" defaultValue='0' />
                                    <span class="euro-symbol">€</span>
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter data</div>
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
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={handleClose2}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

