import React, {useState, useRef, useEffect} from 'react';
import { Container,
AreaBotao,
BotaoSair,
TextoBotao,
Title,
Formulario,
CaixaFormulario } from './styles';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    BotaoSair: {
        width: 162,
        backgroundColor:'#FE5F55',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      EstiloTextoBotao: {
        color: 'white',
        marginBottom: 4,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    });

export default () => {
    return (
        <Container>
            <Title>Meu perfil</Title>
            <Formulario>
                <CaixaFormulario
                    placeholder="Seu nome"
                    name="nome"
                />
                <CaixaFormulario
                icon="mail-outline"
                autoCorrect={false}
                keyboardType="email-address"
                editable={false}
                placeholder="Seu email"
                name="email"
                returnKeyType="next"
              />
            </Formulario>
            <TouchableOpacity onPress={() => navigation.navigate('') }
          style={styles.BotaoSair}
          activeOpacity={0.5}>
          <Text style={styles.EstiloTextoBotao}>Desconectar</Text>
        </TouchableOpacity>
            <AreaBotao>
                <BotaoSair/>
                <TextoBotao>Sair</TextoBotao>
            </AreaBotao>
        </Container>
    );
}