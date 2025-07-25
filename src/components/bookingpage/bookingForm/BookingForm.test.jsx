import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm, {
  isDateValid,
  isTimeValid,
  isGuestNumberValid,
  isOccasionValid,
} from "./BookingForm";

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

  it("applies correct HTML5 validation attributes to the date input", () => {
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
          availableTimes={[]}
        />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("min");
    expect(dateInput).toHaveAttribute("max");
    expect(dateInput).toHaveAttribute("required");
  });

  it("applies required attribute to the time select", () => {
    render(
      <MemoryRouter>
        <BookingForm
          date="2023-01-01"
          time=""
          guestNumber="2"
          occasion="Birthday"
          handleDate={() => {}}
          handleTime={() => {}}
          handleGuestNumber={() => {}}
          handleOccasion={() => {}}
          availableTimes={[]}
        />
      </MemoryRouter>
    );
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  it("applies min, max, and required attributes to the number of guests input", () => {
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
          availableTimes={[]}
        />
      </MemoryRouter>
    );
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  it("applies required attribute to the occasion select", () => {
    render(
      <MemoryRouter>
        <BookingForm
          date="2023-01-01"
          time="17:00"
          guestNumber="2"
          occasion=""
          handleDate={() => {}}
          handleTime={() => {}}
          handleGuestNumber={() => {}}
          handleOccasion={() => {}}
          availableTimes={[]}
        />
      </MemoryRouter>
    );
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("Validation functions", () => {
  describe("isDateValid", () => {
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];
    const maxDateObj = new Date(today);
    maxDateObj.setDate(today.getDate() + 7);
    const maxDate = maxDateObj.toISOString().split("T")[0];

    it("returns true for a valid date in range", () => {
      expect(isDateValid(minDate, minDate, maxDate)).toBe(true);
      expect(isDateValid(maxDate, minDate, maxDate)).toBe(true);
    });
    it("returns false for a date before min", () => {
      const before = new Date(today);
      before.setDate(today.getDate() - 1);
      const beforeStr = before.toISOString().split("T")[0];
      expect(isDateValid(beforeStr, minDate, maxDate)).toBe(false);
    });
    it("returns false for a date after max", () => {
      const after = new Date(today);
      after.setDate(today.getDate() + 8);
      const afterStr = after.toISOString().split("T")[0];
      expect(isDateValid(afterStr, minDate, maxDate)).toBe(false);
    });
    it("returns false for empty date", () => {
      expect(isDateValid("", minDate, maxDate)).toBe(false);
    });
  });

  describe("isTimeValid", () => {
    it("returns true for a non-empty time", () => {
      expect(isTimeValid("17:00")).toBe(true);
    });
    it("returns false for empty time", () => {
      expect(isTimeValid("")).toBe(false);
    });
  });

  describe("isGuestNumberValid", () => {
    it("returns true for guest numbers 1-10", () => {
      for (let i = 1; i <= 10; i++) {
        expect(isGuestNumberValid(i)).toBe(true);
      }
    });
    it("returns false for guest number < 1", () => {
      expect(isGuestNumberValid(0)).toBe(false);
      expect(isGuestNumberValid(-5)).toBe(false);
    });
    it("returns false for guest number > 10", () => {
      expect(isGuestNumberValid(11)).toBe(false);
      expect(isGuestNumberValid(100)).toBe(false);
    });
  });

  describe("isOccasionValid", () => {
    it("returns true for a non-empty occasion", () => {
      expect(isOccasionValid("Birthday")).toBe(true);
      expect(isOccasionValid("Anniversary")).toBe(true);
    });
    it("returns false for empty occasion", () => {
      expect(isOccasionValid("")).toBe(false);
    });
  });
});
