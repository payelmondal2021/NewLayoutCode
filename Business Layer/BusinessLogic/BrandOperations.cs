using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace AudiologyHardwareInventory.BusinessLayer
{
    public class BrandOperations:IBrand
    {      
        private readonly IRepository<Brand> _brandRepository=null;
        private readonly BrandMappingEntity _mappingEntity = null;

        public BrandOperations()
        {
            _brandRepository = new GenericRepository<Brand>();
            _mappingEntity = new BrandMappingEntity();
        }

        public void InsertBrand(DtoBrand brand)
        {
            var brandDetails = _mappingEntity.ConvertToBrandEntity(brand);
            _brandRepository.Create(brandDetails);
        }

        public void UpdateBrand(DtoBrand brand)
        {
            var brandDetails = _mappingEntity.ConvertToBrandEntity(brand);
            _brandRepository.Update(brandDetails);
        }

        public void DeleteBrand(DtoBrand brand)
        {
            var brandDetails = _mappingEntity.ConvertToBrandEntity(brand);
            _brandRepository.Delete(brandDetails);
        }

        public IEnumerable<DtoBrand> DisplayBrand()
        {
            var brand = _brandRepository.Select();
            var dtoBrand = _mappingEntity.ConvertToDtoBrand(brand);
            return dtoBrand;
        }
    }
}
