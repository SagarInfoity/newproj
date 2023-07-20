import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { CandidateProfileLogo } from './candidateprofilelogo';
import { CandidatesSidebar } from './candidatessidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const CandidateBasicInfo = () => {
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22 = () => setShow22(true);

    var mobnum = $('.mblinpfldnumc');
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

    const mdlsvbtnn3 = () => {
        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        var inpp4 = $('#mdlinpfld44');
        
        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        var inp4 = $('#mdlinpfld44').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');
        var inperr4 = $('#mdlinpflderr44');

        if(!inp1 || !inp2 || !inp3 || !inp4) {
            
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
            
            if(!inp4) {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
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
        } else if ($.trim(inp4) === '') {
            inperr4.show().text('This field should not be blank');
            inpp4.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

            inpp4.removeClass('errfldbrdr');
            inperr4.hide();

        }
    }

    const mdlsvbtnn32 = () => {

        var inpp1 = $('#mdlinpfld421');
        var inpp2 = $('#mdlinpfld422');
        var inpp3 = $('#mdlinpfld423');
        var inpp4 = $('#mdlinpfld424');
        
        var inp1 = $('#mdlinpfld421').val();
        var inp2 = $('#mdlinpfld422').val();
        var inp3 = $('#mdlinpfld423').val();
        var inp4 = $('#mdlinpfld424').val();
        
        var inperr1 = $('#mdlinpflderr421');
        var inperr2 = $('#mdlinpflderr422');
        var inperr3 = $('#mdlinpflderr423');
        var inperr4 = $('#mdlinpflderr424');

        if(!inp1 || !inp2 || !inp3 || !inp4) {
            
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
            
            if(!inp4) {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
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
        } else if ($.trim(inp4) === '') {
            inperr4.show().text('This field should not be blank');
            inpp4.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

            inpp4.removeClass('errfldbrdr');
            inperr4.hide();

        }

    }

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
            <div className="padding cstmdpd mbvwpd" id="prflpg">
                <div className="row mt-6-cstm mt-2">
                    <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                        <div style={{position: 'fixed'}}>
                            <div>
                                <div>
                                    <CandidateProfileLogo />
                                </div>
                            </div>
                            <div className="tblt-vw-prfl2" style={{paddingTop: 0, paddingLeft: 10}}>
                                <CandidatesSidebar />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mt-2 mb-2">
                        
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block",marginTop: '14%', paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>Tell us all about your new hire</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={()=>{handleShow2();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle"></i> Add Info
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-0 cmpy-prfl-cspdd2 hide">
                                                    <div onClick={()=>{handleShow22();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen"></i> Edit Info
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body hide" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">First Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Your Name</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Last Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">Your Last Name</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Email</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv2-2">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">email@email.com</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Phone Number</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv2-2">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">99XXXXXXXX</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="">
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


        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>Tell us all about your new hire</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">First Name</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="First Name" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter first name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Last Name </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="Last Name" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter last name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Email </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld43" placeholder="Email" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr43">Please enter email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Phone Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6 mblinpfldnumc" id="mdlinpfld44" placeholder="Phone Number" autocomplete="off" maxlength="10" onKeyPress={isNumberKey} />
                                    <div className="flderrmsgdv" id="mdlinpflderr44">Please enter phone number</div>
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
                <Modal.Title>Tell us all about your new hire</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">First Name</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld421" placeholder="First Name" autocomplete="off" maxlength="30" defaultValue='Your First Name' />
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
                                    <input type="text" className="tekila6" id="mdlinpfld422" placeholder="Last Name" autocomplete="off" maxlength="30" defaultValue='Your Last Name' />
                                    <div className="flderrmsgdv" id="mdlinpflderr422">Please enter last name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Email </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" placeholder="Email" autocomplete="off" maxlength="30" defaultValue='email@email.com' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Phone Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6 mblinpfldnumc" id="mdlinpfld424" placeholder="Phone Number" autocomplete="off" maxlength="10" defaultValue='99XXXXXXXX' onKeyPress={isNumberKey} />
                                    <div className="flderrmsgdv" id="mdlinpflderr424">Please enter phone number</div>
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

