import { ICatalogItem } from './ICatalogItem.interface'
import { ICatalogFilter } from './ICatalogFilter.interface'
import { IBrand } from './IBrand.interface'
import { IType } from './IType.interface'

export interface ICatalogIndex {
    catalogItems: ICatalogItem[];
    Brands: IBrand[];
    Types: IType[];        
    CatalogFilter: ICatalogFilter;
}