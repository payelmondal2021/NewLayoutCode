using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using DAL.Entities;

namespace BL.Interface
{
    public interface IImages
    {
        void InsertImages(DtoImages hearingAId);
        void UpdateImages(DtoImages images);
        void DeleteImages(DtoImages images);
        IEnumerable<DtoImages> DisplayImages();
    }
}
