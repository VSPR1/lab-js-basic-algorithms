console.log("I'm ready!");

const hacker1 = "John Cena";
console.log(The driver's name is ${hacker1});
const hacker2 = "Dwayne Johnson";
console.log(The navigator's name is ${hacker2});

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(The driver has the longest name, it has ${hacker1.length} characters.);
}else if(hacker1.length < hacker2.length){
    console.log(It seems that the navigator has the longest name, it has ${hacker2.length} characters.);
}else{
    console.log(Wow, you both have equally long names, ${hacker1.length} characters!);
}


// Iteration 3: Loops
// 3.1
var formattedName = '';
for (var i=0; i<hacker1.length; i++){

    formattedName += hacker1[i].toUpperCase();

    if(i !== hacker1.length-1){
        formattedName += ' ';
    }

}
console.log(formattedName);

var reversedName = '';
for (var i=hacker1.length-1; i>=0; i--){
    reversedName += hacker1[i];
}
console.log(reversedName);

// 3.3
if(hacker1.toUpperCase() < hacker2.toUpperCase()){
    console.log("The driver's name goes first.");
}else if(hacker1.toUpperCase() > hacker2.toUpperCase()){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}



