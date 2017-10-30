const usersHelper = (() => {
    let users = null;

    return {
        initialize: (database) => {
            users = database.ref('/users');
        },

        findProfileById: (uid) => {
            return users.child('profiles').child(uid).once('value');
        },

        findSettingById: (uid) => {
            return users.child('settings').child(uid).once('value');
        },

        findProfileByIdSync: (uid, callback) => {
            const ref = users.child('profiles').child(uid);
            ref.on('value', callback);
            return ref;
        },

        findByUsername: (username) => {
            return users.child('profiles').orderByChild('username').equalTo(username);
        },
        setUsername: ({uid, username}) => {
            return users.child('usernames').child(username).set(uid);
        },
        checkUsername: async (username) => {
            const data = await users.child('usernames').child(username).once('value');
            return { available: !data.exists() };
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
