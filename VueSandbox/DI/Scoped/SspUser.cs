using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueSandbox.DI.Scoped {
	public class SspUser {
		public string Name { get; set; }

		public SspUser() {
			Name = "Anonimous";
		}
	}
}
