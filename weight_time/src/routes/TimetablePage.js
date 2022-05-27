import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";

const TimetablePage = () => {
  const [day, setDay] = useState("월요일");
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(22);
  const [workoutPart, setWorkoutPart] = useState([0, 0, 0, 0, 0]); //등 가슴 팔 어깨 하체
  const [workoutPartToSee, setWorkoutPartToSee] = useState([0, 0, 0, 0, 0]);
  const [times, setTimes] = useState([]);
  const partIndex = ["back", "chest", "arm", "shoulder", "leg"];
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
      workoutPartToSee[id] = 1;
      setWorkoutPartToSee(workoutPartToSee);
      console.log(workoutPartToSee);
    } else {
      workoutPartToSee[id] = 0;
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
            const timeArray = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
          setTimes(() => {
            return timeArray;
          });
          console.log(timeArray);          
          console.log(times);
          //timeArrays는 잘받아와지는데 setTimes가 비동기적으로 작동해서 times를 바로 못받아와
          //setTimes내에 함수로 선언하면 동기적으로 작동해야되는데 왜 안되는걸까...
          }
        );
      };
    }
  }

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
          <label htmlFor="0">back</label>
          <input
            type="checkbox"
            value="등"
            id="0"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="1">chest</label>
          <input
            type="checkbox"
            value="가슴"
            id="1"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="2">arm</label>
          <input
            type="checkbox"
            value="팔"
            id="2"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="3">shoulder</label>
          <input
            type="checkbox"
            value="어깨"
            id="3"
            onChange={onChangePartToSeeTable}
          ></input>
          <label htmlFor="4">leg</label>
          <input
            type="checkbox"
            value="하체"
            id="4"
            onChange={onChangePartToSeeTable}
          ></input>
          <button onSubmit={onSubmitToSee}>시간표보기</button>
        </form>
      </div>
    </div>
  );
};
export default TimetablePage;
