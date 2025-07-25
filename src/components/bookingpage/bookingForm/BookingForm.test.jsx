import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("renders the reservation form and available times", () => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    render(
      <MemoryRouter>
        <BookingForm
          date="2023-01-01"
          time="17:00"
          guestNumber="2"
          occasion="Birthday"
          handleDate={() => {}}
          handleTime={() => {}}
          handleGuestNumber={() => {}}
          handleOccasion={() => {}}
          availableTimes={availableTimes}
        />
      </MemoryRouter>
    );
    // Check form heading
    expect(screen.getByText(/Reservation Form/i)).toBeInTheDocument();
    // Check available times are rendered as options
    availableTimes.forEach((time) => {
      expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
    });
    // Check labels
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });
});
