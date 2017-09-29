import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        CatalogComponent: require('../catalog/catalog.vue.html')
    }
})
export default class HomeComponent extends Vue {
}