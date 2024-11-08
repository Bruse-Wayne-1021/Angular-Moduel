export interface Registration{
    id:number,
    fullName:string,
    email:string,
    password:string,
    role:number
}

export enum Role{
    
    Admin=0,
    User=1,
    Viewer=2
}