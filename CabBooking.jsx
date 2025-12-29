import React from "react";

function CabBooking() {
  const bookCab = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Customer Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("Booking cancelled: Pickup location is required.");
      return;
    }

    const drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("Booking cancelled: Drop location is required.");
      return;
    }

    const cabType = prompt("Enter Cab Type (Mini / Sedan / SUV):");
    if (!cabType) {
      alert("Booking cancelled: Cab type is required.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your cab booking:\n\n` +
      `Customer Name: ${name}\n` +
      `Pickup Location: ${pickup}\n` +
      `Drop Location: ${drop}\n` +
      `Cab Type: ${cabType}`
    );

    // Alert based on confirmation
    if (confirmBooking) {
      alert(
        `🚖 Cab Booked Successfully!\n\n` +
        `Customer: ${name}\n` +
        `From: ${pickup}\n` +
        `To: ${drop}\n` +
        `Cab Type: ${cabType}\n\n` +
        `Driver will arrive shortly.`
      );
    } else {
      alert("❌ Cab Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default CabBooking;
