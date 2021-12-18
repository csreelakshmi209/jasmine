describe("Address  test suite",()=>
{
    var address;
    beforeEach(()=>{
        console.log("beforeEach");
        address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
    })
    afterEach(()=>{
        address=null;
    })
    it ("verify getAddressId() method",()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        expect(address.getAddressId()).toBe(102);
    });
    it("verify getCity() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        expect(address.getCity()).toBe("rajampet");
    });
    it("verify getState() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        expect(address.getState()).toBe("andhraPradesh");
    });
    it("verify getPin() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        expect(address.getPin()).toBe("516127");
    });
    it("verify getLandmark() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        expect(address.getLandmark()).toBe("Kadapa");
    });
    it("verify setCity() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        address.setCity("kodur");
        expect(address.getCity()).toBe("kodur");
    });
    it("verify setState() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        address.setState("AP");
        expect(address.getState()).toBe("AP");
    });
    it("verify setPin() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        address.setPin("516128");
        expect(address.getPin()).toBe("516128");
    });
    it("verify setLandmark() method" ,()=>{
        const address=new Address(102,"rajampet","andhraPradesh","516127","Kadapa");
        address.setLandmark("rajampet");
        expect(address.getLandmark()).toBe("rajampet");
    });
   
});