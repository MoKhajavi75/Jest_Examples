const users = require("./users");
const uuidv4 = require("uuid-v4");

jest.mock("uuid-v4");

const realUUIDv4 = jest.requireActual("uuid-v4");

it("Module mocking", () => {
  const pregeneratedUUID = realUUIDv4.generate();
  uuidv4.generate.mockReturnValue(pregeneratedUUID);
  console.table(users.generateUser());
  expect(users.generateUser().id).toEqual(pregeneratedUUID);
});
