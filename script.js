(() => {
  const projects = {
    "marketing-analytics": {
      title: "Marketing Data Pipeline & Dashboard",
      kicker: "Project 01 / Marketing Data Pipeline & Dashboard",
      subtitle:
        "An automated pipeline and interactive Power BI report to monitor marketing campaigns.",
      tools: "Python · SQL · AWS · Power BI",
      descriptionIndex: 0,
      reportUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMzJhOWFlNGUtZDAxOS00MDkwLWI4MDktNDI1MmY0OTE0MDA3IiwidCI6ImI2MTAxN2QzLTk1ZGItNGI5Yy05ZmExLTM5ZWExNTdkNjU5ZSJ9&pageName=702a30a447b995de087d",
    },
    "project-02": {
      title: "Project title",
      kicker: "Project 02 / Portfolio",
      subtitle: "A place for a short summary of this project and its main outcome.",
      tools: "Tools and methods",
      descriptionIndex: 1,
      reportUrl: "",
    },
    "project-03": {
      title: "Project title",
      kicker: "Project 03 / Portfolio",
      subtitle: "A place for a short summary of this project and its main outcome.",
      tools: "Tools and methods",
      descriptionIndex: 2,
      reportUrl: "",
    },
  };

  const slug = new URLSearchParams(window.location.search).get("project");
  const project = projects[slug];

  if (!project) {
    window.location.replace("projects.html");
    return;
  }

  const root = document.getElementById("portfolio-concept");
  const iframe = root.querySelector("#pc-iframe");
  let reportLoaded = false;

  document.title = project.title + " · Mitchell Rosenthal";
  root.querySelector("#pc-title").textContent = project.title;
  root.querySelector("#pc-kicker").textContent = project.kicker;
  root.querySelector("#pc-subtitle").textContent = project.subtitle;
  root.querySelector("#pc-meta").textContent = project.tools;
  root.querySelector("#pc-description-content").innerHTML =
    window.portfolioDescriptions?.[project.descriptionIndex] ||
    "<p>Add this project's description in its descriptions/ file.</p>";
  iframe.title = project.title + " report";

  function loadReport() {
    if (reportLoaded) return;
    reportLoaded = true;

    if (project.reportUrl) {
      iframe.src = project.reportUrl;
    } else {
      iframe.srcdoc =
        '<div style="font:16px system-ui;display:grid;place-items:center;height:100%;background:#152237;color:#e8f1f5">Embedded report placeholder</div>';
    }
  }

  function selectTabFromUrl() {
    const isDescription = window.location.hash === "#description";

    root.querySelector("#pc-final").hidden = isDescription;
    root.querySelector("#pc-description").hidden = !isDescription;

    const finalTab = root.querySelector("#pc-final-tab");
    const descriptionTab = root.querySelector("#pc-description-tab");
    finalTab.classList.toggle("active", !isDescription);
    descriptionTab.classList.toggle("active", isDescription);
    finalTab.setAttribute("aria-selected", String(!isDescription));
    descriptionTab.setAttribute("aria-selected", String(isDescription));

    if (!isDescription) loadReport();
  }

  window.addEventListener("hashchange", selectTabFromUrl);
  window.addEventListener("pageshow", selectTabFromUrl);
  selectTabFromUrl();
})();
