// Countdown end time
const endTime = new Date();

// 5 minutes from now
endTime.setMinutes(endTime.getMinutes() + 5);

function updateUnit(unit, value) {
  // Mapping to new professional class names
  const upper = unit.querySelector(".card-face--front");
  const lower = unit.querySelector(".card-face--back");

  if (upper.textContent !== value) {
    // Create flipping element
    const flip = document.createElement("div");
    
    // Kept your original logic & added standard animation class
    flip.classList.add("card-face", "card-face--front", "is-flipping");
    flip.style.position = "absolute";
    flip.style.top = "0";
    flip.style.transformOrigin = "bottom";
    flip.style.animation = "flipTopCard 0.6s ease-in-out forwards";
    
    flip.textContent = value;

    unit.querySelector(".flip-card").appendChild(flip);

    // After animation (Kept your original timeout logic)
    setTimeout(() => {
      upper.textContent = value;
      lower.textContent = value;
      flip.remove();
    }, 600); // Matched with CSS animation duration
  }
}

function updateCountdown() {
  const now = new Date();
  const remaining = Math.max(0, endTime - now);

  // Days calculation (Original)
  const days = Math.floor(
    remaining / (1000 * 60 * 60 * 24)
  );

  // Hours calculation (Original)
  const hours = Math.floor(
    (remaining / (1000 * 60 * 60)) % 24
  );

  // Minutes calculation (Original)
  const minutes = Math.floor(
    (remaining / (1000 * 60)) % 60
  );

  // Seconds calculation (Original)
  const seconds = Math.floor(
    (remaining / 1000) % 60
  );

  // Selecting by modern data attributes instead of messy IDs
  updateUnit(
    document.querySelector('[data-unit="days"]'),
    String(days).padStart(2, "0")
  );

  updateUnit(
    document.querySelector('[data-unit="hours"]'),
    String(hours).padStart(2, "0")
  );

  updateUnit(
    document.querySelector('[data-unit="minutes"]'),
    String(minutes).padStart(2, "0")
  );

  updateUnit(
    document.querySelector('[data-unit="seconds"]'),
    String(seconds).padStart(2, "0")
  );

  // Stop countdown (Original)
  if (remaining <= 0) {
    clearInterval(timer);
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
