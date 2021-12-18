class Employee{

    //constructor to initialize values
    constructor(employeeId,employeeName,email,phone,username,password)
    {
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.email=email;
        this.phone=phone;
        this.username=username;
        this.password=password;
    }

    //getters and setters
    setEmployeeId(employeeId)
    {
        this.employeeId=employeeId;
    }
    setEmployeeName(employeeName)
    {
        this.employeeName=employeeName;
    }
    setEmail(email)
    {
        this.email=email;
    }
    setPhone(phone)
    {
        this.phone=phone;
    }
    setUsername(username)
    {
        this.username=username;
    }
    setPassword(password)
    {
        this.password=password;
    }
    getEmployeeId()
    {
        return this.employeeId;
    }
    getEmployeeName()
    {
        return this.employeeName;
    }
    getEmail()
    {
        return this.email;
    }
    getPhone()
    {
        return this.phone;
    }
    getUsername()
    {
        return this.username;
    }
    getPassword()
    {
        return this.password;
    }
}