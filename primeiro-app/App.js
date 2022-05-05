
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/form';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>

    
  );
} 

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#9370DB',
    paddingTop:80,

  },
});
