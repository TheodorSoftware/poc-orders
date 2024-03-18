import LoginPage from "./LoginPage";

export const loginPageStyle = {
    loginPageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginPageBox: {
        width: '50%',
        height: '50%',
        padding: '30px',
        borderRadius: '25px',
        boxShadow: '10px 4px 78px -30px rgba(0,0,0,0.75)'
    },
    loginPageBoxContent: {
        width: '100%',
        height: '90%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    loginPageFormGroup:{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    loginPageBoxControlsInput: {
        width: '60%',
        height: '40px',
        margin: '20px',
    },
    loginPageRegisterNavLink:{
        color: 'grey',
        textDecoration: 'none'
        
    },
    loginPageErrorMessage:{
        color:'red'
    }
}