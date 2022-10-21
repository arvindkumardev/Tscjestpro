jest.mock('@react-native-firebase/auth', () => ({}))
jest.mock('@react-navigation/native', () => ({useRoute: () => ({ params: { Item: {id:0,title:"",body: ""} } })}))
jest.mock('@react-navigation/native-stack', () => ({createNativeStackNavigator: () => ({ })}))
jest.mock('@react-navigation/native', () => ({useNavigation: () => ({})}))
