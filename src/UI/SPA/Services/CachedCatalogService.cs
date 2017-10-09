using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using SPA.ViewModels;
using Microsoft.Extensions.Caching.Memory;
using System;

namespace SPA.Services
{
    public class CachedCatalogService : ICatalogService
    {
        private readonly IMemoryCache _cache;
        private readonly CatalogService _catalogService;
        private static readonly string _brandsKey = "brands";
        private static readonly string _typesKey = "types";
        private static readonly string _itemsKeyTemplate = "items-{0}-{1}-{2}-{3}-{4}";
        private static readonly TimeSpan _defaultCacheDuration = TimeSpan.FromSeconds(30);

        public CachedCatalogService(IMemoryCache cache,
            CatalogService catalogService)
        {
            _cache = cache;
            _catalogService = catalogService;
        }

        public async Task<IEnumerable<SelectListItem>> GetBrands()
        {
            return await _cache.GetOrCreateAsync(_brandsKey, async entry =>
                    {
                        entry.SlidingExpiration = _defaultCacheDuration;
                        return await _catalogService.GetBrands();
                    });
        }

        public async Task<CatalogIndexViewModel> GetCatalogItems(CatalogFilterViewModel model)
        {
            string cacheKey = String.Format(_itemsKeyTemplate, model.PaginationInfo.ActualPage, model.PaginationInfo.ItemsPerPage, model.BrandFilterApplied, model.TypesFilterApplied, model.TextSearch);
            return await _cache.GetOrCreateAsync(cacheKey, async entry =>
            {
                entry.SlidingExpiration = _defaultCacheDuration;
                return await _catalogService.GetCatalogItems(model);
            });
        }        

        public async Task<IEnumerable<SelectListItem>> GetTypes()
        {
            return await _cache.GetOrCreateAsync(_typesKey, async entry =>
            {
                entry.SlidingExpiration = _defaultCacheDuration;
                return await _catalogService.GetTypes();
            });
        }
    }
}
