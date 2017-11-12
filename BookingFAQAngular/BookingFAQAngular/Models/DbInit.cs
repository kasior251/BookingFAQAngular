using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BookingFAQAngular.Models
{
    public class DbInit : DropCreateDatabaseAlways<QuestionContext>
    {
        protected override void Seed(QuestionContext context)
        {
            var cathegories = new List<Cathegory>()
            {
                new Cathegory { id = 1, name = "General inquiry about booking"},
                new Cathegory { id = 2, name = "Luggage"},
                new Cathegory { id = 3, name = "Hotel"},
                new Cathegory { id = 4, name = "Car rental"},
            };

            var questions = new List<Question>()
            {
                new Question { id = 1, questionText = "Can I cancel my booking?", answerText = "You can cancel yout booking no later than 24 hrs before departure.",
                cathegory = cathegories[0]},
                new Question { id = 2, questionText = "How can I cancel my booking?", answerText = "Call us at +47 1234 5678 and we will help you",
                cathegory = cathegories[0]},
                new Question { id = 3, questionText = "How many pieces of luggage can I take with me?", answerText = "You can take one carry-on bag and one check-in bag",
                cathegory = cathegories[1]},
                new Question { id = 4, questionText = "What is the maximum weight of carry-on luggage?", answerText = "10 kg",
                cathegory = cathegories[1]},
                new Question { id = 3, questionText = "Can you assist me with hotel booking?", answerText = "Call us at +47 1234 5678 and we will help you",
                cathegory = cathegories[2]},
                new Question { id = 3, questionText = "Can you assist me with car rental?", answerText = "Call us at +47 1234 5678 and we will help you",
                cathegory = cathegories[3]},
            };

            cathegories.ForEach(c => context.Cathegories.Add(c));
            questions.ForEach(q => context.Questions.Add(q));
            base.Seed(context);
        }
    }
}