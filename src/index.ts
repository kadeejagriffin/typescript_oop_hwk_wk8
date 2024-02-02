import {v4 as uuidv4 } from "uuid";


class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4(),
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}
let thisItem = new Item('Purple pillow Case', 45.00, 'beautiful purple pillow cases as the perfect accent to your home')  
console.log(thisItem)

class User {
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4(),
    ){}
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value:Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public addToCart(item:Item): void{
        this.cart.push(item)
    }

    public removeFromCart(item:Item){
        this.cart = this.cart.filter(i => i.id !== item.id)
    }
    
    public removeQuantityFromCart(item:Item, quantity:number){
        let numRemoved = 0;
        while (numRemoved < quantity){
            let itemIndex = this.cart.findIndex( i => i.id === item.id )
            this.cart.splice(itemIndex, 1)
            numRemoved++
        }
    }

    public cartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        }
        return total
    }

    public printCart():void{
        this.cart.forEach( item => console.log(item.name))
    }
}
let thisUser = new User('Kadeeja', 27);
console.log(thisUser)

class Shop {
    constructor(
        private _item: Item[] = []
    ){
        let item1 = new Item('Comforter', 80.00, 'Super plush and comfy comforter to help you sleep on a cloud');
        this.item.push(item1);
        let item2 = new Item('Sheets', 40.00, 'Softest and stay new forever sheets. Enjoy!');
        this.item.push(item2)
        let item3 = new Item('Pillows', 25.00, 'The most comfortable to neck realigning pillows you will ever find!');
        this.item.push(item3)
    }

    public get item(): Item[] {
        return this._item;
    }
    public set item(value: Item[]) {
        this._item = value;
    }

    
}

let comfyStore = new Shop();
let user1 = new User('Kadeeja', 27);

user1.addToCart(comfyStore.item[0])
user1.addToCart(comfyStore.item[1])
user1.addToCart(comfyStore.item[1])
user1.addToCart(comfyStore.item[1])
user1.addToCart(comfyStore.item[2])
user1.addToCart(comfyStore.item[0])
user1.addToCart(comfyStore.item[2])
user1.addToCart(comfyStore.item[2])

console.log(user1)

user1.printCart();
console.log('Total:', user1.cartTotal());

user1.removeFromCart(comfyStore.item[1]);
user1.removeQuantityFromCart(comfyStore.item[1], 1);

user1.printCart();
console.log('Total:', user1.cartTotal());


