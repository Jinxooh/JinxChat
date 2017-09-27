import * as firebase from 'firebase';

const authHelper = (function() {
    
    let auth;

    const providers = {
        github: (new firebase.auth.GithubAuthProvider()),
        facebook: (new firebase.auth.FacebookAuthProvider()),
        google: (new firebase.auth.GoogleAuthProvider()),
    };

    return {
        initalize: (authInstance) => {
            auth = authInstance;
        },
        signInWithPopup: (provider) => {
            return auth.signInWithPopup(providers[provider]);
        },
        logout: () => {
            return auth.signOut();
        },
        getExistingProvider: async (email) => {
            const existingProviders = await auth.fetchProvidersForEmail(email);
            const provider = existingProviders[0].split('.')[0]; 
            return provider;
        },
        linkAccount: async ({provider, credential}) => {
            const result = await auth.signInWithPopup(providers[provider]);
            return result.user.linkWithCredential(credential);
        },
        resolveDuplicate: async (error) => {
            const { credential, email } = error;
            const existingProviders = await auth.fetchProvidersForEmail(email);
            
            const provider = existingProviders[0].split('.')[0];
            const result = await auth.signInWithPopup(providers[provider]);
            
            console.log(result);
            console.log(result.user);
            return result.user.linkWithCredential(credential);
        },
        authStateChanged: (callback) => {
            auth.onAuthStateChanged(callback);
        }
    }
})();

export default authHelper;