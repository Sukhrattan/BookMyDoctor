import React from "react"
import logo from "../assets/healthcare.png"


export default function Header({ activeTab, setActiveTab }) {
    const tabs = ["Dashboard", "Schedule", "History", "Activity"]
    return (
        <>
            <div className = "flex items-center gap-12 pt-0 p-6 rounded-xl">
                <div className = "flex items-center gap-3 mr-auto">
                    <img src = {logo}/>
                    <div className = "text-xl font-medium">BookMyDoctor.</div>
                </div>
                <div className = "flex items-center rounded-full gap-6 bg-gray-200">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all duration-100
                ${activeTab === tab
                ? "bg-white shadow font-semibold"
                : "text-gray-500 hover:text-black"}
              `}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className = "flex items-center ml-auto gap-6">
                    <div className="flex-1 w-64 bg-white rounded-full px-4 py-2">
                        Search Bar
                    </div>
                    <div className = "rounded-full bg-white w-8 h-8 p-3">N</div>
                    <div className = "rounded-full bg-white w-8 h-8 p-3">N</div>
                    <div className = "rounded-full bg-white w-8 h-8 p-3">N</div>
                </div>

                <div className = "flex-col items-center justify-center text-sm p-3">
                    <div className = "font-medium">Sukhrattan Singh</div>
                    <div className = "text-gray-500">Patient</div>
                </div>

            </div>
        </>
    )
}