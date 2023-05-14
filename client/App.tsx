import { View, SafeAreaView } from 'react-native';
import style from './AppStyle';
import LoginForm from './components/LoginForm';

function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <LoginForm/>
      </View>
    </SafeAreaView>
  )
}
export default App;