const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/budget.db", (error) => {
  if (error) {
    console.error(error.message);
  }
  console.log("Connedted to budget database");
});

export default function closeDb() {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connection Closed");
  });
}
