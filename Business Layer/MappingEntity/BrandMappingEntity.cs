using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class BrandMappingEntity
    {
        public IEnumerable<DtoBrand> ConvertToDtoBrand(IEnumerable<Brand> item)
        {
            var dtoBrandList = new List<DtoBrand>();
            foreach (Brand brand in item)
            {
                var dtoBrand = new DtoBrand();
                dtoBrand.BrandId = brand.BrandId;
                dtoBrand.BrandName = brand.BrandName;
                dtoBrand.Description = brand.Description;
                dtoBrand.LogoUrl = brand.LogoUrl;
                dtoBrand.BrandType = brand.BrandType;
                dtoBrandList.Add(dtoBrand);
            }
            return dtoBrandList;
        }
        public Brand ConvertToBrandEntity(DtoBrand item)
        {
            Brand brand = null;
            brand = new Brand();
            brand.BrandId = item.BrandId;
            brand.BrandName = item.BrandName;
            brand.Description = item.Description;
            brand.LogoUrl = item.LogoUrl;
            brand.BrandType = item.BrandType;
            return brand;
        }
    }
}
