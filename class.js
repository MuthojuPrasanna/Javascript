class Student{
    constructor(){
        this.id=101;
        this.name="Manaswini";
    }
    displayInfo(){
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
s.displayInfo();