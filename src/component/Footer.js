import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-300 text-center py-4 mt-8 w-full">
    <div className="text-gray-700 text-sm">
      © {new Date().getFullYear()} FoodVilla. Built by Rohit Rana. All rights
      reserved.
    </div>
    <div className="mt-1 text-gray-600 text-xs">
      rohitrana349@gmail.com · 8476802241
    </div>
    <div className="mt-2 flex justify-center gap-4">
      <Link to="/grocery" className="hover:underline">
        Grocery
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      <Link to="/privacy" className="hover:underline">
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;
