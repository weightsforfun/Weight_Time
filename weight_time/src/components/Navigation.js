import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="nav1">
        <div className="top_c">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <img className="nav_img" src="img/home.png" alt="error"/>
          <br/>
          홈
          </Link>
        </div>
        <div className="top_c">
          <Link
            to={"/Partner"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="nav_img" src="img/partner.png" alt="error" />
            <br />
            파트너
          </Link>
        </div>
        <div className="top_c">
          <Link
            to={"/TimetablePage"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="nav_img" src="img/timetable.png" alt="error" />
            <br />
            시간표
          </Link>
        </div>
        <div className="top_c">
          <Link
            to={"/Trainer"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="nav_img" src="img/trainer.png" alt="error" />
            <br />
            트레이너
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
