describe("DonateToNgo  test suite",()=>
{
    var donatengo;
    beforeEach(()=>{
        console.log("beforeEach");
        donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
    })
    afterEach(()=>{
        donatengo=null;
    })
    it ("verify  getRegistrationNumber() method",()=>{
        const donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
        expect(donatengo. getRegistrationNumber()).toBe(102);
    });
    it("verify getNgoName() method" ,()=>{
        const donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
        expect(donatengo.getNgoName()).toBe("branch1");
    });
    it("verify getTotalCollection() method" ,()=>{
        const donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
        expect(donatengo.getTotalCollection()).toBe(50000);
    });
   

    it("verify setNgoName() method" ,()=>{
        const donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
        donatengo.setNgoName("branch2");
        expect(donatengo.getNgoName()).toBe("branch2");
    });
    it("verify setTotalCollection() method" ,()=>{
        const donatengo=new DonateToNgo(102,"sbi1234567","branch1",50000);
        donatengo.setTotalCollection(70000);
        expect(donatengo.getTotalCollection()).toBe(70000);
    });
   
});