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

function f1(accounts, users) {
  let resultArray = [];

  for (let i = 0; i < users.length; i++) {
    resultArray = [];
    for (let j = 0; j < accounts.length; j++) {
      if (users[i].id === accounts[j].user) {
        let res =
          users[i].name +
          ' | ' +
          accounts[j].account +
          ' | ' +
          accounts[j].balance;
        resultArray.push(res);
      }
    }
    console.log(resultArray);
  }
}

f1(accounts, users);

// output

/*

[ 'Norah | IRA-4679 | 5175.36',
  'Norah | AAA-3571 | 3471072.38',
  'Norah | AAA-4671 | 138971.19' 
]

[ 'Alyx | ROT-1687 | 2686.00',
  'Alyx | AAA-7894 | 68761.32',
  'Alyx | IRA-6818 | 564.67',
  'Alyx | IRA-6819 | 3564.67' 
]

  */
