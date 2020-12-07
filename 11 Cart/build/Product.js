"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(ref, option) {
        this.ref = ref;
        this.option = option;
    }
    set ref(ref) {
        this._ref = ref;
    }
    get ref() {
        return this._ref;
    }
    set option(option) {
        this._option = option;
    }
    get option() {
        return this._option;
    }
}
exports.Product = Product;
