import { Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT } from '../../theme/typography';

export default ScaledSheet.create({
    container: {
        backgroundColor: COLOR.lightGreen,
        flexDirection: 'column',
        flex: 1,
        // paddingTop: 35
    },
    logo: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    part1: {
        height: HEIGHT / 100 * 5,
        // flex:0.05,
        // backgroundColor:'red',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    skip: {
        paddingHorizontal: 20,
        fontSize: FONT_SIZE.medium,
        color: COLOR.black
    },
    imgPart: {
        height: HEIGHT / 100 * 48,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingPart: {
        height: HEIGHT / 100 * 10,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: COLOR.black,
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.extra_bold
    },
    ContentPart: {
        height: HEIGHT / 100 * 20,
        paddingHorizontal: '12%',
        // backgroundColor:'red',
        // justifyContent:'center',
        alignItems: 'center'
    },
    Content: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        textAlign: 'center',
        lineHeight: 25
    },
    btnPart: {
        height: HEIGHT / 100 * 7,
        // backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.lightGreen,
        width: '60%',
        height: '100%',
        borderRadius: 10
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.xl
    },
})