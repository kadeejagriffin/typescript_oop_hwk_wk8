"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let thisItem = new Item('Purple pillow Case', 45.00, 'beautiful purple pillow cases as the perfect accent to your home');
console.log(thisItem);
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter(i => i.id !== item.id);
    }
    removeQuantityFromCart(item, quantity) {
        let numRemoved = 0;
        while (numRemoved < quantity) {
            let itemIndex = this.cart.findIndex(i => i.id === item.id);
            this.cart.splice(itemIndex, 1);
            numRemoved++;
        }
    }
    cartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        this.cart.forEach(item => console.log(item.name));
    }
}
let thisUser = new User('Kadeeja', 27);
console.log(thisUser);
class Shop {
    constructor(_item = []) {
        this._item = _item;
        let item1 = new Item('Comforter', 80.00, 'Super plush and comfy comforter to help you sleep on a cloud');
        this.item.push(item1);
        let item2 = new Item('Sheets', 40.00, 'Softest and stay new forever sheets. Enjoy!');
        this.item.push(item2);
        let item3 = new Item('Pillows', 25.00, 'The most comfortable to neck realigning pillows you will ever find!');
        this.item.push(item3);
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
}
let comfyStore = new Shop();
let user1 = new User('Kadeeja', 27);
user1.addToCart(comfyStore.item[0]);
user1.addToCart(comfyStore.item[1]);
user1.addToCart(comfyStore.item[1]);
user1.addToCart(comfyStore.item[1]);
user1.addToCart(comfyStore.item[2]);
user1.addToCart(comfyStore.item[0]);
user1.addToCart(comfyStore.item[2]);
user1.addToCart(comfyStore.item[2]);
console.log(user1);
user1.printCart();
console.log('Total:', user1.cartTotal());
user1.removeFromCart(comfyStore.item[1]);
user1.removeQuantityFromCart(comfyStore.item[1], 1);
user1.printCart();
console.log('Total:', user1.cartTotal());
