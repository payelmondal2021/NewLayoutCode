using AudiologyHardwareInventory.BusinessLayer;
using BL.DtoEntities;
using BL.Interface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AudiologyHardwareInventory
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

            services.AddControllersWithViews();
            //services.AddTransient<IRepository<DtoTeam>, GenericRepository<DtoTeam>>();
            //services.AddTransient<IRepository<HearingAId>, GenericRepository<HearingAId>>();
            //services.AddTransient<IRepository<ChipSet>, GenericRepository<ChipSet>>();
            services.AddScoped<ITeam, TeamOperations>();
            //services.AddScoped<IHearingAId, HearingAIdOperations>();
            services.AddScoped<IChipSet, ChipSetOperations>();
            services.AddScoped<IPlatform, PlatformOperations>();
            services.AddScoped<IBrand, BrandOperations>();
            services.AddScoped<IHardwareType, HardwareTypeOperations>();
            services.AddScoped<IImages, ImagesOperations>();
            services.AddScoped<IHearingAId, HearingAIdOperations>();
            services.AddScoped<IMobile, MobileOperations>();
            //MyAppData.data = services.AddTransient<TeamOperations>();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });


            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
