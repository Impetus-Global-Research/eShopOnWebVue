using Microsoft.AspNetCore.Mvc.Rendering;
using ApplicationCore.Entities;
using System.Collections.Generic;

namespace SPA.ViewModels
{
    public class CatalogFilterViewModel
    {
        public int? BrandFilterApplied { get; set; }
        public int? TypesFilterApplied { get; set; }
        public string TextSearch {get;set;}
        public PaginationInfoViewModel PaginationInfo { get; set; }

        public CatalogFilterViewModel(){
            this.PaginationInfo = new PaginationInfoViewModel();
        }
    }
}