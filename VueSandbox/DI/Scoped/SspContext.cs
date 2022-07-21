using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VueSandbox.DI.Singleton;

namespace VueSandbox.DI.Scoped {
	public class SspContext {
		public SspApp App { get; set; }
		public SspStore Store { get; set; }

		public SspUser User { get; set; }

		public SspContext(SspApp app, SspStore store, SspUser user) {
			App = app;
			Store = store;
			User = user;
		}
	}
}
