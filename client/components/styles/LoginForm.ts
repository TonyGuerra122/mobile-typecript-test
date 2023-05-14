import {StyleSheet} from "react-native";
interface Style{
    formBox: object,
    formHeader: object,
    formTitle: object,
    formMain: object,
    formInput: object,
    input: object,
    formFooter: object,
    formSubmit: object
}
const style: Style = StyleSheet.create({
    formBox: {
        width: '60%',
        height: '30%',
    },
    formHeader: {
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formTitle: {
        color: '#FFF',
        fontSize: 25
    },
    formMain: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column'
    },
    formInput:{
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 8
    },
    formFooter:{
        width: '100%',
        height: '15%',
        display: 'flex'
    },
    formSubmit:{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default style;