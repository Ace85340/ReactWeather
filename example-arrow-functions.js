var names = ['Ryan', 'Tom', 'Maggie'];

names.forEach(function (name) {
    console.log('foreach', name);
});

// ES6 with multiline (statement)
names.forEach((name) => {
    console.log('arrowFunc', name);
});

// ES6 single command (expression)
names.forEach((name) => console.log(name));

// ES6 arrow function on var
var returnMe = (name) => name + '!';
console.log(returnMe('Ryan'));

// NOTE - anonymous functions have This binding,
// arrow functions take on the parents This binding



//
// ES5 example of This binding
//
// var person = {
//     name: 'Ryan',
//     greet: function() {
//         names.forEach(function() {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
// person.greet();

//
// ES6 version
//
var person = {
    name: 'Ryan',
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};
person.greet();



// Simple function comparison
var addStatement = (a, b) => {
    return a+b;
};

var addExpression = (a, b) => a+b; // Expression value automatically gets returned
console.log(addExpression(3,2));
