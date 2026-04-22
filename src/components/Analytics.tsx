import { useEffect } from "react";
import {
  CLARITY_PROJECT_ID,
  CLOUDFLARE_ANALYTICS_TOKEN,
} from "@/config/site";

const loadClarity = (id: string) => {
  if (document.getElementById("ms-clarity")) return;
  const s = document.createElement("script");
  s.id = "ms-clarity";
  s.type = "text/javascript";
  s.text = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", ${JSON.stringify(id)});
  `;
  document.head.appendChild(s);
};

const loadCloudflareAnalytics = (token: string) => {
  if (document.getElementById("cf-analytics")) return;
  const s = document.createElement("script");
  s.id = "cf-analytics";
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.dataset.cfBeacon = JSON.stringify({ token });
  document.body.appendChild(s);
};

const Analytics = () => {
  useEffect(() => {
    if (CLARITY_PROJECT_ID) loadClarity(CLARITY_PROJECT_ID);
    if (CLOUDFLARE_ANALYTICS_TOKEN) loadCloudflareAnalytics(CLOUDFLARE_ANALYTICS_TOKEN);
  }, []);
  return null;
};

export default Analytics;
