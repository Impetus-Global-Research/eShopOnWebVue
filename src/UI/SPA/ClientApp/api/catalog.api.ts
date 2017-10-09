import Vue from 'vue'
import { ICatalogIndex } from '../interfaces/ICatalogIndex.interface'
import { ICatalogFilter } from '../interfaces/ICatalogFilter.interface'
import axios from 'axios'

export function getCatalog(catalogFilter:ICatalogFilter){    
    var url: string = 'api/Catalog/Post'
    return axios.post(url, catalogFilter)
}