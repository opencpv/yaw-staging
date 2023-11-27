export type BeMyAgentFormType = Partial<{
  propertyType: [];
  priceRangeMinimum: number;
  priceRangeMaximum: number;
  bedMinimum: number;
  bedMaximum: number;
  bathroomMinimum: number;
  bathRoomMaximum: number;
  rentAdvanceOptions: [];
  locationArray: {
    city: string;
    neighbourhood: string;
  }[],
  utilities: [],
  featuresAndAmenities: []
  title : string,
  firstName : string,
  lastName : string ,
  gender: string ,
  moveInDate: string,
  leaseTerm : string,
  maritalStatus:  string ,
  email : string ,
  country : string ,
  city: string ,
  phoneNumber: string ,
  availableOnWhatsapp : boolean ,
  preferredMethodOfContact: string ,
  currentAddress1 : string | boolean,
  currentAddress2 : string,
  reasonsForMoving: string
  mostRecentEmployment: string,
  currentlyEmployed : string ,
  employmentStartDate : string ,
  employmentEndDate : string ,
  employersCountry: string ,
  employer : string
  employerAddress1 : string ,
  employerAddress2 : string ,
  employerPhoneNumber : string ,
  jobTitle: string ,
  monthlyIncome : string ,
  monthlyIncomeCurrency: string
  dateOfBirth  : string ,
  identificationType: string ,
  idNumber : string ,
  government : string ,
  evictedBefore : string ,
  convictedBefore : string ,
  reasonForConviction : string ,
  reasonForEviction : string,
  pets: string ,
  petDetails: string ,
  vehicles: string
}>
