import "./leftBar.scss";
import Friends from "../../assets/laugh.png";
import Groups from "../../assets/teamwork.png";
import Market from "../../assets/retailer.png";
import Watch from "../../assets/facebook.png";
import Events from "../../assets/planner.png";
import Gaming from "../../assets/game-console.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video.png";
import Messages from "../../assets/comments.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={user.profilePic} alt="" />
            <span>{user.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LeftBar;
