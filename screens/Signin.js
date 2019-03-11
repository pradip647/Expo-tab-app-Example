import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Platform} from 'react-native';
import { Colors,Fonts } from '../constants';
import { MonoText } from '../components/StyledText';

import { Icon, Card } from 'react-native-elements';

export default class SigninScreen extends React.Component {
  constructor(props){ super(props); }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>

          <View>

          </View>

      </ScrollView>
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
