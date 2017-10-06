import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import ICatalogIndex from '../interfaces/ICatalogIndex.interface'

Vue.use(Vuex)

export function createStore():Vuex.Store<any>{
    return new Vuex.Store({
        state:{
            catalogIndex: ICatalogIndex
        }
        , actions
        , mutations
        , getters
    })
}