using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using System.Net.Http.Formatting;
using System.Data.Common;
using BookingFAQAngular;
using BookingFAQAngular.Models;

namespace BookingFAQAngular.Controllers
{
    public class CathegoryController : ApiController
    {
        QuestionDB questionDb = new QuestionDB();

        // GET api/Cathegory
        public HttpResponseMessage Get()
        {
            List<Cathegory> allCathegories = questionDb.getAllCathegories();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(allCathegories);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
