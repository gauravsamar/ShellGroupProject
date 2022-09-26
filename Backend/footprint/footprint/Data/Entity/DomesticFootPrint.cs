using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.Entity
{
    public class DomesticFootPrint
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int DID { get; set; }
        [ForeignKey("User")]
        public int  UID{ get; set; }
        public float Lpg { get; set; }
        public float Cng { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
        public float CarbonDomestic { get; set; }
      
    }
}
