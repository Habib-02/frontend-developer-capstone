import React from "react";
import styles from "./BookingPage.module.css";
import { useNavigate } from "react-router-dom";

// Validation helpers for unit testing
export function isDateValid(date, minDate, maxDate) {
  return Boolean(date) && date >= minDate && date <= maxDate;
}
export function isTimeValid(time) {
  return Boolean(time);
}
export function isGuestNumberValid(guestNumber) {
  const guestNum = Number(guestNumber);
  return guestNum >= 1 && guestNum <= 10;
}
export function isOccasionValid(occasion) {
  return Boolean(occasion);
}
export function isNameValid(name) {
  return Boolean(name && name.trim());
}

function BookingForm({
  name,
  date,
  time,
  guestNumber,
  occasion,
  handleName,
  handleDate,
  handleTime,
  handleGuestNumber,
  handleOccasion,
  availableTimes,
}) {
  const navigate = useNavigate();

  // Date boundaries
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDateObj = new Date(today);
  maxDateObj.setDate(today.getDate() + 7);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  // Validation logic
  const _isNameValid = isNameValid(name);
  const _isDateValid = isDateValid(date, minDate, maxDate);
  const _isTimeValid = isTimeValid(time);
  const _isGuestNumberValid = isGuestNumberValid(guestNumber);
  const _isOccasionValid = isOccasionValid(occasion);
  const isFormValid =
    _isNameValid && _isDateValid && _isTimeValid && _isGuestNumberValid && _isOccasionValid;

  // Error messages
  let guestError = "";
  if (!_isGuestNumberValid) {
    if (Number(guestNumber) < 1) guestError = "At least one guest is required.";
    else if (Number(guestNumber) > 10) guestError = "Maximum number of guests is 10.";
  }

  return (
    <div className={styles["form-wrapper"]}>
      <h2>Reservation Form</h2>
      <form
        style={{ display: "grid", maxwidth: "200px", gap: "10px" }}
        onSubmit={e => {
          e.preventDefault();
          if (!isFormValid) return;
          // Save booking to localStorage
          const newBooking = { name, date, time, guestNumber, occasion };
          const stored = localStorage.getItem("bookings");
          const bookings = stored ? JSON.parse(stored) : [];
          bookings.push(newBooking);
          localStorage.setItem("bookings", JSON.stringify(bookings));
          // Redirect to confirmation page with form data
          navigate("/booking-confirmation", {
            state: { name, date, time, guestNumber, occasion },
          });
        }}
      >
        <label htmlFor="res-name">Name</label>
        <input
          type="text"
          id="res-name"
          value={name}
          onChange={handleName}
          required
          placeholder="Your name"
        />
        {!_isNameValid && (
          <span style={{ color: "red", fontSize: "0.95em" }}>
            Please enter your name.
          </span>
        )}

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDate}
          min={minDate}
          max={maxDate}
          required
        />
        {!_isDateValid && (
          <span style={{ color: "red", fontSize: "0.95em" }}>
            Please select a date from today up to one week from today.
          </span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTime} required>
          <option value="">-- Select time --</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {!_isTimeValid && (
          <span style={{ color: "red", fontSize: "0.95em" }}>
            Please select a reservation time.
          </span>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestNumber}
          onChange={handleGuestNumber}
          required
        />
        {!_isGuestNumberValid && (
          <span style={{ color: "red", fontSize: "0.95em" }}>{guestError}</span>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasion} required>
          <option value="">-- Select occasion --</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {!_isOccasionValid && (
          <span style={{ color: "red", fontSize: "0.95em" }}>
            Please select an occasion for your reservation.
          </span>
        )}

        {!isFormValid && (
          <span style={{ color: "red", fontSize: "1em", marginTop: 8 }}>
            Please correct the errors above before submitting your reservation.
          </span>
        )}
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
