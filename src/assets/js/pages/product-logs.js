axios({
  method: "get",
  url: "/epc/all",
}).then(async function (response) {
  var data = await response.data.message.map((item) => {
    return {
      ...item,
      productCode: "PR-" + item.epcId.slice(-6),
      rackId: "W3011B1",
    };
  });

  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "productCode", name: "Product Code" },
      { id: "epcId", name: "Role Code" },
      { id: "rackId", name: "Rack ID" },
      { id: "floorNo", name: "Location" },
      { id: "timeBetweenEntryExit", name: "Time Between Entry Exit" },
      { id: "readingTime", name: "Reading Time" },
    ],
    pagination: {
      limit: 10,
    },
    style: {
      table: {
        "white-space": "nowrap",
        "min-width": "900px",
      },
    },
    sort: true,
    search: true,
    data: data,
  }).render(document.getElementById("product-logs-table"));
});
