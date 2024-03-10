class Member {
    memberType = "";
    name = "";
    accessor = "";
    constructor(memberType, name, account){
        this.memberType = memberType;
        this.name = name;
        this.account  = account;
    }

    toString(){
        return `Meber [memberType = ${this.memberType},
                name name = ${this.name},
                account = ${this.account}]`;
    }
}

class GeneralReader extends Member {
    year = 0;
    constructor(year,memberType, name, account){
        super(memberType, name, account);
        this.year = year;
    }

    toString(){
        return `GeneralReader [${super.toString()}
                ,year = ${this.year}
                ]`;
    }
}

class Student extends Member {
    userID = "";
    constructor(userID,memberType, name, account){
        super(memberType, name, account);
        this.userID = userID;
    }
    toString() {
        return `Student [${super.toString()},
                userID = ${this.userID}]`;
    }
}

class Staff extends Member {
    staffID = "";
    constructor(staffID,memberType, name, account){
        super(memberType, name, account);
        this.staffID = staffID;
    }
    toString(){
        return `Staff [${super.toString()},
                staffID = ${this.staffID}]`;
    }
}
const main =() => {
 const member1 = new Member ("staff", "Punsan", "Punsanzaza");
 const generalReader1 = new GeneralReader (2565, "GeneralReader", "vick", "vickypiheemaitukwan");
const studernt1 = new Student ("654259026", "student", "j", "JJ2546");
const staff1 = new Staff ("S025", "Staff", "Johnvic", "johnjohn555")
 console.log(member1.toString());
 console.log("*/////\\\\\*");
 console.log(studernt1.toString());
 console.log("*/////\\\\\*");
 console.log(generalReader1.toString());
 console.log("*/////\\\\\*");
 console.log(staff1.toString());
} 
main();