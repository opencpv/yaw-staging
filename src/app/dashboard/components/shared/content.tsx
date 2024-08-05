import { getFeatureIcon, getPropertyTypeIcon, getUtilityIcon } from "@/lib/utils/getFeatureIcon";


export const properties = [
  { name: "House", icon: getPropertyTypeIcon("house") },
  { name: "Compound House", icon: getPropertyTypeIcon("compound house") },
  { name: "Town House", icon: getPropertyTypeIcon("town house") },
  { name: "Apartment", icon: getPropertyTypeIcon("apartment") },
  { name: "Flats", icon: getPropertyTypeIcon("flats") },
  { name: "Room", icon: getPropertyTypeIcon("room") },
  { name: "Guest House", icon: getPropertyTypeIcon("guest house") },
  { name: "Chamber and Hall", icon: getPropertyTypeIcon("chamber and hall") },
  { name: "Boys Quarters", icon: getPropertyTypeIcon("boys quarters") },
  { name: "Hostel", icon: getPropertyTypeIcon("hostel") },
];

export const suitedFor = [
  { name: "Student", icon: getPropertyTypeIcon("house") },
  { name: "Large Family ( 5+ )", icon: getPropertyTypeIcon("compound house") },
  { name: "Small Family ( 2-4 )", icon: getPropertyTypeIcon("town house") },
  { name: "Young Woman", icon: getPropertyTypeIcon("apartment") },
  { name: "Expatriates", icon: getPropertyTypeIcon("flats") },
  { name: "Low Income", icon: getPropertyTypeIcon("room") },
  { name: "Newly Weds", icon: getPropertyTypeIcon("guest house") },
  { name: "Single Professional", icon: getPropertyTypeIcon("chamber and hall") },
  { name: "Elderly", icon: getPropertyTypeIcon("boys quarters") },
  { name: "Everyone", icon: getPropertyTypeIcon("hostel") },
];

export const features = [
  { name: "Wifi", icon: getFeatureIcon("wifi") },
  { name: "Pets Allowed", icon: getFeatureIcon("pets allowed") },
  { name: "Near Road", icon: getFeatureIcon("near road") },
  { name: "Security Camera", icon: getFeatureIcon("security camera") },
  { name: "Kitchen", icon: getFeatureIcon("kitchen") },
  { name: "Air Conditioning", icon: getFeatureIcon("air conditioning") },
  { name: "Elevator", icon: getFeatureIcon("elevator") },
  { name: "Generator", icon: getFeatureIcon("generator") },
  { name: "Water", icon: getFeatureIcon("water") },
  { name: "Fan", icon: getFeatureIcon("fan") },
  { name: "Refrigerator", icon: getFeatureIcon("refrigerator") },
  { name: "Microwave", icon: getFeatureIcon("microwave") },
  { name: "Self Meter", icon: getFeatureIcon("self meter") },
  { name: "Polytank", icon: getFeatureIcon("polytank") },
  { name: "Walled & Gated", icon: getFeatureIcon("walled & gated") },
  { name: "Parking", icon: getFeatureIcon("parking") },
  { name: "Landlord on Site", icon: getFeatureIcon("landlord on site") },
  { name: "Landlord off Site", icon: getFeatureIcon("landlord off site") },
  { name: "Tiled Space", icon: getFeatureIcon("tiled space") },
  { name: "Self Contained", icon: getFeatureIcon("self contained") },
  { name: "Dish Washer", icon: getFeatureIcon("dish washer") },
  { name: "Washing Machine", icon: getFeatureIcon("washing machine") },
  { name: "Security Guard", icon: getFeatureIcon("security guard") },
  { name: "Fully Furnished", icon: getFeatureIcon("fully furnished") },
  { name: "Semi Furnished", icon: getFeatureIcon("semi furnished") },
  { name: "Unfurnished", icon: getFeatureIcon("unfurnished") },
 ];

export const utilities = [
  { name: "Water", icon: getUtilityIcon("water") },
  { name: "Gas", icon: getUtilityIcon("gas") },
  { name: "Electricty", icon: getUtilityIcon("electricty") },
  { name: "Satellite TV", icon: getUtilityIcon("satellite tv") },
  { name: "Internet", icon: getUtilityIcon("internet") },
] 
