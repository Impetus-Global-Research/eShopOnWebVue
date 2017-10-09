import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ICatalogFilter } from '../../interfaces/ICatalogFilter.interface'
import { CatalogFilter } from '../../classes/catalogFilter.type'

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})

export default class AppComponent extends Vue {    
} 
