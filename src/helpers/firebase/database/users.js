const usersHelper = (() => {
    let users = null;

    return {
        initialize: (database) => {
            users = database.ref('/users');
        },

        finProfiledById: (uid) => {
            return users.child('profiles').child(uid).once('value');
        },

        findSettingById: (uid) => {
            return users.child('settings').child(uid).once('value');
        },

        findByUsername: (username) => {
            return users.child('profiles').orderByChild('username').equalTo(username);
        },

        create: ({uid, username, displayName, email, thumbnail}) => {
            const profile = users.child('profiles').child(uid).set({
                username,
                displayName,
                thumbnail,
            });

            const settings = users.child('settings').child(uid).set({
                email,
            })

            return Promise.all([ profile, settings ]);
        }
    }
})();

export default usersHelper;
