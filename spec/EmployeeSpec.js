describe("Employee  test suite",()=>
{
    var employee;
    beforeEach(()=>{
        console.log("beforeEach");
        employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
    })
    afterEach(()=>{
        employee=null;
    })
    it ("verify getEmployeeId() method",()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getEmployeeId()).toBe(101);
    });
    it("verify getEmployeeName() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getEmployeeName()).toBe("Sree");
    });
    it("verify getEmail() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getEmail()).toBe("sree@gmail.com");
    });
    it("verify getPhone() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getPhone()).toBe("987654321");
    });
    it("verify getUsername() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getUsername()).toBe("SREELAK");
    });
    it("verify getPassword() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(employee.getPassword()).toBe("sree12345");
    });
    it("verify setEmployeeName() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        employee.setEmployeeName("Sreelakshmi");
        expect(employee.getEmployeeName()).toBe("Sreelakshmi");
    });
    it("verify setEmail() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        employee.setEmail("sree12@gmail.com");
        expect(employee.getEmail()).toBe("sree12@gmail.com");
    });
    it("verify setPhone() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        employee.setPhone("sree12@gmail.com");
        expect(employee.getPhone()).toBe("sree12@gmail.com");
    });
    it("verify setUsername() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        employee.setUsername("CSREELAK");
        expect(employee.getUsername()).toBe("CSREELAK");
    });
    it("verify setPassword() method" ,()=>{
        const employee=new Employee(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        employee.setPassword("1234512345");
        expect(employee.getPassword()).toBe("1234512345");
    });
    //x----> it will skip
    //ref comparison
    // xit("toBe()",()=>{
    //     const emp1=new Employee(101,"Sree","sree@gmail.com");
    //     const emp2=new Employee(101,"Sree","sree@gmail.com");
    //     expect(emp1).toBe(emp2);
    // });
    //content comparision
    //f----> focus
    it("toEqual()",()=>{
        const emp1=new Employee(101,"Sree","sree@gmail.com");
        const emp2=new Employee(101,"Sree","sree@gmail.com");
        expect(emp1).toEqual(emp2);
    })

    // it("toBeTruthy()",()=>{
    //     expect(true).toBeTruthy();
    // })
    // it("toContains()",()=>{
    //     expect("hello world").toContain("world");
    // });
    // it("toMatch()",()=>{
    //     expect("hello world").toMatch("[a-zA-Z]+");
    // })
   
});