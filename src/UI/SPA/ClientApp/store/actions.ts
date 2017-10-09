import { getCatalog } from '../api/catalog.api'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'
import { ICatalogFilter } from '../interfaces/ICatalogFilter.interface'

export default {
    FETCH_CATALOG_DATA:(store:{state:any,commit:any}, catalogFilter:ICatalogFilter) => {  
        console.log('Vene fetch data ' + JSON.stringify(catalogFilter))      
        return getCatalog(catalogFilter).then(response => response.data as Promise<ICatalogIndex>)
        .then(data => {
            store.state.catalogIndex = data
            store.commit('SET_FILTER', catalogFilter)
        });
    }
}
