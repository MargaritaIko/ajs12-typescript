import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    sum(): number {
        let sum: number = 0;
        this._items.forEach((item: Buyable) => sum += item.price);
        return sum;
    }

    totalSum(discount: number): number {
        let bestOffer: number = 0;
        bestOffer = this.sum() * (1 - discount / 100);
        return bestOffer;
    }

    removeItem(id: number): void {
        const idx: number = this._items.findIndex((item: Buyable) => item.id === id);
        this._items.splice(idx, 1);
    }
}