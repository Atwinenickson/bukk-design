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
            font: { size: "8" }
          },
          legend: {
            display: false
         }
          
        },
        layout: {
          padding: {
            bottom: 2
          },
      },
      scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Vehicle Types',
                color: "rgb(220,219,227)"
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: "rgb(220,219,227)"}
        },
        y: {
          ticks: {
              display: false
          },
          grid: {
            display: false,
            drawBorder: false,
          }
      }
    }
      };

      const sublables = {
        id: 'subLabels',
        afterDatasetsDraw(chart, args, pluginOptions) {
          console.log(chart)
          const {ctx, chartArea: {left}} = chart;
        ctx.save();
        subLabelText('WEEK 1', width/4);


        function subLabelText(text, x) {
          ctx.font = 'bolder 12px sans-serif';
          ctx.fillStyle = 'rgba(102,102,102,1)';
          ctx.textAlign = 'center';
          ctx.fillText(text, x + left, bottom + 40)
        }
        }
        }
      

  const barChart = (
    <Bar
      type="bar"
      width={5} height={3}
      options={options}
      data={profitabilityChartData}
      
    />
  );
  return barChart;
};

export default ProfitabilityChart