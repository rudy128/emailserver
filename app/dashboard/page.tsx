import DashBoard from "@/components/DashBoard";
import SideBar from "@/components/SideBar";
import React from "react";

export default function Dashboard(){
    return(
        <div className="z-10 backdrop-blur-3xl h-[95dvh] w-full flex">
            <SideBar />
            <DashBoard />
        </div>
    )
}