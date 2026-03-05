import { Home, AlertTriangle, Lightbulb, Users, ClipboardList, PhoneCall } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "Problem", url: "#problem", icon: AlertTriangle },
  { name: "System", url: "#solution", icon: Lightbulb },
  { name: "Qualify", url: "#why", icon: Users },
  { name: "Process", url: "#process", icon: ClipboardList },
  { name: "Apply", url: "#qualify", icon: PhoneCall },
];

const Navbar = () => {
  return <NavBar items={navItems} />;
};

export default Navbar;
