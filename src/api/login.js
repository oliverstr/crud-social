import "firebase/auth";
const authService = firebase.auth();

/**
 * Sing in users. Format validations should be done prior.
 * 
 * @param {string} email 
 * @param {string} password 
 * @return {Promise} - The promise has no resolved value, used only to catch errors
 */
export function signIn(email, password) {
    return authService.signInWithEmailAndPassword(email, password);
}

/**
 * Sing up users
 * 
 * @param {string} email 
 * @param {stirng} password 
 * @return {Promise} - The promise has no resolved value, used only to catch errors
 */
export function signUp(email, password) {
    authService.createUserWithEmailAndPassword(email, password);
}

/**
 * Callback for user state change.
 *
 * @callback userStateChange
 * @param {Object|null} user Information about the user. If null user is logged out
 * @param {string} user.displayName
 * @param {string} user.email
 * @param {boolean} user.emailVerified
 * @param {string} user.photoURL
 * @param {boolean} user.isAnonymous
 * @param {string} user.uid
 * @param {string} user.providerData
 * 
 * @param {userStateChange} callback
 * @return {undefined}
 */
export function onUserStateChanged(callback) {
    authService.onAuthStateChanged(callback)
}
