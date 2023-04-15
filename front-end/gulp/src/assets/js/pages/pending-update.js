axios({
  method: "get",
  url: "/epc/all",
}).then(async function (response) {
  var data = await response.data.message.map((item) => {
    return {
      ...item,
      productCode: "IT-" + item.epcId.slice(-6),
      rackId: "W3011B1",
    };
  });

  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "productCode", name: "Item ID" },
      { id: "epcId", name: "EPC ID" },
      { id: "status", name: "Status" },
      { id: "readingTime", name: "Last Time Read" },
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
