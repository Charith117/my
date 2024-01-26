import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const NavBar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} // Fix the typo here
        >
          GKHC Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="//public/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/public/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/public/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
