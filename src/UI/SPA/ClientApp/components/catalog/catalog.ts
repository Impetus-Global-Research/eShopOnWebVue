import '../../css/catalog/pager.css';
import './catalog.css';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ICatalogIndex } from '../../interfaces/ICatalogIndex.interface'
import { CatalogViewModel } from '../../classes/catalogIndex.type'

@Component
export default class CatalogComponent extends Vue {
    catalog: ICatalogIndex = new CatalogViewModel();
    
        mounted() {
            this.getCatalog();            
        }   

        getCatalog():void{                     
            var params: string[] = []  
            if(this.catalog.brandFilterApplied) params.push("brandFilterApplied="+this.catalog.brandFilterApplied)
            if(this.catalog.typesFilterApplied) params.push("typesFilterApplied="+this.catalog.typesFilterApplied)            
            
            var url: string = 'api/Catalog/Get/?' + params.join("&")

            fetch(url)
            .then(response => response.json() as Promise<ICatalogIndex>)
            .then(data => {
                this.catalog = data;                
            });
        }
}
