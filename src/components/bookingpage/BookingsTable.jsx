import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookingsTable.module.css";

function BookingsTable() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>All Bookings</h2>
      {bookings.length === 0 ? (
        <p className={styles.noBookings}>No bookings found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td data-label="Name">{b.name}</td>
                <td data-label="Date">{b.date}</td>
                <td data-label="Time">{b.time}</td>
                <td data-label="Guests">{b.guestNumber}</td>
                <td data-label="Occasion">{b.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className={styles.button} onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default BookingsTable; 