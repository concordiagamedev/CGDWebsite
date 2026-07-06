import React from "react";
//add it to the links in the nav bar
import type { MetaFunction } from "@remix-run/node";
import cgdpink from "assets/icons/cgd-transp-pink.png";
import CGDLogo from "assets/icons/cgd-transparent.png";
import GetStartedHead from "../components/getStartedPage/getStartedHeader"
import CourseList from "../components/getStartedPage/courseList"
import Filters from "../components/getStartedPage/filters"
import "../components/getStartedPage/getStarted.css"


export default function GetStarted() {
    return(
         <div className= "page-container">
            <GetStartedHead />
            <div className="content-layout">
                <Filters/>
                <CourseList/>
            
            </div>
        </div>
    );
}
