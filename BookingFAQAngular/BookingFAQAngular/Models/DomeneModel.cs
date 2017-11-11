using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingFAQAngular.Models
{
    public class question
    {
        public int id { get; set; }
        [Required]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{10,200}$")]
        public string questionText { get; set; }
        [Required]
        [RegularExpression("^[a-zøæåA-ZØÆÅ. \\-]{0,200}$")]
        public string answerText { get; set; }
        public string cathegory { get; set; }
    }
}