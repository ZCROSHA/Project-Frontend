
import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';


const LoginScreen = (props, navigation) => {

  sendCred=()=>{
    fetch("http://192.168.97.123:8000/signin",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      navigation.navigate('Home')
    })
    console.log(email,password)
  }


  return (
   <> 
   <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text 
      style={{fontSize:35,marginLeft:18,marginTop:10,color:"black"}}></Text>
      <Text 
      style={{fontSize:30,marginLeft:18,color:"black"}}
      >Login to your account</Text>
      <View
      style={{
        borderBottomColor:"black",
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:20,
        marginRight:150,
        marginTop:4
      }}
       />
      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >Login with email</Text>
      <TextInput
        label='Email'
        mode="outlined"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"black"}}}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"black"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18,backgroundColor:'black'}}
       onPress={() => console.log('Pressed')}>
        Login
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>navigation.navigate("SignupScreen")}
      >dont have a account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   </>
  );
};



export default LoginScreen;
