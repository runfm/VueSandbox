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
			return Ok(JsonConvert.SerializeObject(Context));
		}

		[HttpGet("app/data")]
		public IActionResult GetServerData() {
			var rnd = new Random();
			var max = rnd.Next(3, 9);
			var randomContextMenuItems = Enumerable.Range(1, max)
				.Select(num => new {
						ID = Guid.NewGuid().ToString(),
						Name = $"ContextMenuItem{num}",
						Alias = Guid.NewGuid().ToString()
					}
				)
				.ToList();

			var result = new {
				ContextMenu = randomContextMenuItems
			};

			return Ok(JsonConvert.SerializeObject(result));
		}
	}
}
