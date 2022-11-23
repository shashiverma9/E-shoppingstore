import appData from '../assests/data/AppData.json'
import { APP_DATA } from '../utils/Constant/Constants'

const initial_state={
    data:appData
}


const appDataReducer=(state=initial_state,action)=>{
    switch(action.type){
       case APP_DATA:
        return{
            ...state,
            ...action.payload
        }
        default:
            return {...state} 
    }
}

export default appDataReducer;