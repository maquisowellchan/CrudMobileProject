import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles/styles';
import { useState, useEffect } from 'react';
import UpdateModal from '../UpdateModal/UpdateModal';

export default function Home({ visible, onClose, enrollment = {}, onUpdate, navigation }) {
  const [enrollments, setEnrollments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [formData, setFormData] = useState({
    firstname: enrollment.firstname || '',
    lastname: enrollment.lastname || '',
    age: enrollment.age ? enrollment.age.toString() : '',
    gender: enrollment.gender || '',
    email: enrollment.email || '',
    contactnumber: enrollment.contactnumber || '',
  });

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = () => {
    fetch('https://381d-49-145-200-206.ngrok-free.app/api/enrollment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEnrollments(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const EnrollmentItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.firstname} {item.lastname}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteEnrollment(item.id)} style={styles.button} >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const deleteEnrollment = (id) => {
    fetch(`https://381d-49-145-200-206.ngrok-free.app/api/enrollment/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        const newList = enrollments.filter(item => item.id !== id);
        setEnrollments(newList);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = (id, updatedData) => {
    // Validate the gender value before updating
    if (updatedData.gender !== 'male' && updatedData.gender !== 'female') {
      console.error('Invalid gender value:', updatedData.gender);
      return;
    }

    fetch(`https://381d-49-145-200-206.ngrok-free.app/api/enrollment/update/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        onClose();
        onUpdate(id, updatedData);
        setModalVisible(false);
        setSelectedEnrollment(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handlePress = (item) => {
    setSelectedEnrollment(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedEnrollment(null);
  };


  const renderItem = ({ item }) => (
    <EnrollmentItem item={item} />
  );

  return (
    <>
      <View style={styles.container3}>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.enrollmentdata}>Enrollment Data</Text>
        </View>
        <View style={styles.insidecontainer}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Image source={require('../../assets/image/logout.png')} style={styles.refreshButton} />
          </TouchableOpacity>
        </View>

          <FlatList
            data={enrollments}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.flatList}
          />
          {selectedEnrollment && (
            <UpdateModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedEnrollment={selectedEnrollment}
              setSelectedEnrollment={setSelectedEnrollment}
              onUpdate={handleUpdate}
              onClose={handleCloseModal}
            />
          )}
        </View>
      </View>
    </>
  );
}

