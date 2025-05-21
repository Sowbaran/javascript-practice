//Example of block scoped

{
    var a = 5;
    let b  = 10;
    const c = 20;
    
}

console.log(a) //works
//console.log(b) //error
//console.log(c) //error


// Example of Regular function

function sum(a , b){
    return a + b;
}

console.log(sum(2,5))

//Example of Arrow functions

const add = (a,b) => a + b;
console.log(add(5,5));

// Array methods = {map(), filter(), reduce()}

//Example of map():
const prices = [4, 8, 15, 16, 23, 42];
const discountPrices = prices.map((price)=>{
    return price + 1
})
console.log(prices)
console.log(discountPrices)

//Example of filter():

const products  = [
    {name:"laptop", price: 499, color: "white"},
    {name:"smartphone", price:899, color: "black"},
    {name:"Heaadphones", price:50, color: "white"},
    {name:"Tablet", price:199, color: "blue"}
]

const affordableProducts = products.filter(product => product.price < 200)
console.log(affordableProducts)


//Example of reduce():
const price = [4, 8, 15, 16, 23, 42];
const totalPrice = price.reduce((total,currrentPrice)=>{
    return total + currrentPrice
})
console.log(totalPrice)

//Example of object creation

const data = {
    name:"Tablet", 
    price:199, 
    color: "blue"
}

console.log(data.name)
console.log(data["price"])

//Example of object destructuring
const data2 = {
    name:"Headphones", 
    pricee:80, 
    color: "purple"
}

console.log(data2.name)

const {name,pricee,color}  = data2;
console.log(color);

//Example of spread operator

const nums = [1,2,3,4]
const nums2 = [5,6,7,8]
const finalNums = [...nums, ...nums2]
console.log(finalNums)

//Example of Rest opeartor:
function ops(numbers){
    return numbers
}

console.log(ops(...nums,...nums2))

//Example of forEach loop:
const numbers = [1,2,3,4,5];
numbers.forEach((nums)=>{
    console.log(nums * 2)
})

//Example of for-In loop:
const posts= {
    id:1,
    title:"Post title",
    body:"post body"
}
for(let post in posts){
    console.log(posts[post])
}

//Example of for-of loop:
const fruits = ["apple","mango","orange"]
for(let fruit of fruits){
    console.log(fruit)
}

//Example of Promises
const ride = true
const p = new Promise((resolve,reject)=>{
   if(ride){
    resolve("Ride is confirmed!!")
   }else{
    reject("Ride cannot be possible at the movement....")
   }
}).then(value => {
    console.log(value)
}).catch(error =>{
    console.log(error)
})

//Example of Ternary operator 
const b = true
const check = b == true ? "HI!!!" :"Bye...";
console.log(check)

//Example of Template literals
const name2  = "sowbaran";
console.log(`Hello, ${name2}`)

//Example of Aysnc and await
async function fetchData() {
    return "Data fetched!";
}

fetchData().then(console.log); // Outputs: Data fetched!



