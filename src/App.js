import './Content/Content/login.css';
import './App.css';
import './Content/Content/mbl-view.css';
import { Signin } from './u/Signin';
import { SigninOld } from './u/Signin-old';
import { Password } from './u/Password';
import { ResetPassword } from './u/Resetpassword';
import { ResetpswordOld } from './u/Resetpassword-Old';
import { VerifyOTP } from './u/Verifyotp';
import { Login } from './u/Login';
import { Signup } from './u/Signup';
import { Details } from './getstarted/Details';
import { AccountVerifi } from './getstarted/Accountverify';
import { CreatePassword } from './getstarted/Createpassword';
import { CreatePasswordpg } from './getstarted/Createpasswordpg';
import { CreateProfile } from './getstarted/Createprofile';
import { Userprofile } from './u/Profile';
import { Staffpage } from './u/Staff';
import { SurveyPage } from './sch/Survey';
import { SurveyTeacherPage } from './tch/Survey';
import { SurveyByTeacherToSchoolPage } from './tch/Surveybyme';
import { SurveyStudentToSchoolTeacherPage } from './tch/surveytchrstsc';
import { ClassroomPage } from './sch/Classroom';
import { UserClass } from './sch/Class';
import { ClassReport } from './sch/Classreports';
import { ClassSurvey } from './sch/classsurveys';
import { ClassroomtchPagee } from './tch/Classroom';
import { UsertchClass } from './tch/Class';
import { ClasstchReport } from './tch/Classreports';
import { ClasstchSurvey } from './tch/classsurveys';
import { SurveyTemplateOneTchrPage } from './tch/SurveyTemplateone';
import { ClassroomtchsettingsPagee } from './tch/settings';
import { SurveyRunTeacherPage } from './tch/surveyRun';
import { SurveyViewTeacherPage } from './tch/surveyView';
import { UserstuClass } from './stu/Class';
import { ClassstuSurvey } from './stu/classsurveys';
import { SurveyStudentPage } from './stu/Survey';
import { SurveyRunStudentPage } from './stu/SurveyRun';
import { SurveyViewStudentPage } from './stu/SurveyView';
import { SurveyTeacherStudentPage } from './stu/surveytch';
import { SurveyStudentToSchoolPage } from './sch/surveystsc';
import { SurveyStudentToTeacherPage } from './sch/surveysttch';
import { SurveyTeacherToSchoolPage } from './sch/surveytchsc';
import { ClassroomschsettingsPagee } from './sch/settings';
import { SurveyTemplateOnePage } from './sch/SurveyTemplateone';
import { SurveyTemplateOverviewPage } from './templates/overview';
import { SurveyTemplate1Page } from './templates/SurveyTemplate1';
import { ResultOverallPage } from './result/overall';
import { ResultDetailsStutoTchPage } from './result/Detailsstutotch';
import { ResultDetailsStutoSchPage } from './result/Detailsstutosch';
import { ResultDetailsTchrtoSchPage } from './result/Detailstchrtosch';
import { ResultDetailsTchrRsltPage } from './result/Detailstchrresult';
import { Home } from './dashboard/home';
import { DashboardIndex } from './dashboard/index';
import { StudentDetails } from './student/studentdetails';
import { StudentReviewDetails } from './student/studentreviewdetails';
import { StudentReviewAcademicDetails } from './student/studentreviewacademicdetails';
import { StudentReviewCourseDetails } from './student/studentreviewcoursedetails';
import { StudentSyncDetails } from './student/studentsyncdetails';
import { StudentSyncAcademicDetails } from './student/studentsyncacademicdetails';
import { StudentSyncCourseDetails } from './student/studentsynccoursedetails';
import { StudentCourseDetails } from './student/coursedetails';
import { AddAdminBasicInfo } from './add-admin/basic-info';
import { AddAdminRoles } from './add-admin/roles';
import { AddAdminPermissions } from './add-admin/permissions';
import { HiringOverview } from './hiring/overview';
import { HiringJobProfile } from './hiring/jobprofile';
import { HiringCandidates } from './hiring/candidates';
import { AddInternshipDetails } from './jobprofile/internship-details';
import { AddInternshipStipendAndPerks } from './jobprofile/stipend-perks';
import { AddJobDetails } from './jobprofile/job-details';
import { AddJobSalaryAndPerks } from './jobprofile/salary-perks';
import { ViewJob_Details } from './jobprofile/viewjob-details';
import { ViewInternship_Details } from './jobprofile/viewinternship-details';
import { CandidateBasicInfo } from './candidates/basic-info';
import { StudentAcademicDetails } from './student/academicdetails';
import { Error404Page } from './error/Error404';
import { Error500Page } from './error/Error500';
import { Error100Page } from './error/Error100';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export const App = () => {

    return (
        <BrowserRouter>
         
            {/* <Headersignin /> */}

            <Routes>
                <Route path='/' element={<Signin />} />
                <Route path='/u/signin' element={<Signin />} />
                <Route path='/u/signin-old' element={<SigninOld />} />
                <Route path='/u/password' element={<Password />} />
                <Route path='/u/resetpassword' element={<ResetPassword />} />
                <Route path='/u/resetpassword-old' element={<ResetpswordOld />} />
                <Route path='/u/verifyotp' element={<VerifyOTP />} />
                <Route path='/u/signup' element={<Signup />} />
                <Route path='/getstarted/details' element={<Details />} />
                <Route path='/getstarted/accountverify' element={<AccountVerifi />} />
                <Route path='/getstarted/createpassword' element={<CreatePassword />} />
                <Route path='/getstarted/createpasswordpg' element={<CreatePasswordpg />} />
                <Route path='/getstarted/createprofile' element={<CreateProfile />} />
                <Route path='/u/profile' element={<Userprofile />} />
                <Route path='/u/staff' element={<Staffpage />} />
                <Route path='/sch/survey' element={<SurveyPage />} />
                <Route path='/tch/survey' element={<SurveyTeacherPage />} />
                <Route path='/tch/surveybyme' element={<SurveyByTeacherToSchoolPage />} />
                <Route path='/tch/surveytchrstsc' element={<SurveyStudentToSchoolTeacherPage />} />
                <Route path='/tch/surveyrun' element={<SurveyRunTeacherPage />} />
                <Route path='/tch/surveyview' element={<SurveyViewTeacherPage />} />
                <Route path='/sch/classroom' element={<ClassroomPage />} />
                <Route path='/sch/class' element={<UserClass />} />
                <Route path='/sch/classreports' element={<ClassReport />} />
                <Route path='/sch/classsurveys' element={<ClassSurvey />} />
                <Route path='/tch/classroom' element={<ClassroomtchPagee />} />
                <Route path='/tch/class' element={<UsertchClass />} />
                <Route path='/tch/classreports' element={<ClasstchReport />} />
                <Route path='/tch/classsurveys' element={<ClasstchSurvey />} />
                <Route path='/tch/settings' element={<ClassroomtchsettingsPagee />} />
                <Route path='/tch/SurveyTemplateone' element={<SurveyTemplateOneTchrPage />} />
                <Route path='/stu/class' element={<UserstuClass />} />
                <Route path='/stu/classsurveys' element={<ClassstuSurvey />} />
                <Route path='/stu/survey' element={<SurveyStudentPage />} />
                <Route path='/stu/surveyrun' element={<SurveyRunStudentPage />} />
                <Route path='/stu/surveyview' element={<SurveyViewStudentPage />} />
                <Route path='/stu/surveytch' element={<SurveyTeacherStudentPage />} />
                <Route path='/sch/surveystsc' element={<SurveyStudentToSchoolPage />} />
                <Route path='/sch/surveysttch' element={<SurveyStudentToTeacherPage />} />
                <Route path='/sch/surveytchsc' element={<SurveyTeacherToSchoolPage />} />
                <Route path='/sch/settings' element={<ClassroomschsettingsPagee />} />
                <Route path='/sch/surveytemplateone' element={<SurveyTemplateOnePage />} />
                <Route path='/templates/overview' element={<SurveyTemplateOverviewPage />} />
                <Route path='/templates/surveytemplate1' element={<SurveyTemplate1Page />} />
                <Route path='/result/overall' element={<ResultOverallPage />} />
                <Route path='/result/detailsstutotch' element={<ResultDetailsStutoTchPage />} />
                <Route path='/result/detailsstutosch' element={<ResultDetailsStutoSchPage />} />
                <Route path='/result/detailstchrtosch' element={<ResultDetailsTchrtoSchPage />} />
                <Route path='/result/detailstchrresult' element={<ResultDetailsTchrRsltPage />} />
                <Route path='/dashboard/home' element={<Home />} />
                <Route path='/dashboard/index' element={<DashboardIndex />} />
                <Route path='/student/studentdetails' element={<StudentDetails />} />
                <Route path='/student/studentreviewdetails' element={<StudentReviewDetails />} />
                <Route path='/student/studentreviewacademicdetails' element={<StudentReviewAcademicDetails />} />
                <Route path='/student/studentreviewcoursedetails' element={<StudentReviewCourseDetails />} />
                <Route path='/student/studentsyncdetails' element={<StudentSyncDetails />} />
                <Route path='/student/studentsyncacademicdetails' element={<StudentSyncAcademicDetails />} />
                <Route path='/student/studentsynccoursedetails' element={<StudentSyncCourseDetails />} />
                <Route path='/add-admin/basic-info' element={<AddAdminBasicInfo />} />
                <Route path='/add-admin/roles' element={<AddAdminRoles />} />
                <Route path='/add-admin/permissions' element={<AddAdminPermissions />} />
                <Route path='/hiring/overview' element={<HiringOverview />} />
                <Route path='/hiring/jobprofile' element={<HiringJobProfile />} />
                <Route path='/hiring/candidates' element={<HiringCandidates />} />
                <Route path='/jobprofile/internship-details' element={<AddInternshipDetails />} />
                <Route path='/jobprofile/stipend-perks' element={<AddInternshipStipendAndPerks />} />
                <Route path='/jobprofile/job-details' element={<AddJobDetails />} />
                <Route path='/jobprofile/salary-perks' element={<AddJobSalaryAndPerks />} />
                <Route path='/jobprofile/viewjob-details' element={<ViewJob_Details />} />
                <Route path='/jobprofile/viewinternship-details' element={<ViewInternship_Details />} />
                <Route path='/candidates/basic-info' element={<CandidateBasicInfo />} />
                <Route path='/student/academicdetails' element={<StudentAcademicDetails />} />
                <Route path='/student/coursedetails' element={<StudentCourseDetails />} />
                <Route path='*' element={<Error404Page />} />
                <Route path='/error/error500' element={<Error500Page />} />
                <Route path='/error/error100' element={<Error100Page />} />
            </Routes>

                

        </BrowserRouter>
    );
}



export default App;
