export type ListingForm = {


    propertyType? : string
    propertyName? : string
    propertyDescription? : string
    suitedFor? : []
    furnishLevel? : string
    utilities?: []
    images? : []
    renterKnowledge? : string
    propertySize? : string | number
    bedrooms? : string | number
    bathrooms? : string | number 
    city? : string | number 
    neighbourhood? : string | number 
    availableDate? : string 
    monthlyAmount? : string | number 
    advancePayment? : string 
    advancePaymentOptions? : []
    refundableSecurityDeposit? : string
    refundableSecurityDepositAmount? :string | number
    additionalFees? : boolean
    additionalFeesArray? : [any]
    agentFee? :string 
    agentFeeAmount? :string | number 
    viewingFee? :string 
    viewingFeeAmount? :string | number 
    featuresAndAmenities? : []
    


}