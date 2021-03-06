import { allocate } from "./allocate/index.js";

export const salesOrders = [
  {
    id: "S1",
    created: "2020-01-02",
    quantity: 6,
  },
  {
    id: "S2",
    created: "2020-11-05",
    quantity: 2,
  },
  {
    id: "S3",
    created: "2019-12-04",
    quantity: 3,
  },
  {
    id: "S4",
    created: "2020-01-20",
    quantity: 2,
  },
  {
    id: "S5",
    created: "2019-12-15",
    quantity: 9,
  },
];

export const purchaseOrders = [
  {
    id: "P1",
    receiving: "2020-01-04",
    quantity: 4,
  },
  {
    id: "P2",
    receiving: "2020-01-05",
    quantity: 3,
  },
  {
    id: "P3",
    receiving: "2020-02-01",
    quantity: 5,
  },
  {
    id: "P4",
    receiving: "2020-03-05",
    quantity: 1,
  },
  {
    id: "P5",
    receiving: "2020-02-20",
    quantity: 7,
  },
  {
    id: "P6",
    receiving: "2020-05-20",
    quantity: 2,
  },
];

console.log(
  "Attempting to allocate the following sales: ",
  salesOrders,
  "With the following purchases:",
  purchaseOrders
);
console.log(
  "\n\n\n___________________Result:___________________\n",
  allocate(salesOrders, purchaseOrders)
);
