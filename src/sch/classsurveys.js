import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Content/Content/dashboard.css';
import '../Content/Content/tblcss.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";


export const ClassSurvey = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        hideLoader();
        $('#login').show();
      }, []);
    
    

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        {loader}

        <div className="be-wrapper be-login innerwrapper mt-4p" id="login" style={{display: "none"}}>
            <div className="cs-pdng text-center">
                <div className="col-sm-12">
                    <div className="mt-10p">
                        <svg viewBox="0 0 238 134" className="mblvwsvgg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{height: '8.75rem'}}>
                            <path d="M116.595 13.9408L101.654 5.62358C101.655 5.67073 102.784 8.16035 102.784 8.16035L100.904 8.61261L101.563 10.1003L98.3151 10.9611L113.233 19.306C115.108 18.0993 116.398 16.0763 116.595 13.9408Z" fill="#1E8E3E"></path><path d="M98.8805 5.79916C99.2962 6.99028 98.5161 8.26467 97.2788 8.45413L95.2839 5.9474C95.0808 5.68426 95.2792 5.33334 95.6163 5.37946L98.8805 5.79916Z" fill="#5F6368"></path><path d="M101.789 5.96962L95.4866 5.6473L98.927 11.0948" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M107 103.3L183 103.957V88.5222C183 57.8497 160.068 32.957 131.783 32.957L107.859 42.0865L107 103.3Z" fill="#DADCE0"></path><path d="M97 102.957H120V93.9578H106.187C101.098 93.893 97 97.9718 97 102.957Z" fill="#DADCE0"></path><path d="M177.995 92.0402C178.455 91.1595 179.476 91.0085 180.368 91.3213C190.399 94.6613 200.909 91.0111 210.436 88.4643C215.171 87.1736 220.485 85.6947 225.187 88.2578C229.494 90.58 231.915 94.8489 232.363 99.3071C232.802 103.527 232.032 108.713 227.394 110.605C223.46 112.23 219.259 110.748 215.16 110.49C213.065 110.373 211.205 110.631 209.586 111.888C208.091 113.067 206.879 114.418 205.015 115.062C201.129 116.483 197.664 113.669 194.691 111.697C193.958 111.249 193.226 110.802 192.425 110.467C191.792 110.235 191.125 110.06 190.342 110.202C189.322 110.353 188.432 111.049 187.589 111.541C186.405 112.212 185.052 112.78 183.624 112.838C182.14 112.861 180.728 112.385 179.787 111.267C178.979 110.309 178.526 109.025 178.207 107.9C177.404 105.162 177.077 102.405 177.226 99.6292C177.217 99.391 177.355 99.1654 177.458 98.9961C177.541 97.3418 178.064 95.7248 178.983 94.3488C178.926 94.3143 178.836 94.3363 178.779 94.3019C177.921 93.9327 177.637 92.7517 177.995 92.0402Z" fill="#DADCE0"></path><path d="M100.597 31.2005L100.092 27.7059L105.359 26.6501C105.821 24.7988 106.54 21.6134 107.398 19.9604C107.992 18.8364 108.653 17.7785 109.445 16.8529C108.124 12.7535 107.332 9.88448 107.662 5.52069C107.794 4.33056 108.124 3.0082 109.445 2.67761C110.633 2.34702 111.781 2.75907 112.64 3.42025C114.422 4.87485 115.453 5.6789 116.972 7.39797C118.227 8.85257 119.349 10.3733 120.405 12.0262C123.245 11.6295 126.084 11.4312 128.989 11.3651C130.046 11.3651 131.036 11.3651 132.092 11.5634C132.687 7.92692 133.479 5.75918 135.46 2.58552C136.12 1.52763 136.978 0.535855 138.365 0.866446C139.554 1.13092 140.478 2.67761 140.478 2.67761C141.419 3.80397 142.261 6.20785 142.855 8.38974C143.515 10.9022 143.845 13.547 143.977 16.1917C143.977 16.39 143.977 16.5223 143.911 16.6545C147.939 19.4315 150.976 22.6051 152.693 23.9275C153.419 24.5226 161.475 30.0765 149.656 30.6054C154.081 31.2005 168.633 41.9752 147.174 38.3387C147.439 39.3305 159.098 48.9862 138.035 48.3912C136.714 48.3251 102.842 54.4079 94.7206 34.4403L98.4842 33.9113C99.8048 33.713 100.729 32.5228 100.597 31.2005Z" fill="#DADCE0"></path><path d="M100.093 27.7061L100.598 31.1345C100.796 32.4569 99.8054 33.7131 98.4849 33.9115L94.8262 34.7447C93.9678 32.6289 93.4239 31.607 93.2258 28.8962L100.093 27.7061Z" fill="#5F6368"></path><path d="M117.954 72.957C118.05 80.1039 118.002 87.1851 117.761 94.332C110.28 95.279 109.241 100.203 109 102.957" stroke="#5F6368" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M118.04 99.4629C116.18 99.8045 114.688 102.179 114.505 103.087" stroke="#5F6368" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M104 98.957C102.084 99.619 101 102.087 101 102.957" stroke="#5F6368" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M121.145 27.8622C120.581 27.9058 120.088 27.483 120.045 26.9178C120.001 26.3526 120.423 25.859 120.987 25.8154C121.551 25.7717 122.044 26.1945 122.088 26.7597C122.132 27.3249 121.71 27.8185 121.145 27.8622Z" fill="#5F6368"></path><path d="M109.598 26.6512C109.033 26.6949 108.541 26.272 108.497 25.7068C108.453 25.1416 108.875 24.6481 109.439 24.6044C110.004 24.5608 110.496 24.9836 110.54 25.5488C110.584 26.114 110.162 26.6076 109.598 26.6512Z" fill="#5F6368"></path><path d="M141.516 38.3389C143.043 39.0428 146.545 40.2635 148.328 39.5154" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M135.566 39.291C136.151 40.1914 138.081 42.1456 141.131 42.7594" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M41 102H70V88H41C45.1938 92.1674 45.1938 97.8326 41 102Z" fill="#5F6368"></path><path d="M13.2949 88H39C34.3263 83.9628 34.2329 78.2326 38.8131 74.1953L39 74H13.2949C8.90169 78.1674 8.90169 83.7674 13.2949 88Z" fill="#DADCE0"></path><path d="M32 81H79" stroke="#DADCE0" strokeWidth="2" strokeLinecap="round"></path><path d="M32 87H79" stroke="#DADCE0" strokeWidth="2" strokeLinecap="round"></path><path d="M1 95H63" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M1 101H63" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M32 75H79" stroke="#DADCE0" strokeWidth="2" strokeLinecap="round"></path><path d="M1 89H63" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M7.28938 67.951C5.41313 67.951 3.88867 67.951 3.88867 64.5502V24.8558C3.88867 22.9795 5.41313 21.4551 7.28938 21.4551H69.0352C70.9114 21.4551 72.4359 22.9795 72.4359 24.8558L7.28938 67.951Z" fill="#CEEAD6"></path><path d="M4.07143 68.1345H68.3043C70.2392 68.1345 71.8223 66.5515 71.8223 64.6166V25.1566C71.8223 23.2218 70.2392 21.6387 68.3043 21.6387L7.5894 21.6387C5.65452 21.6387 4.07143 23.2218 4.07143 25.1566V68.1345Z" stroke="#5F6368" strokeWidth="2" strokeMiterlimit="10"></path><path d="M92.7904 68.2686H3V74.4081H92.7904C94.4858 74.4081 95.8602 73.0337 95.8602 71.3383C95.8602 69.6429 94.4858 68.2686 92.7904 68.2686Z" fill="#5F6368"></path><path d="M112 7.95703L114 13.957" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M137 6.95703L138 12.957" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M118.487 39.8768C117.746 47.6332 116.034 62.1001 116.034 62.1001L96.1434 60.2671C98.2227 53.5399 100.102 47.8608 102.369 39.8768L118.487 39.8768Z" fill="#5F6368"></path><path d="M115.955 41.1963C115.14 44.4072 113.625 49.7609 112.234 54.5774C111.442 57.3212 110.693 59.8815 110.142 61.7561C109.873 62.6705 109.651 63.4217 109.495 63.9512L91.895 60.6012C92.6965 58.5653 93.489 56.6018 94.2883 54.6217C95.9565 50.4888 97.6539 46.2836 99.5233 41.1962L115.955 41.1963Z" fill="white" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M108.418 42.9432C100.744 43.7107 97.9015 39.7526 97.9015 39.7526L117.628 39.7526C117.628 39.7526 116.093 42.1758 108.418 42.9432Z" fill="#DADCE0"></path><path d="M119.279 33.8346C118.111 35.2699 115.428 40.2128 121.11 43.8439" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path><path d="M98 36.957H115V40.957L98 40.557V36.957Z" fill="#DADCE0"></path><path d="M99.1969 41.8728C102.843 43.7476 111.606 45.8632 117.496 39.3267" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                        <p className="clsrpt-p">No survey generated yet!</p>
                    </div>
                </div>
            </div>
        </div>   


    </div>
}

// export default Details;