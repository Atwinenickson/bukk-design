import React, {useEffect} from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

const YearlyChart = () => {

  useEffect(() => {
    Chart.register(ChartDataLabels);
})

  const yearlyChartData = {
        labels:  ["JAN", "FEB", "MAR","APR", "MAY", "JUNE","JUL", "AUG"],
        datasets: [{
          label: 'Vehicle Types',
          data: [100, 30, 100, 99, 99,99,99,99],
          backgroundColor: [
            '#965C14',
          ],
         
        },

        {
            data: [80, 100, 90, 90, 90,90,90,90],
            backgroundColor: [
            '#47AF2C',
            ],
           
          },


          {
            data: [70, 90, 80, 80, 80,90,90,90],
            backgroundColor: [
                '#BC2C74',
            ],
          }
    
    ]
      }

      const options = {
        plugins: {
        //   datalabels: {
        //     display: true,
        //     color: "white",
        //     align: "end",
        //     anchor: "end",
        //     font: { size: "8" }
        //   },
          legend: {
            display: false
         }
          
        },
        layout: {
          padding: {
            bottom: 10
          },
      },
      scales: {
        x: {
            display: true,
            grid: {
              display: false,
              drawBorder: false,
            }
        },
        y: {
          ticks: {
              display: false
          },
          grid: {
            // display: false,
            drawBorder: false,
          }
      }
    }
      };
      

  const barChart = (
    <Bar
      type="bar"
      width={7} height={5}
      options={options}
      data={yearlyChartData}
      
    />
  );
  return barChart;
};

export default YearlyChart