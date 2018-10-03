import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact me',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> Feel free to contact on any of these below </Text>
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={{color: 'blue',lineHeight: 24}}>
              Gmail : muneebkt@gmail.com
            </Text>
            <Text style={{color: 'brown',lineHeight: 24}}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/muneeb-mukhtar-488402b4/')}>
              LinkedIn
            </Text>
            <Text style={{color: 'red',lineHeight: 24}}
              onPress={() => Linking.openURL('http://www.facebook.com/muneebkt')}>
              Facebook
            </Text>
            <Text style={{color: 'yellow',lineHeight: 24}}
              onPress={() => Linking.openURL('https://www.twitter.com/muneebkt')}>
              Twitter
            </Text>
            <Text style={{color: 'green',lineHeight: 24}}>
              Skype : muneebkt1
            </Text>
            <Text style={{color: 'magenta',lineHeight: 24}}
              onPress={() => Linking.openURL('https://www.instagram.com/crazyrubixfan')}>
              Instagram
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});