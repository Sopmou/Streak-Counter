document.addEventListener("DOMContentLoaded", () => {
    const streakView = document.querySelector('.streak');
    const scoreView = document.querySelector('.score');
    
    // Werte aus dem Local Storage laden (falls vorhanden)
    let streak = localStorage.getItem('streak') ? parseInt(localStorage.getItem('streak')) : 0;
    let reward = localStorage.getItem('reward') ? parseFloat(localStorage.getItem('reward')) : 0;

    // Initialisierung der Anzeige mit gespeicherten Werten
    streakView.innerHTML = streak;
    scoreView.innerHTML = reward.toFixed(2);

    const submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener("click", () => {
        streak += 1;
        reward += 0.1 * streak

        // Werte in die Anzeige einfügen
        streakView.innerHTML = streak;
        scoreView.innerHTML = reward.toFixed(2);



        // Werte im Local Storage speichern
        localStorage.setItem('streak', streak);
        localStorage.setItem('reward', reward.toFixed(2));
    });

    // Reset für Streak
    document.querySelector('.resetStreakBtn').addEventListener("click", () => {
        streak = 0;
        streakView.innerHTML = streak;
        
        // Auch im Local Storage zurücksetzen
        localStorage.setItem('streak', streak);
    });

    // Reset für Score
    document.querySelector('.resetRewardBtn').addEventListener("click", () => {
        reward = 0;
        scoreView.innerHTML = reward.toFixed(2);



        // Auch im Local Storage zurücksetzen
        localStorage.setItem('reward', reward.toFixed(2));
    });
});

//Individuellen Betrag entfernen
document.querySelector("#payButton").addEventListener("click", () => {
  const input =
  document.getElementbyId("#payAmount")
  const currentValue = input.value
  reward -= input.value
  input.value = ""
}
        