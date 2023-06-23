import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker} from 'react-native-maps';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Vérifier si l'utilisateur a créé un compte (exemple : vérifier si email et password ne sont pas vides)
    if (email !== '' && password !== '') {
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('Map');
    } else {
      // Afficher un message d'erreur
      setErrorMessage("Veuillez créer un compte avant de vous connecter.");
    }
  };

  const handleRegistration = () => {
    navigation.navigate('Registration');
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/googlelogo.png')} style={styles.logo} />
        <Text style={styles.subHeading}>Google Map</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Connexion</Text>
        {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function RegistrationPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/googlelogo.png')} style={styles.logo} />
        <Text style={styles.subHeading}>Google Map</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.buttonContainerInscription}>
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>S'inscrire</Text> 
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

function MapPage() {
  return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={MapView.PROVIDER_GOOGLE}
          providerOptions={{
            apiKey: "AIzaSyCmU2tQ-70xFcJnqewgxA5sK0k3HHXxvy8",
          }}
          
          initialRegion={{
            latitude: 48.87548552467971,
            longitude: 2.410712894024804,
          }}
        >
          <Marker
            coordinate={{
              latitude: 48.87548552467971,
              longitude: 2.410712894024804,
            }}
            title="Marker"
            description="Marker Description"
          />
        </MapView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
 
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logo: {
    width: 150,
    height: 150,
  },

  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 16,
  },

  content: {
    width: '100%',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  buttonContainerInscription: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  }, 

  button: {
    width: '48%',
    height: 48,
    borderRadius: 8,
    backgroundColor: 'mediumpurple',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  buttonText: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginBottom: 16,
  },
});