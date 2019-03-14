import React from 'react';
import { StyleSheet, Text, View,WebView,ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import { Colors, Fonts } from '../constants';
import { MonoText } from '../components/StyledText';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import { Image,Card } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Loream ipsum',
    // header:null,
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
  }

  componentWillMount(){
    // AdMobRewarded.setAdUnitID('ca-app-pub-4296647029451731/8447085050');
    // AdMobRewarded.setTestDeviceID('EMULATOR');

    // AdMobInterstitial.setAdUnitID('ca-app-pub-4296647029451731/5359691944');
    // AdMobInterstitial.setTestDeviceID('EMULATOR');

  }

  showbannerAd(){
    return <AdMobBanner
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-4296647029451731/1773687885" // Test ID, Replace with your-admob-unit-id
    testDeviceID="EMULATOR"
    onDidFailToReceiveAdWithError={this.bannerError} />
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

          <View style={{flexDirection:"row"}}>
                <View style={{flex:1, padding:10}}>
                      <View style={{
                                  width: ((Dimensions.get('window').width/2)-70), 
                                  height: ((Dimensions.get('window').width/2)-70),
                                  borderRadius:4,
                                  borderWidth:1, borderColor:'#FF0000',
                                  justifyContent:"center"
                            }}
                      >
                          <Image
                              source={require('.././assets/images/profile.jpeg')}
                              style={{ 
                                width: ((Dimensions.get('window').width/2)-80), height: ((Dimensions.get('window').width/2)-80),
                                resizeMode:"cover" ,
                                borderRadius:4,
                                alignSelf:'center'
                              }}
                          />
                      </View>
                </View>

                <View style={{flex:2, padding:10,}}>
                    <View >
                        <Text style={{fontSize:22, fontWeight:"bold"}}>PRADIP MONDAL</Text>
                    </View>
                    <View style={{paddingTop:10, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:15, fontWeight:"bold"}}>Working</Text>
                        <Text style={{fontSize:13}}>Exicube Apps Solutions</Text>
                        {/* <Text style={{fontSize:13}}>Still Not Working | Fresher</Text> */}
                    </View>

                    <View style={{paddingTop:10, justifyContent:"space-evenly"}}>
                        <MonoText style={{fontSize:13}}>C, C++, PHP, Javascript, Angular, Node js, MongoDB</MonoText>
                    </View>

                </View>

          </View>


          <View style={{padding:10}}> 
            <Text style={{fontSize:22, fontWeight:"bold"}}>About Me</Text> 
            <Text style={{fontSize:13}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>                
          </View>

          <View style={{padding:10,paddingTop:5}}> 
              <Text style={{fontSize:22, fontWeight:"bold"}}>Education</Text> 
              {/*Education */}
              <View style={{padding:10,paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4, backgroundColor:'#FF0000',alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:15,fontWeight:"bold"}}>2018</Text></View>
                  </View> 
              </View>
              <View style={{padding:10,paddingTop:3, paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4,alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:13}}>Degree 3 from Techno India Salt lake</Text></View>
                  </View>  
              </View>  
              {/*Education */}

              {/*Education */}
              <View style={{padding:10,paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4, backgroundColor:'#FF0000',alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:15,fontWeight:"bold"}}>2015</Text></View>
                  </View> 
              </View>
              <View style={{padding:10,paddingTop:3, paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4,alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:13}}>Degree 2 from Techno India Institute of Technology</Text></View>
                  </View>  
              </View>  
              {/*Education */}

              {/*Education */}
              <View style={{padding:10,paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4, backgroundColor:'#FF0000',alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:15,fontWeight:"bold"}}>2013</Text></View>
                  </View> 
              </View>
              <View style={{padding:10,paddingTop:3, paddingBottom:0}}>
                  <View style={{flexDirection:"row"}}>
                      <View style={{height:8, width:8, borderRadius:4,alignSelf:"center"}}></View>
                      <View style={{marginLeft: 5, alignSelf:"center"}}><Text style={{fontSize:13}}>Degree 1 from Unknown University</Text></View>
                  </View>  
              </View>  
              {/*Education */}
          </View>
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
    backgroundColor: Colors.theme.whiteColor
    // backgroundColor:'#343b45'
  },
});

