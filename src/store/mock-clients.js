function createData(key, clientName, contactName, contactEmail) {
  return { key, clientName, contactName, contactEmail };
}

export const MOCK_CLIENTS = [
  createData(1, 'Company A', 'John Dow', 'john.dow@company-a.com'),
  createData(2, 'Company B', 'Mr Smith', 'mr.smith@company-b.com'),
  createData(3, 'Company C', 'Sid Wishes', 'sid.wishes@company-c.com'),
];
