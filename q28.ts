// Q28 Assignment No 01 Batch 46 Q1

//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let age = 66;
if (age < 2) {
    console.log(`the person is a baby and its age is ${age}`)
} else if (age >1 && age <4) {
    console.log(`the person is a toddler and its age is ${age}`)
}else if (age >3  && age <13) {
    console.log(`the person is a kid and its age is ${age}`)
}else if (age >12  && age <20) {
    console.log(`the person is a teenager and its age is ${age}`)
}else if (age >19  && age <65) {
    console.log(`the person is a adult and its age is ${age}`)
}else if (age >=65) {
    console.log(`the person is a elder and its age is ${age}`)
}