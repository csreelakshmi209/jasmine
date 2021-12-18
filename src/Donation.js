class Donation{
    constructor(donationId,donationAmount,donationDate)
    {
        this.donationId=donationId;
        this.donationAmount=donationAmount;
        this.donationDate=donationDate;
    }
    setDonationId(donationId)
    {
        this.donationId=donationId;
    }
    setDonationAmount(donationAmount)
    {
        this.donationAmount=donationAmount;
    }
    setDonationDate(donationDate)
    {
        this.donationDate=donationDate;
    }
    getDonatonId()
    {
        return  this.donationId;
    }
    getDonatonAmount()
    {
        return  this.donationAmount;
    }
    getDonatoDate()
    {
        return  this.donationDate;
    }
}