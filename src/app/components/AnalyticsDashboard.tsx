"use client";

import { Card } from "@tremor/react";
import React from "react";

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string;
}

const AnalyticsDashboard = ({ avgVisitorsPerDay }: AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Avg. visitors/day
          </p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {avgVisitorsPerDay}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
