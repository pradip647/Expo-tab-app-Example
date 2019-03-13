import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Platform,Dimensions} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

import { Icon, Card,Image,Input } from 'react-native-elements';

export default class SigninScreen extends React.Component {
  static navigationOptions = {
    // title: 'Details',
    header:null,
    headerStyle: {
      backgroundColor: '#343b45',
      borderBottomWidth:0
    },
    headerTintColor: Colors.theme.whiteColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:Fonts.extra
    },
    
  };
  constructor(props){ super(props); }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{paddingTop:30}}>
                <Image
                    source={require('.././assets/images/logo.png')}
                    style={{ width: 200, height: 200,alignSelf:"center" }}
                />
            </View>
        

            <View style={{flexDirection:"row",alignSelf:"center",paddingTop:10,paddingBottom:5,width:'80%'}}>
                        <View style={{ flex:1,justifyContent:"center",backgroundColor:'#2e3339'}}>
                              <Icon
                                  name={Platform.OS === 'ios'? 'ios-person' : 'md-person'}
                                  size={23} color='#fff' type="ionicon"
                                  containerStyle={{padding:0,justifyContent:"flex-start"}}
                                  iconStyle={{padding:0}}
                                />
                        </View>
                        <View style={{ flex:5.5,justifyContent:"center"}}>
                        <Input
                            placeholder='Password'
                            placeholderTextColor="#5D646D"
                            inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                            containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                            underlineColorAndroid="transparent"
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                        </View>            
            </View>


            <View style={{flexDirection:"row",alignSelf:"center",paddingTop:5,paddingBottom:10,width:'80%'}}>
                        <View style={{ flex:1,justifyContent:"center",backgroundColor:'#2e3339'}}>
                              <Icon
                                  name={Platform.OS === 'ios'? 'ios-lock' : 'md-lock'}
                                  size={23} color='#fff' type="ionicon"
                                  containerStyle={{padding:0,justifyContent:"flex-start"}}
                                  iconStyle={{padding:0}}
                                />
                        </View>
                        <View style={{ flex:5.5,justifyContent:"center"}}>
                        <Input
                            placeholder='Password'
                            placeholderTextColor="#5D646D"
                            inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                            containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                            underlineColorAndroid="transparent"
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                        </View>            
            </View>




            <View style={{flexDirection:"row",alignSelf:"center",paddingTop:10,paddingBottom:10,padding:5,width:'80%'}}>
                        <View style={{ flex:1.3,justifyContent:"center"}}>
                              <TouchableOpacity >
                                <Text style={{textAlign:"center",fontSize:12,color:'#5D646D'}}> Forgot Password</Text>
                              </TouchableOpacity>
                        </View>
                        <View style={{ flex:0.7,justifyContent:"center",backgroundColor:'#FFB842'}}>
                            <TouchableOpacity >
                                <Text style={{color:'#fff',textAlign:"center",fontSize:14,paddingTop:10,paddingBottom:10,fontWeight:"bold",letterSpacing:2}}> SIGN IN</Text>
                              </TouchableOpacity>
                        </View>            
            </View>


            <View style={{flexDirection:"row",alignSelf:"center",width:'80%',marginTop:50}}>
                        <View style={{ flex:5.5,justifyContent:"center",backgroundColor:'#2e3339',padding:5}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}}>
                                <Text style={{color:'#fff',textAlign:"center",fontSize:14,paddingTop:10,paddingBottom:10,fontWeight:"bold",letterSpacing:2}}> REGISTER</Text>
                              </TouchableOpacity>
                        </View>   
                        <View style={{ flex:1,justifyContent:"center",backgroundColor:'#FFB842',padding:5}}>
                                <Icon
                                  name={Platform.OS === 'ios'? 'ios-arrow-forward' : 'ios-arrow-forward'}
                                  size={23} color='#fff' type="ionicon"
                                  containerStyle={{padding:0,justifyContent:"flex-start"}}
                                  iconStyle={{padding:0}}
                                />
                        </View> 
            </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#343b45'
  },
});
