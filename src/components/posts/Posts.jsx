import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Hoàng Nguyễn",
      userId: 1,
      profilePic:
        "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDozONERNTC4pKnDUtHpjpDssuJx3P56nMXLDhhcjGiVg&oe=656AB3E4",
      desc: "Hello InstaFace",
      img: "https://www.freakingtech.com/wp-content/uploads/2020/07/cat.jpg",
    },
    {
      id: 2,
      name: "Hoàng",
      userId: 2,
      profilePic:
        "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/61033312_2310459895908380_7098954970279444480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=gXo_zkIYfnIAX92_O0v&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDozONERNTC4pKnDUtHpjpDssuJx3P56nMXLDhhcjGiVg&oe=656AB3E4",
      desc: "Mở tung cửa sổ đón ánh mặt trời Lại một ngày mới đã ghé thăm tôi Hãy ghé lại nào kìa bầy chim ơi Hãy nở nụ cười nụ hoa ơi Thật đáng yêu cuộc đời.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
