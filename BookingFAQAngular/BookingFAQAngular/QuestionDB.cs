using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Web;
using BookingFAQAngular.Models;

namespace BookingFAQAngular
{
    public class QuestionDB
    {
        QuestionContext db = new QuestionContext();
        
        public List<question> getAllQuestions()
        {
            List<question> allQuestions = db.Questions.Select(k => new question()
            {
                    id = k.id,
                    questionText = k.questionText,
                    answerText = k.answerText,
                    cathegory = k.cathegory.name
                                      }).ToList();
            return allQuestions;
        }

        public List<question> getQuestionsByCathegory(int id)
        {
            Cathegory cat = db.Cathegories.Find(id);

            List<Question> questions = (from q in db.Questions
                                        where q.cathegory.id == id && q.answerText != null
                                        select q).ToList();
            List<question> list = new List<question>();
            foreach (Question q in questions)
            {
                question q1 = new question()
                {
                    id = q.id,
                    questionText = q.questionText,
                    answerText = q.answerText,
                    cathegory = cat.name
                };
                list.Add(q1);
            }
            /*List<question> questions = getAllQuestions();
            for (int i = 0; i < questions.Count; i++)
            {
                if (questions[i].cathegory.Equals(cathegory.name))
                {
                    continue;
                }
                questions.RemoveAt(i+1);
            }*/
            return list;
        }


        public List<Cathegory> getAllCathegories()
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Cathegory> allCathegories = db.Cathegories.Select(row => row).ToList();
            int i = allCathegories.Count();
            return allCathegories;
        }
        
        
        public bool saveQuestion(question newQuestion)
        {
            var cathegoryText = newQuestion.cathegory;
            var cat = db.Cathegories.FirstOrDefault(c => c.name == cathegoryText);
            var questionToSave = new Question
            {
                questionText = newQuestion.questionText,
                answerText = null,
                cathegory = cat
            };

            try
            {
                // lagre kunden
                db.Questions.Add(questionToSave);
                db.SaveChanges();
            }
            catch(Exception error)
            {
                return false;
            }
            return true;
        }

        /*
        public bool endreEnKunde(int id, kunde innKunde)
        {
            // finn kunden
            Kunde funnetKunde = db.Kunder.FirstOrDefault(k => k.id == id);
            if (funnetKunde == null)
            {
                return false;
            }
            // legg inn ny verdier i denne fra innKunde
            funnetKunde.fornavn = innKunde.fornavn;
            funnetKunde.etternavn = innKunde.etternavn;
            funnetKunde.adresse = innKunde.adresse;
            funnetKunde.postnr = innKunde.postnr;

            // finn ut om postnummer finnes fra før
            Poststed funnetPoststed = db.Poststeder.Find(innKunde.postnr);
            if(funnetPoststed==null)
            {
                // lag poststedet
                var nyttPoststed = new Poststed
                {
                    postnr = innKunde.postnr,
                    poststed = innKunde.poststed
                };
                // legg det inn i kunden
                funnetKunde.poststed = nyttPoststed;
            }
            try
            {
                // lagre kunden
                db.SaveChanges();
            }
            catch(Exception feil)
            {
                return false;
            }
            return true;
        }
        
        public bool slettEnKunde(int id)
        {
            try
            {
                Kunde finnKunde = db.Kunder.Find(id);
                db.Kunder.Remove(finnKunde);
                db.SaveChanges();
            }
            catch(Exception feil)
            {
                return false;
            }
            return true;
        } */
    }
}