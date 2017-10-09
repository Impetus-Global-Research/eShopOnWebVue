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
        
        [HttpPost("[action]")]
        public async Task<CatalogIndexViewModel> Post([FromBody] CatalogFilterViewModel model)
        {
            model.PaginationInfo.ItemsPerPage = 10;            
            CatalogIndexViewModel catalogModel = await _catalogService.GetCatalogItems(model);
            return catalogModel;
        }        

        [HttpGet("[action]")]
        public async Task<CatalogIndexViewModel> Search(CatalogFilterViewModel model){
            return await _catalogService.GetCatalogItems(model);
        }
    }
}
