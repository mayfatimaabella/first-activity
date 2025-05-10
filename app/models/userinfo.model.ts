enum Gender{
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

enum CivilStatus{
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed", 
    Separated = "Separated"
}

class UserInfo{
    private firstname:string;
    private middlename:string;
    private lastname:string;
    private phoneno:string;
    private gender: Gender;
    private birthdate:Date;
    private address:string;
    private civilstatus: CivilStatus;

    public constructor(firstname:string,middlename:string, lastname:string, phoneno:string, gender:Gender, birthdate: Date,address:string, civilstatus:CivilStatus){
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.phoneno = phoneno;
        this.gender = gender;
        this.birthdate = birthdate;
        this.address = address;
        this.civilstatus = civilstatus;
    }

    public getFirstName(): string{
        return this.firstname;
    }

    public getMiddleName(): string{
        return this.middlename;
    }

    public getLastName(): string{
        return this.lastname;
    }

    public getPhoneNo(): string{
        return this.phoneno;
    }

    public getGender():Gender{
        return this.gender;
    }

    public getBirthDate():Date{
        return this.birthdate;
    }

    public getAddress():string{
        return this.address;
    }

    public getCivilStatus():CivilStatus{
        return this.civilstatus;
    }
}

const userinfo = new UserInfo("Manel", "T.", "Fabillar", "012345679", Gender.Female, new Date ('1999-01-24'), "Magallanes Street", CivilStatus.Single);
console.log("User Name: " + userinfo.getFirstName() + " " + userinfo.getLastName());