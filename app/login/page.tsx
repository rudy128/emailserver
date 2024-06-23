import RequestForm from "@/components/RequestForm";
import React from "react";

export default function LogIn() {
    return (
        <div className="h-[90dvh] flex justify-center items-center">
            {/* <div className="border h-[50dvh] w-[50dvh] rounded-xl"></div> */}
            <RequestForm header="Login" signup={false} />
        </div>
    )
}