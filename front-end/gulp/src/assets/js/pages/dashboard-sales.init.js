/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: Dashboard
*/

//
// Total Revenue Chart
//
var options5 = {
  series: [
    {
      data: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var inventoryTurnoverChartOptions = {
  series: [
    {
      // 8 random data between 5 to 8. //6 7, 5, 8, 6, 7, 5, 8
      data: [
        { x: 2016, y: 6 },
        { x: 2017, y: 7 },
        { x: 2018, y: 5 },
        { x: 2019, y: 6 },
        { x: 2020, y: 8 },
        { x: 2021, y: 6 },
        { x: 2022, y: 7 },
        { x: 2023, y: 7 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};

var inventoryTurnoverChart = new ApexCharts(
  document.querySelector("#sparkline-chart-1"),
  inventoryTurnoverChartOptions
);
inventoryTurnoverChart.render();

// sparkline-chart-2
var options = {
  series: [
    {
      name: "Series A",
      data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100],
    },
  },
  colors: ["#038edc", "transparent"],
};
var chart = new ApexCharts(
  document.querySelector("#sparkline-chart-2"),
  options
);
chart.render();

// sparkline-chart-3
var options5 = {
  series: [
    {
      data: [40, 20, 30, 40, 20, 60, 55, 70, 95, 65, 110],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};

var inventoryAccuracyChartOptions = {
  series: [
    {
      name: "Accuracy Rate",
      // data random between 92 to 97
      data: [97, 93, 96, 95, 94, 97, 96, 92, 96, 95, 94, 97],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100],
    },
  },
  colors: ["#038edc", "transparent"],
};

var inventoryAccuracyChart = new ApexCharts(
  document.querySelector("#inventoryAccuracy"),
  inventoryAccuracyChartOptions
);
inventoryAccuracyChart.render();

// receiving-efficiency
var receivingEfficiencyChartOptions = {
  series: [
    {
      name: "Receiving Efficiency",
      data: [84, 83, 87, 88, 86, 85, 84, 83, 87, 88, 86, 84],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var receivingEfficiencyChart = new ApexCharts(
  document.querySelector("#receiving-efficiency"),
  receivingEfficiencyChartOptions
);
receivingEfficiencyChart.render();

// receiving-cycle-time
var receivingCycleTimeChartOptions = {
  series: [
    {
      name: "Receiving Cycle Time",
      //random 83 to 107
      data: [98, 100, 103, 105, 107, 106, 83, 102, 100, 98, 99, 98],
    },
  ],
  chart: {
    type: "area",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var receivingCycleTimeChart = new ApexCharts(
  document.querySelector("#receiving-cycle-time"),
  receivingCycleTimeChartOptions
);
receivingCycleTimeChart.render();
//put-away-accuracy-rate
var putAwayAccuracyRateChartOptions = {
  series: [
    {
      name: "Put Away Accuracy Rate",
      //random 94 to 96
      data: [96, 95, 94, 95, 96, 95, 94, 95, 96, 95, 94, 95],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var putAwayAccuracyRateChart = new ApexCharts(
  document.querySelector("#put-away-accuracy-rate"),
  putAwayAccuracyRateChartOptions
);
putAwayAccuracyRateChart.render();

//put-away-cycle-time
var putAwayCycleTimeChartOptions = {
  series: [
    {
      name: "Put Away Cycle Time",
      //random 95 to 110
      data: [105, 110, 107, 106, 105, 104, 95, 102, 101, 100, 99, 105],
    },
  ],
  chart: {
    type: "area",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var putAwayCycleTimeChart = new ApexCharts(
  document.querySelector("#put-away-cycle-time"),
  putAwayCycleTimeChartOptions
);
putAwayCycleTimeChart.render();
//avg-flow-of-inventory
var avgFlowOfInventoryChartOptions = {
  series: [
    {
      name: "Put Away Cycle Time",
      data: [
        5265, 5305, 5150, 5020, 5385, 5360, 5375, 5390, 5205, 5325, 5435, 5450,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#038edc"],
};
var avgFlowOfInventoryChart = new ApexCharts(
  document.querySelector("#avg-flow-of-inventory"),
  avgFlowOfInventoryChartOptions
);
avgFlowOfInventoryChart.render();

//
// Sales Analytics Chart
//

var options = {
  chart: {
    height: 332,
    type: "line",
    stacked: false,
    offsetY: -5,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 0, 0, 1],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
    },
  },
  colors: ["#5fd0f3", "#038edc", "#dfe2e6", "#51d28c"],
  series: [
    {
      name: "Income",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Sales",
      type: "column",
      data: [19, 08, 26, 21, 18, 36, 30, 28, 40, 39, 15],
    },
    {
      name: "Conversation Ratio",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Users",
      type: "line",
      data: [9, 11, 13, 12, 10, 8, 6, 9, 14, 17, 22],
    },
  ],
  fill: {
    opacity: [0.85, 1, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },

  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Sales Analytics",
      style: {
        fontWeight: 500,
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0);
        }
        return y;
      },
    },
  },
  grid: {
    borderColor: "#f1f1f1",
    padding: {
      bottom: 15,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#sales-analytics-chart"),
  options
);

chart.render();

// Donut chart

var options = {
  chart: {
    height: 130,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  series: [44, 25, 19],
  labels: ["Revenue", "Expenses", "Profit"],
  colors: ["#038edc", "#dfe2e6", "#5fd0f3"],
  legend: {
    show: false,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
  },
};

var chart = new ApexCharts(document.querySelector("#donut_chart"), options);

chart.render();

var map = new jsVectorMap({
  map: "world_merc",
  selector: "#world-map-markers",
  zoomOnScroll: false,
  zoomButtons: false,
  markers: [
    {
      name: "Greenland",
      coords: [72, -42],
    },
    {
      name: "Canada",
      coords: [56.1304, -106.3468],
    },
    {
      name: "Brazil",
      coords: [-14.235, -51.9253],
    },
    {
      name: "Egypt",
      coords: [26.8206, 30.8025],
    },
    {
      name: "Russia",
      coords: [61, 105],
    },
    {
      name: "China",
      coords: [35.8617, 104.1954],
    },
    {
      name: "United States",
      coords: [37.0902, -95.7129],
    },
    {
      name: "Norway",
      coords: [60.472024, 8.468946],
    },
    {
      name: "Ukraine",
      coords: [48.379433, 31.16558],
    },
  ],
  lines: [
    {
      from: "Canada",
      to: "Egypt",
    },
    {
      from: "Russia",
      to: "Egypt",
    },
    {
      from: "Greenland",
      to: "Egypt",
    },
    {
      from: "Brazil",
      to: "Egypt",
    },
    {
      from: "United States",
      to: "Egypt",
    },
    {
      from: "China",
      to: "Egypt",
    },
    {
      from: "Norway",
      to: "Egypt",
    },
    {
      from: "Ukraine",
      to: "Egypt",
    },
  ],
  lineStyle: {
    animation: true,
    strokeDasharray: "6 3 6",
  },
});
