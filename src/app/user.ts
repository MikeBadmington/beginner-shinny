export interface Roles {
    admin: Boolean;
    player: Boolean;

}

export class User {

    first_Name: String;
    last_Name: String;
    email: String;
    phone_Num: String;
    role: Roles;


}