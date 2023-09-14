import { openSans } from "../styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={`mt-12 px-10 ${openSans.className}`}>
        <Pagination />
        {children}
      </div>
   
    </div>
  );
};

export default Layout;
