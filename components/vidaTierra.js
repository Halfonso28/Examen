import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, Image} from 'react-native';

const VidaTierra=({vidaTierra,regresar})=>{
  return(
    <Modal
    animationType='slide'
    visible={vidaTierra}
    >
      <SafeAreaView
      style={styles.contenido}
      >
        <ScrollView>
          <Text
          style={styles.titulo}
          >La vida en la tierra</Text>
          <Image 
          style={styles.imagen}
          source={require('../IMG/tierra.jpg')} />
          <Text
          style={styles.infoTexto}
          >
          En tierra, <Text style={styles.infoTextoBold}>los pingüinos tienen una postura erguida y tienden a caminar, saltar o correr con el cuerpo inclinado hacia adelante.</Text> Los pingüinos polares pueden viajar largas distancias rápidamente "montándose en trineo", o deslizándose sobre el hielo boca abajo y empujando hacia adelante con los pies. Si hace mucho frío, se amontonan en grandes colonias que los protegen de los depredadores y les brindan calor. Estas colonias están formadas por miles, e incluso millones, de pingüinos.
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
export default VidaTierra;