using M_Roman.Domains;
using M_Roman_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Roman_WebApi.Repositories
{
    public class TemaRepository
    {
        public List<Temas> Listar()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Temas.ToList();
            }

        }

        public void Cadastrar(Temas tema)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Temas.Add(tema);
                ctx.SaveChanges();
            }
        }

        public void Atualizar(Temas tema)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Temas TemaBuscado = ctx.Temas.FirstOrDefault(x => x.IdTema == tema.IdTema);
                TemaBuscado.Nome = tema.Nome;
                ctx.Temas.Update(TemaBuscado);
                ctx.SaveChanges();
            }
        }

        public Temas BuscarPorId(int id)
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Temas.FirstOrDefault(x => x.IdTema == id);
            }
        }
    }
}
