type DataItem = {
  value: number;
  label: string;
};
export const LeaseData: DataItem[] = [
  { label: "12 months", value: 12 },
  { label: "6 months", value: 6 },
  { label: "3 months", value: 3 },

];

export const PreferedMethodOfContact = [
  {name: "Phone", value:"phone"},
  {name: "Whatsapp", value:"whatsapp"},
  {name: "Text Message", value:"text"},
  {name: "Email", value:"email"},
]


export const IdentificationType = [
  {name: "Ghana Card", value:"ghanacard"},
  {name: "Voter's ID Card", value:"votersid"},
  {name: "Passport", value:"passport"},
  {name: "Driver's License", value:"driver's license"},
  {name: "Other", value:"other"},



]

export const MostRecentEmployment = [
  {name: "Employed", value:"employed"},
  {name: "Self Employed", value:"selfEmployed"},
  {name: "Student", value:"student"},
  {name: "Retired", value:"retired"},
  {name: "Unemployed", value:"unemployed"},

]