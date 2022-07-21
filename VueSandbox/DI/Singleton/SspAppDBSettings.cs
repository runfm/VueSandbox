﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueSandbox.DI.Singleton {
	public class SspAppDBSettings {
		public string ConnectionString { get; set; }
		public int MaxAttempts { get; set; }
		public int CommandTimeout { get; set; }
		public int WaitBetweenAttempts { get; set; }
	}
}
