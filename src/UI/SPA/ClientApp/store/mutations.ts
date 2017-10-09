import Vue from 'vue'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'
import {ICatalogFilter } from '../interfaces/ICatalogFilter.interface'

export default {
    SET_CATALOG:(state:any, catalogIndex:ICatalogIndex) =>{        
        state.catalogIndex = catalogIndex
    },
    SET_FILTER:(state:any, catalogFilter:ICatalogFilter) =>{
        state.catalogFilter = catalogFilter
        console.log('Vene filter '+ JSON.stringify(state.catalogFilter))
    }
}