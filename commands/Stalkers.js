const goat = require("api-dylux");
const {
  king
} = require("../france/king");
king({
  'nomCom': "instastalk",
  'aliases': ["igstalk"],
  'reaction': '📷',
  'categorie': "STALKERS"
}, async (_0x1586d0, _0xf413a6, _0x5c156a) => {
  const {
    repondre: _0x3dfa33,
    prefixe: _0x33b470,
    arg: _0x80864c,
    ms: _0x2975a2
  } = _0x5c156a;
  const _0x3b4855 = _0x80864c.join(" ");
  if (!_0x3b4855) {
    return _0x3dfa33("Give me a valid Instagram username like: " + _0x33b470 + "instastalk france.king1");
  }
  try {
    let _0xbbc48c = await fetch("https://www.noobs-api.000.pe/dipto/instainfo?username=" + encodeURIComponent(_0x3b4855));
    let _0x7b04fd = await _0xbbc48c.json();
    if (!_0x7b04fd.data || !_0x7b04fd.data.user_info) {
      return _0x3dfa33("Couldn't fetch the data for username: " + _0x3b4855 + ". Please check the username and try again.");
    }
    let _0x43d07f = _0x7b04fd.data.user_info;
    let _0x14feb0 = "\n┌──「 *INSTAGRAM STALK* \n▢ *🔖Name:* " + (_0x43d07f.full_name || 'Unknown') + "\n▢ *🔖Username:* " + (_0x43d07f.username || "Unknown") + "\n▢ *👥Followers:* " + (_0x43d07f.followers || 'Unknown') + "\n▢ *🫂Following:* " + (_0x43d07f.following || "Unknown") + "\n▢ *📌Bio:* " + (_0x43d07f.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x43d07f.external_url || "No Link") + "\n\n▢ *🔗 Profile Link:* https://instagram.com/" + (_0x43d07f.username || "unknown") + "\n└────────────";
    await _0xf413a6.sendMessage(_0x1586d0, {
      'image': {
        'url': _0x43d07f.profile_pic_url
      },
      'caption': _0x14feb0
    }, {
      'quoted': _0x2975a2
    });
  } catch (_0x5969df) {
    return _0x3dfa33("Error: " + _0x5969df.toString());
  }
});
king({
  'nomCom': "github",
  'reaction': '📃',
  'categorie': "STALKERS"
}, async (_0x425427, _0x43cc9f, _0x43fa17) => {
  const {
    repondre: _0x36fa00,
    prefixe: _0x2a5122,
    arg: _0x42fd63,
    ms: _0x537902
  } = _0x43fa17;
  const _0x45b737 = _0x42fd63.join(" ");
  if (!_0x45b737) {
    return _0x36fa00("Give me a valid GitHub username like: " + _0x2a5122 + "github franceking1");
  }
  try {
    const _0x2bb276 = await fetch("https://api.github.com/users/" + _0x45b737);
    if (!_0x2bb276.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0xf7e6b5 = await _0x2bb276.json();
    if (_0xf7e6b5.message === "Not Found") {
      return _0x36fa00("I did not find that user, try again.");
    }
    const _0x19517c = "https://github.com/" + _0xf7e6b5.login + ".png";
    const _0x2c6136 = ("*°TRACE-MD GITHUB STALKER°*\n\n♦️ Name: " + (_0xf7e6b5.name || 'N/A') + "\n🔖 Username: " + _0xf7e6b5.login + "\n✨ Bio: " + (_0xf7e6b5.bio || "N/A") + "\n🏢 Company: " + (_0xf7e6b5.company || 'N/A') + "\n📍 Location: " + (_0xf7e6b5.location || "N/A") + "\n📧 Email: " + (_0xf7e6b5.email || "N/A") + "\n📰 Blog: " + (_0xf7e6b5.blog || "N/A") + "\n🔓 Public Repo: " + _0xf7e6b5.public_repos + "\n👪 Followers: " + _0xf7e6b5.followers + "\n🫶 Following: " + _0xf7e6b5.following + "\n    ").trim();
    await _0x43cc9f.sendMessage(_0x425427, {
      'image': {
        'url': _0x19517c
      },
      'caption': _0x2c6136
    }, {
      'quoted': _0x537902
    });
  } catch (_0x135633) {
    console.error("Error fetching GitHub user information:", _0x135633.message);
    await _0x36fa00("Failed to fetch GitHub user information. Please try again later.");
  }
});
king({
  'nomCom': "ipstalk",
  'reaction': '📃',
  'categorie': "STALKERS"
}, async (_0x4849b2, _0x4574cc, _0x553617) => {
  const {
    repondre: _0xd758e3,
    prefixe: _0x5b2fd5,
    arg: _0x499201,
    ms: _0x539261
  } = _0x553617;
  const _0xbe1045 = _0x499201.join(" ");
  if (!_0xbe1045) {
    return _0xd758e3("Give me a valid IP address like: " + _0x5b2fd5 + "ip 8.8.8.8");
  }
  try {
    const _0x2c1f14 = await fetch("https://api.maher-zubair.tech/stalk/ip?q=" + _0xbe1045);
    if (!_0x2c1f14.ok) {
      throw new Error("Network error!!");
    }
    const _0x4c4be6 = await _0x2c1f14.json();
    if (!_0x4c4be6.result || _0x4c4be6.result.status !== "success") {
      throw new Error("Failed to fetch IP details. Please try again.");
    }
    const {
      continent: _0x1b9602,
      country: _0x21c1c2,
      regionName: _0x207de9,
      city: _0x315306,
      zip: _0x108148,
      lat: _0xd31fe4,
      lon: _0x3aaa10,
      timezone: _0x2a9f48,
      currency: _0x514aa9,
      isp: _0x40e735,
      org: _0x27f6be,
      as: _0x20015,
      reverse: _0x3b5ddb,
      mobile: _0x436355,
      proxy: _0x35410a,
      hosting: _0x1d8cf3,
      ip: _0x465449
    } = _0x4c4be6.result;
    await _0xd758e3("*°TRACE-MD IP ADDRESS STALKER°*\n    \n▢ *Continent:* " + _0x1b9602 + "\n▢ *Country:* " + _0x21c1c2 + " \n▢ *Region:* " + _0x207de9 + "\n▢ *City:* " + _0x315306 + "\n▢ *ZIP:* " + _0x108148 + "\n▢ *Latitude:* " + _0xd31fe4 + "\n▢ *Longitude:* " + _0x3aaa10 + "\n▢ *Timezone:* " + _0x2a9f48 + "\n▢ *Currency:* " + _0x514aa9 + "\n▢ *ISP:* " + _0x40e735 + "\n▢ *Organization:* " + _0x27f6be + "\n▢ *AS:* " + _0x20015 + "\n▢ *Reverse DNS:* " + _0x3b5ddb + "\n▢ *Mobile:* " + _0x436355 + "\n▢ *Proxy:* " + _0x35410a + "\n▢ *Hosting:* " + _0x1d8cf3 + "\n▢ *IP Address:* " + _0x465449 + "\n└────────────>\n\n> *©WillisXth*");
  } catch (_0x3ff8e5) {
    console.error("Error:", _0x3ff8e5.message);
    await _0xd758e3("Error: " + _0x3ff8e5.message);
  }
});
king({
  'nomCom': "tikstalk",
  'reaction': '📃',
  'categorie': "STALKERS"
}, async (_0x58560d, _0x111c0a, _0x1913b1) => {
  const {
    repondre: _0x138989,
    prefixe: _0x1c5ee0,
    arg: _0x52e9ff,
    ms: _0x347a2d
  } = _0x1913b1;
  const _0x2b1812 = _0x52e9ff.join(" ");
  if (!_0x2b1812) {
    return _0x138989("Give me a valid TikTok username like: " + _0x1c5ee0 + "tikstalk franceking1");
  }
  try {
    let _0xf71395 = await goat.ttStalk(_0x2b1812);
    let _0x2c0add = "\n┌──「 *TIKTOK STALK* \n▢ *🔖Name:* " + (_0xf71395.name || 'Unknown') + "\n▢ *🔖Username:* " + (_0xf71395.username || "Unknown") + "\n▢ *👥Followers:* " + (_0xf71395.followers || "Unknown") + "\n▢ *🫂Following:* " + (_0xf71395.following || "Unknown") + "\n▢ *📌Desc:* " + (_0xf71395.desc || "No Description") + "\n\n▢ *🔗 Link:* https://tiktok.com/" + (_0xf71395.username || 'unknown') + "\n└────────────";
    await _0x111c0a.sendMessage(_0x58560d, {
      'image': {
        'url': _0xf71395.profile
      },
      'caption': _0x2c0add
    }, {
      'quoted': _0x347a2d
    });
  } catch (_0x9b88e3) {
    return _0x138989("Error: " + _0x9b88e3.toString());
  }
});