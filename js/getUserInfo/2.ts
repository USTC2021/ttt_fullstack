interface IUser {
    name: string;
    age: number
}
const get_Info = (user:IUser):string =>`
    name: ${user.name},
    age: ${user.age}
`