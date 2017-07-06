import * as firebase from 'firebase';

const auth = (function() {
    
    const providers = {
        github: (new firebase.auth.GithubAuthProvider()),
        facebook: (new firebase.auth.FacebookAuthProvider()),
        google: (new firebase.auth.GoogleAuthProvider()),
    };

    return {
        github: () => {
            return firebase.auth().signInWithPopup(providers.github);
        },
        facebook: () => {
            return firebase.auth().signInWithPopup(providers.facebook);
        },
        google: () => {
            return firebase.auth().signInWithPopup(providers.google);
        },
        logout: () => {
            return firebase.auth().signOut();
        },
        getExistingProvider: async (email) => {
            const existingProviders = await firebase.auth().fetchProvidersForEmail(email);
            const provider = existingProviders[0].split('.')[0]; 
            return provider;
        },
        linkAccount: async ({provider, credential}) => {
            const result = await firebase.auth().signInWithPopup(providers[provider]);
            return result.user.linkWithCredential(credential);
        },
        resolveDuplicate: async (error) => {
            const { credential, email } = error;
            const existingProviders = await firebase.auth().fetchProvidersForEmail(email);
            
            const provider = existingProviders[0].split('.')[0];
            const result = await firebase.auth().signInWithPopup(providers[provider]);
            
            console.log(result);
            console.log(result.user);
            return result.user.linkWithCredential(credential);
        },
        authStateChanged: (callback) => {
            firebase.auth().onAuthStateChanged(callback);
        }
    }
})();

export default auth;