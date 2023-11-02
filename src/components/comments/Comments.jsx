import "./comments.scss";

const Comments = () => {
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Noice",
      name: "Hòn",
      userId: 1,
      profilePicture:
        "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
    {
      id: 2,
      desc: "Ừ",
      name: "Hoàn",
      userId: 2,
      profilePicture:
        "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAwYzPV26Q4gKhJb8HihEZ-qDwK8_gwFlZTdBrsJ-sVQg&oe=6569D2E4" alt="" />
        <input type="text" placeholder="Viết bình luận" />
        <button>Gửi</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 tiếng trước</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
