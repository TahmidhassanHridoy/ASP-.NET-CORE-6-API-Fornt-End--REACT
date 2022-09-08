using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BasicApi.Models
{
    [Table("Bookdetail")]
    public partial class BookDetail
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column("bookname")]
        [StringLength(50)]
        [Unicode(false)]
        public string Bookname { get; set; } = null!;

        [Column("author")]
        [StringLength(50)]
        [Unicode(false)]
        public string Author { get; set; } = null!;

        [Column("catagory")]
        [StringLength(50)]
        [Unicode(false)]

        public string Catagory { get; set; } = null!;
        
    }
}
