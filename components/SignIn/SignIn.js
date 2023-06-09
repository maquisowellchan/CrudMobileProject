import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../Styles/styles';
import { Picker } from '@react-native-picker/picker';

export default function SignIn({ navigation }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://381d-49-145-200-206.ngrok-free.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          role,
        }),
      });

      if (response.ok) {

        if (role === 'user') {
          navigation.navigate('UserView');
        } else if (role === 'admin') {
          navigation.navigate('Home');
        }
      } else {

        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View>
        <View style={{ marginTop: 75, marginLeft: 25 }}>
          <Text style={{ fontWeight: '600', fontSize: 25 }}>Sign Up</Text>
          <Text style={{ fontSize: 16 }}>It's quick and easy</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 350, alignSelf: 'center' }} />
        </View>
        <View style={{ marginTop: 75, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <TextInput value={firstname} onChangeText={text => setFirstname(text)} placeholder='First Name' style={[styles.textinput, { marginBottom: 15 }]} />
          <TextInput value={lastname} onChangeText={text => setLastname(text)} placeholder='Last Name' style={[styles.textinput, { marginBottom: 15 }]} />
          <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Email' style={[styles.textinput, { marginBottom: 15 }]} />
          <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Password' style={[styles.textinput, { marginBottom: 15 }]} />
          <View style={styles.pickerContainer}>
            <Text style={{ color: 'white', marginBottom: 10 }}>Role</Text>
            <Picker
              style={styles.pickerInputs}
              selectedValue={role}
              onValueChange={value => setRole(value)}
            >
              <Picker.Item label="User" value="user" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: '6%' }}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.navigate('Home');
              handleRegister();
            }}
          >
            <Text style={[{ fontSize: 20, fontWeight: 'bold', color: 'white' }, { textAlign: 'center' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
