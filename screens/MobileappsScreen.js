import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Platform,WebView} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

import { Icon, Card } from 'react-native-elements';

export default class MobileappsScreen extends React.Component {
  static navigationOptions = {
    title: 'Mobile Apps',
    headerStyle: {
      backgroundColor: Colors.theme.header.primary,
    },
    headerTintColor: Colors.theme.whiteColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:Fonts.extra
    },
    
  };

  constructor(props){ 
      super(props);
      this.state={detailsData:''}
  }

  componentWillMount(){
    let data  = this.props.navigation.getParam("appdata")
    if(data){
        this.setState({detailsData:data});
    }
   this.openad();
  }

  async openad(){
    AdMobRewarded.setAdUnitID('ca-app-pub-4296647029451731/8447085050'); // Test ID, Replace with your-admob-unit-id
    // AdMobRewarded.setTestDeviceID('EMULATOR');
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
            source={{uri: this.state.detailsData ? this.state.detailsData : 'https://google.com'}}
            style={{marginTop: 20,}}
        />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4296647029451731/1773687885" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.whiteColor
  },
});
