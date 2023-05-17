import { RowDataPacket } from "mysql2";
import Connection from "../configs/Connection";

interface UserRow {
  nome: string;
  // Adicione outras propriedades aqui, se necessário
}

class User {
  private email: string;
  private password: string;
  private name?: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public async setUser(): Promise<void> {
    const connection = new Connection();

    try {
      const db = await connection.getConnect();
      const [rows] = await db.query<RowDataPacket[]>(
        "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
        [this.email, this.password]
      );

      if (Array.isArray(rows) && rows.length > 0) {
        const result = rows[0] as UserRow;
        this.name = result.nome;
      }

      await connection.endConnection();
    } catch (error) {
      throw error;
    }
  }
  public getName():string | undefined{
    return this.name;
  }
}
export default User;