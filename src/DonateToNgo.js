class DonateToNgo{
    constructor(registrationNumber,accountNumber,ngoName,totalCollection)
    {
        this.registrationNumber=registrationNumber;
        this.accountNumber=accountNumber;
        this.ngoName=ngoName;
        this.totalCollection=totalCollection;
    }
    setRegistrationNumber(registrationNumber)
    {
        this.registrationNumber=registrationNumber;
    }
    setAccountNumber(accountNumber)
    {
        this.accountNumber=accountNumber;
    }
    setNgoName(ngoName)
    {
        this.ngoName=ngoName;
    }
    setTotalCollection(totalCollection)
    {
        this.totalCollection=totalCollection;
    }
    getRegistrationNumber()
    {
        return this.registrationNumber;
    }
    getAccountNumber()
    {
        return this.AccountNumber;
    }
    getNgoName()
    {
        return this.ngoName;
    }
    getTotalCollection()
    {
        return this.totalCollection;
    }
}