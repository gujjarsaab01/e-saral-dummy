import React from "react";
import SideBar from "../Sidebar/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBookOpen, faSearch } from "@fortawesome/free-solid-svg-icons";
import VideoList from "../VideoList/videoList";

const Layout = () => {
  return (
    <div className="flex flex-row p-1 h-auto   ">
      <div className=" w-3/12 rounded-lg bg-slate-200 p-4">
        <FontAwesomeIcon icon={faBookOpen} size="2x" />
        <span className="ml-4 truncate text-2xl ">Index</span>
        <SideBar />
      </div>
      {/* main content */}
      <div className="flex flex-col ml-1  w-5/6">
        <div className="bg-slate-200 flex z-10 rounded-lg relative h-20 items-center justify-center">
          <div className="absolute left-8 flex place-items-center">
            <FontAwesomeIcon className="ml-3" icon={faAngleLeft} size="2x" />
            <h3 className="ml-8 tracking-wider truncate">Physics</h3>
          </div>
          <div className="absolute bottom-7 right-0 mr-3">
            <FontAwesomeIcon className="" icon={faSearch} />
          </div>
        </div>
        <div className="bg-slate-200 z-0 rounded-lg mt-1 truncate h-auto">
          <VideoList />
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
