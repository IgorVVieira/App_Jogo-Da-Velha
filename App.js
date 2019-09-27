import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import jogo from './src/jogo';

// import { Container } from './styles';

export default class JogoDaVelha extends Component {

  constructor(props){
    super(props);

    jogo.start();

    this.state = {
      board: jogo.board,
      gameOver: jogo.gameover
    }
  }


  makePlay(index){
    jogo.make_play(index);

    this.setState({
      board: jogo.board,
      gameOver: jogo.gameover
    })
  }

  isGameOver(){
    if(this.state.gameOver){
      return alert("O jogo acabou!");
    }
  }

  render() {
    return(
      <View style = {styles.container}>
        {this.state.board.map((value, index)=>(
          <TouchableOpacity key = {index} style ={styles.piece} onPress={()=>{this.makePlay(index)}}>
            <Text style = {styles.pieceText}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}

          {
            this.isGameOver()
          }

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  piece: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    backgroundColor: "#ddd",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0111'
  },

  pieceText: {
    fontSize: 60
  }
});
