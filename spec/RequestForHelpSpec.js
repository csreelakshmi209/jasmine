describe("RequestForHelp  test suite",()=>
{
    var help;
    beforeEach(()=>{
        console.log("beforeEach");
        help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
    })
    afterEach(()=>{
        help=null;
    })
    it ("verify  getRequestId() method",()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        expect(help. getRequestId()).toBe(102);
    });
    it("verify getNeedyPersonName() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        expect(help.getNeedyPersonName()).toBe("sree");
    });
    it("verify getPhone() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        expect(help.getPhone()).toBe("987654321");
    });
    
    it("verify getItem() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        expect(help.getItem()).toBe("CLOTHS");
    });
    it("verify getStatus() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        expect(help.getStatus()).toBe("pending");
    });
    it("verify setNeedypersonName() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        help.setNeedypersonName("Sree");
        expect(help.getNeedyPersonName()).toBe("Sree");
    });
    it("verify setPhone() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        help.setPhone("987654322");
        expect(help.getPhone()).toBe("987654322");
    });
    it("verify setItem() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        help.setItem("BOOKS");
        expect(help.getItem()).toBe("BOOKS");
    });
    it("verify setStatus() method" ,()=>{
        const help=new RequestForHelp(102,"sree","987654321","CLOTHS","pending");
        help.setStatus("success");
        expect(help.getStatus()).toBe("success");
    });
   
   
});