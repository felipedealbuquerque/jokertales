import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Jokes extends Component {
  // let totalCases = 0;
  
  state = {
    category: '',
    type: '',
    joke: '',
    setup: '',
    delivery: '',
    flags: [],
    id: '',
    error: ''

};

  reload = () => 
  {
      //RELOAD COMPONENT
      this.componentDidMount();
  };

  componentDidMount() {

    let ENDPOINT_JOKES = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist';

    fetch(ENDPOINT_JOKES)
        .then(res => res.json())
        .then(res => {
            this.setState({
                category: res.category,
                type: res.type,
                joke: res.joke,
                setup: res.setup,
                delivery: res.delivery,
                flags: res.flags,
                id: res.id,
                error: res.error

            });
        });
}

	render() {
		return (
      <Card>
        <Text><Icon name="thumbs-down" size={20} color="#900" /> {this.state.category}</Text>
        <Text style={styles.textJoke}>
          {this.state.setup}
          {this.state.joke}
         </Text>
        <Text style={styles.textJoke}>{this.state.delivery}</Text>
        
        <Button onPress={this.reload} title='Next Joke' />
        
    </Card>
		);
	}
}

const styles = StyleSheet.create({
  titleCategoryJoke: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textJoke: {
    fontSize:16,
    marginBottom: 10
  },
  badgeJoke: {
    padding: 20
  }
  
});

