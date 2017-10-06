using SPA.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using SPA.ViewModels;

namespace SPA.Controllers
{    
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        private readonly ICatalogService _catalogService;

        public CatalogController(ICatalogService catalogService) => _catalogService = catalogService;       
        
        [HttpGet("[action]")]
        public async Task<CatalogIndexViewModel> Get(int? brandFilterApplied, int? typesFilterApplied, int? page)
        {
            int itemsPage = 10;           
            CatalogIndexViewModel catalogModel = await _catalogService.GetCatalogItems(page ?? 0, itemsPage, brandFilterApplied, typesFilterApplied);
            return catalogModel;
        }        

        [HttpGet("[action]")]
        public async Task<CatalogIndexViewModel> Search(CatalogIndexViewModel model){
            return await _catalogService.GetCatalogItems(model);
        }
    }
}
