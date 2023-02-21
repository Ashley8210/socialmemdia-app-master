import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { user, setUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Niceeeee!!",
      name: "Bhoszxc JC",
      userId: 1,
      profilePicture: "./pictures/jc.jpg",
    },
    {
      id: 2,
      desc: "How are you?",
      name: "Queen Arriane",
      userId: 2,
      profilePicture: "./pictures/arriane.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={user.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
