import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';




const DriverCustomerChart = () => {

let customers_drivers = [50, 50];

var options = {        
  cutout: 70,
};

  const data = {
   
    datasets: [{
      data: customers_drivers,
      backgroundColor: [
        '#F12D2D',
        '#2DF193'
      ],
      hoverOffset: 4
    }]
  };


  const plugins = [{
    beforeDraw: function(chart) {
      
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "Driver-Customer",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillStyle = 'rgba(#FFFFFF)';
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  return (
    < >
      <Doughnut  type="doughnut" data={data} options={options}  plugins={plugins}   />
    </>
  );
};

export default DriverCustomerChart;