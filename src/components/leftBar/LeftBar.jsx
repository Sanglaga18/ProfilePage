import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Gaming from "../../assets/7.png";
import Messages from "../../assets/10.png";

const LeftBar = () => {


  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAwYzPV26Q4gKhJb8HihEZ-qDwK8_gwFlZTdBrsJ-sVQg&oe=6569D2E4"
              alt=""
            />
            <span>Hoàng Nguyễn</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Bạn bè</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Trò chơi</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Tin nhắn</span>
          </div>
        </div>
        <div className = "left_container_last">
          <div className = "left_container_last_text">Giới thiệu</div>
          <div className = "left_container_last_text">Hỗ trợ và báo cáo</div>
          <div className = "left_container_last_text">Góp ý kiến</div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
