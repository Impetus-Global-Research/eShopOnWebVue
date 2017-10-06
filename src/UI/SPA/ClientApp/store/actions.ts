import { getCatalog } from '../api/catalog.api'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'

export default {
    FETCH_CATALOG_DATA:(store:{state:any}, catalogIndex:ICatalogIndex) => {
        return getCatalog(catalogIndex).then(response => response.json() as Promise<ICatalogIndex>)
        .then(data => {
            store.state.catalogIndex = data
            console.log('Vene FETCH_CATALOG_DATA = '+ JSON.stringify(store))
        });
    }
}
