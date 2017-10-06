import Vue from 'vue'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'

export default {
    SET_CATALOG:(state:any, catalogIndex:ICatalogIndex) =>{        
        state.catalogIndex = catalogIndex
    }
}