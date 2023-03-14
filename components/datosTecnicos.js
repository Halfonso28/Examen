import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Image} from 'react-native';

const DatosTec=({datosTecnicos,regresar})=>{
  return(
    <Modal
    animationType='slide'
    visible={datosTecnicos}
    >
      <SafeAreaView
      style={styles.contenido}
      >
        <ScrollView>
          <Text
          style={styles.titulo}
          >Datos Tecnicos</Text>
          <Image 
          style={styles.imagen}
          source={require('../IMG/pin1.jpg')} />
      
          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Nombre Comun:</Text> Pingüinos</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Nombre Cientifico:</Text> Spheniscidae</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Dieta:</Text> Carnívora</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Nombre del Grupo:</Text> Colonia</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Promedio de Vida:</Text> 15-20 años</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Tamaño:</Text> 38-114 centímetros</Text>

          <Text
          style={styles.infoTexto}
          ><Text style={styles.infoTextoBold}>Peso:</Text> 1-40 kilos</Text>
          <Pressable
          onPress={regresar}
          style={styles.btnRegresar}
          >
          <Text
          style={styles.btnTextoRegresar}
          >Regresar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles=StyleSheet.create({
  contenido:{
    flex:1,
    backgroundColor:'#BCEBFA',
  },
  titulo:{
    fontSize:40,
    fontWeight:'900',
    textAlign:'center',
  },
  imagen:{
    marginHorizontal:'auto',
    width:'250px',
    height:'250px'
  },
  infoTexto:{
    marginHorizontal:10,
    fontSize:20
  },
  infoTextoBold:{
    fontWeight:'600'
  },
  btnRegresar:{
    backgroundColor: '#3396FF',
		padding: 15,
		marginTop: 10,
    marginBottom:10,
		marginHorizontal: 20,
		borderRadius: 10
  },
  btnTextoRegresar:{
    textAlign: 'center',
		color: '#fff',
		fontSize: 18,
		fontWeight: '900',
		textTransform: 'uppercase'
  }
})
export default DatosTec;