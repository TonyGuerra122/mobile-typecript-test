import mysql from "mysql2/promise";
class Connection {
    private static host = "localhost";
    private static user = "root";
    private static password = "";
    private static database = "type";
    private static port = 3306;

    private async connect(): Promise<mysql.Connection> {
        try {
            const db = mysql.createConnection({
                host: Connection.host,
                user: Connection.user,
                password: Connection.password,
                database: Connection.database,
                port: Connection.port
            })
            return db;
        } catch (error) {
            throw error;
        }
    }
    public async getConnect():Promise<mysql.Connection>{
        return await this.connect();
    }
    public async endConnection(): Promise<void>{
        const connection = await this.getConnect();
        await connection.end(); 
    }
}
export default Connection;