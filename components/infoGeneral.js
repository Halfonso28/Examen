import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Image} from 'react-native';

const InfoGeneral=({infoGeneral,regresar})=>{
  return(
    <Modal
    animationType='slide'
    visible={infoGeneral}
    >
      <SafeAreaView
      style={styles.contenido}
      >
        <ScrollView>
          <Text
          style={styles.titulo}
          >Informacion General</Text>
          <Image 
          style={styles.imagen}
          source={require('../IMG/general.jpeg')} />
          <Text
          style={styles.infoTexto}
          >
          Los pingüinos son <Text style={styles.infoTextoBold}>aves marinas no voladoras</Text> que viven casi exclusivamente por debajo del ecuador. Algunos habitantes de las islas se pueden encontrar en climas más cálidos, pero la mayoría, incluido el pingüino emperador, el pingüino barbijo, el pingüino de adelia y el pingüino papúa, residen en y alrededor de la Antártida helada. Su gruesa capa de grasa y plumas aceitosas apretadas son ideales para temperaturas más frías.
          </Text>
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
export default InfoGeneral;