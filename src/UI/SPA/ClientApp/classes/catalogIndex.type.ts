import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'
import { ICatalogItem } from '../interfaces/ICatalogItem.interface'
import { ICatalogFilter } from '../interfaces/ICatalogFilter.interface'
import { IBrand } from '../interfaces/IBrand.interface'
import { IType } from '../interfaces/IType.interface'

export class CatalogIndex implements ICatalogIndex {
    catalogItems: ICatalogItem[];
    Brands: IBrand[];
    Types: IType[];    
    CatalogFilter:ICatalogFilter
}
