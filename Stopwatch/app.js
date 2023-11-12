
  let [s, m, h] = [0, 0, 0];
  let displayTime = document.getElementById("displayTime");
  let timer = null;
  let playPause = document.getElementById("playpause");
  let watchstart = document.getElementById("watchstart");

  let lapResetButton = document.getElementById("lapRestart");
  let LapsContainer = document.getElementById("laps");

  let lastLapTimestamp = new Date().getTime();
  let lapNum = 1;

  function stopwatch() {
    s++;
    if (s == 60) {
      s = 0;
      m++;
      if (m == 60) {
        m = 0;
        h++;
      }
    }

    displayTime.innerHTML =
      (h < 10 ? "0" + h : h) +
      ":" +
      (m < 10 ? "0" + m : m) +
      ":" +
      (s < 10 ? "0" + s : s);
  }

  let initialTimestamp = null;

  function watchStart() {
    if (playPause.classList.contains("fa-play")) {
      playPause.classList.remove("fa-play");
      playPause.classList.add("fa-pause");
      lapResetButton.textContent = "Lap";

      if (timer === null) {
        initialTimestamp = new Date().getTime(); 
        timer = setInterval(stopwatch, 1000);
      }
      
    } else {
      lapResetButton.textContent = "Reset";
      playPause.classList.add("fa-play");
      playPause.classList.remove("fa-pause");
      clearInterval(timer);
      timer = null;
    }
  }

  watchstart.addEventListener("click", watchStart);

  function watchResetLap() {
    if (lapResetButton.textContent.includes("Reset")) {
      clearInterval(timer);
      s = 0;
      m = 0;
      h = 0;
      displayTime.innerHTML = "00:00:00";
      if (playPause.classList.contains("fa-pause")) {
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
      }
      LapsContainer.innerHTML = "";
      lapNum = 1;
      lastLapTimestamp = null;
    }

    if (lapResetButton.textContent.includes("Lap")) {
      const currentTimestamp = new Date().getTime();

      const lapTimeDifference = currentTimestamp - initialTimestamp;
      const lapTime = formatTimeDifference(lapTimeDifference);

      let lap = document.createElement("div");
      lap.className = "lap";
      lap.innerHTML = `<span class="lap-label">Lap ${lapNum}:</span>  <span class="lap-time">${lapTime}</span>`;

      LapsContainer.appendChild(lap);
      lapNum++;

      initialTimestamp = currentTimestamp;
    }
  }

  lapResetButton.addEventListener("click", watchResetLap);

  function formatTimeDifference(timeDifference) {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

    return (
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

