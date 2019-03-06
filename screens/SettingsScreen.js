import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Colors, Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: Colors.theme.header.primary,
    },
    headerTintColor: Colors.theme.whiteColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:Fonts.extra
    },
    
  };


  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
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
