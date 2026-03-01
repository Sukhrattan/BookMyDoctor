import React from "react"
import {useState} from "react";
import Header from "../components/Header"
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard")
    return (
        <div className="min-h-screen bg-gray-100 pt-3 p-6">
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="bg-gray-200 p-6 mb-6 rounded-xl">
                User Info
            </div>


            <div className="grid grid-cols-2 gap-6">


                <div className="bg-gray-200 p-6 rounded-xl">
                    Left Section (3D Heart)
                </div>


                <div className="grid grid-rows-2 gap-6">

                    <div className="bg-gray-200 p-6 rounded-xl">
                        Top Right Section
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-200 p-6 rounded-xl">
                            Bottom Left
                        </div>
                        <div className="bg-gray-200 p-6 rounded-xl">
                            Bottom Right
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}