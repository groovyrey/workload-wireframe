(function () {
  "use strict";

  var HOME = {
    teacher: "../teacher-home/index.html",
    admin: "../admin-dashboard/index.html"
  };

  var NAV = {
    teacher: [
      {
        group: "My work",
        items: [
          { key: "teacher-home", label: "Overview", href: "../teacher-home/index.html" },
          { key: "workload", label: "My workload", href: "../workload/index.html" },
          { key: "tasks", label: "Tasks", href: "../tasks/index.html", count: "4" }
        ]
      }
    ],
    admin: [
      {
        group: "Division",
        items: [
          { key: "admin-dashboard", label: "Overview", href: "../admin-dashboard/index.html" },
          { key: "predictions", label: "Predictions", href: "../predictions/index.html", count: "5" },
          { key: "reports", label: "Reports", href: "../reports/index.html" }
        ]
      },
      {
        group: "Faculty",
        items: [
          { key: "efficiency", label: "Efficiency", href: "../efficiency/index.html" },
          { key: "recommendations", label: "Support", href: "../recommendations/index.html" }
        ]
      },
      {
        group: "System",
        items: [{ key: "users", label: "Users and access", href: "../users/index.html" }]
      }
    ]
  };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  var ICONS = {
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    tasks: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/>',
    gauge: '<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l3-5"/><circle cx="12" cy="18" r="1.5"/>',
    idea: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    person: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
  };

  var ICON_FOR = {
    "teacher-home": "home",
    workload: "calendar",
    tasks: "tasks",
    "admin-dashboard": "dashboard",
    predictions: "trend",
    reports: "file",
    efficiency: "gauge",
    recommendations: "idea",
    users: "users"
  };

  function icon(name) {
    var body = ICONS[name];
    if (!body) return null;
    var span = el("span", "icon");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      body +
      "</svg>";
    return span;
  }

  function setNav(open) {
    var isOpen = document.body.classList.contains("nav-open");
    if (isOpen === open) return;
    document.body.classList.toggle("nav-open", open);
    var burger = document.querySelector(".app__burger");
    if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var first = document.querySelector("#app-nav a");
      if (first) first.focus();
    } else if (burger) {
      burger.focus();
    }
  }

  function labelFor(role, key) {
    var groups = NAV[role] || [];
    for (var i = 0; i < groups.length; i++) {
      for (var j = 0; j < groups[i].items.length; j++) {
        var item = groups[i].items[j];
        if (item.key === key) return { group: groups[i].group, label: item.label };
      }
    }
    return { group: "", label: "" };
  }

  function roleSwitch(role, id) {
    var wrap = el("label", "role-switch");
    wrap.appendChild(el("span", null, "View as"));
    var select = el("select");
    select.id = id;
    [["teacher", "Teacher"], ["admin", "School head"]].forEach(function (pair) {
      var option = el("option", null, pair[1]);
      option.value = pair[0];
      if (pair[0] === role) option.selected = true;
      select.appendChild(option);
    });
    select.addEventListener("change", function () {
      window.location.href = HOME[select.value];
    });
    wrap.appendChild(select);
    return wrap;
  }

  function buildTopbar(role, activeKey) {
    var top = document.getElementById("app-top");
    if (!top) return;

    var left = el("div", "app__left");

    var burger = el("button", "app__burger");
    burger.type = "button";
    burger.setAttribute("aria-controls", "app-nav");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open navigation");
    burger.appendChild(icon("menu"));
    burger.addEventListener("click", function () {
      setNav(!document.body.classList.contains("nav-open"));
    });
    left.appendChild(burger);

    var found = labelFor(role, activeKey);
    left.appendChild(el("div", "app__crumb", found.group + " / " + found.label));
    top.appendChild(left);

    var right = el("div", "app__right");
    right.appendChild(roleSwitch(role, "role-switch"));

    var user = el("div", "app__user");
    user.appendChild(icon("person"));
    user.appendChild(el("span", "who", document.body.dataset.user || (role === "admin" ? "R. Centeno" : "A. Dela Cruz")));
    var out = el("a", "out", "Sign out");
    out.href = "../login/index.html";
    user.appendChild(out);
    right.appendChild(user);

    top.appendChild(right);
  }

  function buildNav(role, activeKey) {
    var nav = document.getElementById("app-nav");
    var groups = NAV[role] || [];

    if (nav) {
      var head = el("div", "nav__head");
      var close = el("button", "nav__close");
      close.type = "button";
      close.setAttribute("aria-label", "Close navigation");
      close.appendChild(icon("close"));
      close.addEventListener("click", function () {
        setNav(false);
      });
      head.appendChild(close);
      nav.appendChild(head);

      var overlay = el("div", "nav-overlay");
      overlay.addEventListener("click", function () {
        setNav(false);
      });
      document.body.appendChild(overlay);
    }

    groups.forEach(function (group) {
      if (nav) nav.appendChild(el("div", "navgroup", group.group));
      group.items.forEach(function (item) {
        if (!nav) return;
        var link = el("a");
        link.href = item.href;
        var glyph = icon(ICON_FOR[item.key]);
        if (glyph) link.appendChild(glyph);
        link.appendChild(el("span", "navlabel", item.label));
        if (item.count) link.appendChild(el("span", "count", item.count));
        if (item.key === activeKey) link.setAttribute("aria-current", "page");
        nav.appendChild(link);
      });
    });

    if (nav) {
      var roleWrap = roleSwitch(role, "role-switch-nav");
      roleWrap.className = "role-switch nav__role";
      nav.appendChild(roleWrap);
    }
  }

  function init() {
    var role = document.body.dataset.role || "teacher";
    var screen = document.body.dataset.screen || "";
    buildTopbar(role, screen);
    buildNav(role, screen);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        setNav(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        var burger = document.querySelector(".app__burger");
        if (burger) burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
