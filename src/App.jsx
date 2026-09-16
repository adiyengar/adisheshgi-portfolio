import React, { useState } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Karla:wght@300;400;500;700&display=swap');

.pf * { margin:0; padding:0; box-sizing:border-box; }

.pf {
  --ink:        #12151A;
  --panel:      #191E24;
  --accent:     #4FB6A6;
  --accent-dim: #37877B;
  --paper:      #ECEAE3;
  --muted:      #8C9096;
  --sage:       #7FAD8C;
  --line:       rgba(236,234,227,0.12);

  background: var(--ink);
  color: var(--paper);
  font-family: 'Karla', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.pf h1, .pf h2, .pf h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-variation-settings: 'SOFT' 40, 'WONK' 1;
  line-height: 1.04;
  letter-spacing: -0.022em;
  font-weight: 600;
}

.pf .wrap { max-width: 62rem; margin: 0 auto; padding: 0 1.5rem; }
.pf .narrow { max-width: 34rem; }

/* ---------- hero ---------- */
.pf .hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  overflow: hidden;
}
.pf .hero-glow {
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 90%;
  background:
    radial-gradient(ellipse 55% 50% at 22% 30%, rgba(79,182,166,0.20), transparent 62%),
    radial-gradient(ellipse 45% 60% at 78% 12%, rgba(55,135,123,0.15), transparent 60%),
    radial-gradient(ellipse 40% 40% at 55% 60%, rgba(127,173,140,0.10), transparent 65%);
  filter: blur(12px);
  animation: drift 26s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes drift {
  from { transform: translate3d(0,0,0) scale(1); }
  to   { transform: translate3d(-3%, 4%, 0) scale(1.08); }
}

.pf .topbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  position: relative;
}
.pf .wordmark {
  font-family: 'Fraunces', serif;
  font-variation-settings: 'SOFT' 100, 'WONK' 1;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  color: var(--accent);
}
.pf .profiles { display: flex; gap: 0.6rem; }
.pf .profiles a {
  font-size: 0.86rem;
  color: var(--paper);
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.4rem 0.8rem;
  transition: border-color .18s ease, color .18s ease;
}
.pf .profiles a:hover { border-color: var(--accent); color: var(--accent); }
.pf .profiles a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

.pf h1 {
  font-size: clamp(2.6rem, 7.5vw, 4.9rem);
  font-weight: 600;
  max-width: 18ch;
  margin-bottom: 2rem;
  position: relative;
}
.pf .hero-sub {
  font-size: clamp(1.05rem, 2.2vw, 1.2rem);
  color: var(--paper);
  opacity: 0.82;
  max-width: 46ch;
  margin-bottom: 2.5rem;
  position: relative;
}
.pf .hero-who {
  font-size: 1.05rem;
  color: var(--paper);
  opacity: 0.9;
  max-width: 52ch;
  position: relative;
}
.pf .hero-name {
  color: var(--accent);
  font-weight: 700;
}

/* ---------- generic section ---------- */
.pf section { padding: 5.5rem 0; }
.pf .sec-head {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  margin-bottom: 2rem;
  max-width: 20ch;
}
.pf p + p { margin-top: 1.1rem; }
.pf .lede { font-size: 1.08rem; opacity: 0.88; max-width: 58ch; }

/* ---------- offer ---------- */
.pf .offer { background: var(--panel); }
.pf .offer-list { list-style: none; margin-top: 2.5rem; }
.pf .offer-list li {
  padding: 1.4rem 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1.5rem;
}
.pf .offer-list li:last-child { border-bottom: 1px solid var(--line); }
.pf .offer-list b {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--accent);
}
.pf .offer-list span { color: var(--paper); opacity: 0.78; font-size: 0.97rem; }
@media (max-width: 640px) {
  .pf .offer-list li { grid-template-columns: 1fr; gap: 0.4rem; }
}

/* ---------- work ---------- */
.pf .work-intro { margin-bottom: 1rem; }

.pf .proj {
  border-top: 1px solid var(--line);
  padding: 3rem 0;
}
.pf .proj-top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.9rem;
  margin-bottom: 1.25rem;
}
.pf .proj h3 { font-size: clamp(1.5rem, 3.6vw, 2rem); max-width: 24ch; }

.pf .chip {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.28rem 0.62rem;
  border-radius: 999px;
  border: 1px solid currentColor;
  white-space: nowrap;
}
.pf .chip.live      { color: var(--sage); }
.pf .chip.building  { color: var(--accent); }
.pf .chip.paused    { color: var(--muted); }

.pf .proj-problem {
  font-family: 'Fraunces', serif;
  font-variation-settings: 'SOFT' 60, 'WONK' 1;
  font-size: clamp(1.2rem, 2.8vw, 1.45rem);
  line-height: 1.3;
  color: var(--accent);
  max-width: 40ch;
  margin-bottom: 1rem;
}

.pf .proj-gist {
  font-size: 1.08rem;
  opacity: 0.92;
  max-width: 58ch;
  margin-bottom: 1.6rem;
}

.pf .tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: -0.4rem 0 1.4rem;
  max-width: 58ch;
}
.pf .tags li {
  font-size: 0.74rem;
  letter-spacing: 0.02em;
  color: var(--muted);
  background: rgba(236,234,227,0.05);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.2rem 0.55rem;
}

.pf .qa { display: grid; gap: 1.5rem; max-width: 60ch; }
.pf .qa dt {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--accent-dim);
  margin-bottom: 0.3rem;
}
.pf .qa dd { font-size: 1rem; opacity: 0.87; }

.pf .toggle {
  margin-top: 1.6rem;
  background: none;
  border: 1px solid var(--line);
  color: var(--paper);
  font-family: 'Karla', sans-serif;
  font-size: 0.88rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color .18s ease, color .18s ease;
}
.pf .toggle:hover { border-color: var(--accent); color: var(--accent); }
.pf .toggle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

.pf .stat {
  margin-top: 2rem;
  padding: 1.5rem 0 1.5rem 1.5rem;
  border-left: 2px solid var(--accent);
  max-width: 46ch;
}
.pf .stat b {
  display: block;
  font-family: 'Fraunces', serif;
  font-variation-settings: 'SOFT' 60, 'WONK' 1;
  font-weight: 600;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  line-height: 1.05;
  color: var(--accent);
  letter-spacing: -0.02em;
}
.pf .stat span {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.93rem;
  color: var(--muted);
}

.pf .links {
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.pf .links a {
  font-size: 0.86rem;
  color: var(--paper);
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.45rem 0.85rem;
  transition: border-color .18s ease, color .18s ease;
}
.pf .links a:hover { border-color: var(--accent); color: var(--accent); }
.pf .links a.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--ink);
  font-weight: 700;
}
.pf .links a.primary:hover { background: var(--paper); border-color: var(--paper); color: var(--ink); }
.pf .links a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.pf .links .none {
  font-size: 0.86rem;
  color: var(--muted);
  padding: 0.45rem 0;
}

/* ---------- killed ---------- */
.pf .killed { background: var(--panel); }
.pf .kill-item {
  padding: 2rem 0;
  border-top: 1px solid var(--line);
  max-width: 62ch;
}
.pf .kill-item:last-child { border-bottom: 1px solid var(--line); }
.pf .kill-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}
.pf .kill-item p { font-size: 0.99rem; opacity: 0.85; }
.pf .kill-verdict {
  margin-top: 0.9rem;
  font-family: 'Fraunces', serif;
  font-size: 0.95rem;
  color: var(--accent);
}

/* ---------- contact ---------- */
.pf .contact h2 { font-size: clamp(1.9rem, 5vw, 3rem); margin-bottom: 1.5rem; }
.pf .contact a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(79,182,166,0.35);
  padding-bottom: 1px;
}
.pf .contact a:hover { border-bottom-color: var(--accent); }
.pf .contact a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.pf .contact-lines { margin-top: 2rem; font-size: 1.05rem; display: grid; gap: 0.7rem; }

.pf footer {
  padding: 2.5rem 0 3.5rem;
  font-size: 0.82rem;
  color: var(--muted);
  border-top: 1px solid var(--line);
}

@media (prefers-reduced-motion: reduce) {
  .pf * { animation: none !important; transition: none !important; }
}
`;

const PROJECTS = [
  {
    id: "does-it-comp",
    tags: ["Claude API", "Python", "Streamlit", "SQLite", "BeautifulSoup", "pytest", "uv", "Built with Claude Code"],
    title: "Product Compatibility Agent",
    problem: "“Will this work with that?” is a question nobody wants to own.",
    body:
      "Resellers constantly ask whether one product works with another. Sales reps can often find the answer, but they won't give it — if they're wrong, it's on them. So every one of these questions lands on the solutions team, and each one pulls an engineer off the deeper technical work they're actually staffed for.",
    status: "Live demo",
    chip: "live",
    links: [
      { label: "Try it", url: "https://does-it-comp.streamlit.app", primary: true },
      { label: "Code", url: "https://github.com/adiyengar/does-it-comp" },
    ],
    solved: [
      [
        "Reframing it",
        "This is a risk-ownership problem, not a lookup problem. The value isn't finding the answer — it's an answer that's cited, logged, and backed by the institution instead of by one nervous rep. And when the evidence isn't there, a clean hand-off to a human instead of a guess.",
      ],
      [
        "The approach",
        "The agent pulls public vendor evidence — Microsoft Teams certified hardware, Cisco compatibility data — and grades it in code. Only an explicit vendor statement that two specific parts work together is strong enough to answer automatically. Everything weaker goes to an expert.",
      ],
      [
        "The decision that mattered",
        "Whether to answer or escalate is decided by a deterministic, unit-tested Python function, never by a prompt. “Escalate if you're unsure” is a suggestion a model can talk itself out of, and a model's opinion of its own confidence isn't a control. The gate scores the situation instead: evidence strength, question type, whether sources disagree, how old the evidence is.",
      ],
      [
        "Four answers, not two",
        "Confirmed; compatible with conditions (an adapter, a firmware version); not compatible but here's what is; or escalated. The middle two are where the commercial value is, so they don't get flattened into yes or no.",
      ],
      [
        "Escalation that makes the system smarter",
        "An escalation arrives with the research done and a draft answer written, so the expert's job is a 30-second verdict rather than a research task. That verdict is saved — the next person to ask the same question gets an instant, cited answer.",
      ],
    ],
  },
  {
    id: "semantic-readiness",
    tags: ["Python", "pandas", "NumPy", "SciPy", "Plotly", "Streamlit"],
    title: "Semantic Readiness",
    problem: "Find out your data is the problem before you train on it.",
    body:
      "When an auto-categorization engine gets things wrong, the model takes the blame. Often the real cause is the catalog it learned from: empty fields, three-word descriptions, duplicates, and codes that appear twice in fifty thousand rows. Teams usually discover that after the classifier is built, not before.",
    status: "Live demo",
    chip: "live",
    links: [
      { label: "Try it", url: "https://test-rig1-n5fnqef5pxnjvayjhljumm.streamlit.app", primary: true },
      { label: "Code", url: "https://github.com/adiyengar/test-rig1" },
    ],
    solved: [
      [
        "Where it came from",
        "Our categorization engine ran on semantic search, using open-source embeddings, and was right 52% of the time — too good to throw away, nowhere near good enough to trust, and nobody could see why it was wrong. I prototyped a workbench to inspect and correct its predictions instead of writing a spec for one; my team built the real version and took accuracy to 94%. This tool is the generalized, public-data version of the question that work kept raising: was the data ever good enough?",
      ],
      [
        "The approach",
        "Upload a catalog, map the columns, and get a readiness score out of 100 built from four weighted checks: completeness (30%), description quality (30%), code distribution (20%), and classifier readiness (20%).",
      ],
      [
        "What it tells you",
        "Not just a score — a fix list. Descriptions too short or mostly numbers to classify, duplicate descriptions mapped to different codes, rare codes with too few examples to learn from, and classes so imbalanced a model will simply ignore the small ones. Results export as a report the data owners can work from.",
      ],
      [
        "Why before, not after",
        "Cleaning a catalog is cheap compared with training, evaluating, and debugging a classifier and then learning it was starved of signal from day one. The tool moves that discovery to the start of the project.",
      ],
    ],
  },
  {
    id: "fairplay",
    tags: ["Python", "Streamlit", "Supabase", "Built with Cursor"],
    title: "FairPlay",
    problem: "Household work has a system. The system has no memory.",
    body:
      "Eve Rodsky's Fair Play method makes invisible household labor visible: every task is a card, and whoever holds a card owns all of it — noticing it needs doing, planning it, and doing it. It works. But the deck lives on a kitchen table, the rules blur, and by March nobody remembers who took what. The arguments come back.",
    status: "Being rebuilt",
    chip: "paused",
    links: [{ label: "Code", url: "https://github.com/adiyengar/FairPlay", primary: true }],
    solved: [
      [
        "The approach",
        "Cards become shared records. A couple picks the cards that apply to their home and assigns each one an owner, with who conceives, plans, and executes spelled out. Both people see the same board at any time.",
      ],
      [
        "Keeping it honest",
        "Completions are logged against a minimum standard of care, so “done” means the agreed version of done. Streaks and badges add a light competitive nudge without turning chores into a scoreboard.",
      ],
      [
        "The decision that mattered",
        "Deciding what not to port. The physical deck has rituals — handing a card across the table, the weekly check-in — and half of what makes the method work would die in a straight translation to screens. The software holds the memory; the conversations stay human.",
      ],
      [
        "Where it stands",
        "The first version ran on Streamlit and Supabase. It proved the idea and outgrew the tools: the interface feels stale and the code got clunky. It's being rebuilt rather than patched, and the live link comes back when that's done.",
      ],
    ],
  },
  {
    id: "kanban",
    tags: ["OWL-ViT", "Hugging Face Transformers", "PyTorch", "OpenCV", "Python", "SQLAlchemy", "Streamlit"],
    title: "Inventory Monitor",
    problem: "The empty bin nobody reports.",
    body:
      "Shop floors run two-bin kanban: work from the front bin, and when it's empty, flip its card to trigger a reorder. Nobody has to count anything — the empty bin is the signal. But the whole system hangs on a person doing a boring task at the least interesting moment of their day. When nobody flips the card, the failure is invisible until the line stops.",
    status: "In testing — v2 in progress",
    chip: "building",
    links: [{ label: "Code", url: "https://github.com/adiyengar/inventory-monitor", primary: true }],
    solved: [
      [
        "Reframing it",
        "Not a parts counter. The job is removing the one human step from a system that otherwise works: a camera watches the bins, so the empty bin reports itself — which is what the kanban card was always meant to do.",
      ],
      [
        "Numbers first",
        "I built the ROI calculator before the model: camera, install, and running cost against hours of manual counting and the cost of a stopped line. If the numbers hadn't worked, there was no reason to write the rest.",
      ],
      [
        "Why a camera",
        "Load cells under each bin are reliable but mean retrofitting every bin on the floor. IoT dispensers count accurately and cost a fortune. Photo-assisted counts are cheap and still manual. Cameras won on one thing: nobody has to change how they work.",
      ],
      [
        "The first model was wrong",
        "I started with open-vocabulary object detection (OWL-ViT). Four hundred loose screws aren't four hundred detectable objects — they overlap, they're identical, they're tiny — so it got worse the fuller the bin was, which is exactly backwards. The rebuild uses classical computer vision that measures how depleted a bin looks instead of counting what's in it. Kanban never needed a number; it needed a threshold.",
      ],
      [
        "Where it stands",
        "The depletion approach is built and needs training data: footage of real bins at known fill levels. Rather than own that dataset, I'm building calibration into setup, so each site trains against its own bins, parts, and lighting. The long-term shape is a camera and a Raspberry Pi per station, with an admin panel for adding new sites.",
      ],
    ],
  },
  {
    id: "candy-days",
    tags: ["Next.js", "React", "Supabase Postgres", "Twilio", "Vercel", "Playwright", "Built with Claude Code"],
    title: "Candy Days Dispatch",
    problem: "Staffing a city's street corners without double-booking anyone.",
    body:
      "A fundraiser needs volunteers covering street-corner shifts across a city over one weekend. Matching people to shifts by phone and spreadsheet breaks down past a few dozen volunteers, and it's easy for two people to believe they both have the same corner — which nobody notices until someone arrives to find it already taken, or empty.",
    status: "Built & deployed — SMS awaiting carrier approval",
    chip: "building",
    links: [{ label: "Try the sign-up", url: "https://candy-days-dispatch.vercel.app", primary: true }],
    solved: [
      [
        "The approach",
        "A volunteer fills out a web form and is texted their three best open shifts, ranked by which corners are hardest to fill. They reply 1, 2, or 3 to claim one, get a confirmation, and can text CANCEL if plans change. One person can hold shifts across several days.",
      ],
      [
        "The decision that mattered",
        "Two people replying for the same shift in the same second must never both get it. That's a database problem, not a UI one: claiming a shift is a single atomic Postgres function, never read-then-write from application code, where a race condition would quietly overbook.",
      ],
      [
        "The unglamorous half",
        "The Twilio webhook verifies the signature on every incoming text, or anyone could pose as a volunteer. Phone numbers are normalized to one strict format on both the form and the server, because a mismatch silently breaks the lookup that turns a bare “1” back into a shift.",
      ],
      [
        "Where it stands",
        "The software is done; the phone network isn't. Texting from a new number needs carrier campaign registration, which takes days and blocks even test messages meanwhile. Built spec-first with Claude Code: schema, atomicity rules, and security requirements were written down before any application code.",
      ],
    ],
  },
  {
    id: "fonduey",
    tags: ["n8n", "Typeform", "OpenAI API", "Suno", "Mailchimp"],
    title: "The Fonduey",
    problem: "Take a moment. Make it cheesy.",
    body:
      "Life's special moments need to be enjoyed and immortalized — and what better way to celebrate something than with a song? Tell The Fonduey about the person and the occasion, and it writes and records a song just for them. The whole thing is cheesy. That's the point.",
    status: "Live",
    chip: "live",
    links: [{ label: "Visit thefonduey.com", url: "https://thefonduey.com", primary: true }],
    solved: [
      [
        "The approach",
        "No custom backend anywhere. Typeform collects the brief, n8n orchestrates, the OpenAI API writes the lyrics, Suno records the song, and Mailchimp delivers it. The whole product is glue between tools that already exist.",
      ],
      [
        "The decision that mattered",
        "Defining a good song before automating anything. Automation is easy until the output is generative — then there's no pass or fail to check against. Without an evaluation standard up front, I'd have built a machine that produced garbage very reliably.",
      ],
      [
        "What it taught me",
        "The end-to-end flow beats any single step in it. The lyrics can be perfect and the product still fails if the email lands in spam.",
      ],
    ],
  },
  {
    id: "concierge",
    title: "Event Concierge",
    problem: "The show you'd love is two miles away, and you'll never hear about it.",
    body:
      "Small artists struggle to find their audience, and big ticketing platforms are bad at discovery — they surface what's already selling. The club night, the unsigned DJ, the new band in your city this week: all invisible unless you already know where to look.",
    status: "Shaping the problem",
    chip: "building",
    links: [],
    linksNote: "Nothing to click yet — it's still a problem, not a build.",
    solvedLabel: "Where it's headed",
    solved: [
      [
        "The idea",
        "Something you can talk to. It reads what you actually listen to and tells you what's on nearby this week, in a voice that feels like a friend in the know rather than a recommendation feed.",
      ],
      [
        "The hard part",
        "Inventory. The shows most worth knowing about are exactly the ones with no structured listing behind them, so the first problem to solve is finding them at all — before any of the conversation matters.",
      ],
    ],
  },
];

const KILLED = [
  {
    name: "Alfred",
    body:
      "A private personal assistant that ran locally on my own device — SwiftUI, calendar integration, nothing going to anyone's cloud. I had it building and running — then OpenClaw showed up, did the same job better, gave it away for free, and picked up a hundred thousand GitHub stars in a few weeks.",
    verdict:
      "Killed it. When the open-source world solves your problem in public, continuing is ego, not strategy.",
  },
  {
    name: "The ingredient scanner",
    body:
      "Scan a barcode, look the product up, flag the concerning ingredients. I built it in Streamlit because Streamlit is where I build things quickly — and then discovered Streamlit can't do camera-based barcode scanning properly. The workaround was photograph the label and type the numbers in by hand, which is not a product, it's a chore.",
    verdict:
      "Killed it. I'd chosen a tool before I'd understood the one thing the product actually had to do.",
  },
];

function Project({ p }) {
  const [open, setOpen] = useState(false);
  const panelId = `${p.id}-solved`;
  return (
    <article className="proj" id={p.id}>
      <div className="proj-top">
        <h3>{p.title}</h3>
        <span className={`chip ${p.chip}`}>{p.status}</span>
      </div>
      <p className="proj-problem">{p.problem}</p>
      <p className="proj-gist">{p.body}</p>
      {p.tags && (
        <ul className="tags" aria-label="Technologies used">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <div className="links">
        {p.links.length > 0
          ? p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className={l.primary ? "primary" : undefined}
              >
                {l.label} ↗
              </a>
            ))
          : p.linksNote && <span className="none">{p.linksNote}</span>}
      </div>
      <button
        className="toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {open ? "Hide" : p.solvedLabel || "How I solved it"}
      </button>
      {open && (
        <dl className="qa" id={panelId} style={{ marginTop: "1.4rem" }}>
          {p.solved.map(([q, a]) => (
            <div key={q}>
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

export default function Portfolio() {
  return (
    <div className="pf">
      <style>{CSS}</style>

      <header className="hero">
        <div className="hero-glow" />
        <div className="wrap">
          <nav className="topbar" aria-label="Profiles">
            <div className="wordmark">adisheshgi.com</div>
            <div className="profiles">
              <a href="https://linkedin.com/in/adisheshiyengar" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://github.com/adiyengar" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </nav>
          <h1>I turn ambiguous AI opportunities into working products.</h1>
          <p className="hero-sub">
            Most discovery work ends in a slide deck. Mine ends in a working
            prototype, so decision-makers can see the idea, test it against
            reality, and commit with confidence.
          </p>
          <p className="hero-who">
            <span className="hero-name">Adi Iyengar.</span> Senior Product
            Manager for AI at Ingram Micro, previously leading personalization
            at Sling TV. Before that, I co-founded Grihachikitsa, an in-home
            healthcare startup in India, and ran brand partnerships in live
            entertainment. Engineer by training, with a master's from
            Northwestern's Medill School.
          </p>
        </div>
      </header>

      <section className="offer">
        <div className="wrap">
          <h2 className="sec-head">How I help</h2>
          <p className="lede">
            I help leadership teams move from “AI could help here” to a
            concrete proof of concept with a clear business case, before
            significant budget is committed.
          </p>
          <ul className="offer-list">
            <li>
              <b>Discovery that ends in a demo</b>
              <span>
                Scoping produces a working prototype instead of a requirements
                document, so stakeholders align on something real rather than
                a description of it.
              </span>
            </li>
            <li>
              <b>Feasibility PoCs</b>
              <span>
                Is this buildable, what does it cost, and where does it break?
                Answered in weeks, with the ROI case attached.
              </span>
            </li>
            <li>
              <b>Human-in-the-loop AI</b>
              <span>
                Capturing what your specialists know and designing the review
                process around the model, so errors are caught before they
                reach customers.
              </span>
            </li>
            <li>
              <b>Clear technical communication</b>
              <span>
                Translating engineering trade-offs into decisions business
                leaders can act on, with a narrative that holds up in front of
                a steering committee.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="sec-head">The work</h2>
          <p className="lede work-intro">
            Each one starts with the problem. If it's interesting, open it up to
            see how I went after it — and where there's a working version, click
            through and push on it. Status labels are honest: some are live,
            some are mid-rebuild, one is still just a problem.
          </p>
          <div style={{ marginTop: "2.5rem" }}>
            {PROJECTS.map((p) => (
              <Project key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="killed">
        <div className="wrap">
          <h2 className="sec-head">What I stopped building, and why</h2>
          <p className="lede">
            The expensive failure in this line of work isn't picking the wrong
            approach. It's noticing and carrying on anyway.
          </p>
          <div style={{ marginTop: "2rem" }}>
            {KILLED.map((k) => (
              <div className="kill-item" key={k.name}>
                <h3>{k.name}</h3>
                <p>{k.body}</p>
                <p className="kill-verdict">{k.verdict}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap narrow">
          <h2>Let's talk about a problem you're stuck on.</h2>
          <p className="lede">
            Bring me something ambiguous. I'll come back with a thing you can
            open.
          </p>
          <div className="contact-lines">
            <div>
              <a href="mailto:adisheshgi@gmail.com">adisheshgi@gmail.com</a>
            </div>
            <div>
              <a href="https://linkedin.com/in/adisheshiyengar" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div>
              <a href="https://github.com/adiyengar" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          adisheshgi.com — things I've built, and why.
        </div>
      </footer>
    </div>
  );
}
