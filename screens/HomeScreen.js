import React from 'react';
import { StyleSheet, View,Text,ScrollView,Platform} from 'react-native';
import { Colors,Fonts } from '../constants';
// in managed apps:
import { WebBrowser } from 'expo';
import * as firebase from 'firebase';
import {
  AdMobBanner,
} from 'expo';
import CustomCardItem from '../components/CustomCardItem';


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
    this.state={postData:[]}
  }

  componentWillMount(){
    this.checkAPI()
  }


  async checkAPI(){
    let ref = firebase.database().ref('newdata');
    ref.once('value',(snapshot)=>{
        if(snapshot.val()){
          let newArr = [];
          let postdetails = snapshot.val();
          for (let key in postdetails){
            postdetails[key].id = key;
            newArr.push(postdetails[key]);
          }
          this.setState({postData:[]},()=>{
            this.setState({postData:newArr},()=>{this.forceUpdate();})
          })
          
        }
    })
  }

  async gotoDetailsScreen(item){
    this.props.navigation.navigate('Details',{companyDetails:item})
  }

  bannerError() {
    console.log("An error");
  }

  showbannerAd(){
    return <AdMobBanner
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-4296647029451731/1773687885" // Test ID, Replace with your-admob-unit-id
    // testDeviceID="EMULATOR"
    onDidFailToReceiveAdWithError={this.bannerError} />
  }
  

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
              {this.state.postData ? 
                  this.state.postData.map((item,i)=>{
                      return(
                          <View key={i} style={{justifyContent:"center"}}>
                              <CustomCardItem
                                positionName={item.position?item.position:''}
                                companyName={item.companyName?item.companyName:''}
                                companyAddress={item.address?item.address:''}
                                skills={item.skill?item.skill:''}
                                sendMessagePress={()=>{alert("Send Message function not implement yet.")}}
                                detailsPress={()=>{this.gotoDetailsScreen(item)}}
                              />
                          </View>
                      )
                  })

              :<Text>No Data found</Text>

              } 

          </ScrollView>
          <View >
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
