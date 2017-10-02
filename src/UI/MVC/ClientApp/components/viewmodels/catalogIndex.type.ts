import { CatalogItemViewModel } from './catalogItem.type'
import { PaginationInfoViewModel } from './paginationInfo.type'

export interface CatalogIndexViewModel {
        CatalogItems: CatalogItemViewModel[];
        //Brands: SelectListItem[];
        //Types: SelectListItem[];
        BrandFilterApplied: number | null;
        TypesFilterApplied: number | null;
        PaginationInfo: PaginationInfoViewModel;
    }