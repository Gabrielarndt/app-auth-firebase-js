import { Button, View } from "react-native";

export default function Home({navigation}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 20}}>
            <Button 
              title="Authentication"
              onPress={() => navigation.navigate('Auth')}
            />
            <Button 
              title="Agenda"
              onPress={() => navigation.navigate('Agenda')}
            />
        </View>
    )}