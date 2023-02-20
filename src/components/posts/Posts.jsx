import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Ashley",
      userId: 1,
      profilePic: "./pictures/ash.jpg",
      desc: "Happy Coding",
    },
    {
      id: 2,
      name: "Rocel Kikay",
      userId: 2,
      profilePic: "./pictures/roc.JPG",
      desc: "Bondee lng pag may time",
      img: "./pictures/bondee.png",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
