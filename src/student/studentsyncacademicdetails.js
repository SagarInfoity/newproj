import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { StudentReviewLogo } from './studentreviewlogo';
import { StudentReviewSidebar } from './studentreviewsidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const StudentSyncAcademicDetails = () => {
    
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

    const nxtpgrt1 = () => {
        const icon = document.getElementById('nxtpgrt1icn1');
        const text = document.getElementById('nxtpgrt1txt1');
        
        icon.classList.remove('hide');
        text.classList.add('hide');
        
        setTimeout(() => {
          window.location.href = "/student/studentsynccoursedetails";
        }, 1000);
      };

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

    const StatusList = [
        { value: 'Verified Successful', label: 'Verified Successful' },
        { value: 'Not Verified', label: 'Not Verified' }
    ];

    const qlfctnList = [
        { value: 'Applicable', label: 'Applicable' },
        { value: 'Not Applicable', label: 'Not Applicable' }
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
                        <div style={{position: 'fixed'}}>
                            <div>
                                <div>
                                    <StudentReviewLogo />
                                </div>
                            </div>
                            <div className="tblt-vw-prfl2" style={{paddingTop: 10, paddingLeft: 10}}>
                                <StudentReviewSidebar />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cs-st-pd tblt-prfl-vw-dv1">
                        <div className="col-sm-12 col-md-12 mt-2 mb-2">
                            <div className="col-sm-12 pl-0 pr-0" style={{marginBottom: 32}}>
                                <h3 style={{fontSize: 24, lineHeight: '1.33', color: '#333e63', fontFamily: 'Circular-Medium', textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                     Now, Let's Sync Your Academic Details.
                                </h3>
                            </div>
                        </div>

                        <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5" style={{textTransform: 'capitalize', fontFamily: 'Circular-Book', fontSize: 16}}>
                                                <span>10th Marksheet Details</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-4 mt-1 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Board State*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StateList} defaultValue={{value: 'New Delhi', label: 'New Delhi'}} className="crsr-pntr" value={StateList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select state</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Year of Passing*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Passing year" autocomplete="off" maxlength="10" defaultValue="2020" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row  ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">English Marks*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="English Marks" autocomplete="off" maxlength="3" defaultValue="89" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
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
                        <div className="col-md-12 pt-16px mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5" style={{textTransform: 'capitalize', fontFamily: 'Circular-Book', fontSize: 16}}>
                                                <span>12th Marksheet Details</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-4 mt-1 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Board State*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StateList} defaultValue={{value: 'New Delhi', label: 'New Delhi'}} className="crsr-pntr" value={StateList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select state</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Board Name*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Board Name" autocomplete="off" maxlength="30" defaultValue="CBSE" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Year of Passing*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Passing Year" autocomplete="off" maxlength="10" defaultValue="2020" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Status</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StatusList} defaultValue={{value: 'Verified Successful', label: 'Verified Successful'}} className="crsr-pntr" value={StatusList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select value</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">12th Marks (%)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="12th Marks" autocomplete="off" maxlength="3" defaultValue="95" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">English Marks</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="English Marks" autocomplete="off" maxlength="3" defaultValue="89" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
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
                        <div className="col-md-12 pt-16px mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5" style={{textTransform: 'capitalize', fontFamily: 'Circular-Book', fontSize: 16}}>
                                                <span>Degree Marksheet Details</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                    <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-4 mt-1 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Univeristy State*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StateList} defaultValue={{value: 'New Delhi', label: 'New Delhi'}} className="crsr-pntr" value={StateList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select state</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Institution Name*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Institution Name" autocomplete="off" maxlength="30" defaultValue="XYZ College" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Year of Passing*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Passing Year" autocomplete="off" maxlength="10" defaultValue="2020" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Status</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StatusList} defaultValue={{value: 'Verified Successful', label: 'Verified Successful'}} className="crsr-pntr" value={StatusList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select value</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Degree Marks (%)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Degree Marks" autocomplete="off" maxlength="3" defaultValue="89" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-4 ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Prev Qualification</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={qlfctnList} defaultValue={{value: 'Not Applicable', label: 'Not Applicable'}} className="crsr-pntr" value={qlfctnList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select value</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
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
                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5" style={{textTransform: 'capitalize', fontFamily: 'Circular-Book', fontSize: 16}}>
                                                <span>English Score Details</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                    <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-4 mt-1 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">English*</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Course Name" autocomplete="off" maxlength="30" defaultValue="IELTS" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2 ">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Status</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={StatusList} defaultValue={{value: 'Verified Successful', label: 'Verified Successful'}} className="crsr-pntr" value={StatusList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select value</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-2  mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">IELTS/ PTE/ TOEFL <br/>/Duolingo/ 12th English Score</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld01" placeholder="Score" autocomplete="off" maxlength="3" defaultValue="8" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter value</div>
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
                        <div className="col-md-12 pt-16px">
                            <div className="text-right">
                                    <Link to="/student/studentsyncdetails">
                                        <Button variant="primary modalGrayBtn mr-3" style={{minWidth: 80}}>
                                            Back
                                        </Button>
                                    </Link>
                                    <Button variant="primary modalRedBtn" onClick={nxtpgrt1} style={{minWidth: 100}}>
                                        <i className="fa fa-spinner fa-spin fs-12px hide" id="nxtpgrt1icn1"></i>
                                        <span id="nxtpgrt1txt1">Sync</span>
                                    </Button>
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

