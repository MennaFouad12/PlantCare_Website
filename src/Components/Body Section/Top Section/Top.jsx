import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './top.css';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import img from '../../../Assets/User_1.png';
import img2 from '../../../Assets/Plant_1.png';
import video from '../../../Assets/video.mp4';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';
import { auth } from '../../../Context/AuthContext';
import Body from '../Body';

const Top = () => {
  const [showLogout, setShowLogout] = useState(false);
    const { isLogin, setLogin } = useContext(auth);
  const navigate = useNavigate(); 

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };
  // تم حذف اللوجين وهنخليها الاساسيىه
  const handleLogout = () => {
  localStorage.removeItem('userToken')
  
    setLogin(null)

    
    navigate('/Login')
  };

  return (
  
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Leaf&Root.</h1>
          <p>Hello Ahmed, Welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <AiOutlineMessage className="icon" />
          <MdOutlineNotificationsNone className="icon" />

          <div className="adminImage" onClick={toggleLogout}>
            <img src={img} alt="Admin Image" />
          </div>

          {showLogout && (
            <button className="logoutButton" onClick={handleLogout} style={{ backgroundColor: 'green', color: 'white' }}>
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My State</h1>

              <div className="flex">
                <span>
                  Today <br /> <small> 4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small> 240 Orders</small>
                </span>
              </div>

              <span className="flex link" onClick={() => navigate('/orders')} style={{ cursor: 'pointer' }}>
                Go to my orders <BsArrowRightShort className="icon" />
              </span>

            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in Page, please contact us for more
                  questions.
                </p>

                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Top;
