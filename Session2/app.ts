{
    // const person: {
    //     name: string;
    //     age: number;
    // } = {
    // const person: {
    //     name: string;
    //     age: number;
    //     hobbies: string[];
    //     role: [number, string];
    // } = {
    //     name: "Beau",
    //     age: 27,
    //     hobbies: ["Games", "Cooking"],
    //     role: [2, "author"]
    // };

    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR = 2;

    enum Role {
        ADMIN = "ADMIN",
        READ_ONLY = 100,
        AUTHOR = "AUTHOR"
    }

    const person = {
        name: "Beau",
        age: 27,
        hobbies: ["Games", "Cooking"],
        role: Role.ADMIN
    };

    //person.role.push("admin"); // Exception to the rule
    //person.role[1] = 10;

    //person.role = [0, "admin", "user"];

    let favoriteActivites: string[];
    favoriteActivites = ["Sports"];

    console.log(person.name);

    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        //console.log(hobby.map()); // !!! ERROR !!!
    }

    if (person.role === Role.AUTHOR) {
        console.log("is author");
    }
}
