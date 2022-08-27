//1
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        return`
        Title:${this.title}
        Studio:${this.studio}
        Title:${this.rating}
        `
    }
}
 let Movie1=new Movie("Casino Royale","Eon Productions","PG13");
 console.log(Movie1.getPG())
 //output
        //Title:Casino Royale
        //Studio:Eon Productions
        //Title:PG13

//2.
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get calc(){
        console.log("The properties of the Circle are below")
        console.log(this.circleradius());
        console.log(this.circlecircumfurance());
        console.log(this.circlearea());
    }
    circleradius(){
        return`The radius is ${this.radius}`;

    }
    circlecircumfurance(){
        return` The circumfurance is ${(this.radius*2*Math*PI)}`
    }
    circlearea(){
        return`The area is ${(Math.pow(this.radius,3)*4*Math*PI/3).toFixed(2)}
        `
    }
}

var rad1=new circle(1.0,"red");
console.log(rad1);
console.log(rad1.calc);
var rad2=new circle(5,"blue");
console.log(rad2);
console.log(rad2.calc);

//3.

class Person {
    constructor(name,age,school,address){
        this.name=name;
        this.age=age;
        this.school=school;
        this.address=address;
    }
    getData(){
        return `
        Name:${this.name}
        Age:${this.age}
        School:${this.school}
        Address:${this.address}
        `
    }
    
}

let Person1=new Person("Sourav",20,"PNBI","Purbasthali");
console.log(Person1.getData());

//4.
class uberprice{
    constructor(baseprice,kilometre,tax){
        this.baseprice=baseprice;
        this.kilometre=kilometre;
        this.tax=tax;
    }
}

const price = new uberprice(100,10,200); 

console.log(price);
//output:

//uberprice { baseprice: 100, kilometre: 10, tax: 200 }

 //day-7 Array Methods
//a.
//let object=[Rest countries data]
 let data=object.filter((x)=>{
    return x.region =="Asia";
  })
 //// console.log(data);
 //b.
  let data2=object.filter((y)=>{
   return y.population >200000;
 })
 //console.log(data2);
 //c.let data
let data6=[];
data6=object.forEach(c => {
    return` 
    Name:${object.name}
    Flag:${object.flag}
    Capital:{object.capital}`
    
});
console.log(data6);


 //d.
 let data3=object.reduce((a,b)=>{
   return a + b.population;
 })
 console.log(data3);
 //e.
 let data4=object.filter((z)=>{
   return z.currencies=="US Dollars";
 }).map((obj)=>{
    return`
    Name:{obj.name}`
 })
 
 
 
        