/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    transforms: [immutableTransform()],
    storage: AsyncStorage,
    whitelist: ['common', 'auth'],
};

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools({ realtime: true })
        : compose;

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);
// then run the saga
sagaMiddleware.run(rootSaga);

export default () => {
    return {
        store,
        persistor,
    };
};
