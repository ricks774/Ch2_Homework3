import React, { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableNativeFeedback, FlatList } from 'react-native';
// 載入時間日期套件
import moment from 'moment';

// 載入自製樣式
import CardStyle from '../style/CardStyle';
import TextStyle from '../style/TextStyle';
import { WeatherCard } from '../components/Card';
import { MOCKED_DATA } from '../data/mocked_data';

export default function HomeScreen(props) {

  const [dataSource, setDataSource] = useState([])

  // 確認資料載入完成
  useEffect(() => {
    var weatherInfo = MOCKED_DATA
    setDataSource(weatherInfo)
  })

  // 將資料傳到內頁
  const showWeatherDetail = (cases) => {
    props.navigation.push('WeatherPage', { passProps: cases })
  }

  const renderAir = (cases) => {
    // 將風速從字串轉為浮點數字
    var winSpeed = parseFloat(cases.wind_speed)

    return (
      <WeatherCard
        weatherImg={
          winSpeed > 1 ? (    //根據風速改變圖示
            winSpeed > 2 ?
              require('../icon/weather/b_wind.png') :
              require('../icon/weather/m_wind.png')) :
            require('../icon/weather/s_wind.png')
        }
        areaName={cases.sitename}
        status={cases.status}
        pm10={cases.pm10}
        pm25={cases.pm2_5}
        wind_speed={winSpeed}
        wind_direc={cases.wind_direc}
        cardOnPress={() => showWeatherDetail(cases)}
      />
    )
  }

  return (
    // 點擊空白處關閉鍵盤
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>

          {/* 文字區塊 */}
          <View style={styles.title_info}>
            <Text style={TextStyle.h1_title}>Air Quality</Text>
            <Text style={TextStyle.date_text}>{moment().format("YYYY年MM月DD日")}</Text>
          </View>

          {/* 搜尋bar (無功能)*/}
          <View style={{ flex: 1, alignSelf: 'flex-end' }}>
            <View style={styles.search_bar}>
              <TextInput placeholder='搜尋地區' style={TextStyle.search_text} />
            </View>
          </View>
        </View>

        {/* 天氣列表 */}
        <FlatList
          data={dataSource}
          renderItem={cases => renderAir(cases.item)}   // renderBook是自定義的名稱
          keyExtractor={cases => cases.siteid}
          style={styles.scrollView}
        />

        {/* <WeatherCard
            cardImg={require('../icon/weather/s_wind.gif')}
            areaName={'橋頭區'}
            status={'狀態:良好'}
            pm10={'54'}
            pm25={'25'}
            wind_speed={'0.4'}
            wind_direc={'70'}
          /> */}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444262',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    // backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
  },
  title_info: {
    alignSelf: 'flex-start',
    marginTop: 60,
    marginLeft: 60,
  },
  search_bar: {
    alignSelf: 'flex-end',
    width: 100,
    height: 18,
    borderRadius: 26,
    backgroundColor: "#E7E4E7",
    opacity: 0.7,
    marginRight: 30,
    justifyContent: 'center',
  }
});
