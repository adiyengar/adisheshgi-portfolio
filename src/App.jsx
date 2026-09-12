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

.pf .wordmark {
  font-family: 'Fraunces', serif;
  font-variation-settings: 'SOFT' 100, 'WONK' 1;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  color: var(--accent);
  margin-bottom: 3.5rem;
  position: relative;
}

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

.pf .proj-role {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.pf .proj-gist {
  font-size: 1.08rem;
  opacity: 0.92;
  max-width: 58ch;
  margin-bottom: 1.6rem;
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
  margin-top: 1.9rem;
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
    id: "kanban",
    title: "The empty bin nobody reports",
    status: "In testing — v2 in progress",
    chip: "building",
    role: "Problem framing, options analysis, ROI case, prototype, field testing",
    gist: "Replacing the one human step in two-bin kanban — a camera watches the bins so the reorder signal reports itself.",
    links: [{ label: "Repository", url: "https://github.com/adiyengar/inventory-monitor" }],
    qa: [
      [
        "The system that was already there",
        "Shop floors run two-bin kanban. Every part has two bins: you work from the front one, and when it empties you pull it forward or flip its card, and that's the reorder signal. It's a genuinely elegant system — nobody has to count anything. The empty bin is the data.",
      ],
      [
        "How it fails",
        "Apathy. The whole thing hangs on a person doing a small, boring task at the least interesting moment of their day. Nobody flips the card. So the signal never fires, and the failure is invisible right up until the floor grinds to a halt. It doesn't degrade — it works, and then it doesn't.",
      ],
      [
        "So what am I actually building",
        "Not a parts counter. I'm removing the one human step from a system that otherwise works fine. A camera watching the bins makes the empty bin report itself, which is what the kanban card was always supposed to do.",
      ],
      [
        "Why a camera and not something else",
        "Load cells under each bin are reliable but mean retrofitting every bin on the floor. IoT dispensers count accurately and cost a fortune. Photo-assisted manual counts are cheap and still manual. Cameras won on one thing: nothing about how people work has to change.",
      ],
      [
        "The first model was wrong",
        "I started with OWL-ViT — open-vocabulary object detection. Reasonable first guess, completely wrong, and wrong for the same reason a human can't do this job: four hundred loose screws in a bin are not four hundred detectable objects. They overlap, they're identical, they're tiny. The detector fails worse the fuller the bin gets, which is exactly backwards.",
      ],
      [
        "What it is now",
        "Classical computer vision — pixel-coverage thresholding that estimates how depleted a bin is rather than counting what's in it. That's the right shape, because two-bin kanban never needed a number. It needed a threshold. \"Effectively empty\" is the only fact the system has to get right.",
      ],
      [
        "Where it is",
        "The density approach is built and needs training data: video of real bins at labelled levels of depletion. Rather than own that dataset myself, I'm building it into an initialisation workflow — each site calibrates against its own bins, parts, and lighting during setup. The data problem becomes a setup step instead of a dependency.",
      ],
    ],
    more:
      "I built the ROI calculator before I built the model — camera cost, install, monthly running cost, weighed against hours of manual counting and the cost of a line stopping. If the numbers hadn't worked there was no reason to write any of this. Longer term the shape is a camera and a Raspberry Pi per station, with an admin panel for provisioning new sites.",
  },
  {
    id: "candy-days",
    title: "Text-to-claim shift dispatch",
    status: "Built & deployed — SMS gated on carrier approval",
    chip: "building",
    role: "Spec, schema design, build, deployment",
    gist: "A volunteer texts back 1, 2, or 3 to claim a shift — the hard part is making sure two people can never claim the same one.",
    links: [{ label: "Live sign-up form", url: "https://candy-days-dispatch.vercel.app" }],
    qa: [
      [
        "The problem",
        "A fundraiser needs volunteers staffing street-corner shifts across a city, on a specific weekend. Matching people to shifts by phone and spreadsheet doesn't scale past a few dozen volunteers, and it's easy for two people to think they both have the same slot.",
      ],
      [
        "What it does",
        "A volunteer fills out a web form. They're texted their three best-available shifts by scarcity. They reply 1, 2, or 3 to claim one, get a confirmation text, and can text CANCEL later if plans change. A volunteer can hold shifts across multiple days.",
      ],
      [
        "The part that actually matters",
        "Two people replying to the same shift in the same second must never both win it. That's not a UI problem, it's a database problem — the claim has to be a single atomic Postgres function called directly, never a read-then-write from application code, or a race condition quietly overbooks a shift no one notices until someone shows up to an empty corner.",
      ],
      [
        "The unglamorous half",
        "The Twilio webhook has to verify every inbound request's signature and reject anything that doesn't match, or anyone can text your system pretending to be a volunteer. Phone numbers get normalized to a strict format on both the form and the server, since a mismatch there silently breaks the lookup that maps a bare \"1\" back to a shift. None of this shows up in a demo, all of it breaks a demo if skipped.",
      ],
      [
        "What surprised me",
        "The code was the easy part. Sending a real text message from a new phone number requires carrier-level campaign registration that can take days to clear and blocks even sending yourself a test message in the meantime — a compliance step with zero relationship to whether the software works.",
      ],
    ],
    more:
      "Built spec-first: schema, atomicity rules, and security requirements were fully specified before a line of application code existed, then built end-to-end with Claude Code against that spec — including the parts of the brief that said 'ask me before inventing this.'",
  },
  {
    id: "prototypes",
    title: "Prototypes as the argument",
    status: "Ongoing",
    chip: "building",
    role: "Concept, PoC build, stakeholder narrative",
    gist: "Building working demos instead of requirements docs, so stakeholders argue with a thing instead of nodding at a description of one.",
    links: [
      { label: "Semantic readiness tool", url: "https://github.com/adiyengar/test-rig1" },
      { label: "Compatibility agent demo", url: "https://github.com/adiyengar/does-it-comp" },
    ],
    qa: [
      [
        "Why I stopped writing requirements",
        "A requirements document gets interpreted. A prototype gets used. Building a rough version of what I'm asking for takes about as long as describing it properly, and it ends the argument about what I meant — because everyone is now looking at the same thing and disagreeing with it specifically.",
      ],
      [
        "The problem",
        "Our categorisation engine ran on semantic search and got the answer right 62% of the time. That's an awkward number — too good to throw away, nowhere near good enough to trust. And nobody could see why it was wrong, which meant nobody could fix it.",
      ],
      [
        "What I prototyped",
        "An internal workbench: a place to inspect what the engine predicted, see what it matched against and how confidently, and correct it where it had gone wrong. I built the prototype instead of specifying it. My team built the real one from there. The linked semantic-readiness tool is the generalized version of that first pass — auditing catalog data for completeness and description quality before it ever reaches a classifier.",
      ],
      [
        "The same move, on a smaller problem",
        "Resellers constantly ask whether one product will work with another. Sales reps won't answer — being wrong carries risk. The solutions team can answer, but every question like this pulls them off the deeper technical work they're actually staffed for. So I built an agent that answers when it can, scores its own confidence, and escalates to a human when the cost of being wrong is too high. A document describing that gets nodded at. A demo gets argued with, and the arguing is the useful part. The linked compatibility-agent demo is that pitch — a deterministic risk gate decides auto-answer versus escalate, never a prompt asked to guess its own confidence.",
      ],
    ],
    stat: {
      figure: "62% → 94%",
      caption:
        "Categorisation accuracy, before and after the workbench gave the team a way to see and correct the engine's reasoning.",
    },
    more:
      "Client and product specifics are left out deliberately — both linked repos are the generalized, public-data versions of what's actually in front of stakeholders. Happy to walk through the real thing in detail on a call.",
  },
  {
    id: "fairplay",
    title: "FairPlay",
    status: "Archived — revivable",
    chip: "paused",
    role: "Concept, design, build",
    gist: "Giving the Fair Play household-labor card system the memory the physical deck never had.",
    links: [{ label: "Repository", url: "https://github.com/adiyengar/FairPlay" }],
    qa: [
      [
        "The problem",
        "Household labour is invisible until it's an argument. Eve Rodsky's Fair Play system fixes that with a physical deck of cards — each card is one task, and whoever holds it owns the whole thing: noticing it needs doing, planning it, and doing it.",
      ],
      [
        "Why software",
        "The card system works. But cards live on a kitchen table, the rules blur, and nobody remembers who took what in March. The problem isn't the method — it's that the method has no memory.",
      ],
      [
        "What it does",
        "Cards get held by a person. Ownership means the full standard, not just execution. Both people can see who holds what, at any time.",
      ],
      [
        "How it's built",
        "Streamlit and Supabase, built with Cursor. The database has since lapsed. It can be stood back up, but I'd rather rebuild it than pretend it's live.",
      ],
    ],
    more:
      "The hard part was never the code. It was deciding what not to port. The physical deck has rituals — handing a card over, the weekly conversation — and half of what makes it work would have died in a straight translation to screens.",
  },
  {
    id: "fonduey",
    title: "The Fonduey",
    status: "Live",
    chip: "live",
    role: "Everything",
    gist: "A custom-song service stitched together entirely from off-the-shelf tools — live, and unapologetically cheesy.",
    links: [{ label: "thefonduey.com", url: "https://thefonduey.com" }],
    qa: [
      [
        "What it is",
        "A custom song service. You tell it about a person and an occasion, and it writes and records a song about them. Unapologetically cheesy, which is the point.",
      ],
      [
        "How it's built",
        "Typeform collects the brief, n8n orchestrates, an LLM writes lyrics, Suno records, Mailchimp delivers. No custom backend anywhere — the whole thing is glue between things that already exist.",
      ],
      [
        "What it taught me",
        "Evals. Automation is easy until the output is generative, and then there's no pass or fail to check against. I had to decide what a good song was before automating anything, or I'd have built a machine that produced garbage very reliably.",
      ],
      [
        "The other lesson",
        "The end-to-end flow beats any single step in it. The lyrics could be perfect and the product still fails if the email lands in spam.",
      ],
    ],
    more: null,
  },
  {
    id: "concierge",
    title: "Event concierge",
    status: "In flight",
    chip: "building",
    role: "Problem shaping",
    gist: "An AI concierge for the show two miles away you'd never otherwise hear about.",
    links: [],
    linksNote: "Nothing to show yet — it's still a problem, not a build.",
    qa: [
      [
        "The problem",
        "Small artists can't find their audience, and the big ticketing platforms are bad at discovery — they surface what's already selling. The show you'd love is two miles away and you'll never hear about it.",
      ],
      [
        "The idea",
        "Something you can talk to. It reads what you actually listen to and tells you about club nights, unsigned DJs, and new bands in your city this week. Insider-feeling rather than algorithmic-feeling.",
      ],
      [
        "Where it is",
        "Still shaping the problem. Inventory is the hard part — the shows worth knowing about are exactly the ones with no structured data behind them.",
      ],
    ],
    more: null,
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
  return (
    <article className="proj">
      <div className="proj-top">
        <h3>{p.title}</h3>
        <span className={`chip ${p.chip}`}>{p.status}</span>
      </div>
      <p className="proj-role">{p.role}</p>
      <p className="proj-gist">{p.gist}</p>
      {p.stat && (
        <div className="stat">
          <b>{p.stat.figure}</b>
          <span>{p.stat.caption}</span>
        </div>
      )}
      <button className="toggle" onClick={() => setOpen(!open)}>
        {open ? "Show less" : "Read the full story"}
      </button>
      {open && (
        <>
          <dl className="qa" style={{ marginTop: "1.4rem" }}>
            {p.qa.map(([q, a]) => (
              <div key={q}>
                <dt>{q}</dt>
                <dd>{a}</dd>
              </div>
            ))}
          </dl>
          {p.more && (
            <dl className="qa" style={{ marginTop: "1.4rem" }}>
              <div>
                <dd>{p.more}</dd>
              </div>
            </dl>
          )}
        </>
      )}
      <div className="links">
        {p.links && p.links.length > 0
          ? p.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))
          : p.linksNote && <span className="none">{p.linksNote}</span>}
      </div>
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
          <div className="wordmark">adisheshgi.com</div>
          <h1>I turn fuzzy problems into something you can click.</h1>
          <p className="hero-sub">
            Most discovery work ends in a deck. Mine ends in a working prototype
            — something your client can push on, disagree with, and use to tell
            you what they actually needed.
          </p>
          <p className="hero-who">
            <span className="hero-name">Adi Iyengar.</span> Engineer by
            training, with a master's in marketing communications from
            Medill. I sold experiences in the music festival business, then
            spent seven years building product at Sling and Ingram Micro.
            Now I use all of it at once.
          </p>
        </div>
      </header>

      <section className="offer">
        <div className="wrap">
          <h2 className="sec-head">What I'm useful for</h2>
          <p className="lede">
            I work with consulting teams who need to move a client from "we
            think AI could help here" to something concrete, fast. The gap
            between those two points is where engagements stall, and it's the
            only thing I do.
          </p>
          <ul className="offer-list">
            <li>
              <b>Discovery that ends in a demo</b>
              <span>
                Scoping sessions produce a prototype instead of a requirements
                document. Stakeholders react to a thing, not to a description of
                a thing.
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
              <b>Expert judgment into systems</b>
              <span>
                Capturing what your specialists know, and building the human
                review loop around it so the model has somewhere to be wrong
                safely.
              </span>
            </li>
            <li>
              <b>Making technical work legible</b>
              <span>
                Translating engineering tradeoffs into architecture business
                leaders will actually read, and narratives that survive
                contact with a steering committee.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="sec-head">The work</h2>
          <p className="lede work-intro">
            Status labels are accurate. One of these is live, one is archived,
            and the one at the top is mid-rebuild because the first approach
            didn't survive testing. I'd rather you know which is which.
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
