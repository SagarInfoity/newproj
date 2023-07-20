import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyStudentToSchoolTeacherPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);


    const [surveyupcoming, setsurveyupcoming] = useState([]);
    const [surveycurrent, setsurveycurrent] = useState([]);
    const [surveysession, setsurveysession] = useState([]);
    const [session, setsessionval] = useState(""); 
    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRef = useRef(false);
    const dataFetchedRefCurrent = useRef(false);
    const dataFetchedRefsession = useRef(false);
    const dataFetchedRefsessionfetch = useRef(false);
    const dataFetchedRefteacher = useRef(false);
    const dataFetchedRefclasstch = useRef(false);
    var schoolcurrentid = 0;
    const [surveyname, setsurveyname] = useState(""); 
    const [participantname, setparticipantname] = useState(""); 
    const [targetname, settargetname] = useState(""); 
  
    var staffidsession = sessionStorage.getItem("staffidsession");
    const sessionstudentid = sessionStorage.getItem('studentidsession');

    const [surveyclasses, setsurveyclasses] = useState([]);
    const [surveydetails, setsurveydetails] = useState([]);
    const [surveydetailsfilter, setsurveydetailsfilter] = useState([]);
    const [studentTeacher, setstudentteachers] = useState([]);
    const [schooldetails, setschooldetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
   
    const [uniqueclassesfilter, setuniqueclassesfilter] = useState([]);
    const [uniqueclasses, setuniqueclasses] = useState([]);

    
    const sessionpulseid = sessionStorage.getItem('pulseidsession');
    const sessionscholid = sessionStorage.getItem('schoolidsession');
    var staffidsession = sessionStorage.getItem("staffidsession");

    const [studentname, setstudentname] = useState(""); 
    const [studentemail, setstudentemail] = useState("");
    const [studentdetails, setstudentdtails] = useState([]);
    const [studentrollno, setstudentrollno] = useState("");
    const [studentsubject, setstudentsubjects] = useState("");
    const [studentgrade, setstudentGrade] = useState("");
    const [classListtch, setclasseslisttch] = useState([]);

    const [staffname, setstaffname] = useState(""); 
    const [staffemail, setstaffemail] = useState("");
    const [staffdetails, setStaffDetails] = useState([]);
    
    if(staffidsession == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {
            fetch('https://entity-feediiapi.azurewebsites.net/api/staff/getParticipantStudentTeacher/'+ sessionpulseid + "-" + staffidsession , {
            method: 'GET'
              }) .then((response) => response.json())
              .then((data) => {       
     
                setTimeout(function () {
                    hideLoader();
                    $('#login').show();
                }, 1000);
            if (dataFetchedRefsurvey.current) return;
            dataFetchedRefsurvey.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveydetails(data);
            setsurveydetailsfilter(data);
            setsurveyname(data[0].PulseName);
            setparticipantname(data[0].Participant);
            settargetname(data[0].Target);

        })
        .catch(error =>{
            console.log(error);
        });

        fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getStaffClassroom/' + staffidsession, {
            method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
            if (dataFetchedRefclasstch.current) return;
            dataFetchedRefclasstch.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setclasseslisttch(data)
            })
            .catch(error =>{
                console.log(error);
            });
        })
                    
          
         var uniqueTags = [];
      
          surveydetails.map(clist => {
            if (uniqueclasses.indexOf(clist.GradeName) === -1) {
                uniqueclasses.push(clist.GradeName)
                                   
                 }
                 });
    
                 surveydetails.map(clist => {
                    if (uniqueclassesfilter.indexOf(clist.GradeName) === -1) {
                        uniqueclassesfilter.push(clist.GradeName)
                                           
                         }
                    });
         
    
          const handleChange1 = e => {
              setselectedclass(e.value);
              if(e.value == 0)
              {
                  surveydetails.map(clist => {
                    if (uniqueclassesfilter.indexOf(clist.GradeName) === -1) {
                          uniqueclassesfilter.push(clist.GradeName)                          
                      }
                    });
                    setsurveydetailsfilter(surveydetails)
              }
              else {
                  var output =  surveydetails.filter(details => details.GradeName == e.label);
                  var outputclass = uniqueclasses.filter(det=>det == e.label);
                 
                  setuniqueclassesfilter(outputclass);
                  setsurveydetailsfilter(output)
              }
            }
    
            const fetchstaffdetails = (studentids) => {
               
                setIsLoading2(true);
                fetch('https://entity-feediiapi.azurewebsites.net/api/staff/getParticipantTeacherdetail/' + sessionpulseid + "-" + staffidsession + "-" + studentids , {   //studentid-pulseid
                    method: 'GET'
                }) .then((response) => response.json())
                .then((data) => {
                   
                    
                    var objj = JSON.stringify(data);
                    var parse = JSON.parse(objj);
                
                    setstudentteachers(data);
                    setIsLoading2(false);
                 
        
                })
                .catch(error =>{
                    console.log(error);
                });   
            }
    
    
            


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

      const batcheswithid = [];
      for (const [i, clas] of classListtch.entries()) {
        batcheswithid.push({ value: clas.staffbatchID, label:  clas.gradename})
      }
 
      const [selectedclass, setselectedclass] = useState();


      const fetchstudentdetails = (studentida) => {
          
        setIsLoading(true);
        fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getstudentSubject/' + studentida, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {    
            
            if(data.length==0)
            {
                setstudentname("Name")
                setstudentemail("Email")
                setstudentrollno("RollNo")
                setstudentsubjects("Subject Name")
                setstudentGrade("Grade")
                setStaffDetails([data])
                setIsLoading(false);
            }
            else{
                setstudentname(data[0].name)
                setstudentemail(data[0].email)
                setstudentrollno(data[0].rollNo)
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
      
      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => {
          setShow3(true);
      }

      

    if(uniqueclassesfilter.length == 0) {
        $('#errdv1').show();
        $('.tbldtaa1').hide();
    }
    else {
        $('.tbldtaa1').show();
        $('#errdv1').hide();
    }

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12">
                        <div className="col-sm-12 mb-4 cstmtab-pane tab-pane">
                            <NavLink to="/tch/survey" className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>All Surveys</span>
                            </NavLink>
                        </div>
                    </div>
                    <div id="errdv1" className="col-sm-12">
                        <div className="nodtadv1 nobrdrnobg">
                            <div>
                                <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                <div className="nodtadv1txt">No Data Found</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active tbldtaa1 pt-0" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div className="col-sm-12 row ml-0 mr-0 mb-4 p-0">
                        <div className="col-sm-3">
                            <Select options={batcheswithid} defaultValue={{ label: "All Classes", value: 0 }} value={batcheswithid.find(obj => obj.value === selectedclass)} onChange={handleChange1}/>
                        </div>
                         {/*{selectedclass} && */<div style={{display: 'none'}}>
                         <div id="slctcdclasval">{selectedclass}</div>
                        </div>}
                        <div className="col-sm-5"></div>
                        <div className="col-sm-4 text-right">
                            <Link to='/tch/surveytemplateone'>
                                <button className="modalGrayBtn cstmmbtnn mr-3" style={{minWidth: '120px'}}> Preview Survey </button>
                            </Link>
                            <Link>
                                <button className="modalRedBtn cstmmbtnn mr-1" style={{minWidth: '90px'}} onClick={()=>{handleShow3(); }}> View Result </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                <div className="col-sm-9">
                                    <div className="nwsrvdvdvd1">Survey Name - {surveyname}</div>
                                    <div className="nwsrvdvdvd2">{participantname} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetname}</div>
                                </div>
                                {/* <div className="col-sm-3 text-right">
                                    <input className="nwsrvdvdvi1" placeholder="Search Student..." type="text" />
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
                                        {
                                                surveydetailsfilter.length === 0 ? (
                                                    <div className="text-center cstmnodtatbldvv col-sm-12 pl-0 pr-0">
                                                        <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                        <div className="nodtadv1txt">No Data Found</div>
                                                    </div>
                                                ) : (    
                                            uniqueclassesfilter.map((classes) => {
                                            
                                            const rows = surveydetailsfilter.filter(survy => survy.GradeName === classes).map(survy => (
                                                <tr>
                                                    <td>
                                                            <div className="tbltddv1 text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{fetchstudentdetails(survy.participantId); handleShow(); }}  title={survy.StaffName}> 
                                                                <img src="../Images/user_green.png" className="nwsrvdvdvdimg mr-3" />  
                                                                <span className="blu-clr mr-2" title="Roll Number">{survy.rollNo} &nbsp;  - </span>
                                                                <span className="blu-clr">{survy.StaffName} </span>                                                                
                                                            </div>
                                                        </td>
                                                        <td className="cstmtblltbwddwd">
                                                            <span className="tbltddv3">{survy.Schedule}</span>
                                                        </td>
                                                        <td>
                                                            <div className="srvytblprgbrsvdv">
                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                    <div className="progress-bar primary" style={{width: `${survy.CompletionPer}%`}}></div>
                                                                </div>
                                                                <div className="text-left tbltddv4" onClick={()=>{fetchstaffdetails(survy.participantId);  handleShow2(); }} >
                                                                    <span className="tblsvprgstxt">{survy.Status}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <button className="modalGrayBtn cstmmbtnn" onClick={()=>{fetchstudentdetails(survy.participantId); handleShow(); }} >View</button>
                                                        </td>
                                                </tr>
                                                ));



                                                if (rows.length > 0) {
                                                    return (
                                                    <table id="nwsrvytbblll" className="table brdr-none cstmtable2 v-middle p-0 m-0 box">
                                                        <thead>
                                                        <tr className="bglytbluclr cstmsrtbthdbrdr">
                                                            <th className="pl-24px tblsccshdng">{classes} ({surveydetailsfilter.find(s=>s.GradeName==classes).overallcompletedcount} / {surveydetails.find(s=>s.GradeName==classes).overallcount} )</th>
                                                            <th className="tblsccshdng">Period</th>
                                                            <th className="tblsccshdng">Response Progress</th>
                                                            <th className="tblsccshdng" />
                                                        </tr>
                                                        </thead>
                                                        <tbody className="ht-cstmtbdysvy cstmsrtbtbdybrdr cstmmxhtbdytbb2">{rows}</tbody>
                                                    </table>
                                                    );
                                                }

                                                return null;
                                            }
                                            ))}
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
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                 
            {isLoading ? (

                <div className="text-center">
                    <img src="../Images/loader.gif" width="150" alt="Loader" />
                </div>

                ) : staffdetails.length === 0 ? (

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
                            <p className="infomdvmdl2">{studentname}</p>
                            <div className="infomdvmdl3 col-sm-12 p-0 row m-0">
                                <div className="col-sm-4 pl-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Student
                                </div>
                                <div className="infomdvmdl2dvdr col-sm-1 m-0 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title={studentemail}>
                                    <i className="fa fa-envelope mr-7px"></i>
                                {studentemail}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infomdvmdl3 col-sm-12 mt-10px">
                        <h3 className="infomdvmdl3-h3">{studentgrade}</h3>
                        <div readOnly className="infomdvmdl3-txtara"> {studentsubject}</div>
                    </div>
                </div>
                )}

            </Modal.Body>
        </Modal>



        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teacher</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
            {isLoading2 ? (
                    <div className="text-center">
                        <img src="../Images/loader.gif" width='60' alt="Loader" style={{marginTop: '-10px'}} />
                    </div>
                    ) : studentTeacher.length === 0 ? (
                        <div className="text-center">
                        <img
                            className="nodtadv1img"
                            src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg"
                            width="150"
                            alt="Error Image"
                        />
                        <div className="nodtadv1txt">No Data Found</div>
                        </div>
                    ) : (studentTeacher.map((teacher) => {
                    if(teacher.Status == "Not Started") {
                        return(
                            <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                <div className="col-sm-6 pl-0">
                                    <div className="row m-0">
                                        <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                        <span className="text-truncate mdldvdv12d">{teacher.StaffName}</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                    <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                                </div>
                            </div>
                                    )
                        }
                        else if(teacher.Status == "Inprogress") {
                            return(
                                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                <div className="col-sm-6 pl-0">
                                    <div className="row m-0">
                                        <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                        <span className="text-truncate mdldvdv12d cstmwdmdl" title={teacher.targetName}>{teacher.StaffName}</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                    <img className="ml-4" src="../Images/greycircle-1.png" width="22" alt="Image" />
                                </div>
                            </div>
                        )
                    }
                    else if(teacher.Status == "Completed") {
                        return(
                            <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                <div className="col-sm-6 pl-0">
                                    <div className="row m-0">
                                        <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                        <span className="text-truncate mdldvdv12d cstmwdmdl" title={teacher.targetName}>{teacher.StaffName}</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <span className="text-truncate mdldvdv12d">{teacher.Status}</span>
                                    <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                </div>
                            </div>
                        )
                    }
                    else {

                    }
                }))
            }
            </Modal.Body>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="cstmmdlptx">Unfortunately, results cannot be generated at this time as a sufficient number of surveys have not been completed by students.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;