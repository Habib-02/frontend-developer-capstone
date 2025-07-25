import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./components/bookingpage/BookingPage.jsx";
import BookingConfirmation from "./components/bookingpage/bookingConfirmation/BookingConfirmation.jsx";
import BookingsTable from "./components/bookingpage/BookingsTable.jsx";

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/bookingpage", Component: BookingPage },
  { path: "/booking-confirmation", Component: BookingConfirmation },
  { path: "/bookings-table", Component: BookingsTable },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
