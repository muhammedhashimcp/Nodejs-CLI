const fs = require('fs');

// Read the .env file
fs.readFile('.env', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading .env file:', err.message);
    return;
  }

  // Split the .env content into lines
  const envLines = data.split('\n');

  // Filter out any lines starting with '#' (comments) and empty lines
  const filteredEnvLines = envLines.filter((line) => line.trim() !== '' && !line.trim().startsWith('#'));

  // Create the .env.example content
  const envExampleContent = filteredEnvLines.map((line) => {
    const [key, value] = line.split('=');
    return `${key}=`;
  }).join('\n');

  // Write the .env.example file
  fs.writeFile('.env.example', envExampleContent, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing .env.example file:', writeErr.message);
      return;
    }

    console.log('.env.example file has been generated successfully.');
  });
});
