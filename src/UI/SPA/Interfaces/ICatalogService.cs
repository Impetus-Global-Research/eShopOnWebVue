using Microsoft.AspNetCore.Mvc.Rendering;
using SPA.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SPA.Services
{
    public interface ICatalogService
    {
        Task<CatalogIndexViewModel> GetCatalogItems(int pageIndex, int itemsPage, int? brandId, int? typeId);
        Task<CatalogIndexViewModel> GetCatalogItems(CatalogIndexViewModel model);
        Task<IEnumerable<SelectListItem>> GetBrands();
        Task<IEnumerable<SelectListItem>> GetTypes();
    }
}
