class Address{
    //constructor to initialize values
    constructor(addressId,city,state,pin,landmark)
    {
        this.addressId=addressId
        this.city=city;
        this.state=state;
        this.pin=pin;
        this.landmark=landmark;
    }
         //getters and setters
         setAddressId(addressId)
         {
             this.addressId=addressId;
         }
         setCity(city)
         {
             this.city=city;
         }
         setState(state)
         {
             this.state=state;
         }
         setPin(pin)
         {
             this.pin=pin;
         }
         setLandmark(landmark)
         {
             this.landmark=landmark;
         }
         getAddressId()
         {
             return this.addressId;
         }
        getCity()
        {
            return this.city;
        }
        getState()
        {
            return this.state;
        }
        getPin ()
        {
        return this.pin;
        }
        getLandmark()
        {
            return this.landmark;
        }
    }
