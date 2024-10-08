import Buyable from "./Buyable";

export default class Card {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    };

    getAll(): Buyable[] {
        return [...this.items];
    };

    getFullPrice(): number {
        return this.items.reduce(((result, item) => result + item.price), 0)
    };

    getPriceWithDiscout(): number {
        let price = 0;

        for(const item of this.items) {
            if(item.discount) {
                price += item.price - (item.price * (item.discount / 100))
            };

            if(!item.discount) {
                price += item.price
            };
        };
        
        return price;
    }

    removeItemById(id: number): void {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
          this.items.splice(index, 1);
        };
    };
};

