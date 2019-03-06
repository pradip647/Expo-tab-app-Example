import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: Colors.theme.header.primary,
    },
    headerTintColor: Colors.theme.whiteColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:Fonts.extra
    },
    
  };

  constructor(props){ super(props);}

  async openad(){
    AdMobInterstitial.setAdUnitID('ca-app-pub-4296647029451731/3761734588'); // Test ID, Replace with your-admob-unit-id
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        {/* <TouchableOpacity onPress={()=>{this.openad()}}><Text>clickme</Text></TouchableOpacity> */}
      <View style={{margin:10, paddingBottom:10 }}>
          <MonoText style={{fontSize:Fonts.extra}}>What is Lorem Ipsum?</MonoText> 

          <Text style={{fontSize:Fonts.default, color:Colors.theme.text.secondary}}>
          <MonoText style={{fontSize:Fonts.default,color:Colors.theme.text.primary}}>Lorem Ipsum </MonoText> 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

      <View style={{margin:10, paddingBottom:10 }}>
          <MonoText style={{fontSize:Fonts.extra}}>What is Lorem Ipsum?</MonoText> 

          <Text style={{fontSize:Fonts.default, color:Colors.theme.text.light}}>
          <MonoText style={{fontSize:Fonts.default,color:Colors.theme.text.primary}}>Lorem Ipsum </MonoText> 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

      <View style={{margin:10, paddingBottom:10 }}>
          <MonoText style={{fontSize:Fonts.extra}}>What is Lorem Ipsum?</MonoText> 

          <Text style={{fontSize:Fonts.default, color:Colors.theme.text.extraLight}}>
          <MonoText style={{fontSize:Fonts.default,color:Colors.theme.text.primary}}>Lorem Ipsum </MonoText> 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

      <View style={{margin:10, paddingBottom:10 }}>
          <MonoText style={{fontSize:Fonts.extra}}>What is Lorem Ipsum?</MonoText> 

          <Text style={{fontSize:Fonts.default, color:Colors.theme.text.extraLight}}>
          <MonoText style={{fontSize:Fonts.default,color:Colors.theme.text.primary}}>Lorem Ipsum </MonoText> 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

        </ScrollView>
        {/* <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4296647029451731/4860738427" // Test ID, Replace with your-admob-unit-id
        // testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} /> */}
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
