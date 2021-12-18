class Donor{

    //constructor to initialize values
    constructor(donorId,donorName,donorEmail,donorPhone,donorUsername,donorPassword)
    {
        this.donorId=donorId;
        this.donorName=donorName;
        this.donorEmail=donorEmail;
        this.donorPhone=donorPhone;
        this.donorUsername=donorUsername;
        this.donorPassword=donorPassword;
    }

    //getters and setters
    setDonorId(DonorId)
    {
        this.donorId=donorId;
    }
    setDonorName(donorName)
    {
        this.donorName=donorName;
    }
    setDonorEmail(donorEmail)
    {
        this.donorEmail=donorEmail;
    }
    setDonorPhone(donorPhone)
    {
        this.donorPhone=donorPhone;
    }
    setDonorUsername(donorUsername)
    {
        this.donorUsername=donorUsername;
    }
    setDonorPassword(donorPassword)
    {
        this.donorPassword=donorPassword;
    }
    getDonorId()
    {
        return this.donorId;
    }
    getDonorName()
    {
        return this.donorName;
    }
    getDonorEmail()
    {
        return this.donorEmail;
    }
    getDonorPhone()
    {
        return this.donorPhone;
    }
    getDonorUsername()
    {
        return this.donorUsername;
    }
    getDonorPassword()
    {
        return this.donorPassword;
    }
}