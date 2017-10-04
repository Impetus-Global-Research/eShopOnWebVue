import { ICatalogItem } from './ICatalogItem.interface'
import { IPaginationInfo } from './IPaginationInfo.interface'
import { IBrand } from './IBrand.interface'
import { IType } from './IType.interface'

export interface ICatalogIndex {
        catalogItems: ICatalogItem[];
        Brands: IBrand[];
        Types: IType[];
        brandFilterApplied: number | null;
        typesFilterApplied: number | null;
        paginationInfo: IPaginationInfo;
    }