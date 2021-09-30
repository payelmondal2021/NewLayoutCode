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
    public class ImagesOperations : IImages
    {
       
        private readonly IRepository<Images> _imagesRepository = null;
        private readonly ImagesMappingEntity _mappingEntity = null;

        public ImagesOperations()
        {
            _imagesRepository = new GenericRepository<Images>();
            _mappingEntity = new ImagesMappingEntity();
        }
        public void InsertImages(DtoImages images)
        {
            var imageDetails = _mappingEntity.ConvertToImagesEntity(images);
            _imagesRepository.Create(imageDetails);
        }
        public void UpdateImages(DtoImages images)
        {
            var imageDetails = _mappingEntity.ConvertToImagesEntity(images);
            _imagesRepository.Update(imageDetails);
        }
        public void DeleteImages(DtoImages images)
        {
            var imageDetails = _mappingEntity.ConvertToImagesEntity(images);
            _imagesRepository.Delete(imageDetails);
        }
        public IEnumerable<DtoImages> DisplayImages()
        {
            var images = _imagesRepository.Select();
            var dtoImages = _mappingEntity.ConvertToDtoImages(images);
            return dtoImages;
        }
    }
}
