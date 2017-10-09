import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import { ICatalogFilter } from '../../interfaces/ICatalogFilter.interface'
import { CatalogFilter } from '../../classes/catalogFilter.type'

@Component
export default class NavComponent extends Vue {
    catalogFilter: ICatalogFilter = this.$store.getters.getCatalogFilter

    execSearchCatalog():void{        
        this.$store.dispatch('FETCH_CATALOG_DATA', this.catalogFilter)
    }    
}
