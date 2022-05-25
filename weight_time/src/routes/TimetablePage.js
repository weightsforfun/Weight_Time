import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";

const TimetablePage = () => {
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(22);
  const [workoutPart, setWorkoutPart] = useState([1, 1, 1, 1, 1]);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(dbService, "arm"), {
        startTime,
        endTime
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    console.log(startTime, endTime);
    console.log(workoutPart);
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
      checked: { checked },
    } = event;
    if (checked) {
      workoutPart.add(id);
      setWorkoutPart(workoutPart);
    } else if (!checked && workoutPart.has(id)) {
      setWorkoutPart.delete(id);
      setWorkoutPart(workoutPart);
    }
  };
  return (
    <div className="TimetablePage">
      <h1>Timetable</h1>
      <form onSubmit={onSubmit}>
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
  );
};
export default TimetablePage;
