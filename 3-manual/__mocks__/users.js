const users = jest.genMockFromModule('./users');

users.generateUser = () => {
    return {
        id: '0d020dd8-3688-484c-abf8-dac74680c106',
        name: 'Leanne Graham',
    }
}

users.validateUser = ({id, name}) => {
    return true;
}

module.exports = users;