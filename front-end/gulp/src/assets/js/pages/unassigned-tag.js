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
      { id: "epcId", name: "EPC ID" },
      { id: "productCode", name: "Last Prod. ID" },
      { id: "readingTime", name: "Reading Time" },
      { id: "floorNo", name: "Location" },
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
