using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShapeAppTest.Controllers
{
    public class ShapeAppController : Controller
    {
        // GET: ShapeApp
        public ActionResult ShapeApp()
        {
            return View("~/Views/ShapeApp/ShapeApp.cshtml");
        }
        public ActionResult Profile()
        {
            return View("~/Views/Account/Profile.cshtml");
        }
        public ActionResult LogInSignUp()
        {
            return View("~/Views/Account/LogInSignUp.cshtml");
        }
    }
}