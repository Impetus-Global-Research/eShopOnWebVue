import { IPaginationInfo } from './IPaginationInfo.interface'

export interface ICatalogFilter {
    BrandFilterApplied: number | null;
    TypesFilterApplied: number | null;
    TextSearch: string;
    PaginationInfo: IPaginationInfo;
}