const latencyTerpenuhi = (rps, p50, p75, p95) => {
  if (rps < 0 || p50 < 0 || p75 < 0 || p95 < 0) {
    console.log('Nilai tidak boleh di bawah 0');
    return;
  }

  if (p95 >= p75 && p75 >= p50) {
    if (rps <= 0.1) {
      if (p50 <= 100 && p75 <= 150 && p95 <= 360) {
        console.log('Memenuhi');
        return 1;
      } else {
        console.log('Tidak memenuhi');
        return 0;
      }
    } else if (rps <= 1) {
      if (p50 <= 80 && p75 <= 120 && p95 <= 300) {
        console.log('Memenuhi');
        return 1;
      } else {
        console.log('Tidak memenuhi');
        return 0;
      }
    } else if (rps <= 5) {
      if (p50 <= 60 && p75 <= 90 && p95 <= 240) {
        console.log('Memenuhi');
        return 1;
      } else {
        console.log('Tidak memenuhi');
        return 0;
      }
    } else if (rps > 5) {
      if (p50 <= 40 && p75 <= 60 && p95 <= 180) {
        console.log('Memenuhi');
        return 1;
      } else {
        console.log('Tidak memenuhi');
        return 0;
      }
    }
  } else {
    console.log('Invalid input');
    return -1;
  }
};

latencyTerpenuhi(0.05, 20, 40, 70);
latencyTerpenuhi(2.3, 35, 80, 245);
latencyTerpenuhi(1.2, 80, 50, 60);
