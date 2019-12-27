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
  let companyTotals = {};
  let companyData = companySalesData;

  sumSales = (array) => {
    return array.reduce((a, b) => a + b, 0);
  }

  taxPaid = (percentage, number) => {
    return percentage * number;
  }

  
  
  for (let company of companyData) {
    if (companyTotals.hasOwnProperty(company.name)) {
      companyTotals[company.name].totalSales += sumSales(company.sales);
    } else {
      companyTotals[company.name] = {totalSales: sumSales(company.sales)};
    }
    
  }

    return companyTotals;
  }

console.log(calculateSalesTax(companySalesData, salesTaxRates))
// totalSales: companyData[i].sales.reduce((a, b) => a + b, 0)