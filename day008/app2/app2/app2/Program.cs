using Newtonsoft.Json.Linq;
using System;

namespace app2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            JArray array = new JArray();
            array.Add("Manual text");
            array.Add(new DateTime(2000, 5, 23));

            JObject o = new JObject
            {
                ["MyArray"] = array
            };

            string json = o.ToString();
        }
    }
}
