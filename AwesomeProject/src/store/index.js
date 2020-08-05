import reducers from '../reducers';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

export default function initStore() {
    const store = createStore( 
        reducers,
        // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
        applyMiddleware(
                    //middleware를 계속 추가
                    // ReduxThunk,
                    // logger,
        ), 
    );
    return store;
}