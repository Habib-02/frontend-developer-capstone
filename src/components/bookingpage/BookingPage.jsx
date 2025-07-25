import { useState, useReducer } from "react";
import BookingForm from "./bookingForm/BookingForm";
import { useNavigate } from "react-router-dom";
import styles from "./bookingForm/BookingPage.module.css";
// import Bookings from "./bookings/Bookings";

// Use fetchAPI from the global scope (provided by the script in index.html)

function initializeTimes() {
  const today = new Date();
  return window.fetchAPI ? window.fetchAPI(today) : [];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : [];
    default:
      return state;
  }
}

// Helper to get today's date as YYYY-MM-DD
function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function BookingPage() {
  const todayStr = getTodayString();
  const [date, setDate] = useState(todayStr);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );
  // Set initial time to first available time if possible, else default
  const [time, setTime] = useState(() =>
    window.fetchAPI
      ? window.fetchAPI(new Date(todayStr))[0] || "17:00"
      : "17:00"
  );
  const [guestNumber, setGuestNumber] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  function handleDate(event) {
    const newDate = event.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
    // Get new available times and set the first one as selected
    const newTimes = window.fetchAPI ? window.fetchAPI(new Date(newDate)) : [];
    setTime(newTimes[0] || "");
  }

  function handleTime(event) {
    setTime(event.target.value);
  }

  function handleGuestNumber(event) {
    setGuestNumber(event.target.value);
  }

  function handleOccasion(event) {
    setOccasion(event.target.value);
  }

  // console.log("window.fetchAPI:", typeof window.fetchAPI, window.fetchAPI);
  const today = new Date();
  console.log(
    "fetchAPI(today):",
    window.fetchAPI ? window.fetchAPI(today) : "fetchAPI not available"
  );
  return (
    <>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <BookingForm
        date={date}
        time={time}
        guestNumber={guestNumber}
        occasion={occasion}
        handleDate={handleDate}
        handleTime={handleTime}
        handleGuestNumber={handleGuestNumber}
        handleOccasion={handleOccasion}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </>
  );
}

export default BookingPage;
export { initializeTimes, updateTimes };
