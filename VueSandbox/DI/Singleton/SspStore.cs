using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using VueSandbox.Models.Store;

namespace VueSandbox.DI.Singleton {
	public class SspStore : SspExpirable {
		OtcDbReader DBReader { get; set; }

		public List<string> TestCollection = new List<string> { "a", "b", "c" };

		ConcurrentDictionary<string,SspComponentType> componentTypes { get; set; }

		public SspStore(SspApp app, OtcDbReader db__) : base(app.Settings.Store.Live * 60) {
			DBReader = db__;

			UpdateStrict();
		}

		public override void Update() {
			if (IsExpired && !IsUpdating) {
				IsUpdating = true;
				Task.Run(() => UpdateStrict());
			}
		}

		public override void UpdateStrict() {
			TestCollection = new List<string>() { "aaz", "ddf", "asd" };
			var connection = DBReader.CreateConnection();
			using (connection) {
				connection.Open();
				var componentTypes__ = DBReader.GetRows("select * from ComponentTypes", connection)
					.Select(r => new SspComponentType(r))
					.ToDictionary(k => k.Name);

				componentTypes = new ConcurrentDictionary<string, SspComponentType>(componentTypes__);
			}

			Changed = DateTime.Now;
			IsUpdating = false;
		}
	}
}
