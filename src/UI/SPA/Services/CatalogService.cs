using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using SPA.ViewModels;
using ApplicationCore.Entities;
using Microsoft.Extensions.Logging;
using ApplicationCore.Interfaces;
using System;
using ApplicationCore.Specifications;

namespace SPA.Services
{
    public class CatalogService : ICatalogService
    {
        private readonly ILogger<CatalogService> _logger;
        private readonly IRepository<CatalogItem> _itemRepository;
        private readonly IAsyncRepository<CatalogBrand> _brandRepository;
        private readonly IAsyncRepository<CatalogType> _typeRepository;
        private readonly IUriComposer _uriComposer;

        public CatalogService(
            ILoggerFactory loggerFactory,
            IRepository<CatalogItem> itemRepository,
            IAsyncRepository<CatalogBrand> brandRepository,
            IAsyncRepository<CatalogType> typeRepository,
            IUriComposer uriComposer)
        {
            _logger = loggerFactory.CreateLogger<CatalogService>();
            _itemRepository = itemRepository;
            _brandRepository = brandRepository;
            _typeRepository = typeRepository;
            _uriComposer = uriComposer;
        }
    

        public async Task<CatalogIndexViewModel> GetCatalogItems(CatalogFilterViewModel model)
        {
            CatalogFilterSpecification filterSpecification = new CatalogFilterSpecification(model.BrandFilterApplied, model.TypesFilterApplied, model.TextSearch);
            var root = _itemRepository.List(filterSpecification);

            var totalItems = root.Count();

            var itemsOnPage = root
                .Skip(model.PaginationInfo.ItemsPerPage * model.PaginationInfo.ActualPage)
                .Take(model.PaginationInfo.ItemsPerPage)
                .ToList();

            itemsOnPage.ForEach(x =>
            {
                x.PictureUri = _uriComposer.ComposePicUri(x.PictureUri);
            });

            CatalogIndexViewModel vm = new CatalogIndexViewModel()
            {
                CatalogItems = itemsOnPage.Select(i => new CatalogItemViewModel()
                {
                    Id = i.Id,
                    Name = i.Name,
                    PictureUri = i.PictureUri,
                    Price = i.Price
                }),
                Brands = await GetBrands(),
                Types = await GetTypes()                
            };

            vm.CatalogFilter.BrandFilterApplied = model.BrandFilterApplied ?? 0;
            vm.CatalogFilter.TypesFilterApplied = model.TypesFilterApplied ?? 0;
            vm.CatalogFilter.PaginationInfo = new PaginationInfoViewModel()
            {                    
                ActualPage = model.PaginationInfo.ActualPage,
                ItemsPerPage = itemsOnPage.Count,
                TotalItems = totalItems,
                TotalPages = int.Parse(Math.Ceiling(((decimal)totalItems / model.PaginationInfo.ItemsPerPage)).ToString())
            };
            vm.CatalogFilter.PaginationInfo.Next = (vm.CatalogFilter.PaginationInfo.ActualPage == vm.CatalogFilter.PaginationInfo.TotalPages - 1) ? "is-disabled" : "";
            vm.CatalogFilter.PaginationInfo.Previous = (vm.CatalogFilter.PaginationInfo.ActualPage == 0) ? "is-disabled" : "";
            vm.CatalogFilter.TextSearch = model.TextSearch ?? string.Empty;
            
            return vm;
        }

        public async Task<IEnumerable<SelectListItem>> GetBrands()
        {
            _logger.LogInformation("GetBrands called.");
            var brands = await _brandRepository.ListAllAsync();

            var items = new List<SelectListItem>
            {
                new SelectListItem() { Value = "0", Text = "All", Selected = true }
            };
            foreach (CatalogBrand brand in brands)
            {
                items.Add(new SelectListItem() { Value = brand.Id.ToString(), Text = brand.Brand });
            }

            return items;
        }

        public async Task<IEnumerable<SelectListItem>> GetTypes()
        {
            _logger.LogInformation("GetTypes called.");
            var types = await _typeRepository.ListAllAsync();
            var items = new List<SelectListItem>
            {
                new SelectListItem() { Value = "0", Text = "All", Selected = true }
            };
            foreach (CatalogType type in types)
            {
                items.Add(new SelectListItem() { Value = type.Id.ToString(), Text = type.Type });
            }

            return items;
        }
    }
}
