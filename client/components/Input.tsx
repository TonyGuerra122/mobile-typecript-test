import {View, TextInput} from "react-native";

interface Props{
    style1?: any,
    style2?: any,
    testID: string,
    value: any,
    placeholder?: string,
    secureTextEntry: boolean,
    onChangeText: (text:any) => void
}

const Input: React.FC<Props> = ({style1, style2, testID, value, placeholder, onChangeText, secureTextEntry}) =>{
    return(
        <View style={style1}>
            <TextInput  
            secureTextEntry={secureTextEntry}
            style={style2}
            testID={testID}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            />
        </View>
    )
}
export default Input;