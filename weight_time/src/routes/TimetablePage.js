import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";
import Appi from "../components/Timetable";
import moment from "moment";
import TestPageForTimeTable from "./TestPageForTimeTable";

const TimetablePage = () => {
  const [day, setDay] = useState("월요일");
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(22);
  const [workoutPart, setWorkoutPart] = useState([0, 0, 0, 0, 0]); //등 가슴 팔 어깨 하체
  const [workoutPartToSee, setWorkoutPartToSee] = useState([0, 0, 0, 0, 0]);
  const [times, setTimes] = useState([]);
  const [wantTable, setWantTable] = useState(false);
  const [test, setTest] = useState([
    {
      id: "fsdlkfnsdjklfbsdjkfbksbf",
      name: "가슴",
      startTime: moment("2018-02-23T11:30:00"),
      endTime: moment("2018-02-23T13:30:00"),
    },
  ]);
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
  let week = [{}, {}, {}, {}, {}, {}, {}];

  const categorizedByTime = (arr) => {
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].day === dayIndex[i]) {
          for (var v = arr[j].startTime; v < arr[j].endTime; v++) {
            if (String(v) in week[i]) {
              week[i][String(v)] = week[i][String(v)] + 1;
            } else {
              week[i][String(v)] = 1;
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
          setTimes(timeArray);
          setWantTable(true);
          console.log(timeArray);
          console.log(week);
        });
      }
    }
  };
  const onSubmitToChange = (event) => {
    event.preventDefault();
    setWantTable(false);
  };
  const onChangeTest = (event) => {
    const {
      target: { value },
    } = event;
    setTest([
      {
        id: "1",
        name: `${value}`,
        startTime: moment("2018-02-23T11:30:00"),
        endTime: moment("2018-02-23T13:30:00"),
      },
    ]);
  };
  return (
    <div className="TimetablePage">
      <h1>Timetable</h1>
      <div className="submitBox">
        <form onSubmit={onSubmit}>
          <select name="요일" onChange={onChangeDay}>
            <option value={"월요일"}>월요일</option>
            <option value={"화요일"}>화요일</option>
            <option value={"수요일"}>수요일</option>
            <option value={"목요일"}>목요일</option>
            <option value={"금요일"}>금요일</option>
            <option value={"토요일"}>토요일</option>
            <option value={"일요일"}>일요일</option>
          </select>
          <label htmlFor="startTime">start time</label>
          <input
            type="number"
            min="6"
            max="22"
            value={startTime}
            id="startTime"
            onChange={onChangeStartTime}
          ></input>
          <label htmlFor="endTime">end time</label>
          <input
            type="number"
            min="6"
            max="22"
            value={endTime}
            id="endTime"
            onChange={onChangeEndTime}
          ></input>
          <label htmlFor="0">back</label>
          <input
            type="checkbox"
            value="등"
            id="0"
            onChange={onChangePartForSubmit}
          ></input>
          <label htmlFor="1">chest</label>
          <input
            type="checkbox"
            value="가슴"
            id="1"
            onChange={onChangePartForSubmit}
          ></input>
          <label htmlFor="2">arm</label>
          <input
            type="checkbox"
            value="팔"
            id="2"
            onChange={onChangePartForSubmit}
          ></input>
          <label htmlFor="3">shoulder</label>
          <input
            type="checkbox"
            value="어깨"
            id="3"
            onChange={onChangePartForSubmit}
          ></input>
          <label htmlFor="4">leg</label>
          <input
            type="checkbox"
            value="하체"
            id="4"
            onChange={onChangePartForSubmit}
          ></input>
          <button type="submit" onSubmit={onSubmit}>
            제출
          </button>
        </form>
      </div>
      <div className="selectTableBox">
        <form onSubmit={onSubmitToSee}>
          <label htmlFor="5">back</label>
          <input
            type="checkbox"
            value="등"
            id="5"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="6">chest</label>
          <input
            type="checkbox"
            value="가슴"
            id="6"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="7">arm</label>
          <input
            type="checkbox"
            value="팔"
            id="7"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="8">shoulder</label>
          <input
            type="checkbox"
            value="어깨"
            id="8"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="9">leg</label>
          <input
            type="checkbox"
            value="하체"
            id="9"
            onChange={onChangePartToSeeTable}
          ></input>
          <>
            {wantTable ? ( //이거 true false로 renderingw= 계속 조져주는거임 근데 onsubmitTochange는
              <button onClick={onSubmitToChange}>시간표다시선택</button> // 버튼에서 onsubmit아니고 onclick으로 해놓음 바로 바뀔수있게
            ) : (
              <button onSubmit={onSubmitToSee}>시간표보기</button>
            )}
          </>
        </form>
      </div>
      <input onChange={onChangeTest}></input>
      <>
        {wantTable ? (
          <Appi
            monday={test} //이제 여기에 구조체 들어가있는 배열
            tuesday={test} //넣어주면 됌 [{},{},{}] 이런식
            wednesday={test}
            thursday={test}
            friday={test}
            saturday={test}
            sunday={test}
          />
        ) : (
          <TestPageForTimeTable />
        )}
      </>
    </div>
  );
};
export default TimetablePage;
