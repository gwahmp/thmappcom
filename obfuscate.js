import fs from 'fs';
import path from 'path';
import JavaScriptObfuscator from 'javascript-obfuscator';

// Specify the directory containing the JS files
const inputDir = path.join(__dirname, 'assets', 'js');

// Function to obfuscate JS files
const obfuscateJSFiles = () => {
  // Read all files from the input directory
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error('Error reading the input directory:', err);
      return;
    }

    // Filter for .js files
    const jsFiles = files.filter(file => file.endsWith('.js'));

    // Process each JS file
    jsFiles.forEach(file => {
      const filePath = path.join(inputDir, file);
      const outputFilePath = path.join(inputDir, file.replace('.js', '.min.js'));

      // Read the content of the file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${filePath}:`, err);
          return;
        }

        // Obfuscate the content
        const obfuscatedCode = JavaScriptObfuscator.obfuscate(data).getObfuscatedCode();

        // Write the obfuscated content to a new file
        fs.writeFile(outputFilePath, obfuscatedCode, (err) => {
          if (err) {
            console.error(`Error writing obfuscated file ${outputFilePath}:`, err);
            return;
          }
          console.log(`Obfuscated ${file} to ${outputFilePath}`);
        });
      });
    });
  });
};

// Run the obfuscation process
obfuscateJSFiles();
