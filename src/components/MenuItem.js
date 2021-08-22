import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#27323D',
    },
    buttonFacebookStyle: {
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 50,
      width: 50,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: 'black',
      marginBottom: 4,
      marginLeft: 10,
      fontSize: 17,
      fontWeight: 'bold',
      alignSelf: 'center',

    },
    TextoCapac:{
      color: 'black',
      marginBottom: 4,

    },
    buttonIconSeparatorStyle: {
      backgroundColor: 'black',
      width: 1,
      height: 50,
    },
    
  });


export default ({}) => {
    const navigation = useNavigation();

    return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTab') }
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/casa.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Visualizar Ambientes</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/calendario.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Visualizar Reservas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites') }
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/favorito.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Ambientes Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile') }
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/person.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Visualizar Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('CadastroAmbiente') }
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/person.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Cadastro Ambiente</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView> 
    );
}