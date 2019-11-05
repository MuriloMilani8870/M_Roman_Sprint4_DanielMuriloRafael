using System;
using System.Collections.Generic;

namespace M_Roman_WebApi.Domains
{
    public partial class Temas
    {
        public Temas()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int IdTema { get; set; }
        public string Nome { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
