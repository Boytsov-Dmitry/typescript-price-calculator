import Card from '../Card';

test("adding items to card", () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, discount: 10,
    });

    card.add({
        id: 2, name: 'test2', price: 10,
    });

    const ideal = [{"discount": 10, "id": 1, "name": "test", "price": 10}, {"id": 2, "name": "test2", "price": 10}]

    expect(card.getAll()).toEqual(ideal);
})

test("testing getFullPrice function", () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, discount: 10,
    });

    card.add({
        id: 2, name: 'test2', price: 10,
    });

    const ideal = 20

    expect(card.getFullPrice()).toBe(ideal);
});

test("testing getPriceWithDiscout function", () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, discount: 10,
    });

    card.add({
        id: 2, name: 'test2', price: 10,
    });

    const ideal = 19;

    expect(card.getPriceWithDiscout()).toBe(ideal);
});

test("testing removeItemById function", () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, discount: 10,
    });

    card.add({
        id: 2, name: 'test2', price: 10,
    });

    card.removeItemById(1)

    const ideal = [{"id": 2, "name": "test2", "price": 10}];

    expect(card.getAll()).toEqual(ideal);
});


