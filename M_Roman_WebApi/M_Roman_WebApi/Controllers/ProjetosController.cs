using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using M_Roman_WebApi.Domains;
using M_Roman_WebApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace M_Roman_WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        ProjetoRepository ProjetoRepository = new ProjetoRepository();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(ProjetoRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Projetos projeto)
        {
            try
            {
                ProjetoRepository.Cadastrar(projeto);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }
    }
}