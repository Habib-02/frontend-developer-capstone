import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./BookingConfirmation.module.css";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className={styles.confirmationWrapper}>
        <h2 className={styles.heading}>No booking data found.</h2>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            onClick={() => navigate("/bookingpage")}
          >
            Back to Booking
          </button>
          <button className={styles.button} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.confirmationWrapper}>
      <h2 className={styles.heading}>Booking Confirmed!</h2>
      <ul className={styles.detailsList}>
        <li>
          <span>Date:</span> {data.date}
        </li>
        <li>
          <span>Time:</span> {data.time}
        </li>
        <li>
          <span>Number of guests:</span> {data.guestNumber}
        </li>
        <li>
          <span>Occasion:</span> {data.occasion}
        </li>
      </ul>
      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => navigate("/bookingpage")}
        >
          Book Another
        </button>
        <button className={styles.button} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
