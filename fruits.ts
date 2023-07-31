//q29 Fruits Description
// Q29 Assignment No 01 Batch 46 Q1
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
//the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['Mango','Pineapple','Banana'];
let frouits = ['Guawa','Grapes','Banana','Pears','Apple'];
for (let a = 0; a < frouits.length; a++) {
 for (let b = 0 ; b<favorite_fruits.length;b++) {
    if (frouits[a] === favorite_fruits[b] ){
        console.log(`I got your favorite fruit ${frouits[a]}`)
        break
    }
    
 }
}