const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Naam: ", (naam) => {
  rl.question("Datum (YYYY-MM-DD): ", (datum) => {
    rl.question("Project: ", (project) => {
      rl.question("Uren: ", (uren) => {

        const bestand = "urenregistratie.csv";
        const regel = `${naam},${datum},${project},${uren}\n`;

        // check of bestand bestaat
        if (!fs.existsSync(bestand)) {
          fs.writeFileSync(bestand, "naam,datum,project,uren\n");
        }

        // voeg regel toe
        fs.appendFileSync(bestand, regel);

        console.log("\nOpgeslagen in CSV!");
        rl.close();
      });
    });
  });
});