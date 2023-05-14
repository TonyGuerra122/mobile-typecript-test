import {View, Button} from "react-native";

interface Props{
    children: string,
    style1?: any,
    onPress: () => void
}

const Submit: React.FC<Props> = ({children, style1, onPress}) =>{
    return(
        <View style={style1}>
            <Button 
            title={children}
            onPress={onPress}
            />
        </View>
    )
}
export default Submit;
