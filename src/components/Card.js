import React, { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import CardStyle from "../style/CardStyle";
import TextStyle from "../style/TextStyle";

export const WeatherCard = props => (
    <TouchableOpacity onPress={props.cardOnPress}>
        <View style={CardStyle.weather_show_card}>
            <View style={CardStyle.weather_show_img}>
                <Image source={props.weatherImg} style={{ width: '70%', height: '70%', resizeMode: 'cover' }} />
            </View>
            <View style={{ flex: 3, alignItems: 'flex-end', paddingRight: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={TextStyle.showCard_area}>{props.areaName}</Text>
                    <Text style={TextStyle.showCard_status}>{props.status}</Text>
                </View>
                <View style={{ marginTop: 6, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={TextStyle.showCard_text}>懸浮微粒(pm10)：</Text>
                        <Text style={TextStyle.showCard_text}>細懸浮微粒(pm2.5)：</Text>
                        <Text style={TextStyle.showCard_text}>風速(m/sec)：</Text>
                        <Text style={TextStyle.showCard_text}>風向(degrees)：</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={TextStyle.showCard_text}>{props.pm10}</Text>
                        <Text style={TextStyle.showCard_text}>{props.pm25}</Text>
                        <Text style={TextStyle.showCard_text}>{props.wind_speed}</Text>
                        <Text style={TextStyle.showCard_text}>{props.wind_direc}</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
)

export const DetailCard = props => (
    <View style={{alignItems:'center'}}>
        <View style={CardStyle.detail_img}>
            <Image source={props.weatherImg} style={{ width: '80%', height: '80%', resizeMode: 'cover' }} />
        </View>
        <Text style={TextStyle.card_detail_area}>{props.area}</Text>
        <View style={{alignItems:'center'}}>
            <View style={CardStyle.data_card}>
                <View style={CardStyle.dataView_L}>
                    <Text style={TextStyle.card_detail_title}>空氣品質指標</Text>
                    <Text style={TextStyle.card_detail_text}>{props.aqi}</Text>
                </View>
                <View style={CardStyle.dataView_R}>
                    <Text style={TextStyle.card_detail_title}>狀態</Text>
                    <Text style={TextStyle.card_detail_text}>{props.status}</Text>
                </View>
            </View>
            <View style={CardStyle.data_card}>
                <View style={CardStyle.dataView_L}>
                    <Text style={TextStyle.card_detail_title}>懸浮微粒<Text style={{ fontSize: 12 }}>(pm10)</Text></Text>
                    <Text style={TextStyle.card_detail_text}>{props.pm10}</Text>
                </View>
                <View style={CardStyle.dataView_R}>
                    <Text style={TextStyle.card_detail_title}>細懸浮微粒<Text style={{ fontSize: 12 }}>(pm2.5)</Text></Text>
                    <Text style={TextStyle.card_detail_text}>{props.pm2_5}</Text>
                </View>
            </View>
            <View style={CardStyle.data_card}>
                <View style={CardStyle.dataView_L}>
                    <Text style={TextStyle.card_detail_title}>臭氧</Text>
                    <Text style={TextStyle.card_detail_text}>{props.o3}</Text>
                </View>
                <View style={CardStyle.dataView_R}>
                    <Text style={TextStyle.card_detail_title}>臭氧8小時移動平均</Text>
                    <Text style={TextStyle.card_detail_text}>{props.o3_8hr}</Text>
                </View>
            </View>
            <View style={CardStyle.data_card}>
                <View style={CardStyle.dataView_L}>
                    <Text style={TextStyle.card_detail_title}>二氧化氮</Text>
                    <Text style={TextStyle.card_detail_text}>{props.no2}</Text>
                </View>
                <View style={CardStyle.dataView_R}>
                    <Text style={TextStyle.card_detail_title}>氮氧化物</Text>
                    <Text style={TextStyle.card_detail_text}>{props.nox}</Text>
                </View>
            </View>
            <View style={CardStyle.data_card}>
                <View style={CardStyle.dataView_L}>
                    <Text style={TextStyle.card_detail_title}>風速</Text>
                    <Text style={TextStyle.card_detail_text}>{props.wind_speed}</Text>
                </View>
                <View style={CardStyle.dataView_R}>
                    <Text style={TextStyle.card_detail_title}>風向</Text>
                    <Text style={TextStyle.card_detail_text}>{props.wind_direc}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={CardStyle.detail_back_btn} onPress={props.cardOnPress}>
            <Text style={TextStyle.detail_back_text}>返回</Text>
        </TouchableOpacity>
    </View>

)
