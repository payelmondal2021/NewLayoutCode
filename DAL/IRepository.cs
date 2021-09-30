using System.Collections.Generic;

namespace DAL
{
    public interface IRepository<T> where T : class
    {
        void Delete(T item);
        void Create(T item);
        void Update(T item);
        IEnumerable<T> Select();

    }
}
