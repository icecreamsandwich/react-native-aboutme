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
  Linking,
  TouchableHighlight
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

          <TouchableHighlight style={styles.buttonGmail} onPress={()=> Linking.openURL('http://www.google.com/muneebkt')} underlayColor="#999">
                <Text style={styles.buttonText}>Gmail</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonLinkedIn} onPress={()=> Linking.openURL('https://www.linkedin.com/in/muneeb-mukhtar-488402b4/')} underlayColor="#999">
                <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonFb} onPress={()=> Linking.openURL('https://www.facebook.com/mindblowgger')} underlayColor="#999">
                <Text style={styles.buttonText}>Facebook</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonTwitter} onPress={()=> Linking.openURL('https://www.twitter.com/muneebkt')} underlayColor="#999">
                <Text style={styles.buttonText}>Twitter</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonInsta} onPress={()=> Linking.openURL('https://www.instagram.com/crazyrubixfan')} underlayColor="#999">
                <Text style={styles.buttonText}>Instagram</Text>
          </TouchableHighlight>

          <View style={styles.welcomeContainer}>
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
  contentContainer: {
    paddingVertical: 20
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
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonGmail: {
    backgroundColor: '#3cba54',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonLinkedIn: {
    backgroundColor: '#0077B5',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonFb: {
    backgroundColor: '#a2bc7e',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonTwitter: {
    backgroundColor: '#62A9E0',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonInsta: {
    backgroundColor: '#bc7e9f',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 18
  }
});