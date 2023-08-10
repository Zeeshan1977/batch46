//Q44: Sandwiches: Write a function that accepts array of items a person wants on a sandwich.The function should have one parameter that collects as many item
//as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number
//of arguments each time.


function sandWich(Items, Qty) {
    var myOrder = "i want to order ".concat(Qty, "! ").concat(Items, "  with \"extra-cheese\",\"mayonese\",\"tomatoes\" please");
    return myOrder;
}
var confirmOrder1 = sandWich("grill Chicken", 1);
var confirmOrder2 = sandWich("Zinger", 2);
var confirmOrder3 = sandWich("grilled Cheese", 4);
console.log(confirmOrder1);
console.log(confirmOrder2);
console.log(confirmOrder3);
