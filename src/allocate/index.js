function sortBy(array, attribute) {
  return array.sort((obj1, obj2) =>
    obj1[attribute] > obj2[attribute] ? 1 : -1
  );
}

function getFurthestDate(date1, date2) {
  return date1 > date2 ? date1 : date2 
}

export function allocate(salesOrders = [], purchaseOrders = []) {
  const orderETAs = [];
  // Since we want to supply customers in the order in which they requested, we must sort by date
  let sortedSales = sortBy(salesOrders, 'created');
  let sortedPurchases = sortBy(purchaseOrders, 'receiving');
  let stock = 0;
  let currentPurchase;

  sortedSales.forEach((currentSale) => {
    while (currentSale.quantity > stock) {
      currentPurchase = sortedPurchases.shift();
      if (!currentPurchase) {
        throw new Error('Insufficient supply to allocate all orders');
      }
      stock += currentPurchase.quantity;
    }
    orderETAs.push({ date: getFurthestDate(currentPurchase.receiving, currentSale.created), id: currentSale.id });
    stock -= currentSale.quantity;
  });
  return orderETAs;
}
