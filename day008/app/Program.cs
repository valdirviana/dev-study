using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            var teste = new List<string>(){};
            Console.WriteLine("Hello World!");

            JArray array = new JArray();
            array.Add("Manual text");
            array.Add(new DateTime(2000, 5, 23));

            JObject o = new JObject();
            o["MyArray"] = array;
            
            string json = o.ToString();

            var teste1 = new Tuple<string,int>("",2);
        }
    }
}
