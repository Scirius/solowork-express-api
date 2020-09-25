const dbConnection = require("../dbConfig");

const UserController = {
  getAll: (req, res, next) => {
    dbConnection
      .query(`SELECT * FROM "users"`)
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
  getSingleUser: (req, res, next) => {
    let { id } = req.params;
    dbConnection
      .query(`SELECT * FROM "users" WHERE id=${id}`)
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
  updateUser: (req, res, next) => {
    let { id } = req.params;
    let { firstname, lastname } = req.query;
    if (!firstname || !lastname) {
      res.sendStatus(400);
    }
    let sqlQuery =
      `UPDATE "users" SET ` +
      (firstname ? "firstname='" + firstname + "'" : "") +
      (firstname && lastname ? ", " : "") +
      (lastname ? "lastname='" + lastname + "'" : "") +
      ` WHERE id=${id} RETURNING *`;

    console.log(sqlQuery);
    dbConnection
      .query(sqlQuery)
      .then((data) => res.json(data.rows))
      .catch((e) => {
        res.sendStatus(500);
        console.log(e);
      });
  },
  deleteUser: (req, res, next) => {
    let { id } = req.params;

    let sqlQuery = `DELETE FROM "users" WHERE id=${id}`;

    if (isNaN(Number(id))) {
      res.sendStatus(400);
      console.log("delete prohibited:" + sqlQuery);
      return;
    } else {
      console.log("delete allowed:" + sqlQuery);
    }

    dbConnection
      .query(sqlQuery)
      .then((data) => res.json(data.rows))
      .catch((e) => {
        res.sendState(500);
        console.log(e);
      });
  }
};

module.exports = UserController;
