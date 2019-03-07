import React from 'react';
import { StyleSheet, Text, View,ScrollView,Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Colors, Fonts } from '../constants';
import { MonoText } from '../components/StyledText';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import {WebView} from 'react-native';
import { Icon } from 'react-native-elements';

// 'AIzaSyBpfpr9tHppnY2vnang-qehkbDjJG64o2I'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Shortcuts',
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
        <View 
        style={{
          paddingLeft:10, paddingRight:10,
        }}>
          <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingTop:10, paddingBottom:10, flexWrap:"wrap"}}>
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.facebook.com"})}} color={Colors.facebookColor} type="ionicon"name='logo-facebook'  />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.youtube.com"})}}  color={Colors.youtubeColor} type="ionicon"name='logo-youtube' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://web.whatsapp.com"})}} color={Colors.gmailColor} type="ionicon"name='ios-mail' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.instagram.com"})}} color={Colors.instagramColor} type="ionicon"name='logo-instagram' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.twitter.com"})}}  color={Colors.twitterColor} type="ionicon"name='logo-twitter' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.linkdin.com"})}}  color={Colors.linkdinColor} type="ionicon"name='logo-linkedin'  />
        </View>
           
        
        </View>
        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4296647029451731/1773687885" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} />

        <WebView
        source={{uri: 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen'}}
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
