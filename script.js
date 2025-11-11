// write js code here if required
  const timerEl = document.getElementById('timer') || document.querySelector('p');

  if (!timerEl) {
    console.warn('No <p> element found to show the timer.');
  } else {
    // helper to add leading zero
    const pad = n => n.toString().padStart(2, '0');

    function updateTimer() {
      const now = new Date();
      const day = pad(now.getDate());
      const month = pad(now.getMonth() + 1); // months are 0-indexed
      const year = now.getFullYear();
      const hours = pad(now.getHours());
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());

      timerEl.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    }

    // initial render + update every second
    updateTimer();
    setInterval(updateTimer, 1000);
  }