using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class ImagesMappingEntity
    {
        public IEnumerable<DtoImages> ConvertToDtoImages(IEnumerable<Images> item)
        {
            var dtoImagesList = new List<DtoImages>();
            foreach (Images images in item)
            {
                var dtoImages = new DtoImages();
                dtoImages.ImageUrlId = images.ImageUrlId;
                dtoImages.Id = images.Id;
                dtoImages.ImageUrl = images.ImageUrl;
                dtoImages.HardwareTypeId = images.HardwareTypeId;
                dtoImagesList.Add(dtoImages);
            }
            return dtoImagesList;
        }
        public Images ConvertToImagesEntity(DtoImages item)
        {
            Images images = null;
            images = new Images();
            images.ImageUrlId = item.ImageUrlId;
            images.Id = item.Id;
            images.ImageUrl = item.ImageUrl;
            images.HardwareTypeId = item.HardwareTypeId;
            return images;
        }
    }
}
