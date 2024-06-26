import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const conn = await mysql.createConnection({
      host: "54.89.0.234",
      user: "shivam",
      password: "password",
    });
    return conn;
  } catch (error) {console.log("error connecting the server", error)}
};

export default await connection();
