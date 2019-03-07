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
      this.state={detailsData:null}
  }

  componentWillMount(){
    let data  = this.props.navigation.getParam("itemdata")
    console.log(data);
    if(data){
        this.setState({detailsData:data},()=>{
            //this.openad();
        })
    }
    this.openad();
  }

  async openad(){
    AdMobRewarded.setAdUnitID('ca-app-pub-4296647029451731/8447085050'); // Test ID, Replace with your-admob-unit-id
    // AdMobRewarded.setTestDeviceID('EMULATOR');
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }
//   AIzaSyBpfpr9tHppnY2vnang-qehkbDjJG64o2I

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
          {this.state.detailsData ? 
            <View style={{justifyContent:"center"}}>
                <View>

                    <View style={{paddingLeft:15,paddingRight:15, paddingTop:10}}>
                        <Text style={{marginBottom: 10,fontSize:Fonts.extra,fontWeight:"bold"}}>
                            {this.state.detailsData.title}
                        </Text>
                    </View>

                    <Card image={{uri:this.state.detailsData.urlToImage}}
                    >
                    </Card>
                    <View style={{paddingLeft:15,paddingRight:15, paddingTop:10}}>
                        {/* <Text style={{marginBottom: 10}}>
                            {this.state.detailsData.author}
                        </Text> */}
                        <Text style={{marginBottom: 10, fontSize:Fonts.light}}>
                            {this.state.detailsData.publishedAt}
                        </Text>
                    </View>

                    <View style={{paddingLeft:15,paddingRight:15, paddingTop:10}}>  
                        <Text style={{marginBottom: 10,fontSize:Fonts.regular}}>
                            {this.state.detailsData.content}
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
  container: {
    flex: 1,
    backgroundColor: Colors.theme.whiteColor
  },
});
