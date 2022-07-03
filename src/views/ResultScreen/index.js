import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Dimensions } from 'react-native';

import { Container } from '../../components/Container';
import Button from '../../components/Button';
import LottieAnimation from '../../components/LottieAnimation';

import { BarChart } from "react-native-gifted-charts";

import { clientMethod } from '../../helpers/api';
import { showAlert, tranformChartData } from '../../utils';

export const ResultScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataChart, setDataChart] = useState([]);

    const barWidth = 40;
    const initialSpacing = 40;


    const getData = async() => {
        const request = await clientMethod.get("musical-style/list-total");
        if (request.error){
            showAlert("Sin datos", "No se pudo cargar los datos debido a un error", "Aceptar");
        }else{
            if (request.status == 200){
                setDataChart(tranformChartData(request.data));
            }else{
                showAlert("Sin datos", "No se pudo cargar los datos ya que no hay respuesta correcta del servidor", "Aceptar");
            }
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        getData();
    },[]);

    const refreshData = async() => {
        if (!isLoading){
            setIsLoading(true);
            getData();
        }
    }

    return (
        <Container>
            {
            isLoading ? 
                <LottieAnimation />
            :
                <SafeAreaView style={{flex: 1, alignItems: "center"}}>
                    <BarChart
                        initialSpacing={initialSpacing}
                        width={Dimensions.get('window').width - initialSpacing}
                        height={Dimensions.get('window').height - 260}
                        barWidth={barWidth}
                        isThreeD 
                        side="right"
                        disablePress={false}
                        backgroundColor={'#FFFFFF'}
                        showScrollIndicator={true}
                        showLine={true}
                        data={dataChart}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor="red"
                        showYAxisIndices
                        showXAxisIndices
                        autoShiftLabels={true}
                        lineConfig={{
                            showArrow: true
                        }}
                        renderTooltip={(item, index)=>{
                            return <Text style={styles.tooltip}>{`${item.label}: ${item.value}`}</Text>
                        }} 
                    />
                    <Button style={styles.button} disabled={dataChart.length == 0} mode="contained" onPress={()=>{refreshData()}}>
                        Actualizar datos
                    </Button>
                </SafeAreaView>
            }
            
        </Container>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom:0,
    },
    tooltip: {
        backgroundColor:'#000000',
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 10
    }
  });
