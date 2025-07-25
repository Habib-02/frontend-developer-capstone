import React from "react";
import styles from "./BookingPage.module.css";
import { useNavigate } from "react-router-dom";

function BookingForm({
  date,
  time,
  guestNumber,
  occasion,
  handleDate,
  handleTime,
  handleGuestNumber,
  handleOccasion,
  availableTimes,
}) {
  const navigate = useNavigate();

  // Validation logic
  const isDateValid = Boolean(date);
  const isTimeValid = Boolean(time);
  const isGuestNumberValid =
    Number(guestNumber) >= 1 && Number(guestNumber) <= 10;
  const isOccasionValid = Boolean(occasion);
  const isFormValid =
    isDateValid && isTimeValid && isGuestNumberValid && isOccasionValid;

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid) return;
    // Redirect to confirmation page with form data
    navigate("/booking-confirmation", {
      state: {
        date,
        time,
        guestNumber,
        occasion,
      },
    });
  }

  // console.log("availableTimes:", availableTimes);
  console.log("window.fetchAPI:", typeof window.fetchAPI, window.fetchAPI);

  return (
    <div className={styles["form-wrapper"]}>
      <h2>Reservation Form</h2>
      <form
        style={{ display: "grid", maxwidth: "200px", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDate} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTime}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestNumber}
          onChange={handleGuestNumber}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
}

export default BookingForm;
