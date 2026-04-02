// ===== Variablen =====
let arbeitsSekunden = 0;
let pauseSekunden = 0;
let bruttoSekunden = 0;
let timerLaeuft = false;
let pauseAktiv = false;
let interval;



// ===== Elemente holen =====
const timer = document.getElementById("timer");
const status = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const weiterBtn = document.getElementById("weiterBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const pausenzeit = document.getElementById("pausenzeit");
const arbeitszeit = document.getElementById("arbeitszeit");


// ===== Event Listener =====
startBtn.addEventListener("click", function() {
	status.innerText = "Läuft";

	timerLaeuft = true;
	pauseAktiv = false;

	clearInterval(interval);

	interval = setInterval(function() {
		if (timerLaeuft) {
			if (pauseAktiv) {
				pauseSekunden++;
			} else {
				arbeitsSekunden++;
			}
		}		// Berechnet die Arbeitszeit.
			let sek = arbeitsSekunden;
			let stunden = Math.floor(sek / 3600);
			let minuten = Math.floor((sek % 3600) / 60);
			let sekunden = sek % 60;

			let formatierteArbeitszeit =
					stunden.toString().padStart(2, "0") + ":" +
					minuten.toString().padStart(2, "0") + ":" +
					sekunden.toString().padStart(2, "0");

			timer.innerText = formatierteArbeitszeit;
			arbeitszeit.innerText = formatierteArbeitszeit;

			// Berechnet die Pause.
			let sekPause = pauseSekunden;
			let stundenP = Math.floor(sekPause / 3600);
			let minutenP = Math.floor((sekPause % 3600) / 60);
			let sekundenP = sekPause % 60;

			let formatiertePause =
				stundenP.toString().padStart(2, "0") + ":" +
				minutenP.toString().padStart(2, "0") + ":" +
				sekundenP.toString().padStart(2, "0");
			
			pausenzeit.innerText = formatiertePause;

	}, 1000);

});

weiterBtn.addEventListener("click", function() {
	status.innerText = "Fortgesetzt";
	timerLaeuft = true;
	pauseAktiv = false;
});

pauseBtn.addEventListener("click", function() {
	status.innerText = "Pause";
	timerLaeuft = true;
	pauseAktiv = true;

});

stopBtn.addEventListener("click", function() {
	status.innerText = "Gestoppt";
	timerLaeuft = false;
	pauseAktiv = false;
	clearInterval(interval);
});

resetBtn.addEventListener("click", function() {
	status.innerText = "Zurückgesetzt";
	timerLaeuft = false;
	pauseAktiv = false;
	clearInterval(interval);
	arbeitsSekunden = 0;
	pauseSekunden = 0;
	timer.innerText = "00:00:00";
	arbeitszeit.innerText = "00:00:00";
	pausenzeit.innerText = "00:00:00";
	nettozeit.innerText = "00:00:00";

});

// ===== Initialisierung =====