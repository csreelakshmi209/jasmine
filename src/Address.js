class Address{
    //constructor to initialize values
    constructor(addressId,city,state,pin,landmark)
    {
        this.addressId=addressId
        this.city=city;
        this.state=state;
        this.pin=pin;
        this.landmark=landmark;

         //getters and setters
         setAddressId(addressId)
         {
             this.addressId=addressId;
         }
         
    }
}