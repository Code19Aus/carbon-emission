// axios({
//   method: "get",
//   url: "/epc/unique",
// }).then(async function (response) {
//   var data = await response.data.message.map((item) => {
//     return {
//       ...item,
//       productCode: "PR-" + item.epcId.slice(-6),
//       rackId: "W3011B1",
//     };
//   });

//   // Basic Table
//   new gridjs.Grid({
//     columns: [
//       { id: "productCode", name: "Product Code" },
//       { id: "epcId", name: "Role Code" },
//       { id: "rackId", name: "Rack ID" },
//       { id: "floorNo", name: "Location" },
//       { id: "timeBetweenEntryExit", name: "Time Between Entry Exit" },
//       { id: "readingTime", name: "Reading Time" },
//     ],
//     pagination: {
//       limit: 10,
//     },
//     style: {
//       table: {
//         "white-space": "nowrap",
//         "min-width": "900px",
//       },
//     },
//     sort: true,
//     search: true,
//     data: data,
//   }).render(document.getElementById("table-gridjs"));
// });
function trender() {
  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "rackId", name: "Rack ID" },
      { id: "occupiedCapacity", name: "Occupied Capacity" },
      { id: "vacantCapacity", name: "Vacant Capacity" },
      { id: "lastEdited", name: "Last Edited" },
      {
        name: "Product Logs",
        formatter: (_, row) =>
          gridjs.html(
            `<a href="#" class="btn btn-sm btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewDetails-modal">View</a>`
          ),
      },
    ],
    pagination: {
      limit: 10,
    },
    style: {
      table: {
        "white-space": "nowrap",
        "min-width": "740px",
      },
    },
    sort: true,
    search: true,
    data: data,
  }).render(document.getElementById("rack-details-gridjs"));
}
function trender1() {
  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "productCode", name: "Product Code" },
      { id: "rollId", name: "Roll Id" },
      { id: "dateOfEntry", name: "Date Of Entry" },
      { id: "dateOfRemove", name: "Date Of Remove" },
    ],
    pagination: {
      limit: 10,
    },
    style: {
      table: {
        "white-space": "nowrap",
        "min-width": "700px",
      },
    },
    sort: true,
    search: true,
    data: data1,
  }).render(document.getElementById("rack-id-details-gridjs"));
}

var data = [
  {
    rackId: "W3011B1",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3011B2",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3011B3",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3012B1",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3012B2",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3012B3",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3013B1",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3013B2",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3013B3",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3014B1",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
  {
    rackId: "W3014B2",
    occupiedCapacity: 0,
    vacantCapacity: 40,
    lastEdited: "2021-05-20 12:00:00",
  },
];
trender();

var data1 = [
  {
    productCode: "PR-000001",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000002",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000003",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000004",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000005",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000006",
    rollId: "R-000001",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000007",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000008",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000009",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000010",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000011",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
  {
    productCode: "PR-000012",
    rollId: "R-000002",
    dateOfEntry: "2021-05-20 12:00:00",
    dateOfRemove: "2021-05-20 12:00:00",
  },
];

trender1();
