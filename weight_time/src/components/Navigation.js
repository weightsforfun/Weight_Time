import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navigation = ({ isLoggedIn }) => {
  const onLogOutClick = () => auth.signOut();
  return (

    <div class="nav1">

      <a class="top_c">
        <Link to={"/Partner"}>파트너</Link>
      </a>
      <a class="top_c">
        <Link to={"/Timetable"}>시간표</Link>
      </a>
      <a class="top_c">
        <Link to={"/Trainer"}>트레이너</Link>
      </a>
      {isLoggedIn ? (
        <li>
          <Link to={"/"} onClick={onLogOutClick}>
            로그아웃
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to={"/Auth"}>로그인</Link>
          </li>
        </>
      )}
    </div>



  );
};

export default Navigation;
