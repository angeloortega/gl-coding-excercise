const salesOrders = [
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

const purchaseOrders = [
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
  }
];

function sortBy(array, attribute) {
  return array.sort((obj1, obj2) =>
    obj1[attribute] > obj2[attribute] ? 1 : -1
  );
}

function getFurthestDate(date1, date2) {
  return date1 > date2 ? date1 : date2 
}

function allocate(salesOrders, purchaseOrders) {
  const orderETAs = [];
  // Since we want to supply customers in the order in which they requested, we must sort by date
  let sortedSales = sortBy(salesOrders, "created");
  let sortedPurchases = sortBy(purchaseOrders, "receiving");
  let stock = 0;
  let currentPurchase;

  sortedSales.forEach((currentSale) => {
    while (currentSale.quantity > stock) {
      currentPurchase = sortedPurchases.shift();
      if (!currentPurchase) {
        throw new Error("Insufficient supply to allocate all orders");
      }
      stock += currentPurchase.quantity;
    }
    orderETAs.push({ date: getFurthestDate(currentPurchase.receiving, currentSale.created), id: currentSale.id });
    stock -= currentSale.quantity;
  });
  return orderETAs;
}

console.log(allocate(salesOrders, purchaseOrders));
