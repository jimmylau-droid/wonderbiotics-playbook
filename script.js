const variables = [
  { title: "Primary message angle", description: "The competitor breakdown identifies the strategic promise. The pod maps it to an approved WonderBiotics angle and its corresponding reasons to believe.", example: "Competitor menopause promise translated into Slims Menopause Belly vs. Natural GLP-1, holding all execution variables constant." },
  { title: "Hook", description: "The breakdown combines the first visual action and opening line into one attention device. The pod tests the visual and spoken parts together when they work as one beat, or labels which half changes when isolating more precisely.", example: "Creator leans into camera with a waist visual and says the contrarian claim vs. the same creator opening on the product with a direct outcome." },
  { title: "Setting element", description: "The breakdown records where the competitor story happens and why that context works. The pod tests the setting independently.", example: "Car steering wheel vs. kitchen vs. grocery aisle with the same creator and script." },
  { title: "Body script", description: "The competitor's narrative sequence is mapped into problem, mechanism, proof, objection and offer before the pod tests a new order.", example: "Lead with mechanism vs. lived experience while hook, creator, setting and CTA stay fixed." },
  { title: "Visual / graphic element", description: "The breakdown identifies how a competitor makes proof understandable. The pod briefs a compliant WonderBiotics graphic for the same communication job.", example: "Mechanism diagram vs. customer quote card at 0:12 using the same raw creator footage." },
  { title: "Content format", description: "The competitor's storytelling container becomes a format hypothesis: talking head, street interview, explainer, skit, GRWM, mashup or VSL.", example: "A competitor whiteboard structure vs. ingredient basket using one Natural GLP-1 hypothesis." },
  { title: "Call to action", description: "The breakdown captures the competitor's risk reversal, offer and instruction so the pod can isolate the conversion device.", example: "30-day risk-free trial vs. up to 35% off, with every preceding frame unchanged." },
  { title: "Audio / BGM track", description: "The competitor's sound environment is logged as part of the breakdown, then tested without changing the edit or message.", example: "No music vs. lo-fi beat vs. direct-response rhythm under the same finished edit." }
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
  const example = document.querySelector("#matrix-example");
  const leverArt = document.querySelector("#lever-art");
  const hookExamples = document.querySelector("#hook-examples");
  const leverImage = document.querySelector("#lever-image");
  const leverCaption = document.querySelector("#lever-caption");
  const messageAngles = document.querySelector("#message-angle-list");
  const exampleWrap = document.querySelector("#matrix-example-wrap");
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
      if (example) example.textContent = variables[index].example;
      if (leverArt) leverArt.dataset.index = String(index);
      if (leverImage) leverImage.src = leverVisuals[index][0];
      if (leverCaption) leverCaption.textContent = leverVisuals[index][1];
      if (messageAngles) messageAngles.hidden = index !== 0;
      if (exampleWrap) exampleWrap.hidden = index === 0;
      if (leverArt) leverArt.hidden = index === 0;
      if (hookExamples) hookExamples.hidden = index !== 1;
    });
  });
  if (leverArt) leverArt.dataset.index = "0";
  if (messageAngles) messageAngles.hidden = false;
  if (exampleWrap) exampleWrap.hidden = true;
  if (leverArt) leverArt.hidden = true;
  if (hookExamples) hookExamples.hidden = true;
};
window.initWonderMatrix();
