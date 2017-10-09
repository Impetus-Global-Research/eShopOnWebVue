using Microsoft.AspNetCore.Mvc.Rendering;
using ApplicationCore.Entities;
using System.Collections.Generic;

namespace SPA.ViewModels
{
    public class CatalogIndexViewModel
    {
        public CatalogFilterViewModel CatalogFilter { get; set; }

        public IEnumerable<CatalogItemViewModel> CatalogItems { get; set; }
        public IEnumerable<SelectListItem> Brands { get; set; }
        public IEnumerable<SelectListItem> Types { get; set; }      

       public CatalogIndexViewModel(){
           this.CatalogFilter = new CatalogFilterViewModel();
       }  
    }
}
