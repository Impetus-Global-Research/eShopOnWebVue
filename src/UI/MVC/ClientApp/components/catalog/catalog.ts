import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { CatalogIndexViewModel } from '../viewmodels/catalogIndex.type'

@Component
export default class CatalogComponent extends Vue {
    catalog: CatalogIndexViewModel[] = [];
    
        mounted() {
            fetch('api/Catalog/Get')
                .then(response => response.json() as Promise<CatalogIndexViewModel[]>)
                .then(data => {
                    this.catalog = data;
                });
        }
}
