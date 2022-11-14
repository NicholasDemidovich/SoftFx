using Microsoft.AspNetCore.Mvc;
using Soft_Fx.Services;
using Soft_Fx.Services.Interfaces;

namespace Soft_Fx.Controllers
{
    [Route("api/numbers")]
    [ApiController]
    public class NumbersController : ControllerBase
    {
        public ICalculateService _calculateService;

        public NumbersController(ICalculateService calculateService)
        {
            _calculateService = calculateService;
        }

        [HttpPost("calculate")]
        public async Task<IActionResult> CalculateNumbers([FromBody]int number)
        {
            _calculateService.CalculateSumm(number);
            
            return Ok(Numbers.NumbersSumm);
        }

        [HttpGet("summ")]
        public async Task<IActionResult> ReturnSumm()
        {
            return Ok(Numbers.NumbersSumm);
        }

    }
}
