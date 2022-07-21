using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using VueCliMiddleware;
using VueSandbox.DI.Scoped;
using VueSandbox.DI.Singleton;

namespace VueSandbox
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddSingleton<SspApp>();
			services.AddSingleton<OtcDbReader>();
			services.AddSingleton<SspStore>();

			services.AddScoped<SspUser>();
			services.AddScoped<SspContext>();
			
			services.AddSpaStaticFiles(configuration => {
				configuration.RootPath = "ts3";
			});
			services.AddControllers();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{

			app.ApplicationServices.GetService<SspApp>();
			app.ApplicationServices.GetService<OtcDbReader>();
			app.ApplicationServices.GetService<SspStore>();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});

			app.UseSpaStaticFiles();
			app.UseSpa(spa => {
				if (env.IsDevelopment())
					spa.Options.SourcePath = "ts3";
				else
					spa.Options.SourcePath = "ts3";

				if (env.IsDevelopment())
				{
					spa.UseVueCli(npmScript: "serve");
				}

			});
		}
	}
}
