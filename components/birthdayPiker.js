import styles from "./birthdayPiker.module.css";
import { useState, useEffect } from "react";

/**
 * @return {Array}
 */
function createYear() {
  const today = new Date();
  const year = today.getFullYear();
  let items = [];
  for (let i = year; i >= year - 100; i--) {
    items.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return items;
};

/**
 * @return {Array}
 */
function createMonth() {
  let items = [];
  for (let i = 1; i <= 12; i++) {
    items.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return items;
};

/**
 * @param {string} tempYear 
 * @param {string} tempMonth 
 * @return {Array}
 */
function createDay(tempYear, tempMonth) {
  const days = new Date(tempYear, tempMonth, 0).getDate();
  let items = [];
  for (let i = 1; i <= days; i++) {
    items.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return items;
}

function Select({ onChange, value, text, label }) {
  return (
    <>
      <select className="wid30" onChange={onChange} value={value}>
        {text}
      </select>
      <span className={styles.formSelectSpan}>{label}</span>
    </>
  );
}

export default function DateGroup({ onChange, initDate = "" }) {
  let tempYear = "", tempMonth = "", tempDay = "";
  if (initDate != "") {
    tempYear = initDate.substring(0, 4);
    tempMonth = parseInt(initDate.substring(5, 7)).toString();
    tempDay = parseInt(initDate.substring(8, 10)).toString();
  }
  const [year, setYear] = useState(tempYear);
  const [month, setMonth] = useState(tempMonth);
  const [day, setDay] = useState(tempDay);

  useEffect(() => {
    onChange([year, month, day].join("-"));
  }, [year, month, day]);

  return (
    <div className={"fx fx_nowrap fx_center fx_between"}>
      <Select
        onChange={(event) => setYear(event.target.value)}
        value={year}
        text={createYear()}
        label={"年"}
      />
      <Select
        onChange={(event) => setMonth(event.target.value)}
        value={month}
        text={createMonth()}
        label={"月"}
      />
      <Select
        onChange={(event) => setDay(event.target.value)}
        value={day}
        text={createDay(year, month)}
        label={"日"}
      />
    </div>
  );
}
