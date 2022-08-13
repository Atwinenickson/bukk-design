import React from "react";
import { Bar } from "react-chartjs-2";

const ProfitabilityChart = () => {
  const profitabilityChartData = {
        labels:  ["BAKKIE", "TRUCK", "TRAILER"],
        datasets: [{
          label: 'Vehicle Type',
          data: [78, 95, 89],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1
        }]
      }

  const barChart = (
    <Bar
      type="bar"
    //   width={200}
    //   height={500}
      options={{
        title: {
          display: false,
          text: "Profitability",
          fontSize: 15
        },
        legend: {
          display: false, //Is the legend shown?
          position: "bottom" //Position of the legend.
        }
      }}
      data={profitabilityChartData}
    />
  );
  return barChart;
};

export default ProfitabilityChart;