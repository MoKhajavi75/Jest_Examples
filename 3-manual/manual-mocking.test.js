const users = require('./users');

jest.mock('users');


it('Manual mocking', () => {
    const user = users.generateUser();
    console.table(user);
});