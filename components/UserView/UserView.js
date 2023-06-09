import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import styles from '../Styles/styles';
import { useState, useEffect } from 'react';

export default function UserView({ navigation }) {


    const [enrollments, setEnrollments] = useState([]);
    const [selectedEnrollment, setSelectedEnrollment] = useState(null)

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

      const handleRefresh = () => {
        fetchEnrollments();
        };

        const renderItem = ({ item }) => (
        <EnrollmentItem item={item} />
        );

        const EnrollmentItem = ({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.firstname} {item.lastname}</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={() => openModal(item)} style={styles.button} >
                    <Text style={styles.buttonText}>View Data</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          };

        const openModal = (enrollment) => {
            setSelectedEnrollment(enrollment)
        };
        const closeModal = () => {
            setSelectedEnrollment(null)
        };

      return(
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

                    <Modal visible={selectedEnrollment !== null} animationType="slide">
                    <View style={[styles.modalContainer2, { backgroundColor: '#242324' }]}>
                        <Text style={[styles.modalTitle2, { color: 'white' }]}>User Information</Text>
                        <View style={styles.modalInfoContainer2}>
                        <View style={styles.modalInfoRow2}>
                            <Text style={styles.modalInfoLabel2}>Name:</Text>
                            <Text style={styles.modalInfoText2}>
                            {selectedEnrollment?.firstname} {selectedEnrollment?.lastname}
                            </Text>
                        </View>
                        <View style={styles.modalInfoRow2}>
                            <Text style={styles.modalInfoLabel2}>Age:</Text>
                            <Text style={styles.modalInfoText2}>{selectedEnrollment?.age}</Text>
                        </View>
                        <View style={styles.modalInfoRow2}>
                            <Text style={styles.modalInfoLabel2}>Gender:</Text>
                            <Text style={styles.modalInfoText2}>{selectedEnrollment?.gender}</Text>
                        </View>
                        <View style={styles.modalInfoRow2}>
                            <Text style={styles.modalInfoLabel2}>Email:</Text>
                            <Text style={styles.modalInfoText2}>{selectedEnrollment?.email}</Text>
                        </View>
                        <View style={styles.modalInfoRow2}>
                            <Text style={styles.modalInfoLabel2}>Contact Number:</Text>
                            <Text style={styles.modalInfoText2}>{selectedEnrollment?.contactnumber}</Text>
                        </View>
                        </View>
                        <TouchableOpacity onPress={closeModal} style={styles.modalButton2}>
                        <Text style={styles.modalButtonText2}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    </Modal>

                </View>
            </View>
        </>
      )
}