import React from 'react';
import { StyleSheet, Text, View,ScrollView,Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Colors, Fonts } from '../constants';
import { MonoText } from '../components/StyledText';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import {WebView} from 'react-native';
import { Icon } from 'react-native-elements';

// 'AIzaSyBpfpr9tHppnY2vnang-qehkbDjJG64o2I'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Shortcuts',
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
        <View 
        style={{
          paddingLeft:10, paddingRight:10,
        }}>
          <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingTop:10, paddingBottom:10, flexWrap:"wrap"}}>
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.facebook.com"})}} color={Colors.facebookColor} type="ionicon"name='logo-facebook'  />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.youtube.com"})}}  color={Colors.youtubeColor} type="ionicon"name='logo-youtube' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://web.whatsapp.com"})}} color={Colors.gmailColor} type="ionicon"name='ios-mail' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.instagram.com"})}} color={Colors.instagramColor} type="ionicon"name='logo-instagram' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.twitter.com"})}}  color={Colors.twitterColor} type="ionicon"name='logo-twitter' />
            <Icon raised onPress={()=>{this.props.navigation.navigate('MobileappsScreen',{appdata:"https://m.linkdin.com"})}}  color={Colors.linkdinColor} type="ionicon"name='logo-linkedin'  />
        </View>

        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-4296647029451731/4537710657"
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={this.bannerError} />

        </View>
        <ScrollView>
            <View style={{paddingLeft:10, paddingRight:10}}>
                <MonoText>Starting a New Ionic App</MonoText>
                <View style={{paddingTop:10}}>

                  <Text>To start a new app, open your terminal/command prompt and run:</Text>
                  <Text>$ ionic start MyIonicProject tutorial --type=ionic-angular</Text>

                  <View style={{paddingTop:10}}>
                    <Text>start will tell the CLI create a new app.</Text>
                    <Text>MyIonicProject will be the directory name and the app name from your project.</Text>
                    <Text>tutorial will be the starter template for your project.</Text>
                  </View>

                  <Text>Along with creating your project, this will also install node modules for the application, and prompt you if you want Cordova set up.</Text>
                  <Text>Along with the tutorial template, Ionic also provides the following official templates:</Text>
                  <MonoText>tabs : a simple 3 tab layout</MonoText>
                  <MonoText>sidemenu: a layout with a swipable menu on the side</MonoText>
                  <MonoText>blank: a bare starter with a single page</MonoText>
                  <MonoText>super: starter project with over 14 ready to use page designs</MonoText>
                  <MonoText>tutorial: a guided starter project</MonoText>

                  <Text style={{paddingTop:10}}>If you don’t specify a template at the start, you will be prompted to pick one.</Text>
                </View>

                <View style={{paddingTop:10}}>
                  <Text>Viewing the app in a browser</Text>
                  <Text>Now, you can cd into the folder that was created. To get a quick preview of your app in the browser, use the serve command.</Text>
                </View>

                <View style={{paddingTop:10}}>
                    <Text>Project Structure</Text>
                    <Text>Let’s walk through the anatomy of an Ionic app. Inside of the folder that was created, we have a typical Cordova project structure where we can install native plugins, and create platform-specific project files.</Text>
                </View>


                  <AdMobBanner
                  bannerSize="fullBanner"
                  adUnitID="ca-app-pub-4296647029451731/4537710657"
                  testDeviceID="EMULATOR"
                  onDidFailToReceiveAdWithError={this.bannerError} />

                  
                <View style={{paddingTop:10}}>
                    <Text>./src/index.html</Text>
                    <Text>
                    src/index.html is the main entry point for the app, though its purpose is to set up scripts, CSS includes, and bootstrap, or start running our app. We won’t spend much of our time in this file.
                    </Text>

                    <Text>For your app to function, Ionic looks for the tag in your HTML. In this example we have:</Text>
                </View>

                <Text>
                Inside of the src directory we find our code. This is where most of the work for an Ionic app will take place. When we run ionic serve, our code inside of src/ is transpiled into the correct JavaScript version that the browser understands (currently ES5). That means we can work at a higher level using TypeScript, but compile down to the older form of JavaScript the browser needs.

src/app/app.module.ts is the entry point for our app.
                </Text>

                <Text>
                Every app has a root module that essentially controls the rest of the application. This is very similar to ng-app from Ionic 1 and AngularJS. This is also where we bootstrap our app using ionicBootstrap.

In this module, we’re setting the root component to MyApp, in src/app/app.component.ts. This is the first component that gets loaded in our app, and typically it’s an empty shell for other components to be loaded into. In app.component.ts, we’re setting our template to src/app/app.html, so let’s look in there.
                </Text>


                <Text>
                In this template, we set up an ion-menu to function as a side menu, and then an ion-nav component to act as the main content area. The ion-menu’s [content] property is bound to the local variable content from our ion-nav, so it knows where it should animate around.

Next let’s see how to create more pages and perform basic navigation.
                </Text>


            </View>
        </ScrollView>


      </View>
    );
  }

}
// ca-app-pub-4296647029451731/4537710657
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.whiteColor
  },
});
