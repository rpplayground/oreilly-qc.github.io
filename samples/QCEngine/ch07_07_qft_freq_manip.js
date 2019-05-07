// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=7-7

// Setup input register
var n = 4;

// Prepare a complex sinuisoidal signal
qc.reset(n);
var freq = 2;
qc.write(freq);
var signal = qint.new(n, 'signal');
signal.invQFT();

// Move to frequency space with QFT
signal.QFT();

// Increase the frequency of signal
signal.add(1)

// Move back from frequency space
signal.invQFT();