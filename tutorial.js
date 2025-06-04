"use strict";
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
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("No user was found with that user name");
    }
    //print remaining similarly
};
printErrorMsg(LoginError.NoUser);
