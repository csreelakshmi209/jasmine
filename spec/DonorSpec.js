describe("Donor  test suite",()=>
{
    var donor;
    beforeEach(()=>{
        console.log("beforeEach");
        donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
    })
    afterEach(()=>{
        donor=null;
    })
    it ("verify getDonorId() method",()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorId()).toBe(101);
    });
    it("verify getDonorName() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorName()).toBe("Sree");
    });
    it("verify getDonorEmail() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorEmail()).toBe("sree@gmail.com");
    });
    it("verify getDonorPhone() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorPhone()).toBe("987654321");
    });
    it("verify getDonorUsername() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorUsername()).toBe("SREELAK");
    });
    it("verify getDonorPassword() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        expect(donor.getDonorPassword()).toBe("sree12345");
    });
    it("verify setDonorName() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        donor.setDonorName("Sreelakshmi");
        expect(donor.getDonorName()).toBe("Sreelakshmi");
    });
    it("verify setDonorEmail() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        donor.setDonorEmail("sree12@gmail.com");
        expect(donor.getDonorEmail()).toBe("sree12@gmail.com");
    });
    it("verify setDonorPhone() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        donor.setDonorPhone("sree12@gmail.com");
        expect(donor.getDonorPhone()).toBe("sree12@gmail.com");
    });
    it("verify setDonorUsername() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        donor.setDonorUsername("CSREELAK");
        expect(donor.getDonorUsername()).toBe("CSREELAK");
    });
    it("verify setDonorPassword() method" ,()=>{
        const donor=new Donor(101,"Sree","sree@gmail.com","987654321","SREELAK","sree12345");
        donor.setDonorPassword("1234512345");
        expect(donor.getDonorPassword()).toBe("1234512345");
    });
});