using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Web;
using System.Data.Entity.Core.EntityClient;
using System.Data.Common;

namespace BookingFAQAngular.Models
{
    public class Question
    {
        [Key]
        public int id { get; set; }
        public string questionText { get; set; }
        public string answerText { get; set; }
        public virtual Cathegory cathegory { get; set; }
    }

    public class Cathegory
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }

        public virtual List<Question> questions { get; set; }
    }

    public class QuestionContext : DbContext
    {
        public QuestionContext()
          : base("name=Question")
        {
            //Database.CreateIfNotExists();
            //Database.SetInitializer(new DbInit());
        }

        // konstruktøren under brukes kun under test!
        public QuestionContext(DbConnection connection)
                : base(connection,true)
        {
        }
      
        public DbSet<Question> Questions { get; set; }
        public DbSet<Cathegory> Cathegories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }


}