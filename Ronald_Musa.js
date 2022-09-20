//ASSIGNMENT
//Define seven classes with atleast 5 parameters using the <this> keyword and atleast 3 instances using the <new> keyword.
// 1
var newPen = new Pen("Bic", 1980);

console.log(`My Pen is {newPen.age()} years old.`);


// 2
const chairman = {
	firstName: "Musa",
	lastName: "Mayanja Bel",
	age: 50,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

console.log(chairman.fullName());

//3
 
function Shoes(company, name, color, type, country){
    this.company = company;
    this.name = name;
    this.color = color;
    this.type = type;
    this.country = country
}
 
let nike = new Shoes("Nike", "Air force", "White", "sneakers", "USA");
let addidas = new Shoes("addida", "old school", "Black", "high heel", "London");
let skechers = new Shoes("skecher", "fila", "grey", "gentle", "china")
 
 
//4
 
function Books(name, color, pages, lines, company){
    this.name = name;
    this.color = color;
    this.pages = pages;
    this.lines = lines;
    this.company = company
}
 
//instantiating a class
let picfare = new Books("picfare", "black", "200", 10000, "picfare");
let WalsworthPublishing = new Books("Walsworth", "grey", "6777", "Walsworth Publishing")
let mkPublishers = new Books("MK", "Blue", 1000000, 6877654, "MK Publisher")
 
 
//5
 
function Phones(company, name, color, android_version, storage, RAM, battery){
    this.company = company;
    this.name = name;
    this.color = color;
    this.android_version = android_version;
    this.storage = storage;
    this.RAM = RadioNodeList;
    this.battery = battery
}
 
var samsung = new Phones("samsung", "S20", "black", 11.1, "500gb", "12gb", "5000MA" );
var tecno = new Phones("Tecno", "pop2", "grey", 5.4, "16gb", "1gb", "3000MA");
var infinix = new Phones("infinix", "smart5", "green", 8.4, "32gb", "3gb", "4000MA")
 
 
//6
function Person(name, email, location, village, age, gender){
    this.name = name;
    this.email = email;
    this.location = location;
    this.village = village;
    this.age = age;
    this.gender = gender
}
 
let ronald = new Person("Ronald", "ronald@gmail.com", "kampala", "luwero",20, "male");
let mic = new Person("Mico","mico@gmail.com", "wakiso", "masaka", "23", "male")
let gloria = new Person("Gloria", "gloria@gmail.com", "mukono", "mityana", 32, "female")
 
 
//7
 
function Company(name, email, address, website, workers){
    this.name = name;
    this.email = email;
    this.address = address;
    this.website = website;
    this.workers = workers
}
 
var comapy1 = new Company("Ham LTD", "HAM@gmail.com", "mukono-jinja high way", "www.ham.ug", "300 workers");
var company2 = new Company("Mico and advocates", "mico09@gmail.com", "kampala-old0park", "www.mico.com", "200workers")
var compay3 = new Company("kiku LTD", "kiku@gmai.com", "kireka", "www.kiku.com", "150 workers")
 
 
 
//8
 
function StudentDetails(name, email, id, gender, weight, color, age){
    this.name = name,
    this.email = email,
    this.id = id,
    this.gender = gender,
    this.weight = weight,
    this.color = color,
    this.age = age
 
    this.getMyAge = () => {
        if(this.age < 18){
            console.log(`${this.name} your stil young`);
        }else if(this.getMyAge >= 18){
            console.log(`${this.name} your starting to grow`);
        }else if(this.age >= 45){
            console.log(`${this.name} you are a youth`);
        }else{
            console.log(`${this.name} you are an old man`);
        }
    }
 
}
let person2 = new StudentDetails("Ronald", "info@mico.com", "GH329IKD3", "male", 60, "white", 18)
 
console.log(person2.getMyAge());
 
//9
 
class UserCredentials{
 
    constructor(name, email, id, gender, weight, color, age){
        this.name = name,
        this.email = email,
        this.id = id,
        this.gender = gender,
        this.weight = weight,
        this.color = color,
        this.age = age
 
    }
    getName(){
     if(this.weight == 50){
        console.log("your are really heavy");
     } else {
        console.log("your need to gain more weight");
     }
    }
 
    myAge = () => {
        return this.age
    }
 
    get personalColor(){
        return this.color
    }
 
    set personalWeight(weight1){
        return this.weight = weight1
    }
}
 
let person1 = new  UserCredentialsn("Ronald", "info@mico.com", "GH329IKD3", "male", 60, "white", 24)
console.log(person1.myAge());
 
console.log(person1.personalColor);
person1.personalWeight = 44
console.log(person1.weight);
console.log(typeof Person);
