/*//alert(1);
fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2019-07-28')
.then(function(response) {
//alert(2);
return response.json();
})
.then(function(myJson) {
//alert(3);
let valuesArray = [];
Object.keys(myJson.bpi).map(keys => {
  let newValue = {};
  newValue["category"] = keys;
  newValue["column-1"] = myJson.bpi[keys];	
  valuesArray.push(newValue);						
});
//alert(5);
drawChart(valuesArray);
console.log(valuesArray)
});
//alert(6);*/

$.ajax({
	//url: 'https://api.exchangeratesapi.io/latest',
	url: "http://hwthon19.herokuapp.com/DandoaLuzUnaIdea",
	type: "GET",
	dataType: "json",
	success: function(data) {
		//console.log(data)
		let valuesArray = [];
		//var contador = 1247;
		//console.log(data["0"])
		//console.log(data[String(contador)]["etapa"]);
		var sums = [0,0,0];
		for(var k in data){
			if(data[String(k)]["etapa"]){
				if(data[String(k)]["etapa"] == 1){
					++sums[0];
				}
				else{
					if(data[String(k)]["etapa"] == 2){
						++sums[1];
					}
					else{
						++sums[2];
					}
				}
				//console.log(data[String(contador)]["topic"]);
				//console.log(data[String(k)]["etapa"]);
			}
		}
		for(var i = 1; i <= 3; ++i){
			var newValue = {};
			newValue["category"] = "Etapa " + i; //data[String(k)]["etapa"];
			newValue["column-1"] = sums[i-1];  
			valuesArray.push(newValue);
		}
		//newValue["category"] = "Etapa 2"//data[String(k)]["etapa"];
		//newValue["column-1"] = sumEtapa2;  
		//valuesArray.push(newValue);
		//newValue["category"] = "Etapa 3"//data[String(k)]["etapa"];
		//newValue["column-1"] = sumEtapa3;  
		//valuesArray.push(newValue);
				//console.log(data[k]["Etapa"]);
			//var newValue = {};
			//newValue["category"] = data[contador++][Etapa];
			//console.log(data[contador++]["Etapa"]);
			//console.log(data[String(k)]["Etapa"]);
			//console.log(data[String(k)]["freq"])
			//console.log(data[k])
			//newValue["column-1"] = data[String(k)]["freq"];
			//console.log(Object.keys(data["rates"])[contador])
			//valuesArray.push(newValue)
		//console.log(valuesArray)
		drawChart(sums);
	}
})

function drawChart(sums){		
  AmCharts.makeChart("chartdiv",
    {
	"type": "serial",
	"categoryField": "category",
	"startDuration": 1,
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"colorField": "color",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"lineColorField": "color",
			"title": "graph 1",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"title": "Axis title"
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": "Chart Title"
		}
	],
	"dataProvider": [
		{
			"category": "Etapa 1",
			"column-1": sums[0],
			"color": "green"
		},
		{
			"category": "Etapa 2",
			"column-1": sums[1],
			"color": "blue"
		},
		{
			"category": "Etapa 3",
			"column-1": sums[2],
			"color": "red"
		}
	]
})
}


