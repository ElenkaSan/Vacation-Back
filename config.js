"use strict";

/** Shared config for application; can be required many places. */
// const postgres = require('postgres');
// require("dotenv").config();
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
// const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;
// const sql = postgres(URL, { ssl: 'require' });
// async function getPostgresVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }
// getPostgresVersion();

// psql 'postgres://ElenkaSan:3onRTsuUqAf4@ep-flat-snow-630260.us-east-2.aws.neon.tech/neondb'

// const dotenv = require('dotenv');
// dotenv.config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "vacation_test"
      : process.env.DATABASE_URL || "vacation";
}

// psql 'postgres://ElenkaSan:3onRTsuUqAf4@ep-flat-snow-630260.us-east-2.aws.neon.tech/neondb'

// Export env variables
// module.exports = {
//   clientId: process.env.API_KEY,
//   clientSecret: process.env.API_SECRET,
// };

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Vacation Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
