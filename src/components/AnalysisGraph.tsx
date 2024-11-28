"use client";
import React from "react";
import Chart from "react-apexcharts";

const data = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "May",
        "Apr",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Out",
        "Nov",
        "Dez",
      ],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 91, 40, 60, 80],
    },
  ],
};

export default function AnalysisGraph() {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart ">
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
