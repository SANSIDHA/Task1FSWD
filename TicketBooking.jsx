import React from "react";

function TicketBooking() {
  const bookTicket = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const source = prompt("Enter Source City:");
    if (!source) {
      alert("Booking cancelled: Source city is required.");
      return;
    }

    const destination = prompt("Enter Destination City:");
    if (!destination) {
      alert("Booking cancelled: Destination city is required.");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats) || seats <= 0) {
      alert("Invalid number of seats.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\n` +
      `Name: ${name}\n` +
      `From: ${source}\n` +
      `To: ${destination}\n` +
      `Seats: ${seats}`
    );

    // Alert based on confirmation
    if (confirmBooking) {
      alert(
        `🎉 Booking Successful!\n\n` +
        `Passenger: ${name}\n` +
        `Route: ${source} → ${destination}\n` +
        `Seats Booked: ${seats}`
      );
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Flight Ticket</button>
    </div>
  );
}

export default TicketBooking;
