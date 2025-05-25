import { Sequelize } from "sequelize";
import db from "../databases/Databases.js";

const catat = db.define(
  "catat",
  {
    Judul: Sequelize.STRING,
    Note: Sequelize.STRING,
    Pembuat: Sequelize.STRING,
  },
  {
    freezeTableName: true  // ✅ Mencegah Sequelize mengubah jadi "catats"
  }
);

export default catat;
