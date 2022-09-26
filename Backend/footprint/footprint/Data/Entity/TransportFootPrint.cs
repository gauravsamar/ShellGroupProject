using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.Entity
{
    public class TransportFootPrint
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int TID { get; set; }
        [ForeignKey("User")]
        public int UID { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
        public float Petrol { get; set; }
        public float Desiel { get; set; }
        public float Lpg { get; set; }
        public float Taxis { get; set; }
        public float Bus { get; set; }
        public float Autorickshaw { get; set; }
        public float Train { get; set; }
        public float Carbontransport { get; set; }





    }
}
