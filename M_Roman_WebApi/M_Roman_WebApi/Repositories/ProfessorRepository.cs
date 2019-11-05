using M_Roman.Domains;
using M_Roman_WebApi.Domains;
using M_Roman_WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Roman_WebApi.Repositories
{
    public class ProfessorRepository
    {

        public Professores BuscarPorEmailESenha(LoginViewModel login)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Professores UsuarioBuscado = ctx.Professores.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
                return UsuarioBuscado;
            }
        }
    }
}
