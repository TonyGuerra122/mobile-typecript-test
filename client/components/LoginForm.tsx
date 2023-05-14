import {View, Text} from "react-native";
import {useState} from "react";
import Input from "./Input";
import Submit from "./Submit";
import style from "./styles/LoginForm";
import Axios from "axios";



const LoginForm: React.FC = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailField = (text:string):void =>{
        setEmail(text);
    }
    const handlePasswordField = (text: string):void =>{
        setPassword(text);
    }
    const sendData = async ():Promise<void> =>{
        let formData = {
            email: email,
            password: password
        }
        await Axios.post("http://192.168.1.106:3000/logar", formData)
        .then((response) =>{
            alert(response.data);
        })
    }

    return(
        <View style={style.formBox}>
            <View style={style.formHeader}>
                <Text style={style.formTitle}>Login</Text>
            </View>
            <View style={style.formMain}>
                <Input
                secureTextEntry={false}
                style1={style.formInput}
                style2={style.input}
                value={email}
                testID="email"
                placeholder="Digite o seu E-mail"
                onChangeText={handleEmailField}
                />
                <Input
                secureTextEntry={true}
                style1={style.formInput}
                style2={style.input}
                value={password}
                testID="password"
                placeholder="Digite a sua Senha"
                onChangeText={handlePasswordField}/>
            </View>
            <View>
                <Submit onPress={sendData}>Logar</Submit>
            </View>
        </View>
    )
}

export default LoginForm;