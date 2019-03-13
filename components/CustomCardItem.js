import React from 'react';
import {Text, TouchableOpacity,View} from 'react-native';
import { Fonts, Colors } from '../constants';
import { MonoText } from './StyledText';
import { Card } from 'react-native-elements';

//make a compontent
const CustomCardItem = ({sendMessagePress,detailsPress,positionName, companyName, companyAddress,skills}) =>{
    const { buttonStyle,textStyle } = styles;
   return (
        <View>
            <Card>
                <Text style={{fontSize:Fonts.default,fontWeight:"bold",color:Colors.theme.blackColor.primary}}>
                    {positionName}
                </Text>

                <View style={{paddingTop:10,paddingBottom:20}}>
                    <Text style={{color:Colors.theme.blackColor.secondary,fontSize:Fonts.secondary}}>{companyName}</Text>
                    <Text style={{color:Colors.theme.blackColor.secondary,fontSize:Fonts.secondary}}>{companyAddress}</Text>
                </View>

                <View>
                    <Text style ={{fontSize:Fonts.lastSize,color:Colors.theme.blackColor.secondary}}>Skills | Hire For</Text>
                    <View style={{paddingTop:8,paddingBottom:10}}>
                        {/* <MonoText style={{color:Colors.theme.blackColor.secondary,fontSize:Fonts.secondary}}>{item.skill ? item.skill : ''}</MonoText> */}
                        <Text style={{color:Colors.theme.blackColor.secondary,fontSize:Fonts.secondary}}>{skills ? skills : ''}</Text>
                    </View>

                </View>

                <View style={{paddingTop:10,justifyContent:"center"}}>

                    <View style={{height:0.7, backgroundColor:Colors.theme.blackColor.lightBorder,flexDirection:'row'}}></View>

                    <View style={{paddingTop:10, flexDirection:"row", justifyContent:"space-between", width:'100%'}}>
                        <TouchableOpacity onPress={sendMessagePress}>
                            <Text style={{color:Colors.theme.text.primary, fontSize:Fonts.extraLight, fontWeight:"bold", width:'100%'}}>SEND MESSAGE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={detailsPress}>
                            <Text style={{color:Colors.theme.text.primary,fontSize:Fonts.extraLight, fontWeight:"bold", width:'100%'}}>DETAILS</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Card>
        </View>
   );

};

const styles = {

}

export default CustomCardItem;