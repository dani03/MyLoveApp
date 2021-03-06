import React, { Component } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import Coeur from '../components/coeur';

class CoeurBubble5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yPosition: new Animated.Value(10),
            xPosition: new Animated.Value(20),
            opacity: new Animated.Value(0)

        };
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.state.yPosition, {
                    toValue: -550,
                    duration: 2000
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 2,
                    duration: 2000
                }),
                Animated.timing(
                    this.state.xPosition, {
                        toValue: -500,
                        duration: 2000
                    }),

        ]).start(() => {
            setTimeout(() => {
                    this.props.animatedComplete(this.props.count);
            }, 100);
        });
    }
    render() {
        const animationStyle = {
            transform: [{ translateY: this.state.yPosition }],
            opacity: this.state.opacity,
            
        };
        return (
            <Animated.View style={[animationStyle]}>
            <Coeur style={styles.clap} />
            <Text style={styles.clapSMS}>Miss you </Text>
            </Animated.View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    heart: {
        justifyContent: 'center', 
        alignItems: 'center',
        top: '44%',
        position: 'relative',
    },
    clap: {
        alignItems: 'center',
       
        position: 'relative',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        left: 20 
        
    },
    clapSMS: {
        color: 'black',
        fontSize: 10,
        left: 20
    }
});
    export default CoeurBubble5;
