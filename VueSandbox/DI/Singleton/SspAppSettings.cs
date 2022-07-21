using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueSandbox.DI.Singleton {
	public class SspAppSettings {
		public SspAppStoreSettings Store { get; set; }
		public SspAppDBSettings DB { get; set; }
		public SspAppOmnitrackerApiSettings OmnitrackerApi { get; set; }
	}
}
