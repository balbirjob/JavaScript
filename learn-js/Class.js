class Student{
    constructor(roll, name, branch){
        this.roll = roll;
        this.branch = branch;
        this.name = name;

    }
    study(){
        console.log("I am study js");

    }
    party(){
        console.log("doing party");

    }
    intro(){
        console.log(this.roll);
        console.log(this.branch);
        console.log(this.name);

    }


}
st = new Student(111,"chand", "MCA");
st.intro();
st.study();
st.party();