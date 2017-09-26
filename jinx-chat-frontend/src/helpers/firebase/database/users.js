import * as firebase from 'firebase';

export const createUserData = ({user, username}) => {
    const { uid, email, providerData, photoURL, displayName} = user;
    return firebase.database().ref('users/' + uid).set({
        email,
        providerData,
        photoURL,
        displayName,
        username
    });
};

export const findUserById = (uid) => {
    // once 변경을 수신 대기하지 않고 단순히 데이터의 스냅샷만 필요한 경우가 있습니다. 
    // 이후에 변경되지 않는 UI 요소를 초기화할 때가 그 예입니다. 
    // 이러한 경우 once() 메소드를 사용하면 시나리오가 단순해집니다. 
    // 이 메소드는 한 번 호출된 후 다시 호출되지 않습니다.
    return firebase.database().ref('/users/' + uid).once('value')
}


export const findUserByUsername = (username) => {
    const ref = firebase.database().ref('/users/');
    return ref.orderByChild('username').equalTo(username).once('child_added');
}