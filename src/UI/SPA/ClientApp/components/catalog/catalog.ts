import '../../css/catalog/pager.css'
import './catalog.css'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ICatalogIndex } from '../../interfaces/ICatalogIndex.interface'
import { CatalogViewModel } from '../../classes/catalogIndex.type'
import { getCatalog } from '../../api/catalog.api'

@Component
export default class CatalogComponent extends Vue {
    catalog: ICatalogIndex = new CatalogViewModel()
        mounted() {
            this.execGetCatalog()
            //console.log('Vene Mounted')
        }   
/*
        created(){
            console.log('Vene created')
        }

        beforeCreate(){
            console.log('Vene before-created')
        }

        beforeDestroy(){
            console.log('Vene before-destroy')
        }

        beforeMount(){
            console.log('Vene before-Mounted')
        }
*/
        execGetCatalog():void{
            getCatalog(this.catalog)
            .then(response => response.json() as Promise<ICatalogIndex>)
            .then(data => {
                this.catalog = data
            });
        }    
}
