import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

//Configuração padrão para de um banco de dados
const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production" && {ssl: {rejectUnauthorized: false,},}),};

export const db = new Pool(configDatabase);