import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"


const Profile = () => {

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://tindep.com/wp-content/uploads/2023/03/background-bien--background-beach-dai-duong--dao-dep--sac-net-88.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAwYzPV26Q4gKhJb8HihEZ-qDwK8_gwFlZTdBrsJ-sVQg&oe=6569D2E4"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Hoàng Nguyễn</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Việt Nam</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Fb.com/LoaiPhongLuu</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
