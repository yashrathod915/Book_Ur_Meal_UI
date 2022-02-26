import { Address } from 'app/core/UserAddress';
export class User{
    userName:String
    mailId:String
    userPassword:String
    mobileNumber:String
    address:Address
    role:{
            roleId:number
            roleName:any
    }
}