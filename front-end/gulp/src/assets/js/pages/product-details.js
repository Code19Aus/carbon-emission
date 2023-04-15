function trender() {
  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "productCode", name: "Product Code" },
      { id: "noOfRoll", name: "No Of Roll" },
      { id: "buyerDetails", name: "Buyer Details" },
      { id: "rall", name: "RAL" },
      { id: "challanNo", name: "Challan No" },
      {
        name: "Roll Details",
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
  }).render(document.getElementById("product-table-gridjs"));
}
function trender1() {
  // Basic Table
  new gridjs.Grid({
    columns: [
      { id: "rollId", name: "Roll ID" },
      { id: "epcId", name: "EPC ID" },
      { id: "readingTime", name: "Reading Time" },
      { id: "status", name: "Status" },
    ],
    pagination: {
      limit: 10,
    },
    style: {
      table: {
        "white-space": "nowrap",
        "min-width": "650px",
      },
    },
    sort: true,
    search: true,
    data: data1,
  }).render(document.getElementById("product-id-details-gridjs"));
}

var data = [
  {
    productCode: "PR-000001",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000002",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000003",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000004",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000005",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000006",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000007",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000008",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000009",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000010",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000011",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
  {
    productCode: "PR-000012",
    noOfRoll: 1,
    buyerDetails: "Artisanal kale",
    rall: "01252",
    challanNo: "ch-01252",
  },
];
trender();

var data1 = [
  {
    epcId: "0C00EE000400000001",
    rollId: "R-000001",
    readingTime: "2021-05-20 12:00:00",
    status: "IN",
  },
  {
    epcId: "0C00EE000400000002",
    rollId: "R-000002",
    readingTime: "2021-05-20 12:00:00",
    status: "IN",
  },
  {
    epcId: "0C00EE000400000003",
    rollId: "R-000003",
    readingTime: "2021-05-20 12:00:00",
    status: "IN",
  },
];

trender1();
