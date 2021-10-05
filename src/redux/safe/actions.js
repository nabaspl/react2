import * as actions from'./actionTypes.js';
export function safeCreated(inputs){
    return{
        type:actions.SAFE_CREATED,
        payload:inputs
    }
}
export function safeDeleted(index){
    return{
        type:actions.SAFE_DELETED,
        payload:index
    }
}

export function safeEdit(index){
    return{
        type:actions.SAFE_EDIT,
        payload:index
    }
}

export function createSecret(secret){
    return{
        type:actions.CREATE_SECRET,
        payload:secret
    }
}