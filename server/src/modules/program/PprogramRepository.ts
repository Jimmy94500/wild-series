// server/src/modules/program/ProgramRepository.ts
import "dotenv/config";
import mysql from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

class PprogramRepository {
  readById(parsedId: number) {
    throw new Error("Method not implemented.");
  }
  private databaseClient;

  constructor() {
    this.databaseClient = mysql.createPool({
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
  }

  async readAll(q: string | undefined) {
    const [rows] = await this.databaseClient.query("SELECT * FROM program");
    return rows;
  }

  close() {
    this.databaseClient.end();
  }
}

export default new PprogramRepository();