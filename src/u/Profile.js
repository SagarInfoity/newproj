import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/profilecss.css';
import { Headermain } from '../headermain';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { isNamespaceExport } from "typescript";
import useLoader from "../useLoader";
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const Userprofile = () => {
   
    const prsnalinfo = () => {
        $('#prnlinf-a').addClass('active');
        $('#acntinf-a').removeClass('active');
        $('#personalinfoddv1').show();
        $('#accountinfodvv1').hide();
    }

    const acntinfo = () => {
        $('#prnlinf-a').removeClass('active');
        $('#acntinf-a').addClass('active');
        $('#personalinfoddv1').hide();
        $('#accountinfodvv1').show();
    }

    const edtbscinfo = () => {
        $('#editbscinfoicn1').hide();
        $('#editbscinfoicn2').show();

        $('#profile').hide();
        $('#profile_open').show();
    }

    const edtbscinfocnclbtn = () => {
        $('#editbscinfoicn1').show();
        $('#editbscinfoicn2').hide();

        $('#profile').show();
        $('#profile_open').hide();
    }

    const edtbscinfosvbtn = () => {
        $('#editbscinfoicn1').show();
        $('#editbscinfoicn2').hide();
        
        $('#profile').show();
        $('#profile_open').hide();
    }

    const editcontactinfo = () => {
        $('#editcntctai1').hide();
        $('#editcntctai2').show();

        $('#contact').hide();
        $('#contact_open').show();
    }

    const editcontactinfocancelbtn = () => {
        $('#editcntctai1').show();
        $('#editcntctai2').hide();

        $('#contact').show();
        $('#contact_open').hide();
    }

    const editcontactinfosvbtn = () => {
        $('#editcntctai1').show();
        $('#editcntctai2').hide();

        $('#contact').show();
        $('#contact_open').hide();
    }

    

  const [image, setImage] = useState('https://res.cloudinary.com/infoi/image/upload/v1643706338/Profile%20Icon/Icon-150x150_o33qvq.png');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleImageChange = async (event) => {
    setLoading(true);

    const file = event.target.files[0];

    const publicIdMatch = image.match(/\/v\d+\/(.+)\.\w+$/);
    const publicId = publicIdMatch[1];
    console.log(`Public ID: ${publicId}`);

    const cloudName = 'duwznqayj';
    const apiKey = '631287544163282';
    const apiSecret = 'f5qAmV6Cfq6fEsOqfqufYi1agy4';



        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'xjvzqqih');
        fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload/`, {
            method: 'POST',
            body: formData,
        })
        
        .then((response) => response.json())
        .then((data) => setImage(data.secure_url))
        .catch((error) => console.error(error));
    
        setLoading(false);


    };

    const CountryList = [
        { value: 'India', label: 'India' },
        { value: 'UK', label: 'UK' },
        { value: 'US', label: 'US' }
    ];

    const [empDrpDwnValue, setEmpDrpDwnValue] = useState(null);

    const handleChange1 = e => {
        setEmpDrpDwnValue(e.value);
    }

    const editform1 = () => {
        $('#dtlsgnrlinfo-viwfld').addClass('hide');
        $('#dtlsgnrlinfo-viwfld2').removeClass('hide');
        $('#editbtnx1').addClass('hide');
    }

    const cancelbtnx1 = () => {
        $('#dtlsgnrlinfo-viwfld2').addClass('hide');
        $('#dtlsgnrlinfo-viwfld').removeClass('hide');
        $('#editbtnx1').removeClass('hide');
    }

    const savebtnx1 = () => {
        $('#dtlsgnrlinfo-viwfld2').addClass('hide');
        $('#dtlsgnrlinfo-viwfld').removeClass('hide');
        $('#editbtnx1').removeClass('hide');
    }

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-4">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div style={{position: 'relative'}}>
                        <div style={{inset: 0}}>
                        <div className="tblt-vw-prfl1-dv" style={{height: 154, width: 154, marginBottom: 8, marginLeft: 'auto'}}>
                            <div style={{boxSizing: 'border-box', backgroundColor: '#fff', opacity: 1, boxShadow: 'rgb(214,222,233) 0px 0px 0px 2px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: 1, width: 164, minWidth: 164, minHeight: 164, height: 164}}>
                                <img src="https://res.cloudinary.com/infoi/image/upload/v1677558398/Header%20Logo/Infoity-Favicon_eqjenk.png" style={{height: 'inherit', width: 'inherit'}} />
                                {/* <img src="https://res.cloudinary.com/infoi/image/upload/v1643706338/Profile%20Icon/Icon-150x150_o33qvq.png" /> */}
                                {/* <div className="cngimghvrdvvdvd">
                                    {loading && <div className="loader"></div>}
                                    <img src={image} className="imggnprlfl" alt="Image" />
                                    <div className="imgdvpfdvv">
                                        <p className="imgdvpflpp">Upload Image</p>
                                        <input type="file" accept="image/*" className="imgdvpfll" ref={inputRef} onChange={handleImageChange} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 32, paddingLeft: 12}}>
                        <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                        <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                            <li style={{padding: '10px 0 5px'}}>
                                <a className="prfl-ulla active" id="prnlinf-a" onClick={prsnalinfo}>
                                    <span>Company Info</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-8 row  ml-1-5rm cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mt-2 mb-2">
                        <div style={{minHeight: 128, paddingBottom: 16, display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                            <div>
                                <h2 style={{fontSize: 31, lineHeight: '42px', color: '#333e63', fontFamily: 'Circular-Medium', margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                    Username
                                </h2>
                                <div style={{fontSize: 16, color: 'rgb(68, 68, 68)', textTransform: 'none', letterSpacing: 'normal', paddingTop: 4}}>
                                    <ul style={{marginTop: 8, marginBottom: 8, paddingLeft: 0, listStyleType: 'none'}}>
                                        <li style={{color: '#333e63', lineHeight: '24px',}}>
                                            Admin at Feedii (<span className="font-bold" title="School Code">School Code</span>)
                                        </li>
                                        <li style={{color: '#333e63', lineHeight: '24px',}}>
                                            Registered on Dec 24, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block"}}>
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
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={editform1} id="editbtnx1">
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen fs-10px mr-1"></i> Edit
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Company Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Infoity Technology Pvt. Ltd.</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Company Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Gurugram Haryana</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Country</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">India</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Admin Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Sagar Dahiya</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">HR Contact</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">9XXXXXXXXX</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="box-body hide" id="dtlsgnrlinfo-viwfld2">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 pl-3">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Company Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6 dsble" id="cmpnyprflinpfld01" placeholder="Company Name" autocomplete="off" maxlength="100" defaultValue="Infoity Technology Pvt. Ltd." readOnly />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld01-msg">Please enter company name</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Company Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld02" placeholder="Company Address" autocomplete="off" maxlength="100" defaultValue="Gurugram Haryana" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld02-msg">Please enter company address</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Country</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <Select options={CountryList} defaultValue={{value: 'India', label: 'India'}} className="crsr-pntr" value={CountryList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select country</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Admin Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld02" placeholder="Admin Name" autocomplete="off" maxlength="100" defaultValue="Sagar Dahiya" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld02-msg">Please enter admin name</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">HR Contact</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <div className="col-sm-12 pl-0 pr-0 mb-2">
                                                        <input type="text" className="tekila6" id="cmpnyprflinpfld02" placeholder="HR Contact" autocomplete="off" maxlength="10" defaultValue="9XXXXXXXXX" />
                                                        <div className="flderrmsgdv" id="cmpnyprflinpfld02-msg">Please enter HR contact number</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{borderTop: '1px solid #d8dce2'}}>
                                            <div className="col-sm-12 text-right mt-4 mb-4 pr-4">
                                                <Button variant="primary modalGrayBtn mr-3" onClick={cancelbtnx1}>
                                                    Cancel
                                                </Button>
                                                <Button variant="primary modalRedBtn mr-2" onClick={savebtnx1}>
                                                    Update
                                                </Button>
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
    </div>
}

// export default Details;

