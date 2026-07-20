const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = path.join("public", "images", "logo-km.png");
const pub = path.join("public");

/** Binary mask: pure logo vs transparent — no gray antialiasing. */
function logoAlpha(lum) {
  return lum > 4 ? 255 : 0;
}

async function makeColored(color, size, outPath) {
  const { data, info } = await sharp(src)
    .resize(size, size, { fit: "cover", kernel: sharp.kernel.nearest })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);
  const [tr, tg, tb] = color === "white" ? [255, 255, 255] : [0, 0, 0];

  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const a = logoAlpha(lum);
    out[i] = tr;
    out[i + 1] = tg;
    out[i + 2] = tb;
    out[i + 3] = a;
  }

  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outPath);
}

async function makeMaskPng(size) {
  const { data, info } = await sharp(src)
    .resize(size, size, { fit: "cover", kernel: sharp.kernel.nearest })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const mask = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const v = logoAlpha(lum);
    mask[i] = v;
    mask[i + 1] = v;
    mask[i + 2] = v;
    mask[i + 3] = 255;
  }

  return sharp(mask, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

(async () => {
  await makeColored("black", 32, path.join(pub, "favicon-light.png"));
  await makeColored("white", 32, path.join(pub, "favicon-dark.png"));
  await makeColored("black", 180, path.join(pub, "apple-icon-light.png"));
  await makeColored("white", 180, path.join(pub, "apple-icon-dark.png"));
  await makeColored("black", 512, path.join(pub, "icon-light.png"));
  await makeColored("white", 512, path.join(pub, "icon-dark.png"));

  const size = 128;
  const maskPng = await makeMaskPng(size);
  const b64 = maskPng.toString("base64");
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">`,
    `<style>`,
    `.mark { fill: #000000; }`,
    `@media (prefers-color-scheme: dark) { .mark { fill: #ffffff; } }`,
    `</style>`,
    `<defs>`,
    `<mask id="km">`,
    `<image href="data:image/png;base64,${b64}" width="${size}" height="${size}"/>`,
    `</mask>`,
    `</defs>`,
    `<rect class="mark" width="${size}" height="${size}" mask="url(#km)"/>`,
    `</svg>`,
  ].join("");

  fs.writeFileSync(path.join(pub, "favicon.svg"), svg);
  fs.writeFileSync(path.join("src", "app", "icon.svg"), svg);
  console.log("done");
})();
