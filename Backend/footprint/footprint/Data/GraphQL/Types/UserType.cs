using footprint.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.GraphQL.Types
{
    public class UserType: ObjectGraphType<User>
    {
        public UserType()
        {
            Field(t => t.Email);
            Field(t => t.Username);
            Field(t => t.Password);
        }
    }
}
