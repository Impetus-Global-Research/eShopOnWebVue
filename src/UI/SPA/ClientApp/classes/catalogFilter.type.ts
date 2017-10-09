import { ICatalogFilter } from '../interfaces/ICatalogFilter.interface'
import { IPaginationInfo } from '../interfaces/IPaginationInfo.interface'

export class CatalogFilter implements ICatalogFilter {
    BrandFilterApplied: number | null;
    TypesFilterApplied: number | null;
    TextSearch: string;
    PaginationInfo: IPaginationInfo;
}