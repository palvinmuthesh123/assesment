import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, Modal, Animated, Easing } from 'react-native'
import { HEIGHT, WIDTH } from "../../theme/typography";

var cal = 15000;

export default SplashScreen = (props) => {

    const [hide, setHide] = useState(true)
    const [hide1, setHide1] = useState(true)
    const [leftPosition, setLeftPosition] = useState(new Animated.Value(0));
    const [leftPosition1, setLeftPosition1] = useState(new Animated.Value(0));
    const [leftPosition2, setLeftPosition2] = useState(new Animated.Value(-WIDTH * 90 / 100));
    const [leftPosition3, setLeftPosition3] = useState(new Animated.Value(0));
    const [modalVisible, setModalVisible] = useState(true)
    const [cond, setCond] = useState(0);
    const [conds, setConds] = useState(false);
    const [count, setCount] = useState(15000);

    useEffect(() => {
        mooveLR(WIDTH * 50 / 100, 800)
        setTimeout(() => {
            setModalVisible(false);
            mooveLR1(WIDTH * 50 / 100);
            setTimeout(() => {
                mooveLR1(0);
                setTimeout(() => {
                    mooveLR(0, 0);
                    setTimeout(() => {
                        setModalVisible(true);
                        mooveLR(WIDTH * 50 / 100, 800);
                        setHide(false);
                        setTimeout(() => {
                            setModalVisible(false);
                            setTimeout(() => {
                                mooveLR2(0, 100)
                            }, 1000)
                        }, 3000)
                    }, 500)
                }, 500)
            }, 500)
        }, 5000)

    }, []);

    function timeout() {
        setTimeout(function () {
            if (cal <= 36875) {
                cal = cal + 3125
                console.log(cal);
                setCount(cal);
                timeout();
            }
        }, 500);
    }

    const mooveLR = (val, time) => {
        Animated.timing(leftPosition, {
            toValue: val,
            duration: time,
            easing: Easing.linear,
        }).start();

    };

    const mooveLR1 = (val) => {
        Animated.timing(leftPosition1, {
            toValue: val,
            duration: 500,
            easing: Easing.linear,
        }).start();
    };

    const mooveLR2 = (val, time) => {
        Animated.timing(leftPosition2, {
            toValue: val,
            duration: time,
            easing: Easing.linear,
        }).start();

    };

    const clicking = () => {
        if (cond == 0) {
            setCond(1)
            mooveLR2(WIDTH * 90 / 100, 100);
            setTimeout(() => {
                mooveLR2(-WIDTH * 90 / 100, 0);
                setTimeout(() => {
                    mooveLR2(0, 100);
                }, 1000)
            }, 1000)
        }
        else if (cond == 1) {
            setCond(2);
            mooveLR2(WIDTH * 180 / 100, 100);
            setTimeout(() => {
            mooveLR1(-WIDTH * 50 / 100)
            setTimeout(() => {
                mooveLR1(0)
                setHide1(!hide1);
            }, 500)
            },20000)
        }
        else if (cond == 2) {
            setCond(3);
            timeout();
        }
        else if (cond == 3)
        {
            setHide(true);
            setHide1(true);
            mooveLR(0, 0);
            setModalVisible(true);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

            <Animated.View style={{ right: leftPosition1 }}>
                <ImageBackground source={require('../../assets/images/award_bg.png')} style={{ height: HEIGHT, width: WIDTH, justifyContent: 'flex-end' }} resizeMode="stretch">
                    {hide && hide1 ? <View style={{ alignItems: 'center' }}>
                        <ImageBackground source={require('../../assets/images/castingLogo.png')} style={{ height: HEIGHT * 15 / 100, width: WIDTH * 25 / 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', transform: [{ rotate: '-14deg' }], marginTop: HEIGHT * 5 / 100, fontSize: 17, marginLeft: WIDTH * 2 / 100, fontFamily:'Kolka Medium' }}>04:52:59</Text>
                        </ImageBackground>
                        <Text style={{ color: '#bc6eaf', borderColor: '#6a3375', border: 5, fontSize: 25, transform: [{ rotate: '-14deg' }], marginLeft: WIDTH * 5 / 100, marginBottom: HEIGHT * 13 / 100, fontFamily:'Kolka Medium' }}>CASTING CALL</Text>
                    </View> : !(hide || hide1) ? <View>

                    </View> : <Animated.View style={{ flexDirection: 'row', justifyContent: 'center', right: leftPosition2 }}>
                        <Image source={require('../../assets/images/avtar2.png')} style={{ height: HEIGHT * 10 / 100, width: WIDTH * 20 / 100, resizeMode: 'stretch', borderRadius: 100, borderColor: 'yellow', borderWidth: 3 }}></Image>
                        <View style={{ alignItems: 'center', marginLeft: WIDTH * 15 / 100 }}>
                            <Text style={{ color: '#fefbcd', fontSize: 35, fontFamily:'Kolka Medium' }}>
                                D-Lister
                            </Text>
                            <Text style={{ color: 'white', fontSize: 18, fontFamily:'Kolka Medium' }}>
                                Solly
                            </Text>
                        </View>
                    </Animated.View>}
                    <Text style={[{ textAlign: 'center', color: '#fefbcd', fontSize: 30, marginBottom: HEIGHT * 4 / 100, marginTop: HEIGHT * 1 / 100, fontFamily:'Kolka Medium' }, !(hide || hide1) ? { width: WIDTH * 70 / 100, textAlign: 'center', marginLeft: WIDTH * 15 / 100 } : null]}>{hide && hide1 ? "The Results R In! " : !(hide || hide1) ? "4 Fiends Gave U Some Love" : "Gave U some Love"}</Text>
                    {hide ? null : <View style={{ width: WIDTH, alignItems: 'center' }}>
                        <ImageBackground source={require('../../assets/images/main-heart.png')} style={[{ height: HEIGHT * 20 / 100, width: WIDTH * 50 / 100, resizeMode: 'stretch', justifyContent: 'center', alignItems: 'center' }, !(hide || hide1) ? { marginBottom: HEIGHT * 9 / 100, } : { marginBottom: HEIGHT * 2 / 100, }]}>
                            <Text style={{ color: '#ffe58c', fontSize: 30, fontFamily:'Kolka Medium' }}>{count}</Text>
                        </ImageBackground>
                    </View>}
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={[{ width: WIDTH * 50 / 100, height: HEIGHT * 40 / 100, marginBottom: -HEIGHT * 4 / 100, zIndex: 6 }, hide && hide1 ? null : !(hide || hide1) ? { marginLeft: WIDTH * 20 / 100 } : { marginLeft: WIDTH * 10 / 100 }]} source={require('../../assets/images/girlClap.png')}></Image>
                            {hide ? null :
                                <View style={{ flexDirection: 'column' }}>
                                    {!(hide || hide1) ? <ImageBackground source={require('../../assets/images/image.png')} style={{ marginLeft: -WIDTH * 15 / 100, marginTop: -HEIGHT * 7 / 100, height: HEIGHT * 12 / 100, width: WIDTH * 35 / 100, justifyContent: 'center', alignItems: 'center' }} resizeMode="stretch">
                                        <Text style={{ color: 'pink', fontSize: 20, marginBottom: HEIGHT * 2 / 100, fontFamily:'Kolka Medium' }}>Congrats!</Text>
                                    </ImageBackground> : null}
                                    <TouchableOpacity onPress={() => {
                                        clicking()
                                    }}>
                                        <Image style={[{ width: WIDTH * 10 / 100, height: HEIGHT * 5 / 100, resizeMode: "stretch", top: '30%' }, !(hide || hide1) ? { marginTop: '80%' } : { marginTop: HEIGHT * 10 / 100 }]} source={require('../../assets/images/arrow.png')}></Image>
                                    </TouchableOpacity>
                                </View>}
                        </View>
                        <Image style={{ width: WIDTH, }} source={require('../../assets/images/awardPlatform.png')}></Image>
                    </View>
                </ImageBackground>
            </Animated.View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Animated.Image style={{ height: HEIGHT, width: WIDTH * 50 / 100, transform: [{ scaleX: -1 }], right: leftPosition }} source={require('../../assets/images/curtain.png')}></Animated.Image>
                    <Animated.Image style={{ height: HEIGHT, width: WIDTH * 50 / 100, left: leftPosition }} source={require('../../assets/images/curtain.png')}></Animated.Image>
                </View>
            </Modal>

        </SafeAreaView>
    )
}
