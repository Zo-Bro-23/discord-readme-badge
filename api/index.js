module.exports = async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  return res.send(`
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="382" height="187" viewBox="0 0 382 187">
        <defs>
          <style>
            .cls-1 {
              fill: none;
            }
      
            .cls-2 {
              fill: #202225;
            }
      
            .cls-3 {
              font-size: 20px;
            }
      
            .cls-11, .cls-3 {
              fill: #fff;
              font-family: SegoeUI-Bold, Segoe UI;
              font-weight: 700;
            }
      
            .cls-4 {
              font-size: 15px;
            }
      
            .cls-14, .cls-4 {
              fill: #b3b5b8;
              font-family: SegoeUI, Segoe UI;
            }
      
            .cls-5 {
              letter-spacing: -0.03em;
            }
      
            .cls-6 {
              letter-spacing: 0em;
            }
      
            .cls-7 {
              clip-path: url(#clip-path);
            }
      
            .cls-8 {
              fill: #ff3e3e;
            }
      
            .cls-9 {
              fill: #2f3136;
            }
      
            .cls-10 {
              clip-path: url(#clip-path-2);
            }
      
            .cls-11, .cls-14 {
              font-size: 14px;
            }
          </style>
          <clipPath id="clip-path">
            <circle id="pfp-clip-shape" class="cls-1" cx="51" cy="48" r="31"/>
          </clipPath>
          <clipPath id="clip-path-2">
            <rect id="details-image-clip-shape" class="cls-1" x="34" y="106" width="52" height="52" rx="8"/>
          </clipPath>
        </defs>
        <rect id="base-shape" class="cls-2" width="382" height="187" rx="4"/>
        <text id="username-text" class="cls-3" transform="translate(94.66 43.89)">$ zy --plos</text>
        <g id="game-text">
          <text class="cls-4" transform="translate(94.66 67.11)">Playing Visual Studio Code</text>
        </g>
        <g id="pfp-group">
          <g id="pfp-clip-group">
            <g class="cls-7">
              <image id="pfp-image" width="481" height="481" transform="translate(20 17) scale(0.13)" xlink:href="discord-card1.png"/>
            </g>
          </g>
          <circle id="status-outline" class="cls-2" cx="71.54" cy="68.54" r="10.46"/>
          <circle id="status-color" class="cls-8" cx="71.5" cy="68.5" r="6.5"/>
        </g>
        <rect id="base-details-shape" class="cls-9" x="20" y="94" width="342" height="76" rx="4"/>
        <g id="details-image-clip-group">
          <g class="cls-10">
            <image id="details-image" width="128" height="128" transform="translate(34 106) scale(0.41)" xlink:href="discord-card2.png"/>
          </g>
        </g>
        <g id="details-top-text">
          <text class="cls-11" transform="translate(95.66 126.57)">Editing presenceFetcher.js</text>
        </g>
        <g id="details-bottom-text">
          <text class="cls-14" transform="translate(95.66 144.57)">Workspace: discord-readme-badge</text>
        </g>
        <image width="128" height="128" transform="translate(318 25) scale(0.35)" xlink:href="../../../Users/offic/Downloads/ezgif.com-gif-maker.png"/>
      </svg>`);
};
