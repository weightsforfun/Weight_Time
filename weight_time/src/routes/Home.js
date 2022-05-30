import { Carousel } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Fade from 'react-reveal/Fade';



const Home = ({ isLoggedIn }) => {
  return (
    <div className="main_dis">
      <div className="logo_div" style={{ position: "fixed", top: "0px" }}>
        <img className="logo" src="img/logo_w.png" alt="error" />
        <button type="button" className="log_in">
          <Link to={"/Auth"} className="login_font">로그인</Link>
        </button>
      </div>

      {isLoggedIn ? <h1>반가워요 신찬규님</h1> : <h1>로그인해 시발</h1>}
      <div className="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div className="home_header">
        당신의 기구사용 <br />대기시간을 줄여드립니다<br /><span style={{ color: "#ffffff", fontWeight: "800", fontSize: "40px", fontStyle: "italic" }}>Weight Time</span>
      </div>
      <Fade bottom>
        <div style={{ height: "380px", border: "2px solid red", marginTop: "800px" }} >
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>우리가 늙어서 운동을 그만두는 것이 아니라,
                  우리가 운동을 그만두기 때문에 늙는 것이다.</strong><br />
                  <span className="famous_people">-Kenneth Cooper-</span>
                </p>
              </div>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>사람이 자신의 몸이 가질 수 있는 아름다움과 강함을 알지 못하고
                  늙어 버리는 것은 안타까운 일이다.</strong><br />
                  <span className="famous_people">-Socrates-</span>
                </p>
              </div>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>운동은 사람의 몸과 감정과 정신력의 창조적 변화를 위한 약이다.</strong><br />
                  <span className="famous_people">-Carol Welch-</span>
                </p>
              </div>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>운동은 몸의 건강을 위해 가장 중요한 것일 뿐 아니라, 다이나믹하고 창조적인 지적 활동을 위한 기반이기도 하다.</strong><br />
                  <span className="famous_people">-John F.Kennedy-</span>
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>운동을 해야한다. 그렇지 않으면 어느 순간 당신은 고장 날 것이다</strong><br />
                  <span className="famous_people">-Barack Obama-</span>
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="famous_saying">
                <p><strong>운동을 위해 시간을 내지 않으면, 병 때문에 시간을 내야하게 될지도 모른다.</strong><br />
                  <span className="famous_people">-Robin Sharma-</span>
                </p>

              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
export default Home;
