import { Auth } from 'aws-amplify';
//methods by schadrack_btb


//register user
export async function signUp(username , password , email ) {
    try {
        const { user } = await Auth.signUp({
            username:username,
            password: password,
            // email:email,   
            attributes: {
                email:email,          // optional
                phone_number:null,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
//signout
export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
//signin
export async function signIn(username , password) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}
//resend confimation code
export async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}
//global signout
export async function signOutGlobal(){
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}



//change password
export const changePassword =() =>{
  Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}