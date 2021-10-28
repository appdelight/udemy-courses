import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

const bindMiddlewares = (middleware: any[]) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware))
    } else {
        return compose(applyMiddleware(...middleware))
    }


}

export default createStore(reducers, {}, bindMiddlewares([thunk]))
