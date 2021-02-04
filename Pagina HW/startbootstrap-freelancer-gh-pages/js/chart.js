//init chart
var chartData = [];
var chart = AmCharts.makeChart("chartdiv",
    {
      "type": "serial",
      "categoryField": "category",
      "autoMarginOffset": 40,
      "marginRight": 60,
      "marginTop": 60,
      "startDuration": 1,
      "fontSize": 13,
      "theme": "patterns",
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "chartScrollbar": {
        "enabled": true
      },
      "graphs": [
        {
          "balloonText": "$[[value]] el [[category]]",
          "bullet": "round",
          "bulletSize": 1,
          "id": "AmGraph-1",
          "lineAlpha": 1,
          "lineThickness": 1,
          "title": "graph 1",
          "type": "smoothedLine",
          "valueField": "column-1"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": ""
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": chartData
    }
  );

//cargar hitorico
$.ajax({
	url: "http://hwthon19.herokuapp.com/DandoaLuzUnaIdea",
	type: "GET",
	dataType: "json",
	success: function(data) {
		console.log(data);
		data.map(function(item, index){
			if(index >= data.length-100){
			//if(index >= 8600){
				//console.log(item.date);
				chartData.push({
				"category": item.date,
				"column-1": item.Data
				})
			}
			//}
		});
		chart.validateData();
	}
})

