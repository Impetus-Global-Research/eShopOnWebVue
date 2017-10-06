import Vue from 'vue'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'

function getParameters(catalogIndex:ICatalogIndex):string{
    var params: string[] = []  
    if(catalogIndex.brandFilterApplied != 0) params.push("brandFilterApplied="+catalogIndex.brandFilterApplied)
    if(catalogIndex.typesFilterApplied != 0) params.push("typesFilterApplied="+catalogIndex.typesFilterApplied)
    return params.join("&")
}

export function getCatalog(catalogIndex:ICatalogIndex){
    var url: string = 'api/Catalog/Get/?' + getParameters(catalogIndex)
    return fetch(url)
}

export function searchCatalog(catalogIndex:ICatalogIndex){
    var url: string = 'api/Catalog/Search/?' + getParameters(catalogIndex)
    return fetch(url)
}