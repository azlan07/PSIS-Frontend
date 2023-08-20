import { combineReducers } from 'redux';
import authReducer from './auth'
import usersReducer from './users';
import skckReducer from './skck';
import sktmReducer from './sktm';
import surekReducer from './surek';
import kabaReducer from './kaba';
import laporReducer from './lapor';
import pengajuanReducer from './pengajuan';
import transparansiReducer from './transparansi';
import uploadSurekReducer from './upload_surek';
import pendudukReducer from './penduduk';

export default combineReducers({
    authReducer, usersReducer, skckReducer, sktmReducer, surekReducer, kabaReducer, laporReducer, pengajuanReducer, transparansiReducer, uploadSurekReducer, pendudukReducer
});
