﻿using System.Web;
using System.Web.Mvc;

namespace Angular2_web_api_kunde
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
