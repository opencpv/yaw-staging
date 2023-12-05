export type PropertyDataType = Partial<{
    gender: string;
    firstName: string;
    lastName: string;
    title: string;
    moveInDate: string;
    leaseTerm: number;
    maritalStatus: string;
    dateOfBirth: string;
    identificationType: string;
    idNumber: string;
    government: string;
    evictedBefore: string;
    convictedBefore: string;
    reasonForEviction: string;
    reasonForConviction: string;
    pets: string;
    vehicles: string;
    preferredMethodOfContact: string;
    monthlyIncomeCurrency: string;
    mostRecentEmployment: string;
    currentlyEmployed: string;
    employmentStartDate: string;
    employmentEndDate: string;
    employer: string;
    employersCountry: string;
    employerAddress1: string;
    employerAddress2: string;
    employerPhoneNumber: string;
    jobTitle: string;
    monthlyIncome: string;
    email: string;
    country: string;
    city: string;
    phoneNumber: string | number;
    currentAddress1: string;
    currentAddress2: string;
    reasonsForMoving: string;
    otherApplicants: boolean;
    otherPersonsArray?: any;
    availableOnWhatsapp?: boolean;
    additionalInformation? : string
  }>;