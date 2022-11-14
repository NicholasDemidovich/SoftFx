using Soft_Fx.Services.Interfaces;

namespace Soft_Fx.Services
{
    public struct Numbers
    {
        public static int NumbersSumm { get; set; }
    }
    
    public class CalculateService : ICalculateService
    {
        public void CalculateSumm(int number)
        {
            Numbers.NumbersSumm += number;
        }       
    }
}
