import * as actions from'./actionTypes.js';
let lastSafeId=0;
let initialState =  {
    safes:[]
};
export default function SafeReducer(state=initialState,action){
    switch(action.type){
        case actions.SAFE_CREATED:
            return{
                ...state,
                safes: [
                    ...state.safes,
                    {
                    id:++lastSafeId,
                    safeName:action.payload.safeName,
                    safeOwner:action.payload.safeOwner,
                    safeType:action.payload.safeType,
                    safeDescription:action.payload.safeDescription,
                    isSelected:false
                    }
                ]
            }
        case actions.SAFE_DELETED:
            return {
                safes:state.safes.filter((safe, index) => index !== action.payload)
              }

        case actions.SAFE_EDIT:
            let safe = state.safes.filter((safe, index) => index == action.payload)
            return state;
        
        default:
            return state;
    }

}