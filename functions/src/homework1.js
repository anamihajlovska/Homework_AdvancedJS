function product (name, category, hasDiscount, price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;

}

let products = [
    new product("orange", "food", true, 1.99),
    new product("banana", "food", false, 1.50),
    new product("shirt", "clothing", true, 9.99),
    new product("earrings", "accessories", false, 3.99),
    new product("laptop", "electronics", true, 499.99),
    new product("mobile", "electronics", false, 399.99),
    new product("jeans", "clothing", true, 15.99),
    new product("mascara", "makeup", true, 7.99),
    new product("shampoo", "hair", false, 4.99),
    new product("cleanser", "skincare", true, 9.99),
    new product("apple", "food", false, 1.99),
    new product("balloons", "party", false, 1.99),
    new product("scrub", "bath", true, 3.99),
    new product("conditioner", "hair", true, 4.99),
    new product("bracelet", "accessories", true, 5.99),

]

let productsGreaterThan20 = products.filter(product => product.price > 20)
console.log(productsGreaterThan20);

let foodOnDiscount = products.filter(product => product.category === "food" && product.hasDiscount).map(product => product.name)
console.log(foodOnDiscount);

let priceOfProductsOnDiscount = products.filter(product => product.hasDiscount).map(product => product.price)
console.log(priceOfProductsOnDiscount);

// let productsStartingWithVowelNotOnDiscount = [];
//  products
// .filter(product => /^[aeiou]/i.test(product.name) && !product.hasDiscount )
// .forEach(product => productsStartingWithVowelNotOnDiscount.push({name:product.name, price: product.price}))
// console.log(productsStartingWithVowelNotOnDiscount);

// let namesAndPricesOfProductsStartingWithVowelNotOnDiscount = productsStartingWithVowelNotOnDiscount.map(product => ({name: product.name, price: product.price}));
// console.log(namesAndPricesOfProductsStartingWithVowelNotOnDiscount[])

let productsStartingWithVowelNotOnDiscount = 
products.filter(product => !product.hasDiscount && /^[aeiou]/i.test(product.name))
.map(product => ({name: product.name, price: product.price}));  

console.log(productsStartingWithVowelNotOnDiscount)