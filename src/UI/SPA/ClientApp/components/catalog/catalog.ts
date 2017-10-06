import '../../css/catalog/pager.css'
import './catalog.css'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ICatalogIndex } from '../../interfaces/ICatalogIndex.interface'
import { CatalogViewModel } from '../../classes/catalogIndex.type'


@Component
export default class CatalogComponent extends Vue {    
    catalogIndex: ICatalogIndex = new CatalogViewModel()

    mounted() {
        this.execGetCatalog()
    }   

    get catalog(){
        return this.catalogIndex = this.$store.getters.getCatalogIndex
    }

    execGetCatalog():void{
        this.$store.dispatch('FETCH_CATALOG_DATA', this.catalogIndex)  
    }    
    
}
