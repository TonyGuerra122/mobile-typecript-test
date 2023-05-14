import { StyleSheet } from "react-native";

interface Style{
    container: object
}

const style: Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default style;