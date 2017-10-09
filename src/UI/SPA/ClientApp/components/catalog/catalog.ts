import '../../css/catalog/pager.css'
import './catalog.css'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ICatalogIndex } from '../../interfaces/ICatalogIndex.interface'
import { CatalogIndex } from '../../classes/catalogIndex.type'
import { ICatalogFilter } from '../../interfaces/ICatalogFilter.interface'
import { CatalogFilter } from '../../classes/catalogFilter.type'

@Component
export default class CatalogComponent extends Vue {    
    catalogIndex: ICatalogIndex = new CatalogIndex()
    catalogFilter: ICatalogFilter = this.$store.getters.getCatalogFilter

    beforeMount(){
        this.catalogFilter = new CatalogFilter()
        this.catalogFilter.TextSearch = ""
        this.catalogFilter.BrandFilterApplied = 0
        this.catalogFilter.TypesFilterApplied = 0
        this.$store.commit('SET_FILTER', this.catalogFilter)
    }

    mounted() {                
        this.execGetCatalog()
    }

    get catalog(){
        return this.catalogIndex = this.$store.getters.getCatalogIndex
    }    

    execGetCatalog():void{        
        this.$store.dispatch('FETCH_CATALOG_DATA', this.catalogFilter)
    }
}
