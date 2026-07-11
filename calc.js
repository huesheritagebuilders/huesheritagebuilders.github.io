function calculate() {
    // Inputs
    const L = parseFloat(document.getElementById('L').value) || 0;
    const W = parseFloat(document.getElementById('W').value) || 0;
    const D = parseFloat(document.getElementById('D').value) || 0;
    const totalParts = parseFloat(document.getElementById('ratio').value);
    
    // Determine individual parts based on selection
    let cPart = 1, sPart, gPart;
    if(totalParts === 7) { sPart = 2; gPart = 4; }
    else if(totalParts === 5.5) { sPart = 1.5; gPart = 3; }
    else { sPart = 3; gPart = 6; }

    // Concrete Math
    const wetVol = L * W * D;
    const dryVol = wetVol * 1.54 * 1.05; // 1.54 shrink + 5% waste
    
    const cementM3 = (cPart/totalParts) * dryVol;
    const sandM3 = (sPart/totalParts) * dryVol * 0.313547;
    const gravM3 = (gPart/totalParts) * dryVol * 0.313547;
    const bags = cementM3 / 0.035;

    // Block Math
    const wH = parseFloat(document.getElementById('wH').value) || 0;
    const wP = parseFloat(document.getElementById('wP').value) || 0;
    const blockArea = 0.45 * 0.225; // Standard 9" block face
    const blocks = ((wH * wP) / blockArea) * 1.05;

    // Show Results
    document.getElementById('resBox').style.display = 'block';
    document.getElementById('outVol').innerText = wetVol.toFixed(2);
    document.getElementById('outCem').innerText = Math.ceil(bags);
    document.getElementById('outSand').innerText = sandM3.toFixed(2);
    document.getElementById('outGrav').innerText = gravM3.toFixed(2);
    document.getElementById('outBlocks').innerText = Math.ceil(blocks);
}
