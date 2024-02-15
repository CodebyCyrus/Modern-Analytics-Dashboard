"use client";

import { analytics } from "@/utils/analytics";
import { BarChart, Card } from "@tremor/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string;
  amtVisitorsToday: number;
  timeseriesPageviews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
  topCountries: [string, number][];
}

const AnalyticsDashboard = ({
  avgVisitorsPerDay,
  amtVisitorsToday,
  timeseriesPageviews,
  topCountries,
}: AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Avg. Visitors/Day
          </p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {avgVisitorsPerDay}
          </p>
        </Card>
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Today Visitors
          </p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {amtVisitorsToday}
          </p>
        </Card>
      </div>

      <Card className="flex flex-col sm:grid grid-cols-4 gap-6">
        <h2 className="w-full text-dark-tremor-content-strong text-left sm:left-left font-semibold text-xl ">
          Top Visitors:
        </h2>
        <div className="col-span-3 flex items-center justify-between flex-wrap gap-8">
          {topCountries?.map(([countryCode, number]) => {
            return (
              <div
                key={0}
                className="flex items-center gap-3 text-dark-tremor-content-strong"
              >
                <p className="hidden sm:block text-tremor-content ">
                  {countryCode}
                </p>
                <ReactCountryFlag
                  className="text-5xl sm:text-3xl"
                  svg
                  countryCode={countryCode}
                />

                <p className="text-tremor-content sm:text-dark-tremor-content-strong">
                  {number}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        {timeseriesPageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
            data={timeseriesPageviews.map((day) => ({
              name: day.date,
              Visitors: day.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!;
              }, 0),
            }))}
            categories={["Visitors"]}
            index="name"
          />
        ) : null}
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
