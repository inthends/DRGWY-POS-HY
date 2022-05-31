import {ACTIONS} from '../action-types/action-types';
import store from '../store';

export default {
    saveTokenByStore(token) {
        store.dispatch({type: ACTIONS.token, token: token});
    },
    getTokenBYStore() {
        return store.getState().memberReducer.token;
    },
    //获取系统API地址
    getUrl() {
        return store.getState().memberReducer.url;
    },
    //是否启用兴生活参数
    getIsCIBLife() {
        return store.getState().memberReducer.isCIBLife;
    }
};


