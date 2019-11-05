using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using M_Roman_WebApi.Domains;
using M_Roman_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace M_Roman_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TemasController : ControllerBase
    {
        TemaRepository TemaRepository = new TemaRepository();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(TemaRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Temas tema)
        {
            try
            {
                TemaRepository.Cadastrar(tema);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(Temas tema, int id)
        {
            try
            {
                Temas TemaBuscado = TemaRepository.BuscarPorId
                    (id);
                if (TemaBuscado == null)
                    return NotFound();

                tema.IdTema = id;
                TemaRepository.Atualizar(tema);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}