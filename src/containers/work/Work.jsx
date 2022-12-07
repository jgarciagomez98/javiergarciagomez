import React from "react";
import "./work.css";
import {
  Titles,
  TimelineComponentRight,
  TimelineComponentLeft,
  ResponsiveProjects,
} from "../../components";

function openBankersLink() {
  openLinkInNewTab(
    "https://store.steampowered.com/app/1708510/Bankers__Bonkers/?l=spanish"
  );
}
function openFlagLink() {
  openLinkInNewTab("https://gamestentacle.itch.io/flag-hunters");
}
function openEgyptiansLink() {
  openLinkInNewTab("https://goldwagon.itch.io/egyptian-crusaders");
}
function openLinkInNewTab(url) {
  window.open(url, "_blank", "noopener, noreferrer");
}

function Work() {
  const BANKERS_VALUE = 0;
  const FLAGS_VALUE = 1;
  const EGYPTIAN_VALUE = 2;

  return (
    <section className="work" id="work">
      <div className="timeline__decorator"></div>
      <div className="work__container">
        <Titles title={"Portfolio"} />
        <div className="work__timeline-container-right">
          <TimelineComponentRight
            project={BANKERS_VALUE}
            openLink={openBankersLink}
          />
        </div>
        <div className="work__timeline-container-left">
          <TimelineComponentLeft
            project={FLAGS_VALUE}
            openLink={openFlagLink}
          />
        </div>
        <div className="work__timeline-container-right">
          <TimelineComponentRight
            project={EGYPTIAN_VALUE}
            openLink={openEgyptiansLink}
          />
        </div>
        {/* Responsive section */}
        <div className="work__responsive-container">
          <ResponsiveProjects
            project={BANKERS_VALUE}
            openLink={openBankersLink}
          />
          <ResponsiveProjects project={FLAGS_VALUE} openLink={openFlagLink} />
          <ResponsiveProjects
            project={EGYPTIAN_VALUE}
            openLink={openEgyptiansLink}
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
