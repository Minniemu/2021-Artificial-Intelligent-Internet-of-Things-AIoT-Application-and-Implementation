Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

  function highcharsinit(){
    var ctx = document.getElementById("AreaChart");
   var myLineChart = new Chart(ctx,{
      type: 'line',
      data: {
        labels: time,
        datasets: [{
          label:'Light',
          data: values,
          borderColor: "rgba(68,190,190,1)",
          backgroundColor: "rgba(68,190,190,0.05)",
          pointBackgroundColor: "rgba(68,190,190,1)"
        },{
          label:'Tempature',
          data: temp,
          borderColor: "rgba(250,150,30,3)",
          backgroundColor: "rgba(250,150,30,0.05)",
          pointBackgroundColor: "rgba(250,150,30,3)",
        },{
          label:'Humidity',
          data: humi,
          borderColor: "rgba(78, 115, 223, 1)",
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
        }
        ]
     },
     options: {
      title:{
        display: true,
        text: "Sensor data from MySQL to AreaChart"
      },
      legend: {
        labels:
        {
          padding: 10,
          usePointStyle: true,
        }
      },

     }


    })};
     
  $(function () {
    $.ajax({                    
      url: 'GetData.php',//連接的URL   
      data: "{}",//夾帶的參數
      dataType: 'json', //資料格式 
      success: function(data) //傳送成功的function
      { 
        values = [];
        time = [];
        humi=[];
        temp=[];
        
        //for (var i = 0; i <30; i++)
        showSize=40;
        offset = data.length -showSize;
        //for (var i = 0; i <data.length; i++)
        for (var i = 0; i <showSize; i++)
        {
          if(parseInt(data[i]['status'])==0){
            values.push({y:parseInt(data[offset+i]['value']), color: '#FF0000' });
            humi.push({y:parseInt(data[offset+i]['humi']), color: '#FF0000' });
            temp.push({y:parseInt(data[offset+i]['temp']), color: '#FF0000' });
            }
          else
            {
            values.push({y:parseInt(data[offset+i]['value']), color: '#00FF00' });
            humi.push({y:parseInt(data[offset+i]['humi']), color: '#00FF00' });
            temp.push({y:parseInt(data[offset+i]['temp']), color: '#00FF00' });
            }
          time.push(data[offset+i]['time']);
        }
        highcharsinit();
      } 
    });
    
  });