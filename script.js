let scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };
  
  const logBox = document.getElementById("log");
  function log(text) {
    logBox.innerText += text + "\n";
  }
  
  // Opening Ceremony
  function OpeningCeremony(callback) {
    log("🎉 Let the games begin!");
    setTimeout(() => {
      log("Initial Scores: " + JSON.stringify(scores));
      callback(LongJump); // Starting from Race100M → can change to callback(Race100M)
    }, 1000);
  }
  
  // Race 100M
  function Race100M(callback) {
    log("\n🏃‍♂️ Starting 100M Race...");
  
    setTimeout(() => {
      const times = {
        red: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10,
      };
  
      log("Race Times: " + JSON.stringify(times));
  
      const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
      scores[sorted[0][0]] += 50;
      scores[sorted[1][0]] += 25;
  
      log("Scores after 100M Race: " + JSON.stringify(scores));
      callback(LongJump);
    }, 3000);
  }
  
  // Long Jump
  function LongJump(callback) {
    log("\n🏃‍♀️ Starting Long Jump...");
  
    setTimeout(() => {
      const colors = ["red", "blue", "green", "yellow"];
      const winner = colors[Math.floor(Math.random() * 4)];
  
      scores[winner] += 150;
      log(`${winner.toUpperCase()} won the Long Jump!`);
      log("Scores after Long Jump: " + JSON.stringify(scores));
      callback(HighJump);
    }, 2000);
  }
  
  // High Jump
  function HighJump(callback) {
    log("\n🦘 Starting High Jump...");
  
    setTimeout(() => {
      const userColor = prompt("Which color secured the highest jump? (red/blue/green/yellow)");
  
      if (userColor && scores.hasOwnProperty(userColor.toLowerCase())) {
        scores[userColor.toLowerCase()] += 100;
        log(`${userColor.toUpperCase()} won the High Jump!`);
      } else {
        log("Event was cancelled or invalid input.");
      }
  
      log("Scores after High Jump: " + JSON.stringify(scores));
      callback(AwardCeremony);
    }, 1000);
  }
  
  // Award Ceremony
  function AwardCeremony() {
    log("\n🎖️ Award Ceremony");
  
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    log(`🥇 First Place: ${sorted[0][0].toUpperCase()} with ${sorted[0][1]} points`);
    log(`🥈 Second Place: ${sorted[1][0].toUpperCase()} with ${sorted[1][1]} points`);
    log(`🥉 Third Place: ${sorted[2][0].toUpperCase()} with ${sorted[2][1]} points`);
    log("🏁 Final Scores: " + JSON.stringify(scores));
  }
  