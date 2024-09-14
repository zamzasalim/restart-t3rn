const { exec } = require('child_process');

// Fungsi untuk merestart service executor
function restartExecutor() {
  exec('sudo systemctl restart executor', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
}

// Interval waktu: 15 Menit = 900000 milidetik
setInterval(restartExecutor, 900000);

// Jalankan perintah pertama kali saat script dimulai
restartExecutor();
