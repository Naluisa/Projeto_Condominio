import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container,
InputArea,
CustomButton,
CustomButtonText,
LoginMensagemButton,
LoginMensagemButtonText,
LoginMensagemButtonTextBold } from './styles';

import Componente from '../../assets/Componente.svg';
import CapacidadeIcone from '../../assets/capacidade.svg';
import DescricaoIcone from '../../assets/descricao.svg';
import PredioIcone from '../../assets/predio.svg';

import LoginInput from '../../components/LoginInput';


export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [descricaoField, setDescricaoField] = useState('');
    const [capacidadeField, setCapacidadeField] = useState('');

    const handleLoginClick = () => {

    } 

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }

    return(
        <Container>
            <Componente width="100%" height="160"/>


            <InputArea>
                <LoginInput 
                    IconSvg={PredioIcone}
                    placeholder="Nome do Ambiente"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <LoginInput 
                    IconSvg={DescricaoIcone}
                    placeholder="Descrição"
                    value={descricaoField}
                    onChangeText={t=>setDescricaoField(t)}
                />

                <LoginInput 
                    IconSvg={CapacidadeIcone}
                    placeholder="Capacidade Máxima"
                    value={capacidadeField}
                    onChangeText={t=>setCapacidadeField(t)}
                    password={true}
                />

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            

        </Container>
    );
}

