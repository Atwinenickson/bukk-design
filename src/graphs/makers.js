import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';




const MakersChart = () => {

let customers_drivers = [40, 60];

var options = {        
  cutout: 29,
};

  const data = {
   
    datasets: [{
      data: customers_drivers,
      backgroundColor: [
        '#2DF193',
        '#F12D7F'
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
         var text = "46%",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillStyle = 'rgba(#FFFFFF)';
         ctx.fillText(text, textX, textY);
         ctx.save();
    },

    datalabels: {
      display: false
    }
    
  }]
  

  return (
    < >
      <Doughnut type="doughnut" data={data} options={options}  plugins={plugins}   />
    </>
  );
};

export default MakersChart;