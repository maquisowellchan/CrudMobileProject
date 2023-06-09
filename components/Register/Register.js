  import * as React from 'react';
  import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
  import styles from '../Styles/styles';
  import {Picker} from '@react-native-picker/picker';

  export default function Register({ navigation }){

      const [firstName, setFirstName] = React.useState("");
      const [lastName, setLastName] = React.useState("");
      const [age, setAge] = React.useState("");
      const [gender, setGender] = React.useState("male");
      const [email, setEmail] = React.useState("");
      const [contactNumber, setContactNumber] = React.useState("");
      

      const handleRegister = async () => {
        try {
          const response = await fetch('https://381d-49-145-200-206.ngrok-free.app/api/enrollment/store', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstname: firstName,
              lastname: lastName,
              age: age,
              gender: gender,
              email: email, 
              contactnumber: contactNumber,
            }),
          });
          console.log(response);
      
          const text = await response.text();
          // console.log('Response:', text);
      
          const json = JSON.parse(text);
          // console.log('JSON:', json);
        } catch (error) {
          console.error(error);
        }
      }


      return (

          <>
          <View style={{backgroundColor: '#242324', minHeight: 900}}>
              <View style={{alignSelf:'center', justifyContent:'center', marginTop:100}}>
                  <Text style={{fontSize:25, fontWeight: '900', color:'white'}}>Register</Text>
              </View>
              <View style={{marginTop: 60, alignItems: 'center', justifyContent:'center'}}>
                  <TextInput placeholder='First Name' style={styles.inputs} value={firstName} onChangeText={setFirstName} />
                  <TextInput placeholder='Last Name' style={styles.inputs} value={lastName} onChangeText={setLastName} />
                  <TextInput placeholder='Age' style={styles.inputs} value={age} onChangeText={setAge} />
                  <View style={styles.pickerContainer}>
                  <Picker
                  style={styles.pickerInputs}
                  selectedValue={gender}
                  onValueChange={setGender}
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>

                  </View>
            
                  <TextInput placeholder='Email Address' style={styles.inputs} value={email} onChangeText={setEmail} />
                  <TextInput placeholder='Contact Number' style={styles.inputs} value={contactNumber} onChangeText={setContactNumber} />
              </View>
              <View style={{alignSelf:'center', marginTop:25}}>
              <TouchableOpacity style={styles.registerbutton} onPress={handleRegister}>
              <Text style={{textAlign:'center', fontWeight:'600', fontSize:17, color: 'white',}}>Register</Text>
              </TouchableOpacity>
              </View>

          </View>

          </>
      )
  }

