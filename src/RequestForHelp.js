class RequestForHelp{
    constructor(requestId,needyPersonName,phone,item,status)
    {
        this.requestId=requestId;
        this.needyPersonName=needyPersonName;
        this.phone=phone;
        this.item=item;
        this.status=status;
    }
    getRequestId()
    {
        return   this.requestId;
    }
    getNeedyPersonName()
    {
        return this.needyPersonName
    }
    getPhone()
    {
       return  this.phone;
    }
    getItem()
    {
       return this.item;
    }
    getStatus()
    {
        return this.status;
    }
    setRequestId(requestId)
    {
        this.requestId=requestId
    }
    setNeedypersonName(needyPersonName)
    {
        this.needyPersonName=needyPersonName;
    }
    setPhone(phone)
    {
        this.phone=phone;
    }
    setItem(item)
    {
        this.item=item;
    }
    setStatus(status)
    {
        this.status=status
    }
}