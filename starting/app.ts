enum Role { ADMIN, READ_ONLY, AUTHOR }; // same to below
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const person= {
    name: "Alex",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

console.log(person.name); 

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}