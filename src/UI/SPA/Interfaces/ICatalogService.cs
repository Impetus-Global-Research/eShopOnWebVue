using Microsoft.AspNetCore.Mvc.Rendering;
using SPA.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SPA.Services
{
    public interface ICatalogService
    {        
        Task<CatalogIndexViewModel> GetCatalogItems(CatalogFilterViewModel model);
        Task<IEnumerable<SelectListItem>> GetBrands();
        Task<IEnumerable<SelectListItem>> GetTypes();
    }
}
