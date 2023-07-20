import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { DoubleHeaderMainForJobProfile } from '../doubleheadermainforjobprofile';
import { Footer } from '../footer';
import { AddJobSidebar } from './addjobsidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

export const AddJobSalaryAndPerks = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const savechkkbxdv = () => {

        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        var inpp4 = $('#mdlinpfld44');
        var inpp5 = $('#mdlinpfld45');
        var inpp6 = $('#mdlinpfld46 .css-1s2u09g-control');
        var inpp7 = $('#mdlinpfld47');
        var inpp8 = $('#mdlinpfld48');

        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        var inp4 = $('#mdlinpfld44').val();
        var inp5 = $('#mdlinpfld45').val();
        var inp6 = $('#jbprflprbtndurtn').text();
        var inp7 = $('#mdlinpfld47').val();
        var inp8 = $('#mdlinpfld48').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');
        var inperr4 = $('#mdlinpflderr44');
        var inperr5 = $('#mdlinpflderr45');
        var inperr6 = $('#mdlinpflderr46');
        var inperr7 = $('#mdlinpflderr47');
        var inperr8 = $('#mdlinpflderr48');
        
        if(!isCheckedctc) {

            // alert('checkbox is unchecked');

            inpp6.removeClass('errfldbrdr');
                inperr6.hide();

            inpp7.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();
            
            if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5) {
                
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
                } else if (inp4 === 'State/Province') {
                    inperr4.show().text('Please select the valid option');
                    inpp4.addClass('errfldbrdr');
                } else {
                    inperr4.hide();
                    inpp4.removeClass('errfldbrdr');
                }
                
                if(!inp5) {
                    inperr5.show().text('This field should not be blank');
                    inpp5.addClass('errfldbrdr');
                } else if ($.trim(inp5) === '') {
                    inperr5.show().text('This field should not be blank');
                    inpp5.addClass('errfldbrdr');
                } else {
                    inperr5.hide();
                    inpp5.removeClass('errfldbrdr');
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
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
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

                inpp5.removeClass('errfldbrdr');
                inperr5.hide();

                $('#fielddv3-1').addClass('hide');
                $('#fielddv3').removeClass('hide');
            }

        }
        else {
            
            
            if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8) {
                
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
                } else if (inp4 === 'State/Province') {
                    inperr4.show().text('Please select the valid option');
                    inpp4.addClass('errfldbrdr');
                } else {
                    inperr4.hide();
                    inpp4.removeClass('errfldbrdr');
                }
                
                if(!inp5) {
                    inperr5.show().text('This field should not be blank');
                    inpp5.addClass('errfldbrdr');
                } else if ($.trim(inp5) === '') {
                    inperr5.show().text('This field should not be blank');
                    inpp5.addClass('errfldbrdr');
                } else {
                    inperr5.hide();
                    inpp5.removeClass('errfldbrdr');
                }

                if(!inp6) {
                    inperr6.show().text('Please select value');
                    inpp6.addClass('errfldbrdr');
                } else if ($.trim(inp6) === '[]') {
                    inperr6.show().text('Please select value');
                    inpp6.addClass('errfldbrdr');
                } else {
                    inperr6.hide();
                    inpp6.removeClass('errfldbrdr');
                }
                
                if(!inp7) {
                    inperr7.show().text('This field should not be blank');
                    inpp7.addClass('errfldbrdr');
                } else if ($.trim(inp7) === '') {
                    inperr7.show().text('This field should not be blank');
                    inpp7.addClass('errfldbrdr');
                } else {
                    inperr7.hide();
                    inpp7.removeClass('errfldbrdr');
                }
                
                if(!inp8) {
                    inperr8.show().text('This field should not be blank');
                    inpp8.addClass('errfldbrdr');
                } else if ($.trim(inp8) === '') {
                    inperr8.show().text('This field should not be blank');
                    inpp8.addClass('errfldbrdr');
                } else {
                    inperr8.hide();
                    inpp8.removeClass('errfldbrdr');
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
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '[]') {
                inperr6.show().text('Please select value');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp7) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
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

                inpp5.removeClass('errfldbrdr');
                inperr5.hide();

                inpp6.removeClass('errfldbrdr');
                inperr6.hide();

                inpp7.removeClass('errfldbrdr');
                inperr7.hide();

                inpp8.removeClass('errfldbrdr');
                inperr8.hide();

                $('#fielddv3-1').addClass('hide');
                $('#fielddv3').removeClass('hide');
            }
            

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
        $('.ctcbrkpchng').text('%');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('.ctcbrkpchng').text('LPA');
    }


    const shwmdldv3 = () => {
        $('#radiothree').prop('checked', true);
        $('#fixeddv').addClass('hide');
        $('#negotiabledv').addClass('hide');
        $('#performancedv').removeClass('hide');
        $('#unpaiddv').addClass('hide');
    }

    const shwmdldv4 = () => {
        $('#radiofour').prop('checked', true);
        $('#fixeddv').addClass('hide');
        $('#negotiabledv').addClass('hide');
        $('#performancedv').addClass('hide');
        $('#unpaiddv').removeClass('hide');
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

    function isNumberKeyy(event) {
        const charCode = event.which ? event.which : event.keyCode;
        const inputVal = event.target.value;
        const dotCount = (inputVal.match(/\./g) || []).length;
        // Allow only numbers and one single dot
        if (
            (charCode < 48 || charCode > 57) && // Allow only numbers
            charCode !== 46 || // Allow the dot character
            (charCode === 46 && dotCount > 0) || // Allow only one single dot
            (charCode === 46 && inputVal.length === 0) // Don't allow dot as first character
        ) {
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

    


    const jbprflprbtndurtnlist = [
        { value: '15 day', label: '15 days'},
        { value: '1 month', label: '1 month'},
        { value: '2 months', label: '2 months'},
        { value: '3 months', label: '3 months'}
    ];

    const [selectedjbprflprbtndurtnlist, setselectedjbprflprbtndurtnlist] = useState();
    
    const handleChange5 = e => {
        setselectedjbprflprbtndurtnlist(e.value);
    }


    const jbprflperkslist = [
        { value: '5 days a week', label: '5 days a week'},
        { value: 'Health Insurance', label: 'Health Insurance'},
        { value: 'Life Insurance', label: 'Life Insurance'}
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
                        <AddJobSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cmpy-prfl-a1cs cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mb-2">
                        <div style={{paddingTop: 20, paddingBottom: 32}}>
                            <h2 style={{fontSize: 16, lineHeight: '1.25', color: '#333e63', fontWeight: 100, fontFamily: 'Circular-Bold', margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                Add job details.
                            </h2>
                        </div>
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>Salary & perks</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="cmpy-prfl-mdl2-dv1 cmpy-prfl-a6 pt-3 pb-3">
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3">CTC</label>
                                                <div className="col-sm-9 col-xs-9 row m-0">
                                                    <div className="col-sm-12 p-0">
                                                        <div className="form-group row m-0 col-sm-12 pb-3 pl-1 pr-1">
                                                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                <div className="col-sm-4 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="e.g. 5.2" autoComplete="off" maxLength="4" onKeyPress={isNumberKeyy} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-2 pl-4 p-0 pt-2 mb-2">
                                                                    <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>to &nbsp;</span>
                                                                </div>
                                                                <div className="col-sm-4 pl-0 mb-2">
                                                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="e.g. 6.5" autoComplete="off" maxLength="4" onKeyPress={isNumberKeyy} />
                                                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter value</div>
                                                                </div>
                                                                <div className="col-sm-2 p-0 pt-2 mb-2">
                                                                <span>LPA</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3"> 
                                                    CTC breakup
                                                    <br/>
                                                    <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>Transparent CTC breakup attracts top candidates</span>
                                                </label>
                                                <div className="col-sm-9 col-xs-9 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="cmpy-prfl-mdl2-dv5 col-sm-12 p-0 mb-4">
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioone" name="radioone" value="In %" defaultChecked />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <span className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv1} htmlFor="radioone">In %</span>
                                                            </div>
                                                            <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                                <div>
                                                                    <div className="cmpy-prfl-mdl2-dv7">
                                                                        <input type="radio" className="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiotwo" name="radioone" value="In LPA" />
                                                                        <i className="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                                    </div>
                                                                </div>
                                                                <label className="cmpy-prfl-mdl2-dv8 crsr-pntr" onClick={shwmdldv2} htmlFor="radiotwo">LPA</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 row m-0 pl-0 mb-3">
                                                            <div className="col-sm-6 pl-1 p-0 pt-2 mb-2">
                                                                <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Fixed pay &nbsp;</span>
                                                                <br/>
                                                                <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>Fixed pay is the fixed component of the CTC</span>
                                                            </div>
                                                            <div className="col-sm-5 mb-2 pt-2">
                                                                <input type="text" className="tekila6" id="mdlinpfld43" placeholder="e.g. 80" autoComplete="off" maxLength="4" onKeyPress={isNumberKeyy} />
                                                                <div className="flderrmsgdv" id="mdlinpflderr43">Please enter value</div>
                                                            </div>
                                                            <div className="col-sm-1 pl-1 p-0 pt-2 mb-2 mt-2">
                                                                <span className="ctcbrkpchng" style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>%</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 row m-0 pl-0 mb-3">
                                                            <div className="col-sm-6 pl-1 p-0 pt-2 mb-2">
                                                                <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Variable pay &nbsp;</span>
                                                                <br/>
                                                                <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>Variable pay includes performance based cash incentives and bonuses</span>
                                                            </div>
                                                            <div className="col-sm-5 mb-2 pt-2">
                                                                <input type="text" className="tekila6" id="mdlinpfld44" placeholder="e.g. 15" autoComplete="off" maxLength="4" onKeyPress={isNumberKeyy} />
                                                                <div className="flderrmsgdv" id="mdlinpflderr44">Please enter value</div>
                                                            </div>
                                                            <div className="col-sm-1 pl-1 p-0 pt-2 mb-2 mt-2">
                                                                <span className="ctcbrkpchng" style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>%</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 row m-0 pl-0 mb-3">
                                                            <div className="col-sm-6 pl-1 p-0 pt-2 mb-2">
                                                                <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>Other Incentives &nbsp;</span>
                                                                <br/>
                                                                <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>Other incentives may include joining bonus, relocation assistance, gratuity, etc.</span>
                                                            </div>
                                                            <div className="col-sm-5 mb-2 pt-2">
                                                                <input type="text" className="tekila6" id="mdlinpfld45" placeholder="e.g. 5" autoComplete="off" maxLength="4" onKeyPress={isNumberKeyy} />
                                                                <div className="flderrmsgdv" id="mdlinpflderr45">Please enter value</div>
                                                            </div>
                                                            <div className="col-sm-1 pl-1 p-0 pt-2 mb-2 mt-2">
                                                                <span className="ctcbrkpchng" style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <div className="col-sm-12 pl-0 col-xs-12 mt-3 p-0">
                                                    <label htmlFor="cmpyprflchkbx1" className="ml-0 cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm tekila3">
                                                        This job has a probation period
                                                    </label>
                                                    <input type="checkbox" id="cmpyprflchkbx1" className="cmpy-prfl-adadmn-rls1 ml-4" checked={isCheckedctc} onChange={() => setIsCheckedctc(!isCheckedctc)} />
                                                </div>
                                            </div>
                                            <div className=" hide" id="ppoctcdv">
                                                <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3"> Probation Duration </label>
                                                    <div className="col-sm-5 col-xs-5 row m-0 pr-0">
                                                        <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                            <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                                <Select id="mdlinpfld46" options={jbprflprbtndurtnlist} value={jbprflprbtndurtnlist.find(obj => obj.value === selectedjbprflprbtndurtnlist)} onChange={handleChange5} />
                                                                <div className="flderrmsgdv" id="mdlinpflderr46">Please select value</div>
                                                            </div>
                                                            {selectedjbprflprbtndurtnlist && <div style={{ display: 'none' }}>
                                                                <div id="jbprflprbtndurtn">{selectedjbprflprbtndurtnlist}</div>
                                                            </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3">Probation Salary</label>
                                                    <div className="col-sm-9 col-xs-9 row m-0">
                                                        <div className="col-sm-12 p-0">
                                                            <div className="form-group row m-0 col-sm-12 pb-3 pl-1 pr-1">
                                                                <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                                    <div className="col-sm-4 pl-0 mb-2">
                                                                        <input type="text" className="tekila6" id="mdlinpfld47" placeholder="e.g. ₹ 25000" autoComplete="off" maxLength="8" onKeyPress={isNumberKey} />
                                                                        <div className="flderrmsgdv" id="mdlinpflderr47">Please enter value</div>
                                                                    </div>
                                                                    <div className="col-sm-2 pl-4 p-0 pt-2 mb-2">
                                                                        <span style={{color: '#333e63', fontFamily: 'Circular-Bold'}}>to &nbsp;</span>
                                                                    </div>
                                                                    <div className="col-sm-4 pl-0 mb-2">
                                                                        <input type="text" className="tekila6" id="mdlinpfld48" placeholder="e.g. ₹ 35000" autoComplete="off" maxLength="8" onKeyPress={isNumberKey} />
                                                                        <div className="flderrmsgdv" id="mdlinpflderr48">Please enter value</div>
                                                                    </div>
                                                                    <div className="col-sm-2 p-0 pt-2 mb-2">
                                                                    <span>/month</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-3 col-form-label tekila3">Perks <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>(Optional)</span> </label>
                                                <div className="col-sm-9 col-xs-9 row m-0 jnprflcspd1">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <CreatableSelect  id="mdlinpfld47" options={jbprflperkslist} value={jbprflperkslist.find(obj => obj.value === selectedjbprflperkslist)} onChange={handleChange6} isMulti isClearable />
                                                            <div className="flderrmsgdv" id="mdlinpflderr47">Please select value</div>
                                                        </div>
                                                        {selectedjbprflperkslist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflperks">{JSON.stringify(selectedjbprflperkslist, null, 2)}</div>
                                                        </div>}
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

