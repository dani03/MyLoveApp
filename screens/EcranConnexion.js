import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert,
     KeyboardAvoidingView } from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import * as firebase from 'firebase';
import Coeur from '../components/coeur';
import Spinner from '../components/Spinner';


class EcranConnexion extends React.Component {
    static navigationOptions = {
     
    }
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            loading: false
        };
    }
    
   
    onPressconnexion = () => {
        this.setState({ loading: true });
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { 
            this.setState({ loading: false });       
            Alert.alert('vous etes connecté');
            this.props.navigation.navigate('dureeRelation');
        }, (error) => {
                this.setState({ loading: false }); 
                Alert.alert(error.message);
        });
    }
    
    onloginSucess= () => {
        this.setState({
            email: '',
            password: '',
            loading: false
        });
    }
    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }
        return (
            <Button 
            onPress={this.onPressconnexion}
                title='connexion'
                buttonStyle={{
                    backgroundColor: '#ce5e4b',
                    width: 300,
                    height: 45,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                    top: 37   
                }}
            />
        );
    }
  render() { 
      return (
    
      <KeyboardAvoidingView behavior='position' enabled style={Style.connectContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
            <Coeur />
            <Text style={Style.titre}>My Love</Text>
        </View>
         <View style={Style.formulaire}>
            <FormLabel>Email</FormLabel>
                <TextInput 
                    //autoCorrect={false}
                    style={Style.inputBox}
                    placeholder='exemple@gmail.com'
                    keyboardType='email-address'
                    selectionColor='#ce5e4b'
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }); }}
                    underlineColorAndroid='transparent'    
                />
            <FormLabel>Mot de passe</FormLabel>
                <TextInput 
                    style={Style.inputBox}
                    placeholder='mot de passe'
                    secureTextEntry true
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password }); }}
                    underlineColorAndroid='#ce5e4b'
                    selectionColor='#ce5e4b'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                />
            {this.renderButton()}
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const Style = StyleSheet.create({
    connectContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    titre: {
        color: '#ce5e4b',
        top: 25,
        fontSize: 30
    },
    formulaire: {
        top: 90
    },
    inputBox: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#ce5e4b',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 5,
    }

});
export default EcranConnexion;
