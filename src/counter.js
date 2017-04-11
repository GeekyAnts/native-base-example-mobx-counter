import React, { Component } from 'react';
import Expo from 'expo';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import CounterStore from './counterStore.js';
import {observer} from 'mobx-react';
import {View} from 'react-native';

@observer
export default class Counter extends Component{
  constructor(){
    super();
    this.state={
      isReady: false
    }
  }
  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true});
    }
  render(){
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return(
      <Container style={{backgroundColor: 'black'}}>
                <Header>
                    <Body>
                        <Title>Mobx Counter</Title>
                    </Body>
                </Header>
                <Card style= {{flex:0.1}}>
                <CardItem>
                            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
                                {CounterStore.counter}
                            </Text>
                </CardItem>
                </Card>
                        <Button primary block onPress= {() => CounterStore.increment()}>
                             <Text>Increment</Text>
                         </Button>
                         <Button primary block onPress= {() => CounterStore.decrement()}>
                              <Text>Decrement</Text>
                          </Button>
                          <View style={{ flex:1 }}>
                          </View>
            </Container>
    );
  }
}
