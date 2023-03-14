import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Image} from 'react-native';

const Especies=({especiesMas,regresar})=>{
  return(
    <Modal
    animationType='slide'
    visible={especiesMas}
    >
      <SafeAreaView
      style={styles.contenido}
      >
        <ScrollView>
          <Text
          style={styles.titulo}
          >Especies</Text>
          <Image 
          style={styles.imagen}
          source={require('../IMG/especie.jpg')} />
          <Text
          style={styles.infoTexto}
          >
          Las 18 especies diferentes de pingüinos pueden variar en forma y tamaño, pero <Text style={styles.infoTextoBold}>todas tienen cuerpos negros y vientres blancos.</Text> Este contrasombreado protector les permite esconderse de depredadores como focas leopardo y orcas mientras nadan.

Si bien los pingüinos no pueden volar, sus aletas rígidas, patas palmeadas y forma elegante los convierten en expertos nadadores. De hecho, pasan la mayor parte de su vida en el océano y hacen casi toda su caza de kril, calamares y cangrejos bajo el agua. Pueden nadar a unos <Text style={styles.infoTextoBold}>24 kilómetros por hora,</Text> y cuando quieren ir más rápido, a menudo hacen marsopas o saltan fuera del agua mientras nadan.
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
export default Especies;