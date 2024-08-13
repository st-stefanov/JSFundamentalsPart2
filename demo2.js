function demo(){
    let softuniStudent = {
        username: "Ivan",
        age: 26,
        averageGrade: 5.51,
        sayHello(){
            console.log("Hey guys!")
        }
    }
    softuniStudent.sayHello();

    softuniStudent.sayGoodBye = () => {
        console.log("Ciao")
    }

    softuniStudent.sayGoodBye();

    softuniStudent.location = "Sofia";
    softuniStudent.gender = "male";

    console.log(softuniStudent);
}
demo()