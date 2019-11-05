using System;
using System.Collections.Generic;

namespace M_Roman_WebApi.Domains
{
    public partial class Professores
    {
        public int IdProfessor { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
