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


const calculateSalesTax = function(salesData, taxRates) {
  let companyTotals = {};
  
  for (company of salesData) {
    companyTotals[company.name] = company.sales
  
    
  }
console.log(companyTotals)
}

// companyTotals.name = company.name;
// companyTotals.totalSales = company.sales.reduce((a, b) => a + b, 0);

console.log(calculateSalesTax(companySalesData, salesTaxRates))
// console.log(companySalesData.sales)