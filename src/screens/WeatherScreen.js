import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { DetailCard } from '../components/Card';
import TextStyle from "../style/TextStyle";
import CardStyle from "../style/CardStyle";


export default function WeatherScreen(props) {

  // 設定接收從HomeScreen傳過來的值
  const passProps = props.route.params.passProps || 'noting get'

  // 將風速從字串轉為浮點數字
  var winSpeed = parseFloat(passProps.wind_speed)


  return (
    <View style={styles.container}>
      <View style={styles.weather_bg}>
        <DetailCard
          weatherImg={
            winSpeed > 1 ? (    //根據風速改變圖示
              winSpeed > 2 ?
                require('../icon/weather/b_wind.png') :
                require('../icon/weather/m_wind.png')) :
              require('../icon/weather/s_wind.png')
          }
          area={passProps.sitename}
          aqi={'AQI ' + passProps.aqi}
          status={passProps.status}
          pm10={passProps.pm10 + ' μg/m3'}
          pm2_5={passProps.pm2_5 + ' μg/m3'}
          o3={passProps.o3 + ' ppb'}
          o3_8hr={passProps.o3_8hr + ' ppb'}
          no2={passProps.no2 + ' ppb'}
          nox={passProps.nox + ' ppb'}
          wind_speed={passProps.wind_speed + ' m/sec'}
          wind_direc={passProps.wind_direc + ' degrees'}
          cardOnPress={() => props.navigation.pop()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_bg: {
    width: '84%',
    backgroundColor: '#D1D1D1',
    borderRadius: 30
  }
});
