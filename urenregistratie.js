const readline = require("readline"); // Module om input van gebruiker te lezen via de terminal
const fs = require("fs"); // File System module om bestanden te maken/lezen/schrijven

// Maakt een interface voor input en output
const rl = readline.createInterface({
  input: process.stdin,   // Wat de gebruiker typt
  output: process.stdout  // Wat op het scherm verschijnt
});

// Vraagt de naam van de gebruiker
rl.question("Naam: ", (naam) => {

  // Vraagt de datum
  rl.question("Datum (YYYY-MM-DD): ", (datum) => {

    // Vraagt de projectnaam
    rl.question("Project: ", (project) => {

      // Vraagt het aantal uren
      rl.question("Uren: ", (uren) => {

        const bestand = "urenregistratie.csv"; 
        // Naam van het CSV-bestand waar data wordt opgeslagen

        const regel = `${naam},${datum},${project},${uren}\n`; 
        // Maakt een regel in CSV-formaat (waarden gescheiden door komma’s)

        // Controleert of het bestand al bestaat
        if (!fs.existsSync(bestand)) {
          // Als het bestand niet bestaat → maak het aan met kolomnamen (header)
          fs.writeFileSync(bestand, "naam,datum,project,uren\n");
        }

        // Voegt de nieuwe regel toe aan het bestand
        fs.appendFileSync(bestand, regel);

        console.log("\nOpgeslagen in CSV!"); // Bevestiging voor gebruiker

        rl.close(); // Sluit de input → programma stopt
      });
    });
  });
});