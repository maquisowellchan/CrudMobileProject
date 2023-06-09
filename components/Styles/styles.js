import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    logo:{
        width:200,
        height:200,

    },
    logocontainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    container:{
        backgroundColor: '#FFFFFF',
        height:1000
    },
    textinput:{
        width: 313,
        borderRadius:5,
        height: 63,
        backgroundColor: '#e5e7eb',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        fontSize: 20,
        fontSize: 16,
        fontStyle: 'italic'
    },
    textinputcontainer:{
        marginTop: 50,
        alignItems: 'center',
        
    },
    button:{
        backgroundColor: '#4BB4DE',
        padding: 20,
        width: 220,
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
        
    },
    container2: {
        flex: 1,
        backgroundColor: '#EFDBCB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      item: {
        backgroundColor: '#345DA7',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 25,
        color: 'white'
      },

      inputs:{
        borderWidth: 1,
        borderColor: '#aaaaaa',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width:250,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
        fontStyle: 'italic'


      },
      registerbutton:{
        backgroundColor: '#313131',
        width: 150,
        padding: 10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        color: 'white',
        elevation: 19,
       

      },
      container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242324',
        paddingTop: 40,
        
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#313131',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        height:90,
        
       
      },
      title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'  
      },
      flatList: {
        paddingHorizontal: 20,
        width: '100%',
        marginTop: 10,
      },
      buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10,
     
      },
      button: {
        backgroundColor: '#DDD9CE',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign:'center'
      },
      insidecontainer:{
        flex: 1,
        width:'100%',
        padding:20,
        marginTop:20
      },
      enrollmentdata:{
        fontSize:25,
        textAlign:'center',
        fontWeight: '800',
        color: 'white'
      },
      modalContainer: {
        flex: 1,
        backgroundColor: '#242324',
        justifyContent: 'center',
        alignItems: 'center'
      },
      // modalView: {
      //   backgroundColor: '#ffffff',
      //   borderRadius: 10,
      //   padding: 20,
      //   width: '80%'
      // },
      // modalText: {
      //   fontSize: 20,
      //   fontWeight: 'bold',
      //   marginBottom: 10
      // },
      inputmodal: {
        borderWidth: 1,
        borderColor: '#aaaaaa',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width:250,
        backgroundColor:'white'
      },
      // buttonContainer: {
      //   flexDirection: 'row',
      //   justifyContent: 'space-around',
      //   marginTop: 20
      // },
      // button: {
      //   backgroundColor: '#2196f3',
      //   padding: 10,
      //   borderRadius: 5,
      //   width: '45%',
      //   alignItems: 'center'
      // },
      // buttonText: {
      //   color: '#ffffff',
      //   fontWeight: 'bold',
      //   fontSize: 16
      // }
      pickerInput: {
        borderRadius: 15,
        fontStyle: 'italic',
      },
      pickerContainer: {
        marginBottom: 10,
        minWidth: 250,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 19,
      },
      buttonupanddel:{
        backgroundColor: '#313131',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        width: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 19,
      },
      refreshButton:{
          width:50,
          height:50,
          tintColor:'white'
      },
      button2:{
        backgroundColor: '#313131',
        padding: 20,
        width: 260,
        height: 70,
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
        
    },    
    button3:{
      backgroundColor: '#3B8AC4',
      padding: 20,
      width: 260,
      height: 70,
      textAlign: 'center',
      marginBottom: 20,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,

      elevation: 19,
      
  },     
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    color: 'white',
    marginBottom: 10,
  },
  pickerInputs: {
    width: 300,
    height: 40,
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,

      elevation: 19,
  },
  pickerItem: {
    fontSize: 16,
  },
  modalContainer2: {
    flex: 1,
    backgroundColor: '#242324',
    padding: 20,
    justifyContent: 'center',
    marginTop: '-20%'
  },
  modalTitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalInfoContainer2: {
    marginBottom: 20,
  },
  modalInfoRow2: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  modalInfoLabel2: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  modalInfoText2: {
    flex: 2,
    color: 'white',
  },
  modalButton2: {
    backgroundColor: '#313131',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,

      elevation: 19,
  },
  modalButtonText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


  


export default styles;