import * as React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../Styles/styles';
import { useState, useEffect} from 'react';


const UpdateModal = ({ modalVisible, setModalVisible, selectedEnrollment, setSelectedEnrollment, onUpdate}) => {
    const [formData, setFormData] = useState({
      firstname: selectedEnrollment.firstname,
      lastname: selectedEnrollment.lastname,
      age: selectedEnrollment.age.toString(),
      gender: selectedEnrollment.gender,
      email: selectedEnrollment.email,
      contactnumber: selectedEnrollment.contactnumber,
    });

    useEffect(() => {
      setFormData({
        firstname: selectedEnrollment.firstname,
        lastname: selectedEnrollment.lastname,
        age: selectedEnrollment.age.toString(),
        gender: selectedEnrollment.gender,
        email: selectedEnrollment.email,
        contactnumber: selectedEnrollment.contactnumber,
      });
    }, [selectedEnrollment]);
  
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
  
    const handleUpdate = () => {
      fetch(`https://381d-49-145-200-206.ngrok-free.app/api/enrollment/update/${selectedEnrollment.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          onUpdate(selectedEnrollment.id, formData);
          setModalVisible(false);
          setSelectedEnrollment(null);
        })
        .catch(error => {
          console.error(error);
        });
    };
    const handleCancel = () => {
      setModalVisible(false);
      setSelectedEnrollment(null);
      onClose(); // Call onClose when the modal is canceled
    };
  
    
  
  
    return (
      <Modal visible={modalVisible} animationType="slide" onRequestClose={handleCancel}>
        <View style={styles.modalContainer}>
          <Text style={{color:'white', fontSize:25, fontWeight:'800', marginBottom:'20%'}}>UPDATE DATA</Text>
          <TextInput
            style={styles.inputmodal}
            placeholder="First Name"
            value={formData.firstname}
            onChangeText={value => handleInputChange('firstname', value)}
          />
          <TextInput
            style={styles.inputmodal}
            placeholder="Last Name"
            value={formData.lastname}
            onChangeText={value => handleInputChange('lastname', value)}
          />
          <TextInput
            style={styles.inputmodal}
            placeholder="Age"
            value={formData.age}
            onChangeText={value => handleInputChange('age', value)}
            keyboardType="numeric"
          />
          <Picker
          style={styles.inputmodal} // Apply your custom styles here
          selectedValue={formData.gender}
          onValueChange={value => handleInputChange('gender', value)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
          <TextInput
            style={styles.inputmodal}
            placeholder="Email"
            value={formData.email}
            onChangeText={value => handleInputChange('email', value)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputmodal}
            placeholder="Contact Number"
            value={formData.contactnumber}
            onChangeText={value => handleInputChange('contactnumber', value)}
            keyboardType="phone-pad"
          />
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.buttonupanddel} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonupanddel} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
    );
  };

export default UpdateModal