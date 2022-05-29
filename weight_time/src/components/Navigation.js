import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="nav1">
        <div className="top_c">
          <img src="img/home.png" alt="error" />
          <br />
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            홈
          </Link>
        </div>
        <div className="top_c">
          <img src="img/partner.png" alt="error" />
          <br />
          <Link
            to={"/Partner"}
            style={{ textDecoration: "none", color: "white" }}
          >
            파트너
          </Link>
        </div>
        <div className="top_c">
          <img src="img/timetable.png" alt="error" />
          <br />
          <Link
            to={"/TimetablePage"}
            style={{ textDecoration: "none", color: "white" }}
          >
            시간표
          </Link>
        </div>
        <div className="top_c">
          <img src="img/trainer.png" alt="error" />
          <br />
          <Link
            to={"/Trainer"}
            style={{ textDecoration: "none", color: "white" }}
          >
            트레이너
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
