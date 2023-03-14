import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Image} from 'react-native';

const Cria=({cria,regresar})=>{
  return(
    <Modal
    animationType='slide'
    visible={cria}
    >
      <SafeAreaView
      style={styles.contenido}
      >
        <ScrollView>
          <Text
          style={styles.titulo}
          >Crias</Text>
          <Image 
          style={styles.imagen}
          source={require('../IMG/crias.jpg')} />
          <Text
          style={styles.infoTexto}
          >
          Los pingüinos llegan a tierra para poner sus huevos y cuidar a sus crías. <Text style={styles.infoTextoBold}>La mayoría de los pingüinos se quedan con su pareja durante muchos años y solo ponen uno o dos huevos a la vez.</Text> Los padres se turnan para mantener los huevos calientes y, cuando nacen, alimentan y protegen a sus crías. Durante algunas semanas cada año, miles de crías esperan juntas mientras sus padres buscan comida. Cuando la madre y el padre regresan, las crías escuchan la frecuencia de audio única de la llamada de sus padres, lo que les permite reunirse en una gran multitud ruidosa.
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
export default Cria;