const express = require("express");
const app = express();
const mysql = require("mysql");
const { join } = require("path");
const port = 3000;
app.set("views", join(__dirname, "views"));
app.set("view engien", "ejs");
app.use(express.static(join(__dirname, "public")));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "succer_db",
});

let insertSoccerTable = () => {
  let query = `INSERT INTO \`football_table\`(\`name\`, \`points\`, \`rank\`) VALUES ('maccabi haifa',56,1),
  ('maccabi natania',12,8),('bnei skhnin',8,14),('hapoel beer sheva',50,3),('beitar jerusalem',9,13),('maccabi tel aviv',51,2)`;
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
};

// insertSoccerTable();

const selectSoccerTable = async () => {
  let query = `SELECT * FROM football_table`;

  let data = await connection.query(query, (err, reoult) => {
    if (err) console.log(err);
    console.log(reoult);
  });
  return data;
};

//  selectSoccerTable()
// update Navgation
app.get("/update/:id", (req, res) => {
  let id = req.params.id;
  let query = `SELECT * FROM football_table
  WHERE \`id\` = ${id}
  `;
  connection.query(query, (err, resoult) => {
    if (err) console.log(err);
    console.log(resoult);
    res.render("update.ejs", { resoult });
  });
});
app.post("/update/:id", (req, res) => {
  let id = req.params.id;
  let { name, points, rank} = req.body;

  let query = `UPDATE football_table 
  SET \`name\` = "${name}", \`points\` ="${points}", \`rank\`=  ${rank}
  WHERE \`id\` = ${id}
;`;
  connection.query(query, (err, resoult) => {
    if (err) throw err;
    console.log(resoult);
  });
  res.redirect("/table");
});
// delete
app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  let query = `DELETE FROM football_table
 WHERE \`id\` =  ${id};
 `;
  connection.query(query, (err, resoult) => {
    if (err) throw err;
    console.log(resoult);
  });
  res.redirect("/table");
});

// A navagation endpoint
app.get("/add", (req, res) => {
  res.render("addNew.ejs");
});

app.get("/table", async (req, res) => {
  let query = `SELECT * FROM football_table`;
  await connection.query(query, (err, resoult) => {
    if (err) console.log(err);
    res.render("index.ejs", {resoult});
  });
    })
    app.post("/insertTeam", (req, res) => {
  let { name, points, rank} = req.body;
  let query = `INSERT INTO football_table (\`name\`, \`points\`, \`rank\`) VALUES
("${name}", ${points}, ${rank});`;

  connection.query(query, (err, result) => {
    if (err) console.log(err);
  });

  res.redirect("/table");
});
app.listen(port, () => {
  console.log(`listining on port ${port}`);
});
