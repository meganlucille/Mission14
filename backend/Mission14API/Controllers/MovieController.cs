using Microsoft.AspNetCore.Mvc;
using Mission14API.Data;

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController (MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray()
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title);
            return x;
        }
    }   
}
