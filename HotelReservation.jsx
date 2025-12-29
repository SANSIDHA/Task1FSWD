import React from "react";

function HotelReservation() {
  const reserveRoom = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Guest Name:");
    if (!name) {
      alert("Reservation cancelled: Name is required.");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Suite):");
    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights) || nights <= 0) {
      alert("Invalid number of nights.");
      return;
    }

    // Confirmation dialog
    const confirmReservation = confirm(
      `Please confirm your reservation:\n\n` +
      `Guest Name: ${name}\n` +
      `Room Type: ${roomType}\n` +
      `Number of Nights: ${nights}`
    );

    // Alert based on confirmation
    if (confirmReservation) {
      alert(
        `🏨 Reservation Successful!\n\n` +
        `Guest: ${name}\n` +
        `Room: ${roomType}\n` +
        `Nights: ${nights}\n\n` +
        `Thank you for choosing our hotel!`
      );
    } else {
      alert("❌ Reservation Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}

export default HotelReservation;
