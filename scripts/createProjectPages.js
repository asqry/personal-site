// = IS A TAB, + IS A NEWLINE

const fs = require('fs'),
  path = require('path');

const badges = {
  'discord_community': {
    imagePath: '../../assets/badges/discord_community.png',
    text: 'Discord Community',
  },
  'development': {
    imagePath: '../../assets/badges/development.png',
    text: 'Development',
  },
  'management': {
    imagePath: '../../assets/badges/management.png',
    text: 'Management',
  },
  'twitch_mod': {
    imagePath: '../../assets/badges/twitch_mod.png',
    text: 'Twitch Mod',
  },
  'minecraft': {
    imagePath: '../../assets/badges/minecraft.png',
    text: 'Minecraft',
  },
  'mobile_dev': {
    imagePath: '../../assets/badges/mobile_dev.png',
    text: 'Mobile Development',
  },
};

const ps = [
  {
    slug: 'tsorre',
    name: 'Tsorre44',
    imagePath: '../../assets/project_images/tsorre.png',
    longDescription:
      'Tsorre44 was a variety (mostly Minecraft) Twitch streamer who I met in 2020. Shortly after that, I started working for him as a freelance developer, community manager, Twitch mod, and Minecraft server admin.+My various projects for Tsorre44 include: A Twitch to Discord chat system with utility buttons for mods, a custom viewer SMP, and a custom Twitch bot with utilities that ultimately replaced all of his other Twitch chatbots.',
    badges: [
      'discord_community',
      'development',
      'management',
      'twitch_mod',
      'minecraft',
    ],
  },
  {
    slug: 'hymbo',
    name: 'HYMBO',
    imagePath: '../../assets/project_images/hymbo.png',
    longDescription:
      'HYMBO (previously sippy) is a Minecraft streamer on Twitch. I originally met them when they were a member on an SMP server that I was running at the time.+While working with HYMBO I worked on various projects including a custom web landing page, custom Twitch/Discord bots, and a custom Minecraft server.',
    badges: [
      'discord_community',
      'development',
      'management',
      'twitch_mod',
      'minecraft',
    ],
  },
  {
    slug: 'ytc',
    name: 'The YouTube Community',
    imagePath: '../../assets/project_images/ytc.png',
    longDescription:
      'The YouTube Community (YTC) is a creator-focused Discord server that sells custom assets and services.+At YTC, my job was to manage the staff team, run the Discord server, and develop Discord-related applications to help the process run smoothly.+To increase user engagement, I also started a YTC Minecraft server with a custom coded core plugin.',
    badges: ['discord_community', 'development', 'management', 'minecraft'],
  },
  {
    slug: 'mindspot',
    name: 'MindSpot',
    imagePath: '../../assets/project_images/mindspot_2.png',
    longDescription:
      "MindSpot is a digital journal app I've been working on. The goal of the app is to make writing down your feelings more accessible and break down the stigma around mental health.+The app is currently unreleased with no planned release date as I gather a team to help me with the project.",
    badges: ['discord_community', 'development', 'management', 'mobile_dev'],
  },
];

const createProjectPages = projects => {
  projects.forEach(project => {
    let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- META TAGS -->

    <!-- Primary Meta Tags -->
    <meta name="title" content="asqry - designer & developer" />
    <meta
      name="description"
      content="asqry is an 18 year old developer based in the United States"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.asqry.live/" />
    <meta property="og:title" content="asqry - designer & developer" />
    <meta
      property="og:description"
      content="asqry is an 18 year old developer based in the United States"
    />
    <meta
      property="og:image"
      content="https://asqry.live/assets/images/asqry_logo.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.asqry.live/" />
    <meta property="twitter:title" content="asqry - designer & developer" />
    <meta
      property="twitter:description"
      content="asqry is an 18 year old developer based in the United States"
    />
    <meta
      property="twitter:image"
      content="https://asqry.live/assets/images/asqry_logo.png"
    />

    <meta name="theme-color" content="#D78FB4" />

    <!-- META TAGS -->

    <!-- FAVICONS -->

    <link
      rel="shortcut icon"
      href="../../assets/images/favicon.ico"
      type="image/x-icon"
    />

    <!-- FAVICONS -->

    <!-- STYLES -->
    <link rel="stylesheet" href="../../styles/index.css" />
    <link rel="stylesheet" href="../../styles/animations.css" />
    <link rel="stylesheet" href="../styles/index.css" />
    <link rel="stylesheet" href="../styles/project.css" />
    <!-- STYLES -->

    <title>asqry</title>
  </head>
  <body>
    <div class="top-nav">
      <div class="top-left-nav">
        <div class="top-left-nav-button-container">
          <div class="top-left-nav-button-icon">&#171;</div>
          <div class="top-left-nav-button-text">projects</div>
        </div>
      </div>
      <div class="top-center-nav">
        <img
          src="../../../../assets/images/asqry_logo.png"
          alt="asqry logo"
          class="top-center-nav-logo"
          id="logo"
        />
      </div>
      <div class="top-right-nav">
        <div class="top-right-nav-buttons">
          <button
            class="top-right-nav-button"
            onclick="navigateExternal('https://discord.gg/h3xtUWrtsg')"
          >
            <img src="../../assets/icons/discord_icon.png" alt="discord icon" />
          </button>

          <button
            class="top-right-nav-button"
            onclick="navigateExternal('https://twitch.tv/asqrylive')"
          >
            <img src="../../assets/icons/twitch_icon.png" alt="twitch icon" />
          </button>

          <button
            class="top-right-nav-button"
            onclick="navigateExternal('https://github.com/asqry')"
          >
            <img src="../../assets/icons/github_icon.png" alt="github icon" />
          </button>

          <button
            class="top-right-nav-button"
            onclick="navigateExternal('https://twitter.com/asqrylive')"
          >
            <img src="../../assets/icons/twitter_icon.png" alt="twitter icon" />
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-top">
        my projects <span class="slash-separator">/</span>
        <span class="bold">${project.name}</span>
      </div>
      <div class="content-project">
        <div class="project-info-left">
          <img
            src="${project.imagePath}"
            alt="${project.name} logo"
            class="project-info-image"
          />
          <h1 class="project-info-title">${project.name}</h1>
          <div class="hr"></div>
          <div class="project-info-badges">
            ${project.badges
              .map(
                badge => `<div class="project-info-badge">
              <img
                src="${badges[badge].imagePath}"
                alt="${badges[badge].text.toLowerCase()} badge"
                class="project-info-badge-icon"
              />
              <p class="project-info-badge-label">${badges[badge].text}</p>
            </div>`
              )
              .join('')}
        </div>
        </div>
        <div class="project-info-right">
          <p class="project-info-description">
            ${project.longDescription
              .replace(/\=/gim, '&nbsp;&nbsp;&nbsp;&nbsp;')
              .replace(/\+/gim, '<br /><br />')}
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="credit">made with 💖 by asqry</p>
    </div>

    <script src="../../scripts/index.js" defer></script>
  </body>
</html>
`;
    fs.writeFile(`${project.slug}.html`, html, {}, () => {
      console.log('wrote to ' + project.slug);
    });
  });
};

createProjectPages(ps);
