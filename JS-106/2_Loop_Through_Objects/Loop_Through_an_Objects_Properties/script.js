const composer = {
    name: 'Edward Ellington',
    nickname: 'Duke',
    genres: ['jazz', 'swing'],
    instrument: 'piano'
  };

  for(let obj in composer){
    console.log(`${obj}: ${composer[obj]}`);
  }