import { openSans } from "../styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={`mt-2 ${openSans.className}`}>
        <Pagination />
      </div>
   
      <div className={`mt-6 px-10 ${openSans.className}`}>
        {children}
      </div>
   
    </div>
  );
};

export default Layout;
