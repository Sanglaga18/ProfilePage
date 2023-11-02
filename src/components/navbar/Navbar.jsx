import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>InstaFace</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAwYzPV26Q4gKhJb8HihEZ-qDwK8_gwFlZTdBrsJ-sVQg&oe=6569D2E4"
            alt=""
          />
          <span>Hoàng Nguyễn</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
