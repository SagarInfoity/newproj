import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyTeacherStudentPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);


    const [surveyupcoming, setsurveyupcoming] = useState([]);
    const [studentTeacher, setstudentteachers] = useState([]);
    const [teacherdetails, setteachersdetails] = useState([]);
    const [surveysession, setsurveysession] = useState([]);
    const [surveyname, setsurveyname] = useState(""); 
    const [participantname, setparticipantname] = useState(""); 
    const [targetname, settargetname] = useState(""); 
    const [teachername, setteachername] = useState(""); 
    
    const [staffname, setstaffname] = useState(""); 
    const [staffemail, setstaffemail] = useState("");
    const [studentdetails, setStaffDetails] = useState([]);
    const [staffrol, setstaffrollnum] = useState("");
    const [staffsubject, setstudentsubjects] = useState("");
    const [staffgrade, setstudentGrade] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const dataFetchedRef = useRef(false);
    const dataFetchedRefteacher = useRef(false);
    const dataFetchedRefsession = useRef(false);
    const dataFetchedRefsessionfetch = useRef(false);
    var schoolcurrentid = 0;
   

    const sessionstudentid = sessionStorage.getItem('studentidsession');
    const sessionpulseid = sessionStorage.getItem('pulseidsession');
    const sessionisexpireorall = sessionStorage.getItem('isexpiredorall');

    if(sessionstudentid == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {      

        fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentTeacherSurveydetail/' + sessionstudentid + "-" + sessionpulseid, {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setstudentteachers(data)
            setsurveyname(data[0].Pulsename)
            setparticipantname(data[0].participant)
            settargetname(data[0].target);
            //alert('success');
            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);

        })
        .catch(error =>{
            console.log(error);
        });


         })
                    
          



    const mysurvyy = (e) => {
        $('#mysrvy').addClass('active');
        $('#pndingsuvry').removeClass('active');
        $('#mmysrvv').show();
        $('#pnndnggsrvv').hide();
      }

      const pndngsrvyy = (e) => {
        $('#mysrvy').removeClass('active');
        $('#pndingsuvry').addClass('active');
        $('#mmysrvv').hide();
        $('#pnndnggsrvv').show();
      }

   

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const slctdrpdwnoptions = [
        { label: 'All Classes', value: 'All Classes'},
        { label: 'Class 6th - A', value: 'Class 6th - A'},
      ];

      
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {

          setShow(true);
      }
      
      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => {
          setShow2(true);
      }

      let completedcount = 0;
      for (let i = 0; i < studentTeacher.length; i++) {
        if (studentTeacher[i].Status === 'Completed') completedcount++;
      }

      const fetchstaffdetails = (staffid) => {
       // alert(staffid + "-" + sessionstudentid);
        setIsLoading(true);
           
        fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStudentStaffClassroom/' + staffid + "-" + sessionstudentid, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {    
            
            if(data.length==0)
            {
                setstaffname("Name")
                setstaffemail("Email")
                setstaffrollnum("RollNo")
                setstudentsubjects("Subject Name")
                setstudentGrade("Grade")
                setStaffDetails([data])
                setIsLoading(false);
            }
            else{
                setstaffname(data[0].name)
                setstaffemail(data[0].Email)
                setstaffrollnum(data[0].rollNo)
                setstudentsubjects(data[0].Subjectname)
                setstudentGrade(data[0].gradeName)
                setStaffDetails(data)
                setIsLoading(false);
            }
            

          })
          .catch(error =>{
              console.log(error);
          });     
    }

    const fetchpulseidteacher = (pulseid,staffid) => {
        sessionStorage.setItem("pulseidsession",pulseid);
        sessionStorage.setItem("ifteacherorschool","teacher");
        sessionStorage.setItem("sessiontargetteacherid",staffid);
      }

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd pt-0">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12">
                        <div className="col-sm-12 mb-4 cstmtab-pane tab-pane">
                            <NavLink to="/stu/survey" className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>All Surveys</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active tbldtaa1 pt-0" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                <div className="col-sm-9">
                                    <div className="nwsrvdvdvd1">{surveyname}</div>
                                    <div className="nwsrvdvdvd2">{participantname} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetname}</div>
                                </div>
                                {/* <div className="col-sm-3 text-right">
                                    <input className="nwsrvdvdvi1" placeholder="Search Teacher..." type="text" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                    <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <table id="nwsrvytbblll" className="table brdr-none cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                        <tr className="bglytbluclr cstmsrtbthdbrdr">
                                                            <th className="pl-24px tblsccshdng">Teachers ({completedcount} / {studentTeacher.length})</th>
                                                            <th className="tblsccshdng">Period</th>
                                                            <th className="tblsccshdng">Response Progress</th>
                                                            <th className="tblsccshdng" />
                                                        </tr>
                                                    </thead>
                                                    <tbody className="ht-cstmtbdysvy cstmsrtbtbdybrdr cstmmxhtbdytbb2">
                                                        {studentTeacher.map((teacher) => {
                                                            if (sessionisexpireorall == "allSurveys")
                                                            {
                                                            if (teacher.Status=="Not Started")
                                                            {
                                                           return( 
                                                            <tr>
                                                                <td>
                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstaffdetails(teacher.staffId); handleShow(); }} title={teacher.StaffName}> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> {teacher.StaffName} </div>
                                                                </td>
                                                                <td className="cstmtblltbwddwd">
                                                                    <span className="tbltddv3">{teacher.Schedule}</span>
                                                                </td>
                                                                <td>
                                                                    <div className="srvytblprgbrsvdv">
                                                                        <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                            <div className="progress-bar primary" style={{width: `${teacher.CompletionPer}%`}}></div>
                                                                        </div>
                                                                        <div className="text-left tbltddv4"  >
                                                                            <span className="tblsvprgstxt crsr-auto">{teacher.Status}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">
                                                                    <Link to='/stu/surveyrun'>
                                                                        <button className="modalRedBtn cstmmbtnn" onClick={()=> {fetchpulseidteacher(teacher.pulseid,teacher.staffId); }}>Start</button>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            )
                                                            }
                                                            else if(teacher.Status == "Completed")
                                                            {
                                                               return( <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstaffdetails(teacher.staffId); handleShow(); }} title={teacher.StaffName}> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> {teacher.StaffName} </div>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">{teacher.Schedule}</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `${teacher.CompletionPer}%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4"  >
                                                                        <span className="tblsvprgstxt crsr-auto">{teacher.Status}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to='/stu/surveyview'>
                                                                    <button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseidteacher(teacher.pulseid,teacher.staffId); }}>View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>)
                                                            }}
                                                            else {
                                                                if (teacher.Status=="Not Started")
                                                                {
                                                               return( 
                                                                <tr>
                                                                    <td>
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstaffdetails(teacher.staffId); handleShow(); }} title={teacher.StaffName}> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> {teacher.StaffName} </div>
                                                                    </td>
                                                                    <td className="cstmtblltbwddwd">
                                                                        <span className="tbltddv3">{teacher.Schedule}</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{width: `${teacher.CompletionPer}%`}}></div>
                                                                            </div>
                                                                            <div className="text-left tbltddv4"  >
                                                                                <span className="tblsvprgstxt crsr-auto">{teacher.Status}</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <Link to='/stu/surveyview'>
                                                                            <button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseidteacher(teacher.pulseid,teacher.staffId); }}>View</button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                                )
                                                                }
                                                                else if(teacher.Status == "Completed")
                                                                {
                                                                   return( <tr>
                                                                <td>
                                                                    <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstaffdetails(teacher.staffId); handleShow(); }} title={teacher.StaffName}> <img src="../Images/user_green.png" className="nwsrvdvdvdimg" /> {teacher.StaffName} </div>
                                                                </td>
                                                                <td className="cstmtblltbwddwd">
                                                                    <span className="tbltddv3">{teacher.Schedule}</span>
                                                                </td>
                                                                <td>
                                                                    <div className="srvytblprgbrsvdv">
                                                                        <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                            <div className="progress-bar primary" style={{width: `${teacher.CompletionPer}%`}}></div>
                                                                        </div>
                                                                        <div className="text-left tbltddv4"  >
                                                                            <span className="tblsvprgstxt crsr-auto">{teacher.Status}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">
                                                                    <Link to='/stu/surveyview'>
                                                                        <button className="modalGrayBtn cstmmbtnn" onClick={()=> {fetchpulseidteacher(teacher.pulseid,teacher.staffId); }}>View</button>
                                                                    </Link>
                                                                </td>
                                                            </tr>)
                                                                }}
                                                        })}
                                                        

                                                        
                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <br />
                    </div>
                </div>
            </div>

        </div>



        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 srvycstmhtmdlbd">
                
                {isLoading ? (

                <div className="text-center">
                    <img src="../Images/loader.gif" width="150" alt="Loader" />
                </div>

                ) : studentdetails.length === 0 ? (

                <div className="text-center">
                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                    <div className="nodtadv1txt">No Data Found</div>
                </div>

                ) : (
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2">{staffname}</p>
                            <div className="infomdvmdl3 col-sm-12 p-0 row m-0">
                                <div className="col-sm-4 pl-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Teacher
                                </div>
                                <div className="infomdvmdl2dvdr col-sm-1 m-0 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title={staffemail}>
                                    <i className="fa fa-envelope mr-7px"></i>
                                {staffemail}
                                </div>
                            </div>
                        </div>
                    </div>
                    {studentdetails.map((student) => (
                    <div>
                        <div className="infomdvmdl3 col-sm-12 mt-10px">
                            <h3 className="infomdvmdl3-h3">{student.gradename}</h3>
                            <div readOnly className="infomdvmdl3-txtara">{student.Subject} </div>
                        </div>
                    
                    </div>
                    ))}
                </div>
                )}
               
            </Modal.Body>
        </Modal>



        {/* <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teacher</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Not Started</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Completed</span>
                        <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal> */}


    </div>
}

// export default Details;