// Given the following data, implement a function
// calculateSalesTax that calculates the total sales and total tax, grouped by company.

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function(companySalesData, taxRates) {
  let companyTotals = [];
  let finalTotals = {};

  sumSales = array => {
    return array.reduce((a, b) => a + b, 0);
  };

  taxPaid = (rate, number) => {
    return rate * number;
  };

  for (let companyData of companySalesData) {
    companyData.sales = sumSales(companyData.sales);
    companyData.taxPaid = 0;
    companyTotals.push(companyData);

    for (let province in taxRates) {
      if (province == companyData.province) {
        companyData.taxPaid = companyData.sales * taxRates[province];
        companyData.taxPaid = taxPaid(taxRates[province], companyData.sales);
      }
    }
  }

  for (let calculatedTotals of companyTotals) {
    if (finalTotals.hasOwnProperty(calculatedTotals.name)) {
      finalTotals[calculatedTotals.name].totalTaxPaid +=
        calculatedTotals.taxPaid;
      finalTotals[calculatedTotals.name].totalSales += calculatedTotals.sales;
    } else {
      finalTotals[calculatedTotals.name] = {
        totalSales: calculatedTotals.sales,
        totalTaxPaid: calculatedTotals.taxPaid
      };
    }
  }

  return finalTotals;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
