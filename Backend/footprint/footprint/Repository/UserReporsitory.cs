using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using footprint.Data;
using footprint.Data.Entity;

namespace footprint.Repository
{
    public class UserRepository
    {

        public FootprintDbContext _dbContext;
        public UserRepository(FootprintDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool login(string email, string password)
        {
            var user = this._dbContext.Users.Where(u => u.Email == email && u.Password == password).FirstOrDefault();
            return user == null ? false : true;
        }

        public User AddUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return user;
        }

        public IEnumerable<User> GetUser()
        {
            return _dbContext.Users;
        }

        public IEnumerable<User> GetUserByEmail(string Email)
        {
            return _dbContext.Users.Where(i => i.Email == Email);
        }
    }
}