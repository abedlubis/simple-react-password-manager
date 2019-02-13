import db from '../../../script/firebase'

export function addNewPassword (payload) {
    return async dispatch => {
        try {
            var docRef = await db.collection("passwords").add({
                user: localStorage.getItem("access_token"),
                url: payload.url,
                username: payload.username,
                password: payload.password,
                image: `//logo.clearbit.com/${payload.url}`,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        } catch (error) {
        }
    }
}

export function setFilterSearch(passwords) {
    return { 
        type: 'SET_NEW_PASSWORDS', 
        payload: passwords
    }
}

export function editPassword (payload) {
    return async dispatch => {
        var washingtonRef = db.collection("passwords").doc(payload.id);
        try {
            return await washingtonRef.update({
                url: payload.url,
                username: payload.username,
                password: payload.password,
                image: `//logo.clearbit.com/${payload.url}`,
                updatedAt: new Date()
            })
        }
        catch(error){
        }
    }
}

export function listenData () {
    return dispatch => {
        db.collection("passwords").where("user", "==", localStorage.getItem("access_token"))
            .onSnapshot(function(snapshot) {
                var newData = []
                snapshot.forEach(doc => {
                    newData.push({...doc.data(), key: doc.id})
                })
                dispatch({
                    type: 'GET_DATA_SUCCESS',
                    payload : newData
                })
            });
    }
    
}

export function deletePassword (params) {
    return dispatch => {
        db.collection("passwords").doc(params.key).delete()
        .then(function() {
        }).catch(function(error) {
        });
    }
}