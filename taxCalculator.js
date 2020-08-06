/* |--------------------|------------|-------------------------------------------|
-- | Income thresholds  |    Rate    |         Tax payable on this income        |
-- |--------------------|------------|-------------------------------------------|
-- | $0 - $18,200       |     0%     |  Nil                                      |
-- | $18,201 - $37,000  |     19%    | 19c for each $1 over 18,200               |
-- | $37,001 - $90,000  |    32.5%   | $3,572 plus 32.5% of amounts over $37,000 |
-- | $90,001 - $180,000 |     37%    | $20,797 plus 37% of amounts over $90,000  |
-- | $180,001 and over  |     45%    | $54,096 plus 45% of amounts over $180,000 |
--------------------------------------------------------------------------------*/


const TAX_TABLE_2019 = [
  {
    minIncome: 0,
    maxIncome: 18200,
    rate: 0,
    base: 0,
    message: 'Nil'
  },
  {
    minIncome: 18200,
    maxIncome: 37000,
    rate: 0.19,
    base: 0,
    message: '19c for each $1 over $18,200'
  },
  {
    minIncome: 37000,
    maxIncome: 90000,
    rate: 0.325,
    base: 3572,
    message: '$3,572 plus 32.5% of amounts over $18,200'
  },
  {
    minIncome: 90000,
    maxIncome: 180000,
    rate: 0.37,
    base: 20797,
    message: '$20,797 plus 37% of amounts over $90,000'
  },
  {
    minIncome: 180000,
    maxIncome: Infinity,
    rate: 0.45,
    base: 54096,
    message: '$54,096 plus 45% of amounts over $180,000'
  },
];

function calculateTax (income, table) {
  const index = table.findIndex(item => (item.minIncome < income && income <= item.maxIncome));
  if (index === -1) {
    throw new Error('Invalid income or tax table');
  }

  const taxLevel = table[index];
  const {minIncome, rate, base, message} = taxLevel;
  const taxPayable = (income - minIncome) * rate + base;

  console.log(taxPayable, rate, message);
}

calculateTax(85000, TAX_TABLE_2019);
calculateTax(185000, TAX_TABLE_2019);