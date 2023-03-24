import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// Creating instances of User and Company
const user = new User();
const company = new Company();

// Creating the map
// CustomMap class inorder to restrict the Google Maps API surface area
const customMap = new CustomMap("map");

// Adding markers of User and company
customMap.addMarker(user);
customMap.addMarker(company);
