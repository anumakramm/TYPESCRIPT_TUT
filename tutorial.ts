// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublihshed: boolean = true;

// let ids : number[] = [1,2,3,4,5];
// let x : any = "pedro";
// let xArr : any[] = ["pedro, 0, true"];
//---------------------------------------------
// const concatenateValues = (a: string,b: string): string => {
//     return a + b;
//     // return 3;
// };

// console.log(concatenateValues("Hello", "world"));
// console.log(concatenateValues("5", "10"));

//---------------------------------------------
// interface UserInterfce{
//     id: number,
//     name: string,
//     age?: number,
//     greet(message: string): void;
// }

// const User: UserInterfce = {
//     id: 2,
//     name: "Pedro",
//     // age: 22,

//     greet(message) {
//         console.log(message);
//     },
// }
// User.age = "22";
// User.greet("Hello");

// if(!User.age){
//     console.log("No Age Of the User");
// }else{
// console.log(User.age);
// }


//---------------------------------------------
//Type Union
// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//     console.log("ID: " + id);
// }

// printID("id123");
// printID(2342344234);

// //Type Intersection
// interface BusinessPartner {
//     name: string;
//     creditScore: number;
// }

// interface UserIdentity {
//     id: number;
//     email: string;
// }

// type Employee = BusinessPartner & UserIdentity

// const signContract = (employee: Employee): void => {
//     console.log("Contract signed by" + employee.name + " with email: " + employee.email);
// }

// signContract({
//     name: "Pedro",
//     creditScore: 800,
//     id: 34,
//     email: "pedro@gmail.com",
// });

//---------------------------------------------
//ENUMS

//unauthorized, user doesn't exist, wrong credentials,internal error

// enum LoginError {
//     Unauthorized = "unauthorized",
//     NoUser = "nouser",
//     WrongCredentials = "wrongcredentials",
//     Internal = "internal",
// }

// const printErrorMsg = (error: LoginError) => {
//     if(error == LoginError.Unauthorized){
//         console.log("User not authorized");
//     }else if(error == LoginError.NoUser){
//        console.log("No user was found with that user name"); 
//     }
//     //print remaining similarly
// };

// printErrorMsg(LoginError.NoUser);

//---------------------------------------------
//Generic types

// class StorageContianer<T> {
//     private contents: T[];

//     constructor(){
//         this.contents = [];
//     }

//     addItem(item: T): void {
//         this.contents.push(item);
//     }

//     getItem(idx: number): T | undefined{
//         return this.contents[idx];
//     }
// }

// const usernames = new StorageContianer<string>();
// usernames.addItem("pedrotech");
// usernames.addItem("echo br");

// console.log(usernames.getItem(0));

// const friendsCount = new StorageContianer<number>();
// friendsCount.addItem(23);
// friendsCount.addItem(678);

// console.log(friendsCount.getItem(0));

//---------------------------------------------