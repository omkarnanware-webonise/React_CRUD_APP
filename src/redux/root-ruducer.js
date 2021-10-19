import { combineReducers } from "redux";
import usersReducers from "./ruducer";


const rootReducer =combineReducers({
    data:usersReducers,
});

export default rootReducer;
