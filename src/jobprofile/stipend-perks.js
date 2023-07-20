import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { DoubleHeaderMainForJobProfile } from '../doubleheadermainforjobprofile';
import { Footer } from '../footer';
import { AddInternshipSidebar } from './addinternshipsidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

export const AddInternshipStipendAndPerks = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const [radioValuee, setRadioValuee] = useState('radioone');
        
 

    const savechkkbxdv = () => {
        
        var rdobtn1 = $('#radioone').val();
        var rdobtn2 = $('#radiotwo').val();
        var rdobtn3 = $('#radiothree').val();
        var rdobtn4 = $('#radiofour').val();

        var rdobtn1dv1 = $('#mdlinpfld42');
        var rdobtn2dv1 = $('#mdlinpfld45');
        var rdobtn2dv2 = $('#mdlinpfld46');
        var rdobtn3dv1 = $('#mdlinpfld49');
        var rdobtn3dv2 = $('#mdlinpfld412');

        var rdobtn1dv1vl = $('#mdlinpfld42').val();
        var rdobtn2dv1vl = $('#mdlinpfld45').val();
        var rdobtn2dv2vl = $('#mdlinpfld46').val();
        var rdobtn3dv1vl = $('#mdlinpfld49').val();
        var rdobtn3dv2vl = $('#mdlinpfld412').val();

        var rdobtn1dv1err1 = $('#mdlinpflderr42');
        var rdobtn2dv1err1 = $('#mdlinpflderr45');
        var rdobtn2dv2err2 = $('#mdlinpflderr46');
        var rdobtn3dv1err1 = $('#mdlinpflderr49');
        var rdobtn3dv2err2 = $('#mdlinpflderr412');


        if(radioValuee === rdobtn1) {

            // alert('radio button 1 is checked');

            if(!rdobtn1dv1vl) {

                if(!rdobtn1dv1vl) {
                    rdobtn1dv1err1.show().text('This field should not be blank');
                    rdobtn1dv1.addClass('errfldbrdr');
                } else if ($.trim(rdobtn1dv1vl) === '') {
                    rdobtn1dv1err1.show().text('This field should not be blank');
                    rdobtn1dv1.addClass('errfldbrdr');
                } else {
                    rdobtn1dv1err1.hide();
                    rdobtn1dv1.removeClass('errfldbrdr');
                }

            }
            else if ($.trim(rdobtn1dv1vl) === '') {
                rdobtn1dv1err1.show().text('This field should not be blank');
                rdobtn1dv1.addClass('errfldbrdr');
            }
            else {

                rdobtn1dv1.removeClass('errfldbrdr');
                rdobtn1dv1err1.hide();

                alert('save 1st radio div data');

            }
        }
        else if(radioValuee === rdobtn2) {

            //alert('radio button 2 is checked');
            
            if(!rdobtn2dv1vl || !rdobtn2dv2vl) {

                if(!rdobtn2dv1vl) {
                    rdobtn2dv1err1.show().text('This field should not be blank');
                    rdobtn2dv1.addClass('errfldbrdr');
                } else if ($.trim(rdobtn2dv1vl) === '') {
                    rdobtn2dv1err1.show().text('This field should not be blank');
                    rdobtn2dv1.addClass('errfldbrdr');
                } else {
                    rdobtn2dv1err1.hide();
                    rdobtn2dv1.removeClass('errfldbrdr');
                }

                if(!rdobtn2dv2vl) {
                    rdobtn2dv2err2.show().text('This field should not be blank');
                    rdobtn2dv2.addClass('errfldbrdr');
                } else if ($.trim(rdobtn2dv2vl) === '') {
                    rdobtn2dv2err2.show().text('This field should not be blank');
                    rdobtn2dv2.addClass('errfldbrdr');
                } else {
                    rdobtn2dv2err2.hide();
                    rdobtn2dv2.removeClass('errfldbrdr');
                }

            }
            else if ($.trim(rdobtn2dv1vl) === '') {
                rdobtn2dv1err1.show().text('This field should not be blank');
                rdobtn2dv1.addClass('errfldbrdr');
            }
            else if ($.trim(rdobtn2dv2vl) === '') {
                rdobtn2dv2err2.show().text('This field should not be blank');
                rdobtn2dv2.addClass('errfldbrdr');
            }
            else {

                rdobtn2dv1.removeClass('errfldbrdr');
                rdobtn2dv1err1.hide();

                rdobtn2dv2.removeClass('errfldbrdr');
                rdobtn2dv2err2.hide();

                alert('save 2nd radio div data');

            }
        }
        else if(radioValuee === rdobtn3) {

            // alert('radio button 3 is checked');
            
            if(!rdobtn3dv1vl || !rdobtn3dv2vl) {

                if(!rdobtn3dv1vl) {
                    rdobtn3dv1err1.show().text('This field should not be blank');
                    rdobtn3dv1.addClass('errfldbrdr');
                } else if ($.trim(rdobtn3dv1vl) === '') {
                    rdobtn3dv1err1.show().text('This field should not be blank');
                    rdobtn3dv1.addClass('errfldbrdr');
                } else {
                    rdobtn3dv1err1.hide();
                    rdobtn3dv1.removeClass('errfldbrdr');
                }

                if(!rdobtn3dv2vl) {
                    rdobtn3dv2err2.show().text('This field should not be blank');
                    rdobtn3dv2.addClass('errfldbrdr');
                } else if ($.trim(rdobtn2dv2vl) === '') {
                    rdobtn3dv2err2.show().text('This field should not be blank');
                    rdobtn3dv2.addClass('errfldbrdr');
                } else {
                    rdobtn3dv2err2.hide();
                    rdobtn3dv2.removeClass('errfldbrdr');
                }

            }
            else if ($.trim(rdobtn3dv1vl) === '') {
                rdobtn3dv1err1.show().text('This field should not be blank');
                rdobtn3dv1.addClass('errfldbrdr');
            }
            else if ($.trim(rdobtn3dv2vl) === '') {
                rdobtn3dv2err2.show().text('This field should not be blank');
                rdobtn3dv2.addClass('errfldbrdr');
            }
            else {

                rdobtn3dv1.removeClass('errfldbrdr');
                rdobtn3dv1err1.hide();

                rdobtn3dv2.removeClass('errfldbrdr');
                rdobtn3dv2err2.hide();

                alert('save 3rd radio div data');

            }
        }
        else if(radioValuee === rdobtn4) {

            alert('save 4th radio div data');

        }

    }
    
    
    const EmployeeList = [
        { value: 0, label: 'Corporation' },
        { value: 1, label: 'LLC' },
        { value: 2, label: 'Partnership' },
        { value: 3, label: 'S-Corporaton' },
        { value: 4, label: 'Sole Proprietorship' },
        { value: 5, label: 'LLP' },
        { value: 6, label: 'Non-Profit Corporation' },
        { value: 7, label: 'Single-Member LLC' }
    ];



    const [empDrpDwnValue, setEmpDrpDwnValue] = useState(null);

    const handleChange1 = e => {
        setEmpDrpDwnValue(e.value);
    }

    const gobckbtnchkbx = () => {
        window.location.href = '/hiring/jobprofile';
    }


    const shwmdldv1 = () => {
        $('#radioone').prop('checked', true);
        $('#fixeddv').removeClass('hide');
        $('#negotiabledv').addClass('hide');
        $('#performancedv').addClass('hide');
        $('#unpaiddv').addClass('hide');
        setRadioValuee('radioone');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('#fixeddv').addClass('hide');
        $('#negotiabledv').removeClass('hide');
        $('#performancedv').addClass('hide');
        $('#unpaiddv').addClass('hide');
        setRadioValuee('radiotwo');
    }


    const shwmdldv3 = () => {
        $('#radiothree').prop('checked', true);
        $('#fixeddv').addClass('hide');
        $('#negotiabledv').addClass('hide');
        $('#performancedv').removeClass('hide');
        $('#unpaiddv').addClass('hide');
        setRadioValuee('radiothree');
    }

    const shwmdldv4 = () => {
        $('#radiofour').prop('checked', true);
        $('#fixeddv').addClass('hide');
        $('#negotiabledv').addClass('hide');
        $('#performancedv').addClass('hide');
        $('#unpaiddv').removeClass('hide');
        setRadioValuee('radiofour');
    }

    var mobnum = $('#mdlinpfldmblnum1');
    $(mobnum).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    const mdlsvbtnn1 = () => {
        
        var inpp = $('#mdlinpfld11');
        var inp = $('#mdlinpfld11').val();
        var inperr = $('#mdlinpflderr11');
        
        if(!inp) {
            
            if(!inp) {
                inperr.show().text('Please enter a Labor Group name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

            handleClose();
        }
        
    }

    function isNumberKey(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
    }

    const mdlcsbtnn1 = () => {
        window.location.href = '/company-profile/admins';
    }
    

    const jbprflcrncylst = [
        { value: '$', label: '$'},
        { value: '₹', label: '₹'}
    ];

    const [selectedjbprflcrncylst, setselectedjbprflcrncylst] = useState();
    
    const handleChange2 = e => {
        setselectedjbprflcrncylst(e.value);
    }
    

    const jbprfldurationdtmn = [
        { value: '/weeks', label: '/weeks'},
        { value: '/months', label: '/months'},
        { value: 'lump-sum', label: 'lump-sum'}
    ];

    const [selectedjbprfldurationdtmn, setselectedjbprfldurationdtmn] = useState();
    
    const handleChange3 = e => {
        setselectedjbprfldurationdtmn(e.value);
    }
    

    const jbprflscl = [
        { value: 'sale', label: 'sale'},
        { value: 'write-up', label: 'write-up'},
        { value: 'design', label: 'design'}
    ];

    const [selectedjbprflscl, setselectedjbprflscl] = useState();
    
    const handleChange4 = e => {
        setselectedjbprflscl(e.value);
    }
    

    const jbprflctclist = [
        { value: '2 LPA', label: '2 LPA'},
        { value: '3 LPA', label: '3 LPA'},
        { value: '4 LPA', label: '4 LPA'},
        { value: '5 LPA', label: '5 LPA'}
    ];

    const [selectedjbprflctclist, setselectedjbprflctclist] = useState();
    
    const handleChange7 = e => {
        setselectedjbprflctclist(e.value);
    }

    const [selectedjbprflctclist2, setselectedjbprflctclist2] = useState();
    
    const handleChange8 = e => {
        setselectedjbprflctclist2(e.value);
    }

    const [isCheckedctc, setIsCheckedctc] = useState(false);

    useEffect(() => {
        const divctc = $('#ppoctcdv');
        if (isCheckedctc) {
            divctc.removeClass('hide');
        } else {
            divctc.addClass('hide');
        }
    }, [isCheckedctc]);



    const jbprflperkslist = [
        { value: '5 days a week', label: '5 days a week'},
        { value: 'Certificate', label: 'Certificate'},
        { value: 'Letter of recommendation', label: 'Letter of recommendation'},
        { value: 'Flexible work hours', label: 'Flexible work hours'}
    ];

    const [selectedjbprflperkslist, setselectedjbprflperkslist] = useState([]);
    
    const handleChange6 = e => {
        setselectedjbprflperkslist(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    return <div>
        <DoubleHeaderMainForJobProfile />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-5">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <div className="mt-3 pt-1 pl-1 mb-5">
                                <div>
                                    <Link to='/hiring/jobprofile' className="jbpfl-csa1">
                                        <i className="fa fa-chevron-left jbpfl-csa1-i"></i> Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 0, paddingLeft: 4}}>
                        <AddInternshipSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cmpy-prfl-a1cs cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mb-2">
                        <div style={{paddingTop: 20, paddingBottom: 32}}>
                            <h2 style={{fontSize: 16, lineHeight: '1.25', color: '#333e63', fontWeight: 100, fontFamily: 'Circular-Bold', margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                Add internship details.
                            </h2>
                        </div>
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>Stipend & perks</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="cmpy-prfl-mdl2-dv1 cmpy-prfl-a6 pt-3 pb-3">
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3">Stipend</label>
                                                <div className="col-sm-9 col-xs-9 row m-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="cmpy-prfl-mdl2-dv5">
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioone" name="radioone" value="radioone" defaultChecked />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <span className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv1} htmlFor="radioone">Fixed</span>
                                                            </div>
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiotwo" name="radioone" value="radiotwo" />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <label className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv2} htmlFor="radiotwo">Negotiable</label>
                                                            </div>
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiothree" name="radioone" value="radiothree" />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <label className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv3} htmlFor="radiothree">Performance based</label>
                                                            </div>
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiofour" name="radioone" value="radiofour" />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <label className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv4} htmlFor="radiofour">Unpaid</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 p-0">
                                                        <div className="form-group row m-0 col-sm-12 pt-3 pb-3 pl-1 pr-1" id="fixeddv">
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                <div className="col-sm-3 pl-0 mb-2">
                                                                    <Select id="mdlinpfld41" options={jbprflcrncylst} defaultValue={{ value: '₹', label: '₹'}} value={jbprflcrncylst.find(obj => obj.value === selectedjbprflcrncylst)} onChange={handleChange2} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please select value</div>
                                                                </div>
                                                                {selectedjbprflcrncylst && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdt">{selectedjbprflcrncylst}</div>
                                                                </div>}
                                                                <div className="col-sm-5 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="e.g. 10000" autoComplete="off" maxLength="8" style={{minHeight: 39}} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-4 pl-0 pr-0 mb-2">
                                                                    <Select id="mdlinpfld43" options={jbprfldurationdtmn} defaultValue={{ value: '/month', label: '/month'}} value={jbprfldurationdtmn.find(obj => obj.value === selectedjbprfldurationdtmn)} onChange={handleChange3} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr43">Please select value</div>
                                                                </div>
                                                                {selectedjbprfldurationdtmn && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdtmn">{selectedjbprfldurationdtmn}</div>
                                                                </div>}
                                                            </div>
                                                        </div>
                                                        <div className="form-group row m-0 col-sm-12 pt-3 pb-3 pl-1 pr-1 hide" id="negotiabledv">
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 cmpy-prfl-cspdd1">The stipend must be negotiated and finalised before the internship starts</div>
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                <div className="col-sm-2 pl-0 mb-2">
                                                                    <Select id="mdlinpfld44" options={jbprflcrncylst} defaultValue={{ value: '₹', label: '₹'}} value={jbprflcrncylst.find(obj => obj.value === selectedjbprflcrncylst)} onChange={handleChange2} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr44">Please select value</div>
                                                                </div>
                                                                {selectedjbprflcrncylst && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdt">{selectedjbprflcrncylst}</div>
                                                                </div>}
                                                                <div className="col-sm-3 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld45" placeholder="e.g. 10000" autoComplete="off" maxLength="8" style={{minHeight: 39}} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr45">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-1 p-0 pt-2 mb-2">
                                                                    <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>to &nbsp;</span>
                                                                </div>
                                                                <div className="col-sm-3 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld46" placeholder="e.g. 12000" autoComplete="off" maxLength="8" style={{minHeight: 39}} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr46">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-3 pl-0 pr-0 mb-2">
                                                                    <Select id="mdlinpfld47" options={jbprfldurationdtmn} defaultValue={{ value: '/month', label: '/month'}} value={jbprfldurationdtmn.find(obj => obj.value === selectedjbprfldurationdtmn)} onChange={handleChange3} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr47">Please select value</div>
                                                                </div>
                                                                {selectedjbprfldurationdtmn && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdtmn">{selectedjbprfldurationdtmn}</div>
                                                                </div>}
                                                            </div>
                                                        </div>
                                                        <div className="form-group row m-0 col-sm-12 pt-3 pb-3 pl-1 pr-1 hide" id="performancedv">
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 cmpy-prfl-cspdd1">For output-driven performance-based internships, such as Business Development (Sales), etc. we insist on a minimum assured stipend (₹1000 for a work from home internship and ₹2000 for an in-office internship) and the rest could be incentive-based</div>
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                <div className="col-sm-12 p-0 mt-2 mb-1">
                                                                    <div style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Minimum assured</div>
                                                                </div>
                                                                <div className="col-sm-2 pl-0 mb-2">
                                                                    <Select id="mdlinpfld48" options={jbprflcrncylst} defaultValue={{ value: '₹', label: '₹'}} value={jbprflcrncylst.find(obj => obj.value === selectedjbprflcrncylst)} onChange={handleChange2} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr48">Please select value</div>
                                                                </div>
                                                                {selectedjbprflcrncylst && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdt">{selectedjbprflcrncylst}</div>
                                                                </div>}
                                                                <div className="col-sm-4 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld49" placeholder="e.g. 10000" autoComplete="off" maxLength="8" style={{minHeight: 39}} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr49">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-3 pl-0 pr-0 mb-2">
                                                                    <Select id="mdlinpfld410" options={jbprfldurationdtmn} defaultValue={{ value: '/month', label: '/month'}} value={jbprfldurationdtmn.find(obj => obj.value === selectedjbprfldurationdtmn)} onChange={handleChange3} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr410">Please select value</div>
                                                                </div>
                                                                {selectedjbprfldurationdtmn && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdtmn">{selectedjbprfldurationdtmn}</div>
                                                                </div>}
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                <div className="col-sm-12 p-0 mt-2 mb-1">
                                                                    <div style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Incentives based</div>
                                                                </div>
                                                                <div className="col-sm-2 pl-0 mb-2">
                                                                    <Select id="mdlinpfld411" options={jbprflcrncylst} defaultValue={{ value: '₹', label: '₹'}} value={jbprflcrncylst.find(obj => obj.value === selectedjbprflcrncylst)} onChange={handleChange2} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr411">Please select value</div>
                                                                </div>
                                                                {selectedjbprflcrncylst && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdt">{selectedjbprflcrncylst}</div>
                                                                </div>}
                                                                <div className="col-sm-4 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld412" placeholder="e.g. 750" autoComplete="off" maxLength="8" style={{minHeight: 39}} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr412">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-1 p-0 pt-2 mb-2">
                                                                    <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>per &nbsp;</span>
                                                                </div>
                                                                <div className="col-sm-4 pl-0 pr-0 mb-2">
                                                                    <Select id="mdlinpfld413" options={jbprflscl} defaultValue={{ value: 'choose scale', label: 'choose scale'}} value={jbprflscl.find(obj => obj.value === selectedjbprflscl)} onChange={handleChange4} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr413">Please select value</div>
                                                                </div>
                                                                {selectedjbprflscl && <div style={{ display: 'none' }}>
                                                                    <div id="slctcdjbprfldurationdtmn">{selectedjbprflscl}</div>
                                                                </div>}
                                                            </div>
                                                        </div>
                                                        <div className="form-group row m-0 col-sm-12 pt-3 pb-3 pl-1 pr-1 hide" id="unpaiddv">
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 cmpy-prfl-cspdd1">We allow unpaid internships only in the case of NGOs or niche profiles</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3">Perks <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>(Optional)</span> </label>
                                                <div className="col-sm-9 col-xs-9 row m-0 jnprflcspd1">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <CreatableSelect  id="mdlinpfld414" options={jbprflperkslist} value={jbprflperkslist.find(obj => obj.value === selectedjbprflperkslist)} onChange={handleChange6} isMulti isClearable />
                                                            <div className="flderrmsgdv" id="mdlinpflderr414">Please select value</div>
                                                        </div>
                                                        {selectedjbprflperkslist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflperks">{JSON.stringify(selectedjbprflperkslist, null, 2)}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <div className="col-sm-12 pl-0 col-xs-12 mt-3 p-0">
                                                    <label htmlFor="cmpyprflchkbx9" className="ml-0 cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm tekila3">
                                                        Does this internship come with a pre-placement offer (PPO)?
                                                        <span className="ml-2" style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>(Optional)</span> 
                                                    </label>
                                                    <input type="checkbox" id="cmpyprflchkbx9" className="cmpy-prfl-adadmn-rls1 ml-4" checked={isCheckedctc} onChange={() => setIsCheckedctc(!isCheckedctc)} />
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3 hide" id="ppoctcdv">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3"> 
                                                    CTC offered
                                                    <br/>
                                                    <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>Adding CTC offered on conversion to full-time role attracts top candidates</span>
                                                </label>
                                                <div className="col-sm-9 col-xs-9 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-2 p-0 pt-2 mb-2">
                                                            <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Min CTC &nbsp;</span>
                                                        </div>
                                                        <div className="col-sm-4 pl-0 mb-2">
                                                            <Select id="mdlinpfld415" options={jbprflctclist} value={jbprflctclist.find(obj => obj.value === selectedjbprflctclist)} onChange={handleChange7} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr415">Please select value</div>
                                                        </div>
                                                        {selectedjbprflctclist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprfldurationdt">{selectedjbprflctclist}</div>
                                                        </div>}
                                                        <div className="col-sm-2 p-0 pt-2 mb-2">
                                                            <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Max CTC &nbsp;</span>
                                                        </div>
                                                        <div className="col-sm-4 pl-0 pr-0 mb-2">
                                                            <Select id="mdlinpfld416" options={jbprflctclist} value={jbprflctclist.find(obj => obj.value === selectedjbprflctclist2)} onChange={handleChange8} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr416">Please select value</div>
                                                        </div>
                                                        {selectedjbprflctclist2 && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprfldurationdtmn">{selectedjbprflctclist2}</div>
                                                        </div>}
                                                    </div>
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 mt-5 p-0">
                                                            <label htmlFor="cmpyprflchkbx10" className="ml-0 cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                                Hide CTC offered from applicants
                                                            </label>
                                                            <input type="checkbox" id="cmpyprflchkbx10" className="cmpy-prfl-adadmn-rls1 ml-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group  ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3 cmpy-prfl-mdl-admn-mdl4">
                                            <div className="text-right mr-2">                                            
                                                <button type="button" className="primary modalGrayBtn mr-3" onClick={gobckbtnchkbx}>Go Back</button>
                                                <button type="button" className="primary modalRedBtn" onClick={savechkkbxdv}>Post Internship</button>
                                            </div>
                                        </div>
                                    </form>
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
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            Do you want to leave without saving your changes?
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Go Back
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlcsbtnn1}>
                    Yes, cancel
                </Button>
            </Modal.Footer>
        </Modal>
        


    </div>
}

// export default Details;

