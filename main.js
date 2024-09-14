const { exec } = require('child_process');

// Fungsi untuk merestart service executor
function restartExecutor() {
  exec('sudo systemctl restart executor', (error, restart, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Sukses Restart ${restart}`);
  });
}

 process.stdout.write('\x1Bc');
  console.log('=====================================================');
  console.log('                  AIRDROP ASC                        ');
  console.log('=====================================================');
  console.log('  	  Bot : Auto Restart T3RN	            ');
  console.log('  	  Telegram Channel : @airdropasc	    ');
  console.log('  	  Telegram Group : @autosultan_group	    ');
  console.log('=====================================================');
  console.log();

// Interval waktu: 1 jam = 3600000 milidetik
setInterval(restartExecutor, 900000);

// Jalankan perintah pertama kali saat script dimulai
restartExecutor();
