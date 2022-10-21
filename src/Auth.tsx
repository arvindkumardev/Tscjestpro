import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';


const SignUp = (fullName:string, email:any, password:any) => {
    if(!fullName || !email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser?.updateProfile({
            displayName: fullName
        })

        return uid
    })
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const SignIn = (email:any, password:any) => {
    if(!email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const forgetPassword = (email:any) => {
    if(!email) {
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const Auth = {
    SignUp,
    SignIn,
    forgetPassword,
    signOut
}

export default Auth;