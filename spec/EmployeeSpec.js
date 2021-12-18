describe("Employee  test suite",()=>
{
    var employee;
    beforeEach(()=>{
        console.log("beforeEach");
        employee=new Employee(101,"Sree","sree@gmail.com",);
    })
    afterEach(()=>{
        employee=null;
    })
    it ("verify getEmployeeId() method",()=>{
        const employee= new Employee(101,"Sree","sree@gmail.com");
        expect(employee.getEmployeeId()).toBe(101);
    });
    it("verify getEmployeeName() method" ,()=>{
        const employee= new Employee(101,"Sree","sree@gmail.com");
        expect(employee.getEmployeeName()).toBe("Sree");
    });
    it("verify getEmail() method" ,()=>{
        const employee= new Employee(101,"Sree","sree@gmail.com");
        expect(employee.getEmail()).toBe("sree@gmail.com");
    });
    it("verify setEmployeeName() method" ,()=>{
        const employee= new Employee(101,"Sree","sree@gmail.com");
        employee.setEmployeeName("Sreelakshmi");
        expect(employee.getEmployeeName()).toBe("Sreelakshmi");
    });
    //x----> it will skip
    //ref comparison
    xit("toBe()",()=>{
        const emp1=new Employee(101,"Sree","sree@gmail.com");
        const emp2=new Employee(101,"Sree","sree@gmail.com");
        expect(emp1).toBe(emp2);
    });
    //content comparision
    //f----> focus
    it("toEqual()",()=>{
        const emp1=new Employee(101,"Sree","sree@gmail.com");
        const emp2=new Employee(101,"Sree","sree@gmail.com");
        expect(emp1).toEqual(emp2);
    })

    it("toBeTruthy()",()=>{
        expect(true).toBeTruthy();
    })
    it("toContains()",()=>{
        expect("hello world").toContain("world");
    });
    it("toMatch()",()=>{
        expect("hello world").toMatch("[a-zA-Z]+");
    })
   
});