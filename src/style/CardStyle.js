import { StyleSheet } from "react-native";

export default StyleSheet.create({
    weather_show_card: {
        width: 350,
        height: 170,
        borderRadius: 26,
        backgroundColor: '#83819C',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    weather_show_img: {
        width: 90,
        height: 110,
        borderRadius: 24,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        marginLeft: 30
    },
    detail_img: {
        width: 140,
        height: 140,
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    data_card: {
        flexDirection: 'row',
        marginBottom: 10
    },
    dataView_L: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        flex: 1,
        marginRight: 14
    },
    dataView_R: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        marginLeft: 14
    },
    detail_back_btn: {
        alignSelf: 'flex-end',
        width: 240,
        height: 50,
        backgroundColor: "#F6764E",
        borderTopLeftRadius: 16,
        borderBottomEndRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        transform: [{ translateY: 1 },{translateX:1}],
    }
})