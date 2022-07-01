import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Platform, View } from 'react-native';

import { TextInput } from 'react-native-paper';

import { Container } from '../../components/Container';
import Button from '../../components/Button';

import DropDownPicker from "react-native-custom-dropdown";

import { clientMethod } from '../../helpers/api';
import { showAlert, tranformMusicalStyles, transformMusicalStyleSelected } from '../../utils';

export const PollScreen = ({navigation}) => {
    const [email, setEmail] = useState({ value: '', error: false });
    const [isLoading, setIsLoading] = useState(true);
    const [musicalStyles, setMusicalStyles] = useState([]);
    const [musicalStyleSelected, setMusicalStyleSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const validateEmail = (text) => {
        let error = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) ? false : true;
        setEmail({ value: text, error: error })
    }

    const savePoll = async() => {
        if (!isLoading){
            if (email.error || email.value == "" || !musicalStyleSelected){
                showAlert("Cuidado", "Debes completar los datos de la encuesta", "Aceptar");
            }else{
                setIsLoading(true);
                const payload = {
                    musicalStyle: transformMusicalStyleSelected(musicalStyleSelected),
                    email: email.value
                }
                const request = await clientMethod.post("poll/add", payload);
                setIsLoading(false);
                if (request.error){
                    showAlert("Error", "Ocurrió un error. Intenta nuevamnete", "Aceptar");
                }else{
                    if (request.status == 201){
                        setEmail({ value: '', error: false });
                        showAlert("Completado", "Datos guardados correctamente. Puedes ver los resultados.", "Aceptar", ()=>{
                            navigation.navigate("HomeScreen")
                        });
                    }else{
                        showAlert("Error", "Respuesta incorrecta del servidor. intenta nuevamente", "Aceptar");
                    }
                }
            }
        }
    }

    const getMusicalStyles = async() => {
        const musicalStyle = await clientMethod.get("musical-style/list");
        console.log(musicalStyle)
        if (musicalStyle.error){
            showAlert("Sin datos", "No se pudo cargar los datos debido a un error", "Aceptar");
        }else{
            if (musicalStyle.status == 200){
                setMusicalStyles(tranformMusicalStyles(musicalStyle.data));
            }else{
                showAlert("Sin datos", "No se pudo cargar los datos ya que no hay resppuesta correcta del servidor", "Aceptar");
            }
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        getMusicalStyles();
    },[]);

    return (
        <Container>
            
            <TextInput
                label="Digita tu email"
                style={styles.input}
                underlineColor="transparent"
                mode="outlined"
                value={email.value}
                onChangeText={text => validateEmail(text)}
                error={email.error}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                disabled={isLoading}
            />
           <DropDownPicker
                items={musicalStyles}
                placeholder="Selecciona tu estilo musical"
                searchablePlaceholder="Buscar..."
                defaultValue={null}
                searchable={true}
                searchableError={() => <Text>No hay datos</Text>}
                containerStyle={{height: 60}}
                style={styles.input}
                autoScrollToDefaultValue={true}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                disabled={isLoading}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => {
                    console.log(item)
                    setMusicalStyleSelected(item)
                }}
                onOpen={()=>{setIsOpen(true)}}
                onClose={()=>{setIsOpen(false)}}
            /> 

            <Button style={{zIndex: -10}} disabled={musicalStyles.length == 0 || isOpen} mode="contained" loading={isLoading} onPress={()=>{savePoll()}}>
                {isLoading ? null : "Guardar"}
            </Button>
        </Container>
      
    );
}

const styles = StyleSheet.create({
    containerInput: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      width: '100%',
      alignSelf:'center',
      marginBottom: 10
    }
  });