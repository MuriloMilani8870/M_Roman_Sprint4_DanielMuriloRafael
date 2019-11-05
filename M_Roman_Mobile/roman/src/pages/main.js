import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class Main extends Component {
  // apresentar a lista de projetos

  constructor() {
    super();
    this.state = {
      projetos: [],
    };
  }

  componentDidMount() {
    this._carregarprojetos();
  }

  _carregarprojetos = async () => {
    await fetch('http://192.168.5.84:5000/api/projetos')
      .then(resposta => resposta.json())
      .then(data => this.setState({projetos: data}))
      .catch(erro => console.warn(erro));
  };

  render() {
    return (
      <FlatList
        data={this.state.projetos}
        keyExtractor={item => item.idProjeto}
        renderItem={({item}) => (
          <View>
            <Text>{item.idProjeto}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.idTemaNavigation.nome}</Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
tabBarNavigatorIcon: {width: 25, height: 25, tintColor: 'white'}
});

export default Main;