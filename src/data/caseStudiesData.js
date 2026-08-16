import asap1 from '../assets/asap/Container-1.png'
import asap2 from '../assets/asap/Container-2.png'
import asap3 from '../assets/asap/Container-3.png'
import asap4 from '../assets/asap/Container-4.png'
import asap5 from '../assets/asap/Container-5.png'
import asap6 from '../assets/asap/Container-6.png'
import asap7 from '../assets/asap/Container-7.png'
import asap8 from '../assets/asap/Container-8.png'

export const caseStudiesData = {
  ASAP: {
    title: 'ASAP',
    subtitle: 'Executive Functioning App for Students',
    client: 'OCAD University x Google Scholar Labs',
    role: 'Lead Product Designer',
    timeline: '3 Months (Fall 2025)',
    services: 'UX Research, AI Prototyping, Interface Design',
    aboutTitle: 'About Project',
    aboutText: 'ASAP is an AI-powered mobile app designed to help college students build independent planning skills by breaking assignments into manageable steps scaffolding executive function until the student no longer needs the tool.',
    
    problemHeading: 'For many students planning was never taught. It was just expected.',
    problemText: 'When students move from high school to college, three external supports vanish at once: fixed schedules, adult intervention, and peer accountability. The system that managed their behavior was never designed to transfer ownership to them.',
    problemQuote: '“In high school, 70% of the structure was externally provided. In college I have to do the exact opposite, and I don\'t know where to begin.”',
    problemQuoteAuthor: 'Undergraduate interview participant',
    
    metrics: [
      { value: '~25', label: 'Age when the prefrontal cortex fully matures' },
      { value: '#1', label: 'EF deficits predict first-year failure better than motivation or grades' },
      { value: '3', label: 'External supports lost simultaneously at transition' },
      { value: '84', label: 'Prototype versions iterated before the design stabilized' }
    ],

    aiHeading: 'AI Accelerated Every Phase. We Directed Every Decision.',
    aiPhases: [
      {
        phase: 'RESEARCH',
        tools: ['Anara', 'Google Scholar Labs'],
        desc: 'Synthesized root causes of executive functioning deficits across scholarly literature pulling findings from neuroscience, educational psychology, and HCI that would have taken weeks manually.',
        insight: 'What AI gave us: a map of the problem space. What we added: the judgment to identify which 5 of 15 insights actually mattered for design.'
      },
      {
        phase: 'PROTOTYPE',
        tools: ['Figma Make', 'Claude Opus 4.6'],
        desc: 'A fully interactive 4-screen prototype in one evening. We iterated 84 versions — testing layout, flow, and interaction at a frequency impossible in traditional Figma.',
        insight: 'What AI gave us: ideas rendered before we\'d fully articulated them. What we added: the discipline to reject 83 versions and know why 84 was right.'
      },
      {
        phase: 'TESTING',
        tools: ['Claude', 'Notebook LM'],
        desc: 'Generated 3 synthetic personas and ran an AI heuristic review using Nielsen\'s principles to identify structural gaps before real human testing.',
        insight: 'What AI missed entirely: emotional variability, mood-based decision-making, the psychological weight of being first-generation. That required a real human.'
      }
    ],

    solutionsHeading: 'The Solutions',
    solutionsList: [
      'One assignment at a time — no overwhelming lists',
      'AI suggests subtasks with reasons and time estimates; student edits freely',
      'Focus mode locks everything except the current task',
      'Timer runs in standard or Pomodoro mode',
      'Independence bar tracks self-sufficiency — as it grows, AI steps back'
    ],
    solutionsQuote: 'The success of this app is measured by the student needing it less over time.',

    competitiveHeading: 'Competitive Analysis',
    competitiveText: 'Google Calendar, Notion, Todoist, Apple Reminders, Monday.com, and Focus To-Do all sit in that left cluster — different feature sets, same job: hold the list for you, forever. Trevor AI gets closer, coaching and auto-scheduling, but it never lets go of the wheel.\n\nASAP is the only one built to work its way out of a job. Every other product wins when you open it again tomorrow. ASAP wins when you don\'t need to.',

    flowHeading: 'User Flow',
    flowSummary: 'One task in, one step out — ASAP never shows the user more than the single next action, with the AI escalating help (clarify → break down → coach) only when needed.',

    insightHeading: 'Synthetic vs. Human Testing',
    insightText: 'Synthetic users were logical and consistent. Real users aren\'t. Kshitij\'s insight — that mood determines what\'s actually doable — completely changed how we think about priority.',
    insightGrid: [
      { name: 'Maya, 18', tag: 'First-year • no disability', desc: 'Maya missed the explainability link.' },
      { name: 'Jordan, 20', tag: 'ADHD • skeptical', desc: 'Jordan needed a mid-task "I\'m stuck" option.' },
      { name: 'Priya, 19', tag: 'First-gen student', desc: 'Felt the "Low confidence" label reflected on her, not the AI.' },
      { name: 'Kshitij Tapre, 26', tag: 'ADHD • grad student • think-aloud', desc: 'Agreed the single-task timer reduced distraction and the breakdown was a useful starting point — but added something no synthetic persona caught: even high-priority tasks get postponed when they feel emotionally overwhelming. Mood governs motivation. AI follows logic. Real users don\'t.' }
    ],

    pivotHeading: 'The Pivot: Clinical Transparency vs. Empathetic Language',
    pivotSubheading: 'The feature we built to help was the one that caused harm.',
    pivotBefore: {
      label: 'Before',
      title: 'Low confidence',
      desc: 'Clinical label to signal AI uncertainty. AI testing: no issues flagged.'
    },
    pivotAfter: {
      label: 'After',
      title: 'This is my best guess',
      desc: 'Natural language that owns AI limitation without reflecting on the user.'
    },
    pivotCaption: 'Priya read "Low confidence" as a judgment of herself, not the AI. For a first-generation student already battling imposter syndrome, that one label did more harm than good. Transparency without empathy is just data.',

    lessons: [
      { title: 'Speed is real — but so is fragility', desc: 'Figma Make built a prototype in one evening, then broke under too many prompts. Fast, but brittle.' },
      { title: 'Ethics surface late — unless you look early', desc: 'The confidence label harm only surfaced in Phase 4. One checkpoint at the start isn\'t enough.' },
      { title: 'Over-reliance is the core paradox — and it\'s unresolved', desc: 'We built an AI tool to fix AI dependency. The students who need it most have to open it at the exact moment they\'re avoiding work.' },
      { title: 'Test with real users earlier', desc: 'A human in Phase 2 would have caught the confidence label and mood-priority gaps weeks sooner.' }
    ],

    reflections: [
      { title: 'Where AI helped', desc: 'Research synthesis in hours. A prototype in one evening. Synthetic personas that caught structural issues before any real user saw them.' },
      { title: 'Where it fell short', desc: 'Synthetic users were emotionally flat. Figma Make broke under complexity. AI rewards shallow iteration if you let it.' },
      { title: 'What we\'d do next', desc: 'Design for the worst day. Mood & energy need to be first-class inputs not edge cases. Next version needs a low-friction "I can\'t right now" mode.' }
    ],
    conclusion: 'The goal is not helping students finish work faster. It is helping them eventually not need the system at all.',
    images: [
      'https://placehold.co/1200x800/e9d5ff/111118?text=App+Mockup+-+Focus+Mode',
      'https://placehold.co/1200x800/f3f4f6/111118?text=Wireframes+-+Initial+Sketches',
      'https://placehold.co/1200x800/e9d5ff/111118?text=Prototype+-+4+Screens',
      'https://placehold.co/1200x800/f3f4f6/111118?text=Before+%26+After+-+Confidence+Label'
    ]
  },
  ReturnLoop: {
    title: 'ReturnLoop',
    subtitle: 'Frictionless Package Returns',
    client: 'ReturnLoop Co.',
    role: 'Lead UX Designer',
    timeline: '2 Months (Winter 2025)',
    services: 'UX Research, Interaction Design, Service Design',
    images: [
      'https://placehold.co/1200x800/fca5a5/111118?text=App+Mockup+-+Home+Screen',
      'https://placehold.co/1200x800/fef2f2/111118?text=Personas+-+Alex+%26+Margaret',
      'https://placehold.co/1200x800/fca5a5/111118?text=Key+Screens+-+Scan+%26+Track'
    ],
    
    aboutTitle: 'About Project',
    aboutText: "Returning something online takes twelve minutes. It usually takes five days to active find time for it. ReturnLoop connects people who have a package ready to go with drivers already passing through their neighborhoods, so the return happens instantly.",
    
    problemHeading: 'The Return I Never Made',
    problemText: "I bought something online, decided quickly I didn't want it, and never got around to returning it. The package sat in my closet until the window closed. Friends had the same story: not 'I don't want to return things,' but 'I meant to, and then I forgot.' The gap is between intent and execution.",
    
    researchHeading: 'Research: Is the problem that people don\'t know where to go, or that getting out the door is the real barrier?',
    researchSubheading: 'Conducted a CAR-L (Cognitive Appraisals Reflective Logic) study including 8 semi-structured interviews with users aged 21-63 to gather qualitative text and understand friction.',
    
    researchFindings: [
      {
        title: 'Printer Barrier',
        desc: "Print label was the primary friction point. Users don't have printer setup at home."
      },
      {
        title: 'Scheduling Fear',
        desc: "A full day passed in anticipation — user felt 'locked' in. User was reluctant to leave the house, feared missed package."
      },
      {
        title: 'Price vs. Effort',
        desc: "Price barrier is real but relative — almost nobody objected to $4-$5. Recurring question was why the returner has to bear the effort of dropping it off."
      }
    ],

    researchSpotlight: {
      quote: "I tried to return it three times. The first time the printer was out of ink, the second time the line was too long, and the third time they closed early.",
      author: "Margaret, 55 — Retired Teacher"
    },

    competitiveHeading: 'Where ReturnLoop Fits',
    competitiveSubheading: 'Three core columns appeared across every conversation. Each was directly linked to a service design decision.',
    competitiveTable: [
      {
        feature: 'Scope',
        uber: 'Eats only',
        doordash: 'Any retailer',
        returnloop: 'Any retailer',
        highlight: true
      },
      {
        feature: 'Context',
        uber: 'In-app feature',
        doordash: 'In-app tab',
        returnloop: 'Standalone',
        highlight: true
      },
      {
        feature: 'Origin',
        uber: 'Single trip',
        doordash: 'Single trip',
        returnloop: 'Batched',
        highlight: true
      },
      {
        feature: 'Proof',
        uber: 'Photo',
        doordash: 'Photo',
        returnloop: 'Multi-entity',
        highlight: true
      }
    ],
    competitiveSummary: 'Driver aggregates: multiple returns in one trip. Keeps cost low.',

    insightsHeading: 'What the research revealed, and what it changed.',
    insightsSubheading: 'Three patterns appeared across every conversation. Each one directly shaped a design decision.',
    insightsTable: [
      {
        research: '"It just sits there. I\'ll do it tomorrow." — Jack',
        design: 'A flexible pickup window, not instant dispatch'
      },
      {
        research: '"If I need to print a label, I give up." — Alex',
        design: 'Sender scans the digital label / barcode'
      },
      {
        research: '"Who is this, and did it arrive?" — nearly everyone',
        design: 'Three notifications: on the way, picked up, carrier confirmed'
      }
    ],

    pivotHeading: 'The Moment the Design Had to Change',
    pivotText: 'The first version marked a return "complete" the instant a driver scanned it. Two interview stories proved that wasn\'t enough — one refund had already issued before the trip, another reached a carrier as it was closing. So the flow now waits for the carrier\'s own confirmation, and the copy shifted from "Carrier confirmed" to "FedEx has your package."',

    personasHeading: 'User Personas',
    personasText: 'I built personas straight from the interviews — grouping people by why they stalled, not just who they were, so each persona represents a distinct reason the process breaks down.',
    personas: [
      {
        name: 'Alex, 28',
        type: 'The Avoidant Planner',
        quote: '"If I need to print a label, I give up."'
      },
      {
        name: 'Margaret, 65',
        type: 'The Hesitant Outsourcer',
        quote: 'Lack of confidence, not lack of time. Needed help printing.'
      }
    ],

    journeyHeading: 'Journey Map',
    journeySubheading: 'Current experience vs ReturnLoop — where emotional low points occur and what resolves them.',
    journeyMap: [
      {
        stage: 'Decide',
        today: 'Low urgency',
        returnloop: 'Deadline captured'
      },
      {
        stage: 'Prepare',
        today: 'Prints label, packs',
        returnloop: 'Scans digital label / barcode, if no printing'
      },
      {
        stage: 'Drop-off',
        today: 'Carrier/Closed',
        returnloop: 'Driver comes to door'
      },
      {
        stage: 'Delay',
        today: 'Sits, window ticking',
        returnloop: 'One booking, done'
      },
      {
        stage: 'Outcome',
        today: 'Makes it or gives up',
        returnloop: 'Refund secured'
      }
    ],

    flowHeading: 'Key Screens',
    flowSteps: ['Welcome', 'Login', 'Home', 'Scan Label', 'Pickup Window', 'Live Tracking', 'Carrier Confirmed', 'Chat with Driver'],
    flowSummary: 'Each answers a specific finding: scanning removes printing (Alex), flexible windows replace instant dispatch (Jack), live tracking gives proof (Saddie), carrier confirmation closes the loop independently, and driver chat gives a human channel (Margaret).',

    methodologyHeading: 'Key Takeaway',
    methodologyText: 'DoorDash built a return pickup feature in 2023. None of the participants knew it existed. The problem wasn\'t a missing feature — it was a missing experience designed around how returns actually fail for real people.\n\nUber and DoorDash proved the mechanic works. What they didn\'t build is the trust. People don\'t want a cheaper return — they want one they don\'t have to think about twice.'
  },
  PetClear: {
    title: 'PetClear',
    subtitle: 'Interactive Guide',
    client: 'PetClear Health',
    role: 'Product Strategist',
    timeline: '4 Months (Spring 2026)',
    services: 'UX Research, Information Architecture, Web App Design',
    images: [
      'https://placehold.co/1200x800/bfdbfe/111118?text=App+Mockup+-+PetClear+Dashboard',
      'https://placehold.co/1200x800/eff6ff/111118?text=Airline+Audit+-+Spreadsheet',
      'https://placehold.co/1200x800/bfdbfe/111118?text=User+Flow+-+Onboarding+%26+Scan'
    ],
    aboutTitle: 'About Project',
    aboutText: "Traveling with a pet shouldn't be a guessing game. Every country, airline, and document comes with different rules, deadlines, and requirements. PetClear gives you a personalized checklist based on your pet and travel route showing exactly what you need, where to get it, and when it's due. Everything organized. Everything tracked. No surprises at the airport.",
    
    problemHeading: 'Not a failure of effort, but information at exact moments matter the most. PetDoc fixes that.',
    problemText: 'Pet owners have no single place that tells them exactly what their pet needs to travel. Airlines take the pet fee and say nothing about what comes next. Owners show up at the airport missing a document they never knew existed.',
    
    insightHeading: 'The Three Gaps',
    insightGrid: [
      {
        name: 'Information Gap',
        tag: 'Requirements invisible during booking',
        desc: 'NOC, fitness certs, timing windows'
      },
      {
        name: 'Trust Gap',
        tag: 'No single source of truth',
        desc: 'Airline, vet, blog, forum all say different things.'
      },
      {
        name: 'Memory Gap',
        tag: 'Every trip starts from scratch',
        desc: 'Docs in camera rolls. Requirements change silently.'
      }
    ],

    researchHeading: 'Research',
    researchSubheading: 'I reviewed pet policy pages of 10 airlines and read Reddit threads on r/pettravel and r/expats. I then called each airline directly. The same gap appeared every time — no route-specific, animal-specific document checklist anywhere.',
    
    auditHeading: 'Airline Website Audit — 10 airlines reviewed',
    auditSubheading: 'All 10 showed carrier size and pet fee. None showed route specific requirements, timing rules, or a document checklist.',
    auditTable: [
      { airline1: 'Air India', finding1: 'No NOC mention anywhere on the page', airline2: 'Singapore Airlines', finding2: 'Approved lab list for titre tests not mentioned' },
      { airline1: 'IndiGo', finding1: '48hr fitness cert window not stated', airline2: 'Qatar Airways', finding2: 'No country specific import rules shown' },
      { airline1: 'Emirates', finding1: 'Checklist only appears after booking — too late', airline2: 'British Airways', finding2: 'AHC 10-day validity window absent' },
      { airline1: 'United Airlines', finding1: 'Check destination requirements — no link, no detail', airline2: 'Air France', finding2: 'No processing timelines or layover rules' },
      { airline1: 'Lufthansa', finding1: 'No timing windows or USDA endorsement mentioned', airline2: 'Akasa Air', finding2: 'No health cert guidance at all' }
    ],
    auditSummary: 'Pattern: every airline listed carrier sizes and fees. None generated a route-specific, animal-specific document checklist.\n\n5 of 7 airlines could not or would not give complete documentation requirements on call. Lufthansa explicitly refused. Only United gave a clear answer for domestic travel.',

    personasHeading: 'User Persona',
    personasText: 'Five real participants. Different failure points.\nAny age • any pet • domestic or international • always underprepared by the system',
    personas: [
      {
        name: 'Goals',
        type: 'Travel with pet, no last minute surprises',
        quote: 'One source, fully trusted. Confirmed ready before the airport.'
      },
      {
        name: 'Pain Points',
        type: 'Airline website incomplete or vague',
        quote: 'Conflicting answers across sources. Requirements discovered too late to act.'
      }
    ],
    researchSpotlight: {
      quote: '"I did everything I was supposed to do. Nobody told me there was more."',
      author: 'Participants: Kshitij (missing NOC), Aryan (fitness cert via WhatsApp), Akansha (4 conflicting answers), Peter (vaccine 5 days short), Osaris (cert expired unnoticed)'
    },

    solutionsHeading: 'PetClear — a standalone tool, not a feature inside an airline app.',
    solutionsQuote: 'Enter your pet and your route. Get the exact documents you need, where to get them, and how long you have. Everything in one place.',
    solutionsList: [
      'Design principle: PetClear does not change any regulation. It makes existing requirements visible, organised, and timely — at the right moment.',
      'AI pet scan: Identifies breed, starts profile',
      'Trip checkpoint: Route specific checklist with lead times',
      'Vaccine tracker: Expiry alerts + country validity',
      'Document vault: One place, all docs, always current',
      'Community: Real travelers, same route'
    ],

    flowHeading: 'User Flow',
    flowSteps: ['Sign up', 'Create profile', 'AI pet scan', 'Trip checkpoint', 'Vaccine tracker', 'Document vault', 'History', 'Community'],
    flowSummary: 'One entry, one profile - sign-up and login converge fast so onboarding only happens once.\nThe scan is the trigger - everything upstream is setup; everything downstream is the live trip.\nBranch to track, merge to remember - destination and document tracking run in parallel, then fold into one shared history.',

    beforeAfterHeading: 'Before & After',
    beforeAfterTable: [
      { before: 'Search across 5 sources — all say something different', after: 'Scan pet — profile started, route checklist generated' },
      { before: 'Pay pet fee — no document requirements shown', after: 'Missing docs flagged with sources and lead times' },
      { before: 'Arrive at airport — first time hearing about the document', after: 'Upload docs — vault tracks everything automatically' },
      { before: 'Denied boarding. Pet left behind.', after: 'Arrive verified. Pet travels.' }
    ],

    impactHeading: 'Impact',
    impactList: [
      'Transparency — no surprises at the check-in counter',
      'Less confusion — one source, one checklist',
      'Safer travel — fewer denied boardings, fewer pets left behind',
      'Confidence — pet owners who avoided traveling now have clarity to go ahead'
    ],

    conclusion: 'The problem was never the rules. It was that nobody made them visible. PetClear makes what already exists visible, organized, and timely for the person who needs it most.'
  }
}
