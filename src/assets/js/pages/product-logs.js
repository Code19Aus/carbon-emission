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
      { id: "epcId", name: "Item Code" },
      { id: "rackId", name: "Last Process Code" },
      { id: "floorNo", name: "Location" },
      { id: "timeBetweenEntryExit", name: "Accumulated Carbon" },
      { id: "readingTime", name: "Last Reading Time" },
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
