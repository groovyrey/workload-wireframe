(function () {
  "use strict";

  function initTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      var buttons = Array.prototype.slice.call(group.querySelectorAll("button[data-tab]"));
      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          buttons.forEach(function (other) {
            var panel = document.getElementById(other.getAttribute("data-target"));
            var active = other === button;
            other.setAttribute("aria-selected", String(active));
            if (panel) panel.hidden = !active;
          });
        });
      });
    });
  }

  function initTaskFilter() {
    var status = document.getElementById("task-filter");
    var search = document.getElementById("task-search");
    var table = document.getElementById("task-table");
    if (!table) return;
    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr[data-status]"));
    var count = document.getElementById("task-count");

    function apply() {
      var wanted = status ? status.value : "all";
      var term = search ? search.value.trim().toLowerCase() : "";
      var shown = 0;
      rows.forEach(function (row) {
        var matchesStatus = wanted === "all" || row.dataset.status === wanted;
        var matchesTerm = !term || row.textContent.toLowerCase().indexOf(term) !== -1;
        var visible = matchesStatus && matchesTerm;
        row.hidden = !visible;
        if (visible) shown += 1;
      });
      if (count) count.textContent = shown + " of " + rows.length + " tasks";
    }

    if (status) status.addEventListener("change", apply);
    if (search) search.addEventListener("input", apply);
    apply();
  }

  function initLogin() {
    var form = document.getElementById("login-form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var role = document.getElementById("login-role");
      var target = role && role.value === "admin"
        ? "../admin-dashboard/index.html"
        : "../teacher-home/index.html";
      window.location.href = target;
    });
  }

  function init() {
    initTabs();
    initTaskFilter();
    initLogin();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
