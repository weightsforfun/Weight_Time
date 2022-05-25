import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navigation = ({ isLoggedIn }) => {
  const onLogOutClick = () => auth.signOut();
  return (
    <div>
      <div className="nav1">
        <div className="top_c">
          <Link to={"/Partner"}>파트너</Link>
        </div>
        <div className="top_c">
          <Link to={"/TimetablePage"}>시간표</Link>
        </div>
        <div className="top_c">
          <Link to={"/Trainer"}>트레이너</Link>
        </div>
        {isLoggedIn ? (
          <div>
            <Link to={"/"} onClick={onLogOutClick}>
              로그아웃
            </Link>
          </div>
        ) : (
          <div>
            <Link to={"/Auth"}>로그인</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
