const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


const calculateSalesTax = function(companySalesData, taxRates) {
  let companyTotals = [];
  let finalTotals = {};
  
  for (let companyData of companySalesData) {
    companyData.sales = sumSales(companyData.sales);
    companyData.taxPaid = 0
    companyTotals.push(companyData);

    for (let province in taxRates) {
      if (province == companyData.province) {
        companyData.taxPaid = companyData.sales * taxRates[province]
      }
    }
  }

  for (let calculatedTotals of companyTotals) {
    if (finalTotals.hasOwnProperty(calculatedTotals.name)) {
      console.log('matching', calculatedTotals.name)
      finalTotals[calculatedTotals.name].taxPaid = finalTotals[calculatedTotals.name].taxPaid + calculatedTotals.taxPaid
      finalTotals[calculatedTotals.name].sales += calculatedTotals.sales
    } 
    finalTotals[calculatedTotals.name] = { sales: calculatedTotals.sales, taxPaid: calculatedTotals.taxPaid }
  }
  
  console.log('finalTotals',finalTotals)


    // return companyTotals;
  }

console.log(calculateSalesTax(companySalesData, salesTaxRates))
// totalSales: companyData[i].sales.reduce((a, b) => a + b, 0)