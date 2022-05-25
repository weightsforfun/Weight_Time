import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";

const TimetablePage = () => {
  const [day, setDay] = useState("월요일");
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(22);
  const [workoutPart, setWorkoutPart] = useState([0, 0, 0, 0, 0]);
  const onSubmit = (event) => {
    event.preventDefault();
    try {
      addDoc(collection(dbService, "arm"), {
        startTime,
        endTime
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    console.log(startTime, endTime);
    console.log(workoutPart);
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
  const onChangePart = (event) => {
    const {
      target: { id },
    } = event;
    const {
      target: { checked },
    } = event;
    if (checked) {
      workoutPart[id] = 1;
      setWorkoutPart(workoutPart);
    } else if (!checked && workoutPart[id] === 1) {
      setWorkoutPart[id] = 0;
      setWorkoutPart(workoutPart);
    }
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
          <label for="startTime">start time</label>
          <input
            type="number"
            min="6"
            max="22"
            value={startTime}
            id="startTime"
            onChange={onChangeStartTime}
          ></input>
          <label for="endTime">end time</label>
          <input
            type="number"
            min="6"
            max="22"
            value={endTime}
            id="endTime"
            onChange={onChangeEndTime}
          ></input>
          <label for="1">back</label>
          <input
            type="checkbox"
            value="등"
            id="1"
            onChange={onChangePart}
          ></input>
          <label for="2">chest</label>
          <input
            type="checkbox"
            value="가슴"
            id="2"
            onChange={onChangePart}
          ></input>
          <label for="3">arm</label>
          <input
            type="checkbox"
            value="팔"
            id="3"
            onChange={onChangePart}
          ></input>
          <label for="4">shoulder</label>
          <input
            type="checkbox"
            value="어깨"
            id="4"
            onChange={onChangePart}
          ></input>
          <label for="5">leg</label>
          <input
            type="checkbox"
            value="하체"
            id="5"
            onChange={onChangePart}
          ></input>
          <button type="submit" onSubmit={onSubmit}>
            제출
          </button>
        </form>
      </div>
      <div className="selectTableBox"></div>
    </div>
  );
};
export default TimetablePage;
