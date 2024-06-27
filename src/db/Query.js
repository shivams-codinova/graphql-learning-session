import db from './db.conn.js'

export const query = async (sql) => {
    try {
        const [results] = await db.query(sql);
        return results
      } catch (err) {
        console.log("error in excuting sql query", err);
      }

}