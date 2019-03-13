import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Platform,Dimensions,KeyboardAvoidingView} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';
import { Header } from 'react-navigation';
import { Icon,Image,Input } from 'react-native-elements';

export default class SignupScreen extends React.Component {
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
            {/* <View style={{height:(Header.HEIGHT *2)}}></View> */}
            <Image
                source={require('.././assets/images/logo.png')}
                style={{ width: 200, height: 200,alignSelf:"center" }}
            />

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
                    placeholder='Full Name'
                    placeholderTextColor="#5D646D"
                    inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                    containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                    underlineColorAndroid="transparent"
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                </View>            
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
                            placeholder='Email'
                            placeholderTextColor="#5D646D"
                            inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                            containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                            underlineColorAndroid="transparent"
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                        </View>            
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
                            placeholder='Number'
                            placeholderTextColor="#5D646D"
                            inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                            containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                            underlineColorAndroid="transparent"
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                        </View>            
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
                            placeholder='Confirm Password'
                            placeholderTextColor="#5D646D"
                            inputStyle={{justifyContent:"center",fontSize:14,color:'#fff'}}
                            containerStyle={{padding:4,backgroundColor:'#3E4750',alignSelf:"center"}}
                            underlineColorAndroid="transparent"
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                        </View>            
            </View>


            <View style={{flexDirection:"row",alignSelf:"center",width:'80%',marginTop:50}}>
                    <View style={{ flex:1,justifyContent:"center",backgroundColor:'#2e3339',padding:5}}>
                            <Icon
                                name={Platform.OS === 'ios'? 'ios-arrow-back' : 'ios-arrow-back'}
                                size={23} color='#fff' type="ionicon"
                                containerStyle={{padding:0,justifyContent:"flex-start"}}
                                iconStyle={{padding:0}}
                            />
                    </View> 
                    <View style={{ flex:5.5,justifyContent:"center",backgroundColor:'#FFB842',padding:5}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={{color:'#fff',textAlign:"center",fontSize:14,paddingTop:10,paddingBottom:10,fontWeight:"bold",letterSpacing:2}}> REGISTER</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style={{flexDirection:"row",alignSelf:"center",paddingTop:20,paddingBottom:10,padding:5,width:'80%'}}>
                        <View style={{ flex:1,justifyContent:"center"}}>
                              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                                <Text style={{textAlign:"center",fontSize:13,color:'#5D646D'}}> Go to Login</Text>
                              </TouchableOpacity>
                        </View>
                        {/* <View style={{ flex:0.7,justifyContent:"center",backgroundColor:'#FFB842'}}>
                            <TouchableOpacity >
                                <Text style={{color:'#fff',textAlign:"center",fontSize:14,paddingTop:10,paddingBottom:10,fontWeight:"bold",letterSpacing:2}}> SIGN IN</Text>
                              </TouchableOpacity>
                        </View>             */}
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
