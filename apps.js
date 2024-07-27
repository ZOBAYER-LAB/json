// JSON.stringify.parse

// object declartion

var student={
    names:'jobayer islam',
    age:16,
    collgeneName:'haji osman goni',
    clas:12,
}

// JSON.stringify convert
var studentInformation=JSON.stringify(student);
// console.log(studentInformation);
// result::::{"names":"jobayer islam","age":16,"collgeneName":"haji osman goni","clas":12}

// json to convert parche normal object

var studentStriP=JSON.parse(studentInformation);
console.log(studentInformation);