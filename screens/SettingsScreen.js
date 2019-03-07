import React from 'react';
import { StyleSheet, Text, View,WebView } from 'react-native';
import { Colors, Fonts } from '../constants';
import { MonoText } from '../components/StyledText';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Google',
    headerStyle: {
      backgroundColor: Colors.theme.header.primary,
    },
    headerTintColor: Colors.theme.whiteColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:Fonts.extra
    },
    
  };
  componentWillMount(){
   this.openad()
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
            source={{uri: 'https://google.com'}}
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
    // backgroundColor: Colors.theme.backgroundColor,
    backgroundColor: Colors.theme.whiteColor
  },
});
