function convertDecimalToOthers() {
      const decimalValue = document.getElementById('decimalInput').value;
  
      const binaryValue = parseInt(decimalValue, 10).toString(2);
      const octalValue = parseInt(decimalValue, 10).toString(8);
      const hexadecimalValue = parseInt(decimalValue, 10).toString(16).toUpperCase();
  
      document.getElementById('binaryInput').value = binaryValue || '';
      document.getElementById('octalInput').value = octalValue || '';
      document.getElementById('hexadecimalInput').value = hexadecimalValue || '';
    }
  
    function convertBinaryToOthers() {
      const binaryValue = document.getElementById('binaryInput').value;
  
      const decimalValue = parseInt(binaryValue, 2).toString(10);
      const octalValue = parseInt(binaryValue, 2).toString(8);
      const hexadecimalValue = parseInt(binaryValue, 2).toString(16).toUpperCase();
  
      document.getElementById('decimalInput').value = decimalValue || '';
      document.getElementById('octalInput').value = octalValue || '';
      document.getElementById('hexadecimalInput').value = hexadecimalValue || '';
    }
  
    function convertOctalToOthers() {
      const octalValue = document.getElementById('octalInput').value;
  
      const decimalValue = parseInt(octalValue, 8).toString(10);
      const binaryValue = parseInt(octalValue, 8).toString(2);
      const hexadecimalValue = parseInt(octalValue, 8).toString(16).toUpperCase();
  
      document.getElementById('decimalInput').value = decimalValue || '';
      document.getElementById('binaryInput').value = binaryValue || '';
      document.getElementById('hexadecimalInput').value = hexadecimalValue || '';
    }
  
    function convertHexadecimalToOthers() {
      const hexadecimalValue = document.getElementById('hexadecimalInput').value;
  
      const decimalValue = parseInt(hexadecimalValue, 16).toString(10);
      const binaryValue = parseInt(hexadecimalValue, 16).toString(2);
      const octalValue = parseInt(hexadecimalValue, 16).toString(8);
  
      document.getElementById('decimalInput').value = decimalValue || '';
      document.getElementById('binaryInput').value = binaryValue || '';
      document.getElementById('octalInput').value = octalValue || '';
    }
  
    const decimalInput = document.getElementById('decimalInput');
    decimalInput.addEventListener('input', convertDecimalToOthers);
  
    const binaryInput = document.getElementById('binaryInput');
    binaryInput.addEventListener('input', convertBinaryToOthers);
  
    const octalInput = document.getElementById('octalInput');
    octalInput.addEventListener('input', convertOctalToOthers);
  
    const hexadecimalInput = document.getElementById('hexadecimalInput');
    hexadecimalInput.addEventListener('input', convertHexadecimalToOthers);