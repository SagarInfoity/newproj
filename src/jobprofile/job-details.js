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

export const AddJobDetails = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const savedvv = () => {

        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp2_1 = $('#mdlinpfld42 .css-1s2u09g-control');
        var inpp3 = $('#mdlinpfld43');
        var inpp3_1 = $('#mdlinpfld43 .css-1s2u09g-control');
        var inpp4 = $('#mdlinpfld44');
        var inpp5 = $('#mdlinpfld45');
        var inpp5_1 = $('#mdlinpfld45 .css-1s2u09g-control');
        var inpp6 = $('#mdlinpfld46');
        var inpp6_1 = $('#mdlinpfld46 .css-1s2u09g-control');
        var inpp7 = $('#mdlinpfld47');
        var inpp7_1 = $('#mdlinpfld47 .css-1s2u09g-control');
        var inpp8 = $('#mdlinpfld48');
        var inpp9 = $('#mdlinpfld49');
        var inpp10 = $('#mdlinpfld410');
        var inpp10_1 = $('#mdlinpfld410 .css-1s2u09g-control');
        var inpp11 = $('#mdlinpfld411');
        var inpp11_1 = $('#mdlinpfld411 .css-1s2u09g-control');
        var inpp12 = $('#mdlinpfld412');
        
        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp2_1 = $('#slctcdjbprflsklls').text();
        var inp3 = $('#mdlinpfld43').val();
        var inp3_1 = $('#slctcdjbprfldprtmentnm').text();
        var inp4 = $('#mdlinpfld44').val();
        var inp5 = $('#mdlinpfld45').val();
        var inp5_1 = $('#slctcdjbprflwork').text();
        var inp6 = $('#mdlinpfld46').val();
        var inp6_1 = $('#slctcdjbprflintrnhptype').text();
        var inp7 = $('#mdlinpfld47').val();
        var inp7_1 = $('#slctcdjbprflgndr').text();
        var inp8 = $('#mdlinpfld48').val();
        var inp9 = $('#mdlinpfld49').val();
        var inp10 = $('#mdlinpfld410').val();
        var inp10_1 = $('#slctcdjbprfldurationdt').text();
        var inp11 = $('#mdlinpfld411').val();
        var inp11_1 = $('#slctcdjbprfldurationdtmn').text();
        var inp12 = $('#mdlinpfld412').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');
        var inperr4 = $('#mdlinpflderr44');
        var inperr5 = $('#mdlinpflderr45');
        var inperr6 = $('#mdlinpflderr46');
        var inperr7 = $('#mdlinpflderr47');
        var inperr8 = $('#mdlinpflderr48');
        var inperr9 = $('#mdlinpflderr49');
        var inperr10 = $('#mdlinpflderr410');
        var inperr11 = $('#mdlinpflderr411');
        var inperr12 = $('#mdlinpflderr412');

        if(!inp1 || !inp2_1 || !inp3_1 || !inp4 || !inp5_1 || !inp6_1 || !inp7_1 || !inp8 || !inp9 || !inp10_1 || !inp11_1 || !inp12) {
            
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
            
            if(!inp2_1) {
                inperr2.show().text('Please select value');
                inpp2_1.addClass('errfldbrdr');
            } else if ($.trim(inp2_1) === '[]') {
                inperr2.show().text('Please select value');
                inpp2_1.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2_1.removeClass('errfldbrdr');
            }
            
            if(!inp3_1) {
                inperr3.show().text('Please select value');
                inpp3_1.addClass('errfldbrdr');
            } else if ($.trim(inp3_1) === '[]') {
                inperr3.show().text('Please select value');
                inpp3_1.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3_1.removeClass('errfldbrdr');
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
            
            if(!inp5_1) {
                inperr5.show().text('Please select value');
                inpp5_1.addClass('errfldbrdr');
            } else if ($.trim(inp5_1) === '') {
                inperr5.show().text('Please select value');
                inpp5_1.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5_1.removeClass('errfldbrdr');
            }
            
            if(!inp6_1) {
                inperr6.show().text('Please select value');
                inpp6_1.addClass('errfldbrdr');
            } else if ($.trim(inp6_1) === '') {
                inperr6.show().text('Please select value');
                inpp6_1.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6_1.removeClass('errfldbrdr');
            }
            
            if(!inp7_1) {
                inperr7.show().text('Please select value');
                inpp7_1.addClass('errfldbrdr');
            } else if ($.trim(inp7_1) === '') {
                inperr7.show().text('Please select value');
                inpp7_1.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7_1.removeClass('errfldbrdr');
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
            
            if(!inp9) {
                inperr9.show().text('This field should not be blank');
                inpp9.addClass('errfldbrdr');
            } else if ($.trim(inp9) === '') {
                inperr9.show().text('This field should not be blank');
                inpp9.addClass('errfldbrdr');
            } else {
                inperr9.hide();
                inpp9.removeClass('errfldbrdr');
            }
            
            if(!inp10_1) {
                inperr10.show().text('Please select value');
                inpp10_1.addClass('errfldbrdr');
            } else if ($.trim(inp10_1) === '') {
                inperr10.show().text('Please select value');
                inpp10_1.addClass('errfldbrdr');
            } else {
                inperr10.hide();
                inpp10_1.removeClass('errfldbrdr');
            }
            
            if(!inp11_1) {
                inperr11.show().text('Please select value');
                inpp11_1.addClass('errfldbrdr');
            } else if ($.trim(inp11_1) === '') {
                inperr11.show().text('Please select value');
                inpp11_1.addClass('errfldbrdr');
            } else {
                inperr11.hide();
                inpp11_1.removeClass('errfldbrdr');
            }
            
            if(!inp12) {
                inperr12.show().text('This field should not be blank');
                inpp12.addClass('errfldbrdr');
            } else if ($.trim(inp12) === '') {
                inperr12.show().text('This field should not be blank');
                inpp12.addClass('errfldbrdr');
            } else {
                inperr12.hide();
                inpp12.removeClass('errfldbrdr');
            }


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2_1) === '') {
            inperr2.show().text('Please select value');
            inpp2_1.addClass('errfldbrdr');
        } else if ($.trim(inp3_1) === '') {
            inperr3.show().text('Please select value');
            inpp3_1.addClass('errfldbrdr');
        } else if ($.trim(inp4) === '') {
            inperr4.show().text('This field should not be blank');
            inpp4.addClass('errfldbrdr');
        } else if ($.trim(inp5_1) === '') {
            inperr5.show().text('Please select value');
            inpp5_1.addClass('errfldbrdr');
        } else if ($.trim(inp6_1) === '') {
            inperr6.show().text('Please select value');
            inpp6_1.addClass('errfldbrdr');
        } else if ($.trim(inp7_1) === '') {
            inperr7.show().text('Please select value');
            inpp7_1.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
        } else if ($.trim(inp9) === '') {
            inperr9.show().text('This field should not be blank');
            inpp9.addClass('errfldbrdr');
        } else if ($.trim(inp10_1) === '') {
            inperr10.show().text('Please select value');
            inpp10_1.addClass('errfldbrdr');
        } else if ($.trim(inp11_1) === '') {
            inperr11.show().text('Please select value');
            inpp11_1.addClass('errfldbrdr');
        } else if ($.trim(inp12) === '') {
            inperr12.show().text('This field should not be blank');
            inpp12.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2_1.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3_1.removeClass('errfldbrdr');
            inperr3.hide();
            
            inpp4.removeClass('errfldbrdr');
            inperr4.hide();

            inpp5_1.removeClass('errfldbrdr');
            inperr5.hide();

            inpp6_1.removeClass('errfldbrdr');
            inperr6.hide();
            
            inpp7_1.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            inpp9.removeClass('errfldbrdr');
            inperr9.hide();

            inpp10_1.removeClass('errfldbrdr');
            inperr10.hide();
            
            inpp11_1.removeClass('errfldbrdr');
            inperr11.hide();

            inpp12.removeClass('errfldbrdr');
            inperr12.hide();


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
        $('#mdldv1').removeClass('hide');
        $('#mdldv2').addClass('hide');
        $('#btndt1').removeClass('hide');
        $('#btndt2').addClass('hide');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('#mdldv2').removeClass('hide');
        $('#mdldv1').addClass('hide');
        $('#btndt1').addClass('hide');
        $('#btndt2').removeClass('hide');
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

    const jbprflworklist = [
        { value: 'In-Office', label: 'In-Office'},
        { value: 'Remote', label: 'Remote'},
        { value: 'Hybrid', label: 'Hybrid'}
    ];

    const [selectedjbprflworklist, setselectedjbprflworklist] = useState();
    
    const handleChange2 = e => {
        setselectedjbprflworklist(e.value);
    }


    const jbprflintrnhptypelist = [
        { value: 'Part-Time', label: 'Part-Time'},
        { value: 'Full-Time', label: 'Full-Time'},
        { value: 'Consultant', label: 'Consultant'}
    ];

    const [selectedjbprflintrnhptypelist, setselectedjbprflintrnhptypelist] = useState();
    
    const handleChange3 = e => {
        setselectedjbprflintrnhptypelist(e.value);
    }
    


    const jbprflgndrlist = [
        { value: 'Male', label: 'Male'},
        { value: 'Female', label: 'Female'},
        { value: 'Other', label: 'Other'},
        { value: 'All of the above', label: 'All of the above'}
    ];

    const [selectedjbprflgndrlist, setselectedjbprflgndrlist] = useState();
    
    const handleChange4 = e => {
        setselectedjbprflgndrlist(e.value);
    }
    

    const jbprfldurationdt = [
        { value: '1', label: '1'},
        { value: '2', label: '2'},
        { value: '3', label: '3'},
        { value: '4', label: '4'},
        { value: '5', label: '5'},
        { value: '6', label: '6'}
    ];

    const [selectedjbprfldurationdt, setselectedjbprfldurationdt] = useState();
    
    const handleChange5 = e => {
        setselectedjbprfldurationdt(e.value);
    }
    

    const jbprfldurationdtmn = [
        { value: 'weeks', label: 'weeks'},
        { value: 'months', label: 'months'}
    ];

    const [selectedjbprfldurationdtmn, setselectedjbprfldurationdtmn] = useState();
    
    const handleChange6 = e => {
        setselectedjbprfldurationdtmn(e.value);
    }

    const jbprflskllist = [
        { value: 'C#', label: 'C#'},
        { value: 'C', label: 'C'},
        { value: 'C++', label: 'C++'},
        { value: 'Java', label: 'Java'}
    ];

    const [selectedjbprflskllist, setselectedjbprflskllist] = useState([]);
    
    const handleChange7 = e => {
        setselectedjbprflskllist(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    

    const jbprfldprtmntlist = [
        { value: 'Department 1', label: 'Department 1'},
        { value: 'Department 2', label: 'Department 2'},
        { value: 'Department 3', label: 'Department 3'},
        { value: 'Department 4', label: 'Department 4'}
    ];

    const [selectedjbprfldprtmntlist, setselectedjbprfldprtmntlist] = useState([]);
    
    const handleChange8 = e => {
        setselectedjbprfldprtmntlist(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    

    return <div>
        <DoubleHeaderMainForJobProfile />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
           <div className="row mt-6-cstm mt-5">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <div class="mt-3 pt-1 pl-1 mb-5">
                                <div>
                                    <Link to='/hiring/jobprofile' className="jbpfl-csa1">
                                        <i class="fa fa-chevron-left jbpfl-csa1-i"></i> Back
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
                                        <span>Job Details</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="cmpy-prfl-mdl2-dv1 cmpy-prfl-a6 pt-3 pb-3">
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3">Job Title</label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <input type="text" className="tekila6" id="mdlinpfld41" placeholder="Enter job name" autocomplete="off" maxlength="30" />
                                                            <div className="flderrmsgdv" id="mdlinpflderr41">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Skills Required </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <CreatableSelect  id="mdlinpfld42" options={jbprflskllist} value={jbprflskllist.find(obj => obj.value === selectedjbprflskllist)} onChange={handleChange7} isMulti isClearable />
                                                            <div className="flderrmsgdv" id="mdlinpflderr42">Please select value</div>
                                                        </div>
                                                        {selectedjbprflskllist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflsklls">{JSON.stringify(selectedjbprflskllist, null, 2)}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Department </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <CreatableSelect  id="mdlinpfld43" options={jbprfldprtmntlist} value={jbprfldprtmntlist.find(obj => obj.value === selectedjbprfldprtmntlist)} onChange={handleChange8} isMulti isClearable />
                                                            <div className="flderrmsgdv" id="mdlinpflderr43">Please select value</div>
                                                        </div>
                                                        {selectedjbprfldprtmntlist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprfldprtmentnm">{JSON.stringify(selectedjbprfldprtmntlist, null, 2)}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Location </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <input type="text" className="tekila6" id="mdlinpfld44" placeholder="Enter location" autocomplete="off" maxlength="50" />
                                                            <div className="flderrmsgdv" id="mdlinpflderr44">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Work Mode </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <Select id="mdlinpfld45" options={jbprflworklist} value={jbprflworklist.find(obj => obj.value === selectedjbprflworklist)} onChange={handleChange2} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr45">Please select value</div>
                                                        </div>
                                                        {selectedjbprflworklist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflwork">{selectedjbprflworklist}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Employee Type </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <Select id="mdlinpfld46" options={jbprflintrnhptypelist} value={jbprflintrnhptypelist.find(obj => obj.value === selectedjbprflintrnhptypelist)} onChange={handleChange3} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr46">Please select value</div>
                                                        </div>
                                                        {selectedjbprflintrnhptypelist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflintrnhptype">{selectedjbprflintrnhptypelist}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>                                            
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Minimum Experience Required </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <input type="text" className="tekila6" id="mdlinpfld49" placeholder="Enter the minimum experience" autocomplete="off" maxlength="10" />
                                                            <div className="flderrmsgdv" id="mdlinpflderr49">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Gender </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <Select id="mdlinpfld47" options={jbprflgndrlist} value={jbprflgndrlist.find(obj => obj.value === selectedjbprflgndrlist)} onChange={handleChange4} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr47">Please select value</div>
                                                        </div>
                                                        {selectedjbprflgndrlist && <div style={{ display: 'none' }}>
                                                            <div id="slctcdjbprflgndr">{selectedjbprflgndrlist}</div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Number of Openings </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <input type="text" className="tekila6" id="mdlinpfld48" placeholder="Enter the number of openings" autocomplete="off" maxlength="3" onKeyPress={isNumberKey} />
                                                            <div className="flderrmsgdv" id="mdlinpflderr48">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Job Description </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <textarea className="tekila6" id="mdlinpfld412" placeholder="Job Description" style={{minHeight: '100px', resize: 'none'}}></textarea>
                                                            <div className="flderrmsgdv" id="mdlinpflderr412">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row m-0 col-sm-12 pt-3 pb-3">
                                                <label htmlFor="inputEmail3" className="col-sm-5 pl-0 col-xs-5 col-form-label tekila3"> Do you have any candidate preference? <br/> <span style={{fontSize: '12px', opacity: '0.5', fontFamily: 'Circular-Book'}}>(Optional)</span> </label>
                                                <div className="col-sm-7 col-xs-7 pl-0 row m-0 pr-0">
                                                    <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                                        <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                            <input type="text" className="tekila6" id="mdlinpfld413" placeholder="Candidate preference" autocomplete="off" maxlength="30" />
                                                            <div className="flderrmsgdv" id="mdlinpflderr413">Please enter value</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group  ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3 cmpy-prfl-mdl-admn-mdl4">
                                            <div className="text-right mr-2">                                            
                                                <span id="chkbxerrr" className="cmpy-prfl-erdv mr-3">Select at least one role.</span>
                                                <button type="button" className="primary modalGrayBtn mr-3" onClick={gobckbtnchkbx}>Go Back</button>
                                                <button type="button" className="primary modalRedBtn" onClick={savedvv}>Continue</button>
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

