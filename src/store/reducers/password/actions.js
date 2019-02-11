import db from '../../../script/firebase'

export function addNewPassword (payload) {
    return async dispatch => {
        try {
            var docRef = await db.collection("passwords").add({
                url: payload.url,
                username: payload.username,
                password: payload.password,
                image: `//logo.clearbit.com/${payload.url}`,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);   
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
        // console.log(payload,"data yg di edit")
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
            console.error("Error updating document: ", error);
        }
    }
}

export function listenData () {
    return dispatch => {
        db.collection("passwords")
            .onSnapshot(function(snapshot) {
                var i =0
                var newData = []
                snapshot.forEach(doc => {
                    // i++;
                    newData.push({...doc.data(), key: doc.id})
                })
                console.log("Current data: ", newData);
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
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}