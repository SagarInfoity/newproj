import React, {useState, useEffect} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CreateProfileOld = () => {

    const handleChange = (e) => {
        var sname = $('#sname').val().trim();
        var name = $('#yourname').val().trim();
        var swbst = $('#swbst').val().trim();
        var designation = $('#designation').val().trim();
        var city = $('#enctyy').val().trim();
        var state = $('#enstat').val().trim();
        var country = $('#cntryname').val();

        if ((sname.length > 0) && (name.length > 0) && (swbst.length > 0) && (designation.length > 0) && (city.length > 0) && (state.length > 0) && (country != "0")) {
            $('#nxt-btnnfnladm').removeAttr('disabled');
        }
        else {
            $('#nxt-btnnfnladm').attr('disabled', 'disabled');
        }
    }

    const handleChange3 = (e) => {
        var schlwbst = $('#swbst');
        var schlwbstval = $('#swbst').val();
        var udiv3 = $('#uiscs3');
        var urlpattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i');

        if (schlwbst.val() === '' || null) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('School website is required');
        }
        else if(!urlpattern.test(schlwbstval)) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').addClass('vlactvv');
            $('#uiscs3 .err-txt').text('Please enter the correct website url');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('School website is required');
        }
    }
    


    const onBlur = (e) => {
        var schlname = $('#sname');
        var schlnameval = $('#sname').val();
        var udiv1 = $('#uiscs');
        var nmwdspc = new RegExp('^[a-zA-Z\\s.]+$');

        if (schlnameval.trim() === '') {
            udiv1.attr('errr', '');
            udiv1.removeClass('valid-inp');
            $('#uiscs .kckh4-spn').removeClass('vlactvv');
            $('#uiscs .err-txt').text('School name is required');
        }
        else if(!nmwdspc.test(schlnameval)) {
            udiv1.attr('errr', '');
            udiv1.removeClass('valid-inp');
            $('#uiscs .kckh4-spn').addClass('vlactvv');
            $('#uiscs .err-txt').text('Please enter the correct school name');
        }
        else {
            udiv1.removeAttr('errr');
            udiv1.addClass('valid-inp');
            $('#uiscs .kckh4-spn').removeClass('vlactvv');
            $('#uiscs .err-txt').text('School name is required');
        }
    }

    const onBlur2 = (e) => {
        var name = $('#yourname');
        var namevl = $('#yourname').val();
        var udiv2 = $('#uiscs2');
        var nmdspc = new RegExp('^[a-zA-Z\\s]+$');

        if (namevl.trim() === '') {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
        else if(!nmdspc.test(namevl)) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').addClass('vlactvv');
            $('#uiscs2 .err-txt').text('Please enter the correct name');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
    }

    const onBlur3 = (e) => {
        var schlwbst = $('#swbst');
        var schlwbstval = $('#swbst').val();
        var udiv3 = $('#uiscs3');
        var urlpattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i');

        if (schlwbst.val() === '' || null) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('School website is required');
        }
        else if(!urlpattern.test(schlwbstval)) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').addClass('vlactvv');
            $('#uiscs3 .err-txt').text('Please enter the correct website url');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('School website is required');
        }
    }

    const onBlur4 = (e) => {
        var designation = $('#designation');
        var designationval = $('#designation').val();
        var udiv4 = $('#uiscs4');
        var dsgspc = new RegExp('^[a-zA-Z\\s]+$');

        if (designationval.trim() === '') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Designation is required');
        }
        else if(!dsgspc.test(designationval)) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').addClass('vlactvv');
            $('#uiscs4 .err-txt').text('Please enter the correct designation');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Designation is required');
        }
    }

    const onBlur5 = (e) => {
        var schlcty = $('#enctyy');
        var schlctyvl = $('#enctyy').val();
        var udiv5 = $('#uiscs5');
        var ctyspc = new RegExp('^[a-zA-Z\\s]+$');

        if (schlctyvl.trim() === '') {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
            $('#uiscs5 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs5 .err-txt').text('City is required');
        }
        else if(!ctyspc.test(schlctyvl)) {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
            $('#uiscs5 .kckh4-spn').addClass('vlactvv');
            $('#uiscs5 .err-txt').text('Please enter the correct city');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
            $('#uiscs5 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs5 .err-txt').text('City is required');
        }
    }

    const onBlur7 = (e) => {
        var schlstat = $('#enstat');
        var schlstatvl = $('#enstat').val();
        var udiv7 = $('#uiscs7');
        var sttespc = new RegExp('^[a-zA-Z\\s]+$');

        if (schlstatvl.trim() === '') {
            udiv7.attr('errr', '');
            udiv7.removeClass('valid-inp');
            $('#uiscs7 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs7 .err-txt').text('State is required');
        }
        else if(!sttespc.test(schlstatvl)) {
            udiv7.attr('errr', '');
            udiv7.removeClass('valid-inp');
            $('#uiscs7 .kckh4-spn').addClass('vlactvv');
            $('#uiscs7 .err-txt').text('Please enter the correct state');
        }
        else {
            udiv7.removeAttr('errr');
            udiv7.addClass('valid-inp');
            $('#uiscs7 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs7 .err-txt').text('State is required');
        }
    }

    const onBlur8 = (e) => {
        var cntryy = $('#cntryname');
        var udiv8 = $('#uiscs8');

        if (cntryy.val() === '0') {
            udiv8.attr('errr', '');
            udiv8.removeClass('valid-inp');
        }
        else {
            udiv8.removeAttr('errr');
            udiv8.addClass('valid-inp');
        }
    }

      const [adminSchoolNameSignup, setAdminSchoolNameSignup] = useState('');
      const [adminNameSignup, setAdminNameSignup] = useState('');
      const [adminSchoolWebsiteSignup, setAdminSchoolWebsiteSignup] = useState('');
      const [adminDesignationSignup, setAdminDesignationSignup] = useState('');
      const [adminEnterCitySignup, setAdminEnterCitySignup] = useState('');
      const [adminEnterStateSignup, setAdminEnterStateSignup] = useState('');
      const [adminSelectCountrySignup, setAdminSelectCountrySignup] = useState('');


    return <div>

        <Headersignup />

        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="be-content">
                <div className="main-content container-fluid disp-flex pb-0">
                    <div className="col-lg-8 col-xs-12" style={{margin: "0 auto", maxWidth: "752px"}}> 
                        <div>
                            <div className="dvvmmn dvmmbw">
                                <div style={{display: "flex", marginLeft: "5px"}} className="dvvmmn2">
                                    <div style={{paddingRight: "15px"}}>
                                        <div style={{position: "relative", width: "78px",height: "78px"}}>
                                            <div className="kldkc">3</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-9.833333333333332"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-43.166666666666664"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 3: Filling your details
                                        </h6>
                                        <h3 className="kckh3">Tell us more.</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" className="admincreateprofile" method="POST" id="admincreateprofile" noValidate="novalidate">
                                        <div className="w-100">
                                            <div className="kckh4" id="uiscs">
                                                <input id="sname" name="sname" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={adminSchoolNameSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminSchoolNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="sname">School Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">School name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh43" id="uiscs3">
                                                <input id="swbst" name="swbst" autoComplete="off" type="text" className="mbl-inp" maxLength="25" required="" value={adminSchoolWebsiteSignup} onBlur={(e) => onBlur3(e)} onChange={e => { setAdminSchoolWebsiteSignup(e.target.value); handleChange(e); handleChange3(e);}} />
                                                <span className="kckh4-spn" htmlFor="swbst">School Website</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <g id="Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" className="stroke">
                                                        <g id="Workest-Homepage-Notifications-320" transform="translate(-186, -23.000000)" className="stroke" stroke="#9CA2B4" strokeWidth="2">
                                                            <g id="WS-header-/-design-/-320-logged" className="stroke">
                                                                <g id="General-/-search" transform="translate(184.000000, 21.000000)" className="stroke">
                                                                    <circle id="Oval-5" cx="9.58333333" cy="9.58333333" r="6.25"></circle>
                                                                    <path d="M18.7030417,14.166666 L14.0939989,18.7757088" id="Combined-Shape" transform="translate(16.434854, 16.434854) rotate(-90.000000) translate(-16.434854, -16.434854) "></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">School website is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh42" id="uiscs2">
                                                <input id="yourname" name="yourname" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={adminNameSignup} onBlur={(e) => onBlur2(e)} onChange={e => { setAdminNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="yourname">Your Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Your name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh44" id="uiscs4">
                                                <input id="designation" name="designation" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={adminDesignationSignup} onBlur={(e) => onBlur4(e)} onChange={e => { setAdminDesignationSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="designation">Designation</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Designation is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh45" id="uiscs5">
                                                <input id="enctyy" name="enctyy" autoComplete="off" type="text" className="mbl-inp" maxLength="30" required="" value={adminEnterCitySignup} onBlur={(e) => onBlur5(e)} onChange={e => { setAdminEnterCitySignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="enctyy">Enter City</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g fill="none" fillRule="evenodd" stroke="#9CA2B4" strokeWidth="2" className="stroke">
                                                        <path d="M4 4h12v17H4zM16 10h7v11h-7zM10 18v3"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">City is required</span>
                                                </span>
                                            </div>
                                            <div className="row m-0">
                                                <div className="kckh47 col-sm-6 pl-0 mbw-pr-0" id="uiscs7">
                                                    <input id="enstat" name="enstat" autoComplete="off" type="text" className="mbl-inp" maxLength="30" required="" value={adminEnterStateSignup} onBlur={(e) => onBlur7(e)} onChange={e => { setAdminEnterStateSignup(e.target.value); handleChange(e)}} />
                                                    <span className="kckh4-spn" htmlFor="enstat">Enter State</span>
                                                    <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd" stroke="#9CA2B4" strokeWidth="2" className="stroke">
                                                            <path d="M4 4h12v17H4zM16 10h7v11h-7zM10 18v3"></path>
                                                        </g>
                                                    </svg>
                                                    <span className="kckh4-err-spn" style={{display: "none"}}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">State is required</span>
                                                    </span>
                                                </div>
                                                <div className="kckh48 kckhkcstm8 col-sm-6 p-0" id="uiscs8">
                                                    <div className="custom-selectt">
                                                        <select id="cntryname" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="gradename" value={adminSelectCountrySignup} onBlur={(e) => onBlur8(e)} onChange={e => { setAdminSelectCountrySignup(e.target.value); handleChange(e)}}>
                                                            <option value="0">Select Country</option>
                                                            <option value="India">India</option>
                                                        </select>
                                                        <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Country</span>
                                                    </div>
                                                    <span className="kckh4-err-spn" style={{display: "none"}}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">Country is required</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnfnladm" type="submit" className="kckh-btn verifybutton" disabled>
                                                <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                    <div className="ldio-ravfkgmzeb">
                                                        <div className="lodrr"></div>
                                                    </div>
                                                </div>
                                                <span id="nxt-btnn-txt">Finish</span>
                                            </button>
                                        </div>
                                        <br/><br/><br/><br/><br/><br/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bck-btn-mbw">
                <Link title="Back" to="/getstarted/details" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                    <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: "bottom"}} /> <span className="bck-btn"> BACK </span>
                </Link>
            </div>
            </div>
        </div>
        
    </div>
}

// export default Details;