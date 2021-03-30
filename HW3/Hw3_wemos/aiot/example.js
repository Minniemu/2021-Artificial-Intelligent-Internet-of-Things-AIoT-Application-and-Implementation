  function highcharsinit(){
    $('#container').highcharts({
      title: {
        text: 'Sensor data from MySQL to Highcharts',
        x: -20 
      },
      subtitle: {
        text: 'Light Value',
        x: -20
      },
      xAxis: {
        title: {
        text: 'Time'
        },
        categories: time,
        labels:{ //隱藏X軸的標籤
          enabled: true,
        }
      },
      yAxis: {
        title: {
        text: 'value',
        }
      },
      //圖表的資料
      series: [{
        name: 'Sensor-Light',
        data: values
      },{
        name: 'Sensor-Tempature',
        data: temp
      },{
        name: 'Sensor-Humidity',
        data: humi
      }]
    });
  }
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
    ////////////////////////
    /*
    $("#trigger").click(function(){
            alert("trigger hello callEA.php");
            $.ajax({
                url:'callEA.php',
                data: '',
                dataType: 'json', 
                success:function(data)
                {


                }
            });

        });

        $(function (){
      $("#randStatus").click(function(){
      alert("randStatus call php");
            $.ajax({
                url:'randStatus.php',
              data:'',
                dataType: 'json', 
                success:function(data)
                {
                  alert("success");
                }
   
            });

        });
    });
        */
    ////////////////////////
    
  });