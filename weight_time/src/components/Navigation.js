import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navigation = ({isLoggedIn}) => {
    const onLogOutClick = () => auth.signOut();
    return(
        <ul>
            <li>
                <Link to={"/Partner"}>파트너</Link>
            </li>
            <li>
                <Link to={"/Timetable"}>시간표</Link>
            </li>
            <li>
                <Link to={"/Trainer"}>트레이너</Link>
            </li>
            {isLoggedIn ? 
            <li><Link to={"/"} onClick={onLogOutClick}>로그아웃</Link></li> :
            <>
                <li><Link to={"/Auth"}>로그인</Link></li>
            </>
            }
        </ul>
    )
}

export default Navigation;