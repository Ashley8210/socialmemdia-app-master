import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { user, setUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Bhoszxc JC",
      img: "./pictures/jc.jpg",
    },
    {
      id: 2,
      name: "Queen Arrianne",
      img: "./pictures/arriane.jpg",
    },
    {
      id: 3,
      name: "Rocel Kikay",
      img: "./pictures/roc.JPG",
    },
    {
      id: 4,
      name: "Famouszx Lat",
      img: "./pictures/lat.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={user.profilePic} alt="" />
        <span>{user.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
