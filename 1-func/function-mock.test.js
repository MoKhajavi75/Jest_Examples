const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
];


function calcWorth(posts, callback) {
    let worth = 0;
    for (let index = 0; index < posts.length; index++) {
      worth += callback(posts[index]);
    }
    return worth;
}

it('worth mock callback', () => {
    const mockCallback = jest.fn((post) => 1);
    const worth = calcWorth(posts, mockCallback);
    expect(worth).toBe(posts.length);
    // console.log(worth)
})

it('worth mock callback', () =>{
    const mockCallback = jest.fn((post) => 1);

    const worth = calcWorth(posts, mockCallback);

    expect(worth).toBe(posts.length);
})

it('worth mock calls', () => {
    const mockCallback = jest.fn();

    calcWorth(posts, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(posts.length);
});

it('worth mock return value', () => {
    const mockCallback = jest.fn();
    mockCallback
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(20)
        .mockReturnValue(2);

    const worth = calcWorth(posts, mockCallback);

    expect(worth).toBe(10 + 20 + 2 * (posts.length - 2));
});