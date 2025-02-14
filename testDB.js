const db = require('./config/db');

async function testConnection() {
  try {
    const [result] = await db.query("SELECT 1 + 1 AS test");
    console.log("Database Connected:", result[0].test);
  } catch (error) {
    console.error("Database Connection Failed:", error);
  }
}

testConnection();
