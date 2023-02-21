import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Friend Requests</span>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/erick.jpg" alt="" />
              <span>Erick Lover</span>
            </div>
            <div className="buttons">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/marie.jpg" alt="" />
              <span>Cutie Marie</span>
            </div>
            <div className="buttons">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Sponsored</span>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/lv.png" alt="" />
              <p>
                <span>Louis Vuitton</span> louisvuitton.com
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/chanel.jpg" alt="" />
              <p>
                <span>Chanel</span> chanel.com
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/lam.jpg" alt="" />
              <p>
                <span>Lamborghini</span> lamborghini.com
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/dior.jpg" alt="" />
              <p>
                <span>Dior</span> dior.com
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/jc.jpg" alt="" />
              <div className="online" />
              <span>Bhoszx JC</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/arriane.jpg" alt="" />
              <div className="online" />
              <span>Queen Arianne</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/roc.JPG" alt="" />
              <div className="online" />
              <span>Rocel Kikay</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/lat.jpg" alt="" />
              <div className="online" />
              <span>Famousxcz Lat</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/erick.jpg" alt="" />
              <div className="online" />
              <span>Erick Lover</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./pictures/marie.jpg" alt="" />
              <div className="online" />
              <span>Cutie Marie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
