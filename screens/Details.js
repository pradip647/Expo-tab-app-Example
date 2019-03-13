import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Platform} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

import { Icon, Card } from 'react-native-elements';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
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
      this.state={companyDetails:null}
  }

  componentWillMount(){
    let data  = this.props.navigation.getParam("companyDetails")
    if(data){
        this.setState({companyDetails:data},()=>{this.forceUpdate()})
    }
    this.showAd();
  }

  async showAd(){
    
    AdMobInterstitial.setAdUnitID('ca-app-pub-4296647029451731/5359691944');
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();   
  }

  bannerError() {
    console.log("An error");
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
          {this.state.companyDetails ? 
              <View>
                    {/* Header */}
                  <View style={styles.headerMainView}>
                        <View style={styles.headerSubView}>
                              <Text style={styles.headerCompanyname}>{this.state.companyDetails.companyName}</Text>
                              
                              <Text style={styles.headerAddress} >
                                  {this.state.companyDetails.address}, {this.state.companyDetails.city}, {this.state.companyDetails.state}, 
                                  {this.state.companyDetails.pin}
                              </Text>

                              <MonoText style={styles.headerCreated}>Created: {this.state.companyDetails.interviewStartData}</MonoText>                
                        </View>
                        
                        <View style={styles.headerApplyBTNView}>
                              <TouchableOpacity >
                                  <Text style={styles.headerApplyBTNText}>APPLY</Text>
                              </TouchableOpacity>
                        </View>
                  </View>

                  {/* Middle*/}

                  <View style={styles.middleCommonMainView}>
                      <Text style={styles.middleCommonTextHeader}>Summary</Text>
                      <Text style={styles.middleSummaryValue}>{this.state.companyDetails.description}</Text>
                  </View>

                  <View style={styles.middleCommonMainView}>
                      <Text style={styles.middleCommonTextHeader}>Job Role</Text>
                      <Text style={styles.middleJobRoleValue}>{this.state.companyDetails.position}</Text>
                  </View>

                  <View style={styles.middleCommonMainView}>
                      <Text style={styles.middleCommonTextHeader}>Skills</Text>
                      <Text style={styles.middleSkillValue}>{this.state.companyDetails.skill}</Text>
                  </View>

                  {/* Footer*/}

                  <View style={styles.footerMainView}>
                      <View style={styles.footerSubView}>
                          <Text style={[styles.footerText,{paddingBottom:5}]}>Contact no :  
                              <Text style={{fontWeight:'regular'}}>
                                  {this.state.companyDetails.contactno} 
                              </Text> 
                          </Text>
                          <Text style={styles.footerText}>Email :  
                              <Text style={{fontWeight:'regular'}}>
                                  { this.state.companyDetails.cEmail}
                              </Text> 
                          </Text>
                      </View>
                  </View>

              </View>
            
            :
            <Text>No data found</Text>
        }


      </ScrollView>
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
  container: { flex: 1, backgroundColor: Colors.theme.whiteColor},

  headerMainView:{paddingTop:20, paddingBottom:20, backgroundColor:Colors.theme.blackColor.background},
  headerSubView:{paddingLeft:10, paddingRight:10},
  headerCompanyname:{color:Colors.theme.whiteColor,fontSize:Fonts.default, fontWeight:"bold",paddingBottom:3},
  headerAddress:{color:Colors.theme.whiteColor,fontSize:Fonts.light,lineHeight: 20},
  headerCreated:{color:Colors.theme.whiteColor,fontSize:Fonts.extraLight,paddingTop:5},
  headerApplyBTNView:{paddingTop:10, justifyContent:"flex-end", flexDirection:"row"},
  headerApplyBTNText:{letterSpacing:4,color:Colors.theme.text.primary,paddingRight:20, fontSize:Fonts.regular, fontWeight:"bold"},

  middleCommonMainView:{paddingTop:10,paddingLeft:10, paddingRight:10},
  middleCommonTextHeader:{color:Colors.theme.blackColor.primary,fontSize:Fonts.regular,paddingBottom:7,fontWeight:"bold"},
  middleSummaryValue:{color:Colors.theme.blackColor.secondary,fontSize:Fonts.extraLight,letterSpacing:0.2,lineHeight:20},
  middleJobRoleValue:{color:Colors.theme.blackColor.secondary,fontSize:Fonts.extraLight,letterSpacing:0.5,lineHeight:25},
  middleSkillValue:{color:Colors.theme.blackColor.secondary,fontSize:Fonts.ligextraLightht,letterSpacing:0.5,lineHeight:25},

  footerMainView:{paddingTop:20,paddingBottom:20, backgroundColor:Colors.theme.blackColor.lightBorder},
  footerSubView:{paddingLeft:10,paddingRight:10},
  footerText:{color:Colors.theme.text.primary,fontSize:Fonts.light,fontWeight:"bold"}


});

