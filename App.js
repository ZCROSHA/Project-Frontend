//import * as React from 'react';
import React,{useEffect,useState} from 'react';
import { TextInput } from 'react-native-paper';
import {  ImageBackground, Image, View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import HomeScreen from './src/HomeScreen';
import LoadingScreen from './src/LoadingScreen';
import BMI from './src/BMI';
import CalorieCalculator from './src/CalorieCalculator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = { uri: "https://thumbs.dreamstime.com/b/glowing-neon-line-smart-watch-showing-heart-beat-rate-icon-isolated-brick-wall-background-fitness-app-concept-vector-188127041.jpg" };
const image2 = { uri: "https://cdn1.vectorstock.com/i/1000x1000/93/75/seamless-pattern-background-with-fitness-icons-vector-16799375.jpg"};

function Loading({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
      <Text>Loading Screen</Text>
      <Button 
      title="Signup"
      color="blue"

      onPress={() => navigation.navigate('SignupScreen')}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       
       </ImageBackground>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
      title="Calorie Maintenance Calculator"
      color="red"
      onPress={() => navigation.navigate('CalorieCalculator')}
      style={{ backgroundColor: 'green' }}
      />
      <Button
      title="Body Mass Index Calculator"
      color="red"
      onPress={() => navigation.navigate('BMI')}
      style={{ backgroundColor: 'green' }}
      />
      <Button
      title="Workout Plan"
      color="red"
      onPress={() => navigation.navigate('WorkoutPlan')}
      style={{ backgroundColor: 'green' }}
      />
       <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
       <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Text>
          
        </Text>
       </ImageBackground>
    </View>
  );
}

function WorkoutPlan({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
      <Text>Workout Plan</Text>
      <Image source={{ uri:  'https://thumbs.dreamstime.com/b/holding-dumbbell-business-name-logo-design-template-black-dumbbell-hand-wearing-red-glove-holding-dumbbell-business-172910318.jpg' }} style={styles.logo} />
      <Button
      title=""
      color="Black"
      
      onPress={() => navigation.navigate('Push1')}
      style={{ backgroundColor: '' }}
      /><Button
      title="Push1                     "
      color="red"
      
      onPress={() => navigation.navigate('Push1')}
      style={{ backgroundColor: '' }}
      />
      <Button
      title="Pull1                     "
      color="black"
      onPress={() => navigation.navigate('Pull1')}
      style={{ backgroundColor: 'green' }}
      />
      
      <Button
      title="legs                       "
      
      color="red"
      onPress={() => navigation.navigate('Legs')}
      style={{ backgroundColor: 'green' }}
      />
      <Button
      title="Push2                     "
      color="black"
      onPress={() => navigation.navigate('Push2')}
      style={{ backgroundColor: 'green' }}
      />
      <Button
      title="Pull2                     "
      color="red"
      onPress={() => navigation.navigate('Pull2')}
      style={{ backgroundColor: 'green' }}
      />
       
    </View>
  );
}


function Push1({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'White', justifyContent: 'center' }}>
      <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
      <Text>Workout Plan - Push1</Text>
      <Text></Text>
      <Text> </Text>
      <Text>Cable side raises </Text>
      <Text>Flat Chest machine </Text>
      <Text>Incline Dumbbell chest press</Text>
      <Text>Pec Dec</Text>
      <Text>Incline chest machine</Text>
      <Text>Side Lat raise </Text>
      <Text>Close grip benchPress</Text>
      <Text>Tricep Dips</Text>
      <Text>Tricep Rope Pulldown</Text>
      <Text></Text>
      <Text></Text>
      <Text>2 Warmup Sets,  1 Prediction Set</Text>
      <Text>3 Working sets, 9, 12, 15 Rep Range</Text>
      
      
       
    </View>
  );
}


function Pull1({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'White', justifyContent: 'center' }}>
      <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
      <Text>Workout Plan - Pull1</Text>
      <Text></Text>
      <Text> </Text>
      <Text>Single Lat Pulldown </Text>
      <Text>Close grip Pulldown </Text>
      <Text>Single arm row</Text>
      <Text>Rear Delt fly</Text>
      <Text>Barbell Rows</Text>
      <Text>Dumbbell bicep Curls</Text>
      <Text>Hammer Curls</Text>
      <Text>Zottman Curls</Text>
      <Text></Text>
      <Text></Text>
      <Text>2 Warmup Sets,  1 Prediction Set</Text>
      <Text>3 Working sets, 9, 12, 15 Rep Range</Text>
      
      
       
    </View>
  );
}

function Legs({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'White', justifyContent: 'center' }}>
      <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
      <Text>Workout Plan - Legs</Text>
      <Text></Text>
      <Text> </Text>
      <Text>Hack Squats </Text>
      <Text>Adduction </Text>
      <Text>Leg Press</Text>
      <Text>Leg Press (Close)</Text>
      <Text>Leg Extensions</Text>
      <Text>Hamstring curls </Text>
      <Text>Calf Raises</Text>
      <Text></Text>
      <Text></Text>
      <Text>2 Warmup Sets,  1 Prediction Set</Text>
      <Text>3 Working sets, 9, 12, 15 Rep Range</Text>
      
      
       
    </View>
  );
}

function Push2({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'White', justifyContent: 'center' }}>
      <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
      <Text>Workout Plan - Push2</Text>
      <Text></Text>
      <Text> </Text>
      <Text>Cable side raises </Text>
      <Text>Shoulder Press machine </Text>
      <Text>Shoulder Press DB</Text>
      <Text>Lat side raises</Text>
      <Text>Incline Chest Machine</Text>
      <Text>Seated Pec Dec </Text>
      <Text>DB Front Raises</Text>
      <Text>Tricep Dips</Text>
      <Text>Tricep Rope Pulldown</Text>
      <Text></Text>
      <Text></Text>
      <Text>2 Warmup Sets,  1 Prediction Set</Text>
      <Text>3 Working sets, 9, 12, 15 Rep Range</Text>
      
      
       
    </View>
  );
}

function Pull2({ navigation }) {
  return (
    <View style={styles.container}style={{ flex: 1, alignItems: 'center', backgroundColor: 'White', justifyContent: 'center' }}>
      <Image source={{ uri:  'https://i.pinimg.com/originals/3e/4e/83/3e4e83ecb133c19f2a08fc9fb5ea9f11.png' }} style={styles.logo} />
      <Text>Workout Plan - Pull2</Text>
      <Text></Text>
      <Text> </Text>
      <Text>Barbell Rows </Text>
      <Text>Single lat Pulldown </Text>
      <Text>Single Arm Row </Text>
      <Text>RDL</Text>
      <Text>Hamstring Curls</Text>
      <Text>Hip Thrusts </Text>
      <Text>DB Bicep Curls</Text>
      <Text>Hammer Curls</Text>
      <Text>Zottman Curls</Text>
      <Text></Text>
      <Text></Text>
      <Text>2 Warmup Sets,  1 Prediction Set</Text>
      <Text>3 Working sets, 9, 12, 15 Rep Range</Text>
      
      
       
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  const [isloggedin,setLogged] = useState(null)

useEffect(async()=>{
  const token = await AsyncStorage.getItem('token')
    if(token){
        setLogged(true)
    }else{
          setLogged(false)
    }
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator headermode="none">{
        isloggedin==null ? (
      <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : isloggedin == true ? (
      <Stack.Screen name="home" component={HomeScreen}/>
        ):(<>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="CalorieCalculator" component={CalorieCalculator}/>
        <Stack.Screen name="BMI" component={BMI}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlan}/>
        <Stack.Screen name="Push1" component={Push1}/>
        <Stack.Screen name="Pull1" component={Pull1}/>
        <Stack.Screen name="Legs" component={Legs}/>
        <Stack.Screen name="Push2" component={Push2}/>
        <Stack.Screen name="Pull2" component={Pull2}/>
        

        </>)
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    image:{
      flex: 2,
      justifyContent:"center",
      width: 305,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});
