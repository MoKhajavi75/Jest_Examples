test("Primitive type comparison", () => {
  expect(2).toBe(2);
  expect(3).not.toBe(3.5);
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();

  expect(2).not.toBe(3);
  expect(true).not.toBeFalsy();
  expect(false).not.toBeTruthy();
});

it("Reference type comparison", () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    }
  ];

  expect(users[0]).toBe({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  });

  expect(users[0]).toEqual({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  });
});
