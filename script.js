const variables = [
  { title: "Primary message angle", description: "The competitor breakdown identifies the strategic promise. The pod maps it to an approved WonderBiotics angle and its corresponding reasons to believe." },
  { title: "Hook", description: "The breakdown combines the first visual action and opening line into one attention device. The pod tests the visual and spoken parts together when they work as one beat, or labels which half changes when isolating more precisely." },
  { title: "Setting element", description: "The breakdown records where the competitor story happens and why that context works. The pod tests the setting independently." },
  { title: "Body script", description: "The competitor's narrative sequence is mapped into problem, mechanism, proof, objection and offer before the pod tests a new order." },
  { title: "Visual / graphic element", description: "The breakdown identifies how a competitor makes proof understandable. The pod briefs a compliant WonderBiotics graphic for the same communication job." },
  { title: "Content format", description: "The competitor's storytelling container becomes a format hypothesis: talking head, street interview, explainer, skit, GRWM, mashup or VSL." },
  { title: "Call to action", description: "The breakdown captures the competitor's risk reversal, offer and instruction so the pod can isolate the conversion device." },
  { title: "Audio / BGM track", description: "The competitor's sound environment is logged as part of the breakdown, then tested without changing the edit or message." }
];

const leverVisuals = [
  ["assets/hero.jpg", "Hero visual / message framing"],
  ["assets/product.webp", "Product close-up / visual hook"],
  ["assets/gut.png", "Hook: visual + spoken opening"],
  ["assets/metabolic.png", "Metabolism context / setting"],
  ["assets/science.webp", "Science board / script proof"],
  ["assets/gut.png", "Mechanism graphic / evidence"],
  ["assets/hero.jpg", "Editorial image / content format"],
  ["assets/product.webp", "Product + offer / CTA"],
  ["assets/science.webp", "Science visual / audio-led edit"]
];

window.initWonderMatrix = function () {
  const tabs = document.querySelectorAll(".matrix-tab");
  const number = document.querySelector("#matrix-number");
  const title = document.querySelector("#matrix-title");
  const description = document.querySelector("#matrix-description");
  const leverArt = document.querySelector("#lever-art");
  const hookExamples = document.querySelector("#hook-examples");
  const settingExamples = document.querySelector("#setting-examples");
  const scriptExample = document.querySelector("#script-example");
  const graphicExamples = document.querySelector("#graphic-examples");
  const formatExamples = document.querySelector("#format-examples");
  const ctaExamples = document.querySelector("#cta-examples");
  const leverImage = document.querySelector("#lever-image");
  const leverCaption = document.querySelector("#lever-caption");
  const messageAngles = document.querySelector("#message-angle-list");
  if (!tabs.length || !number || !title || !description) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number(tab.dataset.index);
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      number.textContent = `VARIABLE ${String(index + 1).padStart(2, "0")}`;
      title.textContent = variables[index].title;
      description.textContent = variables[index].description;
      if (leverArt) leverArt.dataset.index = String(index);
      if (leverImage) leverImage.src = leverVisuals[index][0];
      if (leverCaption) leverCaption.textContent = leverVisuals[index][1];
      if (messageAngles) messageAngles.hidden = index !== 0;
      if (leverArt) leverArt.hidden = index === 0;
      if (hookExamples) hookExamples.hidden = index !== 1;
      if (settingExamples) settingExamples.hidden = index !== 2;
      if (scriptExample) scriptExample.hidden = index !== 3;
      if (graphicExamples) graphicExamples.hidden = index !== 4;
      if (formatExamples) formatExamples.hidden = index !== 5;
      if (ctaExamples) ctaExamples.hidden = index !== 6;
    });
  });
  if (leverArt) leverArt.dataset.index = "0";
  if (messageAngles) messageAngles.hidden = false;
  if (leverArt) leverArt.hidden = true;
  if (hookExamples) hookExamples.hidden = true;
  if (settingExamples) settingExamples.hidden = true;
  if (scriptExample) scriptExample.hidden = true;
  if (graphicExamples) graphicExamples.hidden = true;
  if (formatExamples) formatExamples.hidden = true;
  if (ctaExamples) ctaExamples.hidden = true;
};
window.initWonderMatrix();
