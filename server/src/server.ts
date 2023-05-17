import express, {Request, Response} from "express";
import cors from "cors";
import User from "./models/User";
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/logar", async (req:Request, res:Response):Promise<void> =>{
    let {email, password} = req.body;
    const user = new User(email, password);
    user.setUser()
  .then(() => {
    console.log(user.getName());
    if(user.getName() == undefined){
        res.json(false);
    }else{
        res.json(user.getName()) // Exibe o nome do usuário
    }
  })
  .catch((error:any) => {
    console.error(error);
    res.status(500); // Trata possíveis erros
  });
})

app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`);
})