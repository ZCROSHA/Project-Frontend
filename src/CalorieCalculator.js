import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      age: '',
      Activity_Level: '',
      bmi: '',
      BmiResult: '',
   }
   
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
  handleAge = (text) => {
     this.setState({ age: text })
}
handleActivity = (text) => {
   this.setState({ Activity_Level: text })
}


   calculate = (height, weight, age, Activity_Level) => {
      //calculation
      var result = 66 + (parseFloat(weight)*13.7)+(parseFloat(height)*5) - (parseFloat(age)*6.8);
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(Activity_Level<4999){
         this.setState({ bmi: result*1.2 })
        // result = result*1.2
         this.setState({BmiResult:'Sedentary'})
      }
      else if(Activity_Level>=5000&&Activity_Level<7499){
         //result = result*1.375
         this.setState({ bmi: result*1.375 })
         this.setState({BmiResult:'Lightly Active'})
      }
      else if(Activity_Level>=7500&&Activity_Level<9999){
         this.setState({ bmi: result*1.55})
         this.setState({BmiResult:'Active'})
      }
      else if(Activity_Level>=10000&&Activity_Level<12499){
         this.setState({ bmi: result*1.725})
         this.setState({BmiResult:'Very Active'})
      }
      else if(Activity_Level>=12500){
         this.setState({ bmi: result*1.9})
         this.setState({BmiResult:'Extremly Active'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>Calorie Maintence</Text>
            
            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (Cm)"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
<Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (Kg)"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
               <Text  style = {styles.label}>Age</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age"
               autoCapitalize = "none"
               onChangeText = {this.handleAge}/>
<Text  style = {styles.label}>Gender</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Gender"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            <Text  style = {styles.label}>Activity Level</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Activity_Level"
               autoCapitalize = "none"
               onChangeText = {this.handleActivity}/>


            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight, this.state.age, this.state.Activity_Level)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     // fontWeight:"bold",
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'black'
   },
   label:{
      marginLeft: 15,
   }
})