export class User{
    private id: number;
    private username:string;
    private email:string;
    private password:string;

    public constructor(id: number, username:string, email:string, password:string){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public getUsername(): string{
        return this.username;
    }

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }
}

// const user = new User("manel123","example@email.com","25");
// console.log("Password: " + user.getPassword());