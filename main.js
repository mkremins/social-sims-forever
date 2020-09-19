/// generic utility functions

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

// Given a list of items that may contain duplicates,
// return an updated copy of the list without any duplicates.
function distinct(items) {
  return items.filter((val, idx) => items.indexOf(val) === idx);
}

// Return a shuffled copy of a list, leaving the original list unmodified.
function shuffle(items) {
  const newItems = [];
  for (let i = 0; i < items.length; i++) {
    newItems.push(items[i]);
  }
  for (let i = newItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
  }
  return newItems;
}

function upcaseFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Return a random item from a list.
function randNth(items){
  return items[Math.floor(Math.random()*items.length)];
}

// Return a random integer between min (inclusive) and max (exclusive).
function randInt(min, max) {
  min = Math.ceil(min); // inclusive
  max = Math.floor(max); // exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function createNode(html) {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

function replaceAll(s1, s2, s3) {
  return s1.split(s2).join(s3);
}

/// important stuff

const allChars = [
  "Alex", "Ali", "Alice", "Andy", "Ang", "Benj", "Cass", "Cait", "Ceri", "Dinah", "Ella",
  "Ferdinand", "George", "Hubert", "Jen", "Jer", "Jorge",
  "Mari", "Mirra", "Lauren", "Lori", "Luna", "Naomi", "Nat", "Phoebe",
  "Remy", "Roberto", "Sam", "Sarah", "Sora", "Ted", "Terra", "Vincent", "Walt",
  "Xander", "Yann", "Zack",
];

const allStats = [
  "anticapitalism",
  "anxiety",
  "base thirst",
  "bereftness",
  "compressibility",
  "confidence",
  "considerateness",
  "courage",
  "crafter level",
  "cursedness",
  "describability by numbers",
  "doomedness",
  "ectoplasm",
  "evaluation",
  "faith",
  "fallibility",
  "fashion sense",
  "flexibility",
  "fortune",
  "fucks left to give",
  "funding level",
  "gender",
  "ghostliness",
  "grizzledness",
  "handsomeness",
  "hauntedness",
  "humor",
  "incandescence",
  "interiority",
  "introversion",
  "likelihood",
  "misfortune",
  "mixtapes assembled",
  "moxie",
  "nastiness",
  "necessity",
  "obliviousness",
  "overall",
  "poems written",
  "precedentedness",
  "raggedness",
  "resourcefulness",
  "respectability",
  "simplicity",
  "stage presence",
  "subtlety",
  "superiority",
  "susceptibility",
  "tenacity",
  "thwackability",
  "total fingers",
  "unthwackability",
  "virtue",
  "volition",
  "warlikeness"
];

const allShips = [
  "admiration",
  "animosity",
  "attraction",
  "benevolence",
  "caution",
  "crossness",
  "friendliness",
  "frustration",
  "guardedness",
  "intimidation",
  "liking",
  "love",
  "malevolence",
  "mentorship",
  "offense taken",
  "patience",
  "pity",
  "protectiveness",
  "respect",
  "sense of betrayal",
  "tolerance",
  "trust",
];

const allVerbs = [
  "accuse",
  "admire",
  "applaud",
  "avoid",
  "befriend",
  "beguile",
  "bribe",
  "cajole",
  "challenge",
  "chit-chat",
  "coax",
  "comfort",
  "compliment",
  "condemn",
  "confess",
  "confide",
  "congratulate",
  "consider",
  "conspire",
  "convince",
  "copy",
  "cross-examine",
  "deceive",
  "defend",
  "defraud",
  "drag",
  "elaborate",
  "encourage",
  "enlighten",
  "ensnare",
  "entice",
  "evaluate",
  "exclude",
  "extol",
  "flatter",
  "flirt",
  "frighten",
  "imitate",
  "include",
  "indulge",
  "inquire",
  "inspire",
  "interrupt",
  "intimidate",
  "inveigle",
  "investigate",
  "invite",
  "jeer",
  "gossip",
  "greet",
  "horrify",
  "lecture",
  "listen",
  "lurk",
  "mimic",
  "mirror",
  "neglect",
  "offer",
  "pause",
  "persuade",
  "pester",
  "plan",
  "plot",
  "poke",
  "ponder",
  "press",
  "probe",
  "prod",
  "pry",
  "psychoanalyze",
  "praise",
  "question",
  "rant",
  "reconsider",
  "regale",
  "repeat",
  "share food",
  "share link",
  "share music",
  "soothe",
  "speculate",
  "surprise",
  "taunt",
  "tease",
  "tempt",
  "terrify",
  "think",
  "tolerate",
  "usurp",
  "vent",
  "vindicate",
  "wait",
  "wheedle",
];

const allInitial = [
  "hey", "heya", "hi", "hey you up", "hey u up", "u up", "you up", "hello", "howdy", "good morning",
  "hey there", "good afternoon", "good evening", "how's it going", "what's up",
  "what's up with you", "sup", "how's it hangin",
];

const allInitialReply = [
  "hey", "heya", "hi", "hello", "howdy", "good morning", "pretty good", "good", "p good",
  "pretty good hbu", "p good hbu", "not bad", "pretty good, yourself?", "hey there",
  "good afternoon", "good evening", "how's it going", "what's up", "what's up with you",
  "sup", "how's it hangin",
];

const allYes = [
  "yea", "yeah", "yes", "ye", "mhm", "gotcha", "ok", "sounds good", "cool", "nice", "i like it",
  "lol nice", "love it", "continue", "go on",
];

const allNo = [
  "lol what", "no", "nno", "nope", "no way", "no thanks", "no thank you", "wat", "how dare you",
  "uhh", "go away", "lol no",
];

// partially copied from an older list (https://github.com/theraot/emoji) and augmented.
// very incomplete: intent is "emoji that strongly evoke a character personality",
// so we could definitely benefit from adding some of the "professions" (e.g. chef),
// and there's probably other newer ones that'd fit well too.
const allEmoji = [
  '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘',
  '😗', '😙', '😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥',
  '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓',
  '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦',
  '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥',
  '😷', '🤒', '🤕', '🤢', '🤧',
  '😈', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩',
  '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾',
  '🙈', '🙉', '🙊',
  '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿',
  '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿',
  '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿',
  '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿',
  '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿',
  '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿',
  '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆',
  '🐴', '🐎', '🦌', '🦄', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐏', '🐑', '🐐',
  '🐪', '🐫', '🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦇', '🐻', '🐨', '🐼',
  '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉',
  '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉',
  '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🦀', '🦐', '🦑',
  '🦋', '🐌', '🐛', '🐜', '🐝', '🐞', '🕷', '🦂',
  '👀', '👁', '🕵️', '🎃',
];

const allColors = [
  1,2,3,4,5,6
];

function genSim() {
  // add stat types
  const stats = {};
  const statNames = shuffle(allStats);
  for (let i = 0; i < 2; i++) {
    stats[statNames[i]] = {name: statNames[i], min: 0, max: 100};
  }

  // add relationship types
  const ships = {};
  const shipNames = shuffle(allShips);
  for (let i = 0; i < 2; i++) {
    ships[shipNames[i]] = {name: shipNames[i], min: 0, max: 100};
  }

  // add actions
  const actions = {};
  const actionNames = shuffle(allVerbs);
  for (let i = 0; i < randNth([3, 4]); i++) {
    const actionName = actionNames[i];

    // add preconds
    const numPreconds = randNth([0, 1, 1, 2, 2, 3]);
    const preconds = [];
    for (let j = 0; j < numPreconds; j++) {
      // base setup
      const precond = {
        op: randNth(["<", ">"]),
        threshold: randInt(0, 100),
        type: randNth(["stat", "ship"]),
        from: randNth(["self", "other"])
      };

      // what's it check?
      if (precond.type === "stat") {
        precond.stat = randNth(Object.keys(stats));
      } else {
        precond.ship = randNth(Object.keys(ships));
      }

      // does another precond check same thing on same entity? if so retry
      const conflictingPrecond = preconds.find(other => {
        return other.from === precond.from &&
               (other.stat === precond.stat || other.ship === precond.ship);
      });
      if (conflictingPrecond) {
        j = j - 1;
        continue;
      }

      // push it onto the list
      preconds.push(precond);
    }

    // add effects
    const numEffects = randNth([0, 1, 1, 2, 2, 3]);
    const effects = [];
    for (let j = 0; j < numEffects; j++) {
      const effect = {
        amount: randInt(-10, 10),
        type: randNth(["stat", "ship"]),
        from: randNth(["self", "other"])
      };
      if (effect.type === "stat") {
        effect.stat = randNth(Object.keys(stats));
      } else {
        effect.ship = randNth(Object.keys(ships));
      }
      effects.push(effect);
    }

    // add to actions
    actions[actionName] = {name: actionName, preconds, effects};
  }

  const state = {};
  const chars = shuffle(allChars).slice(0, 5);
  for (let char of chars) {
    const charState = {};
    for (let stat of Object.keys(stats)) {
      charState[stat] = randInt(stats[stat].min, stats[stat].max);
    }
    for (let ship of Object.keys(ships)) {
      for (let to of chars) {
        if (to === char) continue;
        charState[to] = charState[to] || {};
        charState[to][ship] = randInt(ships[ship].min, ships[ship].max);
      }
    }
    state[char] = charState;
  }

  const emoji = {};
  const emojiToPick = shuffle(allEmoji);
  for (let i = 0; i < chars.length; i++) {
    emoji[chars[i]] = emojiToPick[i];
  }

  const colors = {};
  const colorsToPick = shuffle(allColors);
  for (let i = 0; i < chars.length; i++) {
    colors[chars[i]] = colorsToPick[i];
  }

  return {stats, ships, actions, state, chars, emoji, colors};
}

function checkPrecond(sim, actor, target, precond) {
  const [from, to] = precond.from === "self" ? [actor, target] : [target, actor];
  const lessThan = precond.op === "<";
  const reverseOp = lessThan ? ">=" : "<=";
  if (precond.type === "stat") {
    const currValue = sim.state[from][precond.stat];
    return {
      result: lessThan ? currValue < precond.threshold : currValue > precond.threshold,
      explanation: `${from}'s ${precond.stat} is too ${lessThan ? "high" : "low"} \
(${currValue} ${reverseOp} ${precond.threshold})`
    };
  }
  else if (precond.type === "ship") {
    const currValue = sim.state[from][to][precond.ship];
    return {
      result: lessThan ? currValue < precond.threshold : currValue > precond.threshold,
      explanation: `${from}'s ${precond.ship} toward ${to} is too ${lessThan ? "high" : "low"} \
(${currValue} ${reverseOp} ${precond.threshold})`
    };
  }
  else {
    console.warn("bad precond type", precond);
    return {result: true, explanation: "it's fine"};
  }
}

function performEffect(sim, actor, target, effect) {
  const [from, to] = effect.from === "self" ? [actor, target] : [target, actor];
  if (effect.type === "stat") {
    const statInfo = sim.stats[effect.stat];
    const currValue = sim.state[from][effect.stat];
    let nextValue = currValue + effect.amount;
    nextValue = Math.max(nextValue, statInfo.min);
    nextValue = Math.min(nextValue, statInfo.max);
    sim.state[from][effect.stat] = nextValue;
    return `${from}'s ${effect.stat} increased by ${effect.amount}`;
  }
  else if (effect.type === "ship") {
    const shipInfo = sim.ships[effect.ship];
    const currValue = sim.state[from][to][effect.ship];
    let nextValue = currValue + effect.amount;
    nextValue = Math.max(nextValue, shipInfo.min);
    nextValue = Math.min(nextValue, shipInfo.max);
    sim.state[from][to][effect.ship] = nextValue;
    return `${from}'s ${effect.ship} toward ${to} increased by ${effect.amount}`;
  }
  else {
    console.warn("bad effect type", effect);
  }
}

function makeAvatar(icon, color) {
  return `<div class="avatar-wrap"><div class="avatar color-${color}">${icon}</div></div>`;
}

function tryAction(sim, actor, target, action) {
  const results = action.preconds.map(pre => checkPrecond(sim, actor, target, pre));
  const failures = results.filter(res => !res.result);
  if (failures.length > 0) {
    convoLog.append(createNode(`<div class="exchange">
      ${makeAvatar(sim.emoji[actor], sim.colors[actor])}
      <div class="msg-wrap"><div class="left-msg"><em>${action.name}</em></div></div>
      <div class="msg-wrap"><div class="right-msg">${randNth(allNo)}</div></div>
      ${makeAvatar(sim.emoji[target], sim.colors[target])}
      <div class="info fail"> \
${failures.map(fail => fail.explanation).join(".<br> ")}.</div>
</div>`));
    /*
    convoLog.append(createNode(`<div>${actor}: ${action.name} ${target} (failure)<br>\
* ${failures.map(fail => fail.explanation).join("<br> * ")}</div>`));
    */
  }
  else {
    const effectExplanations = action.effects.map(eff => performEffect(sim, actor, target, eff));
    convoLog.append(createNode(`<div class="exchange">
      ${makeAvatar(sim.emoji[actor], sim.colors[actor])}
      <div class="msg-wrap"><div class="left-msg"><em>${action.name}</em></div></div>
      <div class="msg-wrap"><div class="right-msg">${randNth(allYes)}</div></div>
      ${makeAvatar(sim.emoji[target], sim.colors[target])}
      <div class="info succeed">
        ${effectExplanations.join(".<br> ")}${effectExplanations.length > 0 ? "." : "It worked!"}
      </div>
    </div>`));
  }
}

function getRandomPair(sim) {
  const [actor, target] = shuffle(sim.chars);
  return [actor, target];
}


/// the stateful bits

let theSim = genSim();
let currentPair;
let interactionLength = 0;

// every N msecs, try an action
setInterval(function() {
  if (!currentPair || interactionLength >= 5 || Math.random() < 0.2) {
    interactionLength = 0;
    /*
    if (currentPair) {
      convoLog.append(createNode(`<div class="exchange">
        <div class="info">Exchange concludes.</div>
      </div>`));
    }
    */
    currentPair = getRandomPair(theSim);
    convoLog.append(createNode(`<h2>${currentPair[0]} and ${currentPair[1]}</h2>`));
  }
  tryAction(
    theSim, currentPair[0], currentPair[1],
    theSim.actions[randNth(Object.keys(theSim.actions))]
  );
  interactionLength += 1;
  if (scrollToggle.checked) {
    window.scrollTo(0,document.body.scrollHeight);
  }
}, 4000);

// show b-day msg iff #showbdaymsg hash present in url
if (window.location.hash && window.location.hash === "#showbdaymsg") {
  bdaymsg.style.display = "block";
}

// destroy the sim and gen a new one when the button is clicked
destroySimButton.onclick = function(ev) {
  ev.preventDefault();
  theSim = genSim();
  currentPair = undefined;
  convoLog.innerHTML = "";
};
