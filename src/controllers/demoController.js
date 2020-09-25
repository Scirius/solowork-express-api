// this allows to reset demo data (or initialize it on new elephant sql instance)
const dbConnection = require("../dbConfig");

const DemoController = {
  recreate: (req, res, next) => {
    let sqlQuery = `DROP TABLE users;
    CREATE TABLE users (id serial primary key, firstname varchar(255), lastname varchar(255));
    INSERT INTO users (firstname, lastname) VALUES 
    ('Joe', 'Cool'), ('Erika', 'Mustermann'), ('Erik', 'Mustermann'),
    ('John', 'Doe'), ('Elena', 'Doe'), ('Stephen', 'Sample');`;
    dbConnection
      .query(sqlQuery)
      .then((data) => {
        console.log("Demo content recreated");
        next();
      })
      .catch((e) => console.log(e));
  }
};

module.exports = DemoController;
