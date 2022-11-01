import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Modal,
  Panel,
  Map,
  List,
  NewPunto,
} from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') //new_punto, all_puntos
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)


  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }  

  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleCancel = () => {
    setVisibility(false)
    setNombre('')
    setPuntoTemp('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map 
        onLongPress={handleLongPress} 
        puntos={puntos} 
        pointsFilter={pointsFilter}
      />
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto'
          ?
          <NewPunto 
          handleChangeText={handleChangeText}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          pointsFilter={pointsFilter}
          />
          : <List 
            puntos={puntos} 
            closeModal={() => setVisibility(false)}
          />
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
