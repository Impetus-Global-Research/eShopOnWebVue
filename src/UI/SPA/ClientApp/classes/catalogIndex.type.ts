import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'
import { ICatalogItem } from '../interfaces/ICatalogItem.interface'
import { IPaginationInfo } from '../interfaces/IPaginationInfo.interface'
import { IBrand } from '../interfaces/IBrand.interface'
import { IType } from '../interfaces/IType.interface'

export class CatalogViewModel implements ICatalogIndex {
    catalogItems: ICatalogItem[];
    Brands: IBrand[];
    Types: IType[];
    brandFilterApplied: null;
    typesFilterApplied: null;
    paginationInfo: IPaginationInfo;
}
