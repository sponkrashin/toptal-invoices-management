function createData(key: number, date: string, number: string, client: string, amount: number) {
  return { key, date, number, client, amount };
}

export const MOCK_INVOICES = [
  createData(1, '16 Mar, 2019', 'INV-001', 'Company A', 312.44),
  createData(2, '16 Mar, 2019', 'INV-001', 'Company B', 866.99),
  createData(3, '16 Apr, 2019', 'INV-002', 'Company A', 100.81),
  createData(4, '16 Apr, 2019', 'INV-002', 'Company B', 654.39),
  createData(5, '15 May, 2019', 'INV-003', 'Company B', 212.79),
];
