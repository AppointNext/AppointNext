"use client";

import { CircularProgress } from "@mui/material";
import CircularWithValueLabel from "../CircularProgressLabel";
import { useState } from "react";
import ActivityChart from "./Chart";

export default function StatsComp() {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <div
        className="bg-[#141522]
       bg-gradient-to-tr from-[#141522] to-[#2e3046]
      text-white flex flex-col gap-6 m-4 rounded-xl p-4"
      >
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl">Running Appointment</h1>
          </div>
          <div>
            <h1>65</h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8">
          <div>
            <CircularWithValueLabel
              progress={progress}
              setProgress={setProgress}
            />
          </div>
          <div className="flex flex-col">
            <h1>100</h1>
            <p className="text-xs">Appointments</p>
          </div>
        </div>
      </div>
      <div className=" bg-bg_primary py-2 px-4">
        <ActivityChart />
      </div>
    </div>
  );
}
