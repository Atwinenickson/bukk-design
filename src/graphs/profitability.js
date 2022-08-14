import React, {useEffect} from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

const ProfitabilityChart = () => {

  useEffect(() => {
    Chart.register(ChartDataLabels);
})

  const profitabilityChartData = {
        labels:  ["BAKKIE", "TRUCK", "TRAILER"],
        datasets: [{
          label: 'Vehicle Types',
          data: [78, 95, 89],
          backgroundColor: [
            '#6484D6',
            '#6484D6',
            '#6484D6',
          ],
          borderColor: [
            '#4A6BCC',
            '#4A6BCC',
            '#4A6BCC',
          ],
          borderWidth: 1
        }]
      }

      const options = {
        plugins: {
          datalabels: {
            display: true,
            color: "white",
            align: "end",
            anchor: "end",
            font: { size: "14" }
          }
        },
        legend: {
          display: false
        }
      };

  const barChart = (
    <Bar
      type="bar"
      width={5} height={5}
      options={options}
      data={profitabilityChartData}
    />
  );
  return barChart;
};

export default ProfitabilityChart