import express, { Request, Response } from "express";
import cors from "cors";
import mysql2 from "mysql2";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'type',
    port: 3306
})

app.post("/logar", (req: Request, res: Response) => {
    let { email, password } = req.body;
    let query = "SELECT * FROM type.usuarios WHERE email = ? AND senha = ?";
    console.log(email);
    console.log(password);
    db.query(query, [email, password], (err: any, response: any) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
        res.json(response);

    })
})
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})