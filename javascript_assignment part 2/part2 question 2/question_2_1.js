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

function filterSort(accounts, users) {
  const filteredResult = accounts.filter((item) => item.user === users[0].id);

  console.log(filteredResult);
}

filterSort(accounts, users);

// output
/*
    [ { account: 'IRA-4679', user: '1', balance: '5175.36' },
  { account: 'AAA-3571', user: '1', balance: '3471072.38' },
  { account: 'AAA-4671', user: '1', balance: '138971.19' } ]

  */
