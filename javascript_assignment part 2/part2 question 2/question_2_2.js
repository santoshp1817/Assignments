const users = [
  {
    id: '1',
    name: 'Norah',
  },
  {
    id: '2',
    name: 'Alyx',
  },
];

const accounts = [
  {
    account: 'IRA-4679',
    user: '1',
    balance: '5175.36',
  },
  {
    account: 'AAA-3571',
    user: '1',
    balance: '3471072.38',
  },
  {
    account: 'AAA-4671',
    user: '1',
    balance: '138971.19',
  },
  {
    account: 'ROT-1687',
    user: '2',
    balance: '2686.00',
  },
  {
    account: 'AAA-7894',
    user: '2',
    balance: '68761.32',
  },
  {
    account: 'IRA-6818',
    user: '2',
    balance: '564.67',
  },
  {
    account: 'IRA-6819',
    user: '2',
    balance: '3564.67',
  },
];

function filterSort(accounts) {
  const filteredResult = accounts.filter((item) =>
    item.account.includes('AAA')
  );

  const sortedResult = filteredResult.sort((a, b) => {
    var keyA = parseInt(a.balance, 10);
    var keyB = parseInt(b.balance, 10);

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  console.log(sortedResult);
}

filterSort(accounts);

// output

/*

[ { account: 'AAA-7894', user: '2', balance: '68761.32' },
  { account: 'AAA-4671', user: '1', balance: '138971.19' },
  { account: 'AAA-3571', user: '1', balance: '3471072.38' } ]

*/
