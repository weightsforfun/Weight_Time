import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";
import Appi from "../components/Timetable";
import moment from "moment";
import TestPageForTimeTable from "./TestPageForTimeTable";
import Navigation from "../components/Navigation";

const TimetablePage = ({ isLoggedIn }) => {
  const [day, setDay] = useState("월요일");
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(22);
  const [workoutPart, setWorkoutPart] = useState([0, 0, 0, 0, 0]); //등 가슴 팔 어깨 하체
  const [workoutPartToSee, setWorkoutPartToSee] = useState([0, 0, 0, 0, 0]);
  const [wantTable, setWantTable] = useState(false);
  const [week, setWeek] = useState([[], [], [], [], [], [], []]);

  const dayIndex = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const partIndex = ["back", "chest", "arm", "shoulder", "leg"];

  const categorizedByTime = (arr) => {
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].day === dayIndex[i]) {
          for (var v = arr[j].startTime; v < arr[j].endTime; v++) {
            var judge = false;
            for (var q = 0; q < week[i].length; q++) {
              if (v === week[i][q]["time"]) {
                week[i][q]["name"] = week[i][q]["name"] + 1;
                judge = true;
                break;
              }
            }
            if (!judge) {
              week[i] = [
                ...week[i],
                {
                  time: v,
                  name: 1,
                  startTime: moment(
                    "2022-05-29T" + ("0" + v).slice(-2) + ":00:00"
                  ),
                  endTime: moment(
                    "2022-05-29T" +
                    ("0" + String(Number(v) + 1)).slice(-2) +
                    ":00:00"
                  ),
                },
              ];
            }
          }
        }
      }
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    for (var i = 0; i < 5; i++) {
      if (workoutPart[i] === 1) {
        try {
          addDoc(collection(dbService, partIndex[i]), {
            startTime,
            endTime,
            day,
          });
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    }
    console.log(startTime, endTime);
    console.log(workoutPart);

    setWorkoutPart(workoutPart);
  };
  const onChangeDay = (event) => {
    const {
      target: { value },
    } = event;
    setDay(value);
  };
  const onChangeStartTime = (event) => {
    const {
      target: { value },
    } = event;
    setStartTime(value);
  };
  const onChangeEndTime = (event) => {
    const {
      target: { value },
    } = event;
    setEndTime(value);
  };
  const onChangePartForSubmit = (event) => {
    const {
      target: { id },
    } = event;
    const {
      target: { checked },
    } = event;
    if (checked) {
      workoutPart[id] = 1;
      setWorkoutPart(workoutPart);
      console.log(workoutPart);
    } else {
      workoutPart[id] = 0;
      setWorkoutPart(workoutPart);
      console.log(workoutPart);
    }
  };

  const onChangePartToSeeTable = (event) => {
    const {
      target: { id },
    } = event;
    const {
      target: { checked },
    } = event;
    if (checked) {
      workoutPartToSee[id - 5] = 1;
      setWorkoutPartToSee(workoutPartToSee);
      console.log(workoutPartToSee);
    } else {
      workoutPartToSee[id - 5] = 0;
      setWorkoutPartToSee(workoutPartToSee);
      console.log(workoutPartToSee);
    }
  };

  const onSubmitToSee = async (event) => {
    event.preventDefault();
    for (var i = 0; i < 5; i++) {
      if (workoutPartToSee[i] === 1) {
        const qr = query(collection(dbService, partIndex[i]));
        onSnapshot(qr, (snapshot) => {
          const timeArray = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          categorizedByTime(timeArray);
          setWantTable(true);
          console.log(timeArray);
          console.log(week);
        });
      }
    }
  };
  const onSubmitToChange = (event) => {
    event.preventDefault();
    setWeek([[], [], [], [], [], [], []]);
    setWantTable(false);
  };
  return (

    <div className="main_dis" style={{ height: "1120px" }}>
      <div className="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div className="logo_div" style={{ position: "fixed", top: "0px" }}>
        <img className="logo" src="img/logo_w.png" alt="error" />
      </div>
      <div className="TimetablePage">

        <div className="submitBox" style={{ textAlign: "left", display: "inline-block", marginTop: "30px" }}>

          <form onSubmit={onSubmit}>
            <label htmlFor="startTime">요일 :</label>
            <select name="요일" onChange={onChangeDay} style={{ marginLeft: "20px" }} className="choose_btn">
              <option value={"월요일"}>월요일</option>
              <option value={"화요일"}>화요일</option>
              <option value={"수요일"}>수요일</option>
              <option value={"목요일"}>목요일</option>
              <option value={"금요일"}>금요일</option>
              <option value={"토요일"}>토요일</option>
              <option value={"일요일"}>일요일</option>
            </select>
            <br />
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="startTime">시작시간 :</label>
              <input style={{ marginLeft: "15px" }}
                className="choose_btn"
                type="number"
                min="6"
                max="22"
                value={startTime}
                id="startTime"
                onChange={onChangeStartTime}
              ></input>
              <label htmlFor="endTime" style={{ marginLeft: "20px" }}>마치는 시간 :</label>
              <input style={{ marginLeft: "15px" }}
                className="choose_btn"
                type="number"
                min="6"
                max="22"
                value={endTime}
                id="endTime"
                onChange={onChangeEndTime}
              ></input><br />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="0">back</label>
                <input className="checkbox_margin"
                  type="checkbox"
                  value="등"
                  id="0"
                  onChange={onChangePartForSubmit}
                ></input>
                <label htmlFor="1" className="part_margin">chest</label>
                <input className="checkbox_margin"
                  type="checkbox"
                  value="가슴"
                  id="1"
                  onChange={onChangePartForSubmit}
                ></input>
                <label htmlFor="2" className="part_margin">arm</label>
                <input className="checkbox_margin"
                  type="checkbox"
                  value="팔"
                  id="2"
                  onChange={onChangePartForSubmit}
                ></input>
                <label htmlFor="3" className="part_margin">shoulder</label>
                <input className="checkbox_margin"
                  type="checkbox"
                  value="어깨"
                  id="3"
                  onChange={onChangePartForSubmit}
                ></input>
                <label htmlFor="4" className="part_margin">leg</label>
                <input className="checkbox_margin"
                  type="checkbox"
                  value="하체"
                  id="4"
                  onChange={onChangePartForSubmit}
                ></input>

                <button type="submit" onSubmit={onSubmit} style={{ marginLeft: "15px", width: "60px" }} className="choose_btn">
                  제출
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="selectTableBox" style={{ marginTop: "15px" }}>
          <form onSubmit={onSubmitToSee}>
            <label htmlFor="5">back</label>
            <input
              className="checkbox_margin"
              type="checkbox"
              value="등"
              id="5"
              onChange={onChangePartToSeeTable}
            ></input>
            <label htmlFor="6" className="part_margin">chest</label>
            <input
              className="checkbox_margin"
              type="checkbox"
              value="가슴"
              id="6"
              onChange={onChangePartToSeeTable}
            ></input>
            <label htmlFor="7" className="part_margin">arm</label>
            <input
              className="checkbox_margin"
              type="checkbox"
              value="팔"
              id="7"
              onChange={onChangePartToSeeTable}
            ></input>
            <label htmlFor="8" className="part_margin">shoulder</label>
            <input
              className="checkbox_margin"
              type="checkbox"
              value="어깨"
              id="8"
              onChange={onChangePartToSeeTable}
            ></input>
            <label htmlFor="9" className="part_margin">leg</label>
            <input
              className="checkbox_margin"
              type="checkbox"
              value="하체"
              id="9"
              onChange={onChangePartToSeeTable}
            ></input>
            <div style={{ paddingBottom: "25px" }}>
              {wantTable ? (
                <button onClick={onSubmitToChange} className="choose_btn" style={{ marginTop: "5px" }}>시간표다시선택</button>
              ) : (
                <button onSubmit={onSubmitToSee} className="choose_btn" style={{ marginTop: "5px" }}>시간표보기</button>
              )}
            </div>
          </form>
        </div>
        <>
          {wantTable ? (
            <Appi
              monday={week[0]}
              tuesday={week[1]}
              wednesday={week[2]}
              thursday={week[3]}
              friday={week[4]}
              saturday={week[5]}
              sunday={week[6]}
            />
          ) : (
            <TestPageForTimeTable />
          )}
        </>
      </div>

    </div>
  );
};
export default TimetablePage;
