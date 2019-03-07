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

// in managed apps:
import { WebBrowser } from 'expo';
import { Icon, Card, Button } from 'react-native-elements';

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
    // headerRight: 
    // (<TouchableOpacity 
    //   onPress={() => {this.checkAPI()}}
    // style={{paddingLeft:10,paddingRight:20,height:'100%',justifyContent:"center"}}>
    //     <Icon
    //   name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'}
    //     type="ionicon"
    //     size={26}
    //     color={Colors.theme.text.primary}
    //     component={TouchableOpacity}
    //     containerStyle={{marginLeft: 20}}
        
    //   />
    // </TouchableOpacity>),
    
  };

  constructor(props){ 
    super(props);
    this.state={data:[]}
  }

  componentWillMount(){
    this.checkAPI()

  }
  async checkAPI(){
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=948af4d66828418aac87103c2f73207d')
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.articles){

          this.setState({data:responseJson.articles})

        
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }



  render() {
    return (
      <View style={styles.container}>
      <ScrollView>

        {this.state.data ? 
        this.state.data.map((item,i)=>{
          return(
            <View key={i} style={{justifyContent:"center"}}>
            <TouchableOpacity 
              onPress={()=>{this.props.navigation.navigate('Details',{itemdata:item})}}
            >
                <Card
                  title={item.title}
                  image={{uri:item.urlToImage}}
                  >
                  <Text style={{marginBottom: 10}}>
                    {item.author}
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    {item.publishedAt}
                  </Text>
                  <Text style={{marginBottom: 10}}>
                    {item.description}
                  </Text>
                </Card>
            </TouchableOpacity>
            {(i == 9) ? 
                <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-4296647029451731/4860738427" // Test ID, Replace with your-admob-unit-id
                // testDeviceID="EMULATOR"
                onDidFailToReceiveAdWithError={this.bannerError} />
            :null
            }
        </View>
           )
        })
        :<Text>No Data found</Text>
      } 

        </ScrollView>
        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4296647029451731/4860738427" // Test ID, Replace with your-admob-unit-id
        // testDeviceID="EMULATOR"
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
