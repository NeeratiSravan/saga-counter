import {takeEvery,put,all} from 'redux-saga/effects'
function* incWorker(){
    yield put({type:"INC"})
}
export function* incWatcher (){
    yield takeEvery("INC_S",incWorker) 
}
function* decWorker(){
    yield put({type:"DEC"})
}
export function* decWatcher (){
    yield takeEvery("DEC_S",decWorker)
}
export default function* rootsaga(){
    yield all([
        decWatcher(),
        incWatcher()
    ])
}