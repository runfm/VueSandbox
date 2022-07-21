using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueSandbox.DI.Singleton {

	public interface ISspExpirable {
		public void Update();
	}

	public abstract class SspExpirable {
		public DateTime Created { get; set; }
		public DateTime Changed { get; set; }
		public bool IsUpdating { get; set; }


		int live { get; set; }

		public bool IsExpired {
			get {
				return (DateTime.Now - Changed).TotalSeconds >= live;
			}
		}

		public SspExpirable(int live):this() {
			this.live = live;
		}

		public SspExpirable() {
			Created = DateTime.Now;
			Changed = DateTime.Now;
		}

		public abstract void Update();
		public abstract void UpdateStrict();
	}
}
