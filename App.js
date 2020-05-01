import React from 'react'

import {
  Button,
  Image,
  StatusBar,
  Text,
  View
} from 'react-native'

import styles from './styles.js'

import p0 from './assets/img/p0.png'
import p1 from './assets/img/p1.png'
import p2 from './assets/img/p2.png'
import p3 from './assets/img/p3.png'
import p4 from './assets/img/p4.png'
import p5 from './assets/img/p5.png'
import p6 from './assets/img/p6.png'

const listaImagens = [p0, p1, p2, p3, p4, p5, p6]

export default class App extends React.Component {
  state = {
    i: 0
  }

  quantidadeImg(i) {
    if (i < 0) {
      i = 6
    }else if (i >= 7) {
      i = 0
    }
    console.log(i)
    return i
  }

  render() {
    return (

      <View style={styles.container}>
        <StatusBar
          backgroundColor='#061034'
        />

        <View style={styles.header}>
          <Text style={styles.titulo}>
            Galeria de Fotos
          </Text>
        </View>

        <View style={styles.imagemView}>
          <Image
            source={listaImagens[this.state.i]}
            style={styles.imagemImage}
          />
        </View>

        <View style={styles.botoesView}>
          <Button
            color='#709099'
            title='Imagem Anterior'
            onPress={() => {
              this.setState(
                { i: this.quantidadeImg(this.state.i - 1) }
              )
            }}
          />
          <Button
            color='#709099'
            title='Próxima Imagem'
            onPress={() => {
              this.setState(
                { i: this.quantidadeImg(this.state.i + 1) }
              )
            }}
          />
        </View>
      </View>
    )
  }
}

