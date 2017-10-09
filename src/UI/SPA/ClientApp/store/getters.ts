import { CatalogFilter } from '../classes/catalogFilter.type'

export default {
    getCatalogIndex(state:any, getters:any){
        return state.catalogIndex
    },
    getCatalogFilter(state:any, getters:any){
        return state.catalogFilter
    }
}