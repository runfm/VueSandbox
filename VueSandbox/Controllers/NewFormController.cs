using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VueSandbox.DI.Scoped;
using VueSandbox.DI.Singleton;

namespace VueSandbox.Controllers {
	[Route("api/[controller]")]
	[ApiController]
	public class NewFormController : ControllerBase {
		SspContext Context { get; set; }

		public NewFormController(SspContext context) {
			Context = context;
		}

		[HttpGet("app/info")]
		public IActionResult GetAppInfo() {
			return Ok(JsonConvert.SerializeObject(Context) );
		}
	}
}
