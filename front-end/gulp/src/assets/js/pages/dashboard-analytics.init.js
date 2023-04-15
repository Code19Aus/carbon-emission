/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: dashboard Analytics Init Js File
*/
// shift 1

// shift 2
var startTime = moment().format("YYYY-MM-DD 00:00:00");
var endTime = moment().add(1, "days").format("YYYY-MM-DD 00:00:00");

// console.log(startTime, endTime);
axios({
  method: "get",
  url: "/epc/timebetween",
  params: {
    startTime: startTime,
    endTime: endTime,
  },
}).then(function (response) {
  var data = response.data.message;
  // console.log("data");

  // area charts
  var shift1 = [],
    shift2 = [],
    shift3 = [];
  data.map(function (element) {
    var hour = parseInt(element.hour);
    if (hour <= 7) {
      shift1.push(element);
    } else if (hour > 7 && hour <= 15) {
      shift2.push(element);
    } else if (hour > 15 && hour <= 23) {
      shift3.push(element);
    }
  });

  var dataValue1 = shift1.map(function (e) {
    return e.total;
  });
  var categoriesValue1 = shift1.map(function (e) {
    return e.hour + 1;
  });

  var options1 = {
    series: [
      {
        name: "Total Visit",
        data: dataValue1,
      },
    ],
    chart: {
      id: "area-datetime",
      type: "area",
      height: 440,
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 4,
        opacity: 0.075,
      },
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 6,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      dashArray: 0,
    },
    xaxis: {
      categories: categoriesValue1,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#038edc"],
    fill: {
      opacity: 0.05,
      colors: ["#038edc"],
      type: "solid",
    },
  };

  var dataValue2 = shift2.map(function (e) {
    return e.total;
  });
  var categoriesValue2 = shift2.map(function (e) {
    return e.hour + 1;
  });
  var options2 = {
    series: [
      {
        name: "Total Visit",
        data: dataValue2,
      },
    ],
    chart: {
      id: "area-datetime",
      type: "area",
      height: 440,
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 4,
        opacity: 0.075,
      },
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 6,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      dashArray: 0,
    },
    xaxis: {
      categories: categoriesValue2,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#038edc"],
    fill: {
      opacity: 0.05,
      colors: ["#038edc"],
      type: "solid",
    },
  };

  var dataValue3 = shift3.map(function (e) {
    return e.total;
  });
  var categoriesValue3 = shift3.map(function (e) {
    return e.hour + 1;
  });
  var options3 = {
    series: [
      {
        name: "Total Visit",
        data: dataValue3,
      },
    ],
    chart: {
      id: "area-datetime",
      type: "area",
      height: 440,
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 4,
        opacity: 0.075,
      },
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 6,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      dashArray: 0,
    },
    xaxis: {
      categories: categoriesValue3,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#038edc"],
    fill: {
      opacity: 0.05,
      colors: ["#038edc"],
      type: "solid",
    },
  };

  var chart1 = new ApexCharts(
    document.querySelector("#chart-area-shift1"),
    options1
  );
  chart1.render();
  var chart2 = new ApexCharts(
    document.querySelector("#chart-area-shift2"),
    options2
  );
  chart2.render();
  var chart3 = new ApexCharts(
    document.querySelector("#chart-area-shift3"),
    options3
  );
  chart3.render();
});

// column-chart
var columnoptions = {
  series: [
    {
      name: "Previous Month",
      data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4],
    },
    {
      name: "This Month",
      data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "23%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    markers: {
      width: 8,
      height: 8,
      radius: 30,
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  colors: ["#c0e3f6", "#038edc"],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
    tickAmount: 2,
    min: 0,
    max: 70,
  },
  grid: {
    strokeDashArray: 10,
  },
  fill: {
    opacity: 1,
  },
};
var chart = new ApexCharts(
  document.querySelector("#chart-column"),
  columnoptions
);
chart.render();

// Donut chart

var options = {
  chart: {
    height: 245,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [44, 25, 19],
  labels: ["Source 1", "Source 2", "Source 3"],
  colors: ["#038edc", "#f5f6f8", "#5fd0f3"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
  },
};

var chart = new ApexCharts(document.querySelector("#chart-donut"), options);
chart.render();

// sparkline area 1

var options = {
  series: [
    {
      name: "New Visitors",
      data: [21, 65, 32, 80, 42, 25],
    },
  ],
  chart: {
    height: 52,
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
  colors: ["#038edc"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#chart-sparkarea-1"),
  options
);
chart.render();

// sparkline area 2

var options = {
  series: [
    {
      name: "Source A",
      data: [40, 30, 51, 33, 63, 50],
    },
  ],
  chart: {
    height: 52,
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
  colors: ["#038edc"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#chart-sparkarea-2"),
  options
);
chart.render();

// sparkline area 3

var options = {
  series: [
    {
      name: "Source A",
      data: [21, 55, 32, 80, 42, 25],
    },
  ],
  chart: {
    height: 52,
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
  colors: ["#038edc"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#chart-sparkarea-3"),
  options
);
chart.render();

// world-map-markers

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
