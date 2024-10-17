import Brick from "@/assets/svgs/Brick.svg";
import Tap from "@/assets/svgs/Non-potable Water.svg";
import Painting from "@/assets/svgs/Painting A Wall.svg";
import Chef from "@/assets/svgs/chef.svg";
import Plumber from "@/assets/svgs/plumber.svg";
import SolderingIron from "@/assets/svgs/soldering_iron.svg";
import TruckHeavy from "@/assets/svgs/Truck_heavy.svg";
import TruckLight from "@/assets/svgs/Truck_light.svg";
import Carpenter from "@/assets/svgs/carpenter_svgrepo.com.svg";
import Mechanic from "@/assets/svgs/mechanic_svgrepo.com.svg";
import Gas from "@/assets/svgs/gas-costs_svgrepo.com.svg";
import Decorator from "@/assets/svgs/party-popper_svgrepo.com.svg";
import Catering from "@/assets/svgs/catering-buffet_svgrepo.com.svg";

export const CATEGORIES_DATA = [
  { name: "Electrician", icon: <SolderingIron /> },
  { name: "Plumber", icon: <Plumber /> },
  { name: "Mason", icon: <Brick /> },
  { name: "Painter", icon: <Painting /> },
  { name: "Cook", icon: <Chef /> },
  { name: "Trans - Light", icon: <TruckLight /> },
  { name: "Trans - Heavy", icon: <TruckHeavy /> },
  { name: "Non Drinking", icon: <Tap /> },
  { name: "Carpenter", icon: <Carpenter /> },
  { name: "Mechanic", icon: <Mechanic /> },
  { name: "Gas", icon: <Gas /> },
  { name: "Decorator", icon: <Decorator /> },
  { name: "Food Catering", icon: <Catering /> },
];

export const RECENT_SEARCH_DATA = [
  "Floor Wash",
  "Cloth Laundry",
  "Computer Repairing",
  "House Shifting",
  "Window Cleaning",
  "Water Faucet Repairing",
  "Painting the Walls",
  "Motorcycle Repairing",
];

export const UPCOMING_BOOKINGS_DATA = [
  {
    id: 1,
    image: require("@/assets/images/house_cleaning_booking.png"),
    title: "House Cleaning",
    description: "Jenny Wilson",
  },

  {
    id: 2,
    image: require("@/assets/images/garage_cleaning_booking.png"),
    title: "Garage Cleaning",
    description: "Florencio Dorrance",
  },

  {
    id: 3,
    image: require("@/assets/images/laundry_booking.png"),
    title: "Laundry",
    description: "Jenny Wilson",
  },
];

export const OFFER_IMAGES_DATA = [
  {
    id: 1,
    image: require("@/assets/images/Promo & Discount_1.png"),
  },

  {
    id: 2,
    image: require("@/assets/images/Promo & Discount_2.png"),
  },

  {
    id: 3,
    image: require("@/assets/images/Promo & Discount_3.png"),
  },

  {
    id: 4,
    image: require("@/assets/images/Promo & Discount_4.png"),
  },

  
];
