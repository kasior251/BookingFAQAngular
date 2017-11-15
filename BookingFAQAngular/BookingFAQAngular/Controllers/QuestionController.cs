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

namespace BookingFAQAngular
{
    public class QuestionController : ApiController
    {
        QuestionDB questionDb = new QuestionDB();

        // GET api/Question + id
        public HttpResponseMessage Get(int id)
        {
            List<question> allQuestions = questionDb.getQuestionsByCathegory(id);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(allQuestions);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };

        }

        // GET api/Question
        public HttpResponseMessage Get()
        {
            List<question> allQuestions = questionDb.getUnansweredQuestions();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(allQuestions);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };

        }



        // POST api/Question
        [HttpPost]
        public HttpResponseMessage Post([FromBody]question newQuestion)
        {
            bool OK = questionDb.saveQuestion(newQuestion);
            if (OK)
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

            }

            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.NotFound,
                Content = new StringContent("Could not save the question in DB")
            };
        }
    }
}