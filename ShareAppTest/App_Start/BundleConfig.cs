using System.Web;
using System.Web.Optimization;

namespace ShapeAppTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-3.3.1.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/js-bundle").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/angular-bundle").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-locale_da-dk.js",
                "~/Scripts/angular-busy.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    "~/Content/bootstrap.min.css",
                    "~/Content/hotkeys.css",
                    "~/Content/angular-busy.css",
                    "~/Content/Style.css",
                    "~/Content/login-signup-model/login-css/fonts.css",
                    "~/Content/login-signup-model/login-css/reset.css",
                    "~/Content/login-signup-model/login-css/style.css",
                    "~/Content/login-signup-model/login-css/demo.css"
                ));
                      
                      
            bundles.Add(new ScriptBundle("~/bundles/shapeApp-bundle").Include(
                "~/App/Routes/routing.js",
                "~/App/shapeApp.js",
                "~/App/Controllers/account.js",
                "~/App/Controllers/navbar.js",
                "~/App/Services/datafactory.js",
                "~/App/Services/utilfactory.js",
                "~/App/Services/shapeappfactory.js"
                ));
        }
    }
}
