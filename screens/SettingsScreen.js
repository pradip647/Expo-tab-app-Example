import React from 'react';
import { StyleSheet, Text, View,WebView,ScrollView,TouchableOpacity } from 'react-native';
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
    title: 'Loream ipsum',
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
    this.state={
      Interstitial1:true,
      Interstitial2:true,
      Interstitial3:true,
      Interstitial4:true,
      Interstitial5:true,
      Interstitial6:true,
      Interstitial7:true,
      Interstitial8:true,
      Interstitial9:true,
     Interstitial10:true,

      ViewoAd1:true,
      ViewoAd2:true,
      ViewoAd3:true,
      ViewoAd4:true,
      ViewoAd5:true,
      ViewoAd6:true,
      ViewoAd7:true,
      ViewoAd8:true,
      ViewoAd9:true,
     ViewoAd10:true
    }
  }

  componentWillMount(){
    AdMobRewarded.setAdUnitID('ca-app-pub-4296647029451731/8447085050');
    AdMobRewarded.setTestDeviceID('EMULATOR');

    AdMobInterstitial.setAdUnitID('ca-app-pub-4296647029451731/5359691944');
    AdMobInterstitial.setTestDeviceID('EMULATOR');

  }

  showbannerAd(){
    return <AdMobBanner
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-4296647029451731/1773687885" // Test ID, Replace with your-admob-unit-id
    testDeviceID="EMULATOR"
    onDidFailToReceiveAdWithError={this.bannerError} />
  }

  showInterstitial(value){

    if(value == "Interstitial1"){ this.setState({Interstitial1:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial2"){ this.setState({Interstitial2:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial3"){ this.setState({Interstitial3:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial4"){ this.setState({Interstitial4:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial5"){ this.setState({Interstitial5:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial6"){ this.setState({Interstitial6:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial7"){ this.setState({Interstitial7:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial8"){ this.setState({Interstitial8:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial9"){ this.setState({Interstitial9:false},()=>  {this.showInAD(); })}
    if(value == "Interstitial10"){ this.setState({Interstitial10:false},()=>{this.showInAD();})}

    if(value == "ViewoAd1"){ this.setState({ViewoAd1:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd2"){ this.setState({ViewoAd2:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd3"){ this.setState({ViewoAd3:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd4"){ this.setState({ViewoAd4:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd5"){ this.setState({ViewoAd5:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd6"){ this.setState({ViewoAd6:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd7"){ this.setState({ViewoAd7:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd8"){ this.setState({ViewoAd8:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd9"){ this.setState({ViewoAd9:false},()=>{this.showVAD();  })}
    if(value == "ViewoAd10"){ this.setState({ViewoAd10:false},()=>{this.showVAD(); })}

  }

  async showInAD(){
    // AdMobInterstitial.setAdUnitID('ca-app-pub-4296647029451731/5359691944');
    // AdMobInterstitial.setTestDeviceID('EMULATOR');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync(); 
  }

  async showVAD(){
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.Interstitial1 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial1')}}
              style={{padding:10,justifyContent:"center"}}
              >
                  <Text> Interstitial AD 1</Text>
              </TouchableOpacity>
            :null}
            
            {this.state.Interstitial2 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial2')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 2</Text>
              </TouchableOpacity>
            :null}

            {this.state.Interstitial3 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial3')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 3</Text>
              </TouchableOpacity>
            :null}

            {this.state.Interstitial4 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial4')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 4</Text>
              </TouchableOpacity>
            :null}
            
            {this.state.Interstitial5 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial5')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 5</Text>
              </TouchableOpacity>
            :null}
            {this.state.Interstitial6 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial6')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 6</Text>
              </TouchableOpacity>
            :null}
            {this.state.Interstitial7 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial7')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 7</Text>
              </TouchableOpacity>
            :null}
            {this.state.Interstitial8 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial8')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 8</Text>
              </TouchableOpacity>
            :null}
            {this.state.Interstitial9 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial9')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 9</Text>
              </TouchableOpacity>
            :null}
            {this.state.Interstitial10 == true ? 
              <TouchableOpacity 
              onPress={()=>{this.showInterstitial('Interstitial10')}}
              style={{padding:10, justifyContent:"center"}}
              >
                  <Text> Interstitial AD 10</Text>
              </TouchableOpacity>
            :null}
            

          {/*Video Ad starting */}

          {this.state.ViewoAd1 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd1')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 1</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd2 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd2')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 2</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd3 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd3')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 3</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd4 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd4')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 4</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd5 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd5')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 5</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd6 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd6')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 6</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd7 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd7')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 7</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd8 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd8')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 8</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd9 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd9')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 9</Text>
            </TouchableOpacity>
          :null}

          {this.state.ViewoAd10 == true ? 
            <TouchableOpacity 
            onPress={()=>{this.showInterstitial('ViewoAd10')}}
            style={{padding:10, justifyContent:"center"}}
            >
                <Text> Video AD 10</Text>
            </TouchableOpacity>
          :null}
          



            </ScrollView>


            <View>
                {this.showbannerAd()}
            </View>
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

