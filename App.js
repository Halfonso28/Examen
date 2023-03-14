import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Pressable, Modal } from 'react-native';
import DatosTec from './components/datosTecnicos.js';
import InfoGeneral from './components/infoGeneral.js';
import Especies from './components/especies';
import VidaTierra from './components/vidaTierra';
import Cria from './components/cria';


const App = () => {

  const [datosTecnicos,setDatosTecnicos] = useState(false);
  const [infoGeneral,setInfoGeneral] = useState(false);
  const [especiesMas,setEspeciesMas] = useState(false);
  const [vidaTierra,setVidaTierra] = useState(false);
  const [cria,setCria] = useState(false);

  const regresar=()=>{
    setDatosTecnicos(false);
    setInfoGeneral(false);-
    setEspeciesMas(false);
    setVidaTierra(false);
    setCria(false);
  }

  return(
    <SafeAreaView
    style={styles.contenedorPrincipal}
    >
      <Text
      style={styles.titulo}
      >Pingüinos</Text>

      <Pressable
      style={styles.btnInfo}
      onPress={()=>setDatosTecnicos(true)}
      >
        <Text
        style={styles.btnTextoInfo}
        >Datos Tecnicos</Text>
      </Pressable>

      <DatosTec 
      datosTecnicos={datosTecnicos}
      regresar={regresar}
      />

      <Pressable
      style={styles.btnInfo}
      onPress={()=>setInfoGeneral(true)}
      >
        <Text
        style={styles.btnTextoInfo}
        >Info General</Text>
      </Pressable>

      <InfoGeneral
      infoGeneral={infoGeneral}
      regresar={regresar}
      />

      <Pressable
      style={styles.btnInfo}
      onPress={()=>setEspeciesMas(true)}
      >
        <Text
        style={styles.btnTextoInfo}
        >Especies</Text>
      </Pressable>

      <Especies
      especiesMas={especiesMas}
      regresar={regresar}
      />

      <Pressable
      style={styles.btnInfo}
      >
        <Text
        style={styles.btnTextoInfo}
        onPress={()=>setVidaTierra(true)}
        >La vida en la tierra</Text>
      </Pressable>

      <VidaTierra
      vidaTierra={vidaTierra}
      regresar={regresar}
      />

      <Pressable
      style={styles.btnInfo}
       onPress={()=>setCria(true)}
      >
        <Text
        style={styles.btnTextoInfo}
        >Cría</Text>
      </Pressable>

      <Cria
      cria={cria}
      regresar={regresar}
      />

      
    </SafeAreaView>
    
  );
}

const styles=StyleSheet.create({
  contenedorPrincipal:{
    backgroundColor: '#BCEBFA',
		flex: 1,
   //paddingTop:40//Para Andriod
  },
  titulo:{
    textAlign: 'center',
    fontSize:50,
    fontWeight:'900',
    backgroundColor:'#fff',
    padding:15,
    marginBottom:20
  },
  btnInfo:{
		backgroundColor: '#3396FF',
		padding: 15,
		marginTop: 10,
    marginBottom:10,
		marginHorizontal: 20,
		borderRadius: 10
	},
  btnTextoInfo:{
		textAlign: 'center',
		color: '#fff',
		fontSize: 18,
		fontWeight: '900',
		textTransform: 'uppercase'
	}
});

export default App;