import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

import asapHome from '../assets/homescreens/asaphome.png';
import lofiAuthFlow from '../assets/allassets/asap-03b-lofi-01-auth-flow.png';
import lofiHome from '../assets/allassets/asap-03b-lofi-02-home.png';
import lofiBreakdown from '../assets/allassets/asap-03b-lofi-03-breakdown.png';
import lofiBreakdownContd from '../assets/allassets/asap-03b-lofi-04-breakdown-contd.png';
import compMap from '../assets/allassets/asap-05-competitive-positioning-map.png';
import userFlow from '../assets/allassets/asap-06-user-flow.png';

import screenAssignmentList from '../assets/allassets/screens/asap-01-assignment-list.png';
import screenAiReasons from '../assets/allassets/screens/asap-02-ai-reasons.png';
import screenAiBreakdown from '../assets/allassets/screens/asap-03-ai-breakdown.png';
import screenFocusMode from '../assets/allassets/screens/asap-04-focus-mode.png';
import screenTimer from '../assets/allassets/screens/asap-05-timer.png';
export default function AsapCaseStudy() {
  const sections = [
    { id: '01', title: 'About Project' },
    { id: '02', title: 'Problem Statement' },
    { id: '03', title: 'How we used AI' },
    { id: '03b', title: 'Lo-fi wireframes' },
    { id: '04', title: 'Solution + screens' },
    { id: '05', title: 'Competitive analysis' },
    { id: '06', title: 'User flow' },
    { id: '07', title: 'Synthetic vs human' },
    { id: '08', title: 'The pivot' },
    { id: '09', title: 'Lesson from the machine' },
    { id: '10', title: 'Reflection + close' }
  ];

  const metaStrip = [
    { label: 'Role', value: 'Lead Product Designer' },
    { label: 'Timeline', value: '3 Months (Fall 2025)' },
    { label: 'Team', value: '[Team TBD]' },
    { label: 'Tools', value: '[Tools TBD]' },
    { label: 'Platform', value: '[Platform TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType="Process Story"
      projectName="ASAP"
      promiseLine="AI-powered planning app that scaffolds executive function until the student no longer needs it."
      metaStrip={metaStrip}
      heroVisual={asapHome}
      sections={sections}
      prevCase={{ url: '/work/ReturnLoop', name: 'ReturnLoop', promise: 'Frictionless Package Returns' }}
      nextCase={{ url: '/work/PetClear', name: 'PetClear', promise: 'Interactive Pet Travel Guide' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          ASAP is an AI-powered mobile app designed to help college students build independent planning skills by breaking assignments into manageable steps scaffolding executive function until the student no longer needs the tool.
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 Problem Statement */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>For many students planning was never taught. It was just expected.</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            When students move from high school to college, three external supports vanish at once: fixed schedules, adult intervention, and peer accountability. The system that managed their behavior was never designed to transfer ownership to them.
          </p>
          <div style={{ background: '#f0f4f8', padding: '24px', borderRadius: '10px' }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', color: '#171717' }}>
              “In high school, 70% of the structure was externally provided. In college I have to do the exact opposite, and I don't know where to begin.”
            </p>
          </div>
        </div>
        
        {/* Stat strip breakout 1080px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#dcdcdc', border: '1px solid #dcdcdc' }}>
          <div style={{ background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 600 }}>25</span>
            <span style={{ fontSize: '13px', color: '#5f5e5e', lineHeight: 1.4 }}>Age when the prefrontal cortex fully matures</span>
          </div>
          <div style={{ background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 600 }}>#1</span>
            <span style={{ fontSize: '13px', color: '#5f5e5e', lineHeight: 1.4 }}>EF deficits predict first-year failure</span>
          </div>
          <div style={{ background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 600 }}>3</span>
            <span style={{ fontSize: '13px', color: '#5f5e5e', lineHeight: 1.4 }}>Supports lost at once</span>
          </div>
          <div style={{ background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 600 }}>84</span>
            <span style={{ fontSize: '13px', color: '#5f5e5e', lineHeight: 1.4 }}>Prototype versions</span>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 How we used AI */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>How we used AI</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>AI accelerated every phase. We directed every decision.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', gap: '24px', paddingBottom: '24px', borderBottom: '1px solid #dcdcdc' }}>
            <div style={{ fontSize: '10.1px', fontWeight: 500, letterSpacing: '-0.302px', textTransform: 'uppercase' }}>Research<br/><span style={{ color: '#8a8a8a', fontWeight: 400 }}>Anara, Google Scholar, NotebookLM</span></div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI gave us:</strong><br/>A map of the problem space in hours. Synthesized root causes of EF deficits.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What we added:</strong><br/>The judgment to identify which 5 of 15 insights actually mattered for design.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI missed entirely:</strong><br/>Contextual empathy. Data synthesis lacks the nuance of student stress.</div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', gap: '24px', paddingBottom: '24px', borderBottom: '1px solid #dcdcdc' }}>
            <div style={{ fontSize: '10.1px', fontWeight: 500, letterSpacing: '-0.302px', textTransform: 'uppercase' }}>Prototype<br/><span style={{ color: '#8a8a8a', fontWeight: 400 }}>Figma Make, Claude</span></div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI gave us:</strong><br/>Ideas rendered before we'd fully articulated them. Interactive flows instantly.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What we added:</strong><br/>The discipline to reject 83 versions and know why 84 was right.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI missed entirely:</strong><br/>Micro-interactions that build habit. It generates screens, not behaviors.</div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', gap: '24px' }}>
            <div style={{ fontSize: '10.1px', fontWeight: 500, letterSpacing: '-0.302px', textTransform: 'uppercase' }}>Testing<br/><span style={{ color: '#8a8a8a', fontWeight: 400 }}>Claude Opus, synthetic personas</span></div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI gave us:</strong><br/>3 synthetic personas to run heuristic reviews before human testing.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What we added:</strong><br/>Real human testing that uncovered the psychological weight of UI copy.</div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}><strong>What AI missed entirely:</strong><br/>Emotional variability, mood-based decision-making. That required a real human.</div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />
      {/* 03b Lo-fi wireframes */}
      <div id="sec-03b" className="cs-section" data-id="03b" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            The wireframe boards are in the file and they are strong — numbered, state by state, with the AI prompt copy already written in ("not sure where to start? I can help break this into steps"). Show them as boards, not as individual screens: each is a labelled row of three states.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1080px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.4px', textTransform: 'uppercase', color: '#8a8a8a' }}>Getting in</span>
            <img src={lofiAuthFlow} alt="ASAP lo-fi auth flow board" style={{ width: '100%', border: '1px solid #dcdcdc', borderRadius: '12px', background: '#fff' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.4px', textTransform: 'uppercase', color: '#8a8a8a' }}>Home, three states: empty · with task · completed</span>
            <img src={lofiHome} alt="ASAP lo-fi home states board" style={{ width: '100%', border: '1px solid #dcdcdc', borderRadius: '12px', background: '#fff' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.4px', textTransform: 'uppercase', color: '#8a8a8a' }}>The breakdown</span>
            <img src={lofiBreakdown} alt="ASAP lo-fi breakdown board" style={{ width: '100%', border: '1px solid #dcdcdc', borderRadius: '12px', background: '#fff' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.4px', textTransform: 'uppercase', color: '#8a8a8a' }}>Breakdown continued</span>
            <img src={lofiBreakdownContd} alt="ASAP lo-fi breakdown continued board" style={{ width: '100%', border: '1px solid #dcdcdc', borderRadius: '12px', background: '#fff' }} />
          </div>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>
            Note: The flow was tested across four distinct groups (student, career-changer, ECP, entrepreneur) with 16 boards total.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 Solution + screens */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1080px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>One assignment at a time</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>No overwhelming lists. The interface focuses the student entirely on the next immediate action.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
            <img src={screenAssignmentList} alt="Assignment List" style={{ width: '100%', maxWidth: '320px' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>AI suggests subtasks with reasons and estimates, student edits freely</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>The app breaks down complex assignments, providing estimates and rationale, but the student edits freely.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', order: 1 }}>
            <img src={screenAiReasons} alt="AI Breakdown" style={{ width: '100%', maxWidth: '320px' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>Focus mode</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>Locks everything except the current task to build momentum.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
            <img src={screenAiBreakdown} alt="Focus Mode" style={{ width: '100%', maxWidth: '320px' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>Timer (standard / Pomodoro)</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>Keeps track of time spent directly on the active task.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', order: 1 }}>
            <img src={screenFocusMode} alt="Timer Screen" style={{ width: '100%', maxWidth: '320px' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>Independence bar</p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>Visual indicator of progress towards fully independent planning.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
            <img src={screenTimer} alt="Independence Bar" style={{ width: '100%', maxWidth: '320px' }} />
          </div>
        </div>

        <div style={{ maxWidth: '720px', marginTop: '24px' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontStyle: 'italic' }}>The success of this app is measured by the student needing it less over time.</p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Competitive analysis */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'grid', gridTemplateColumns: '480px 420px', gap: '64px', alignItems: 'center' }}>
        <div style={{ background: '#f8f8f8', padding: '40px', borderRadius: '12px', border: '1px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={compMap} alt="Competitive Positioning Map" style={{ width: '100%', borderRadius: '8px' }} />        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Competitive analysis</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            Google Calendar, Notion, Todoist, Apple Reminders, Monday.com, and Focus To-Do all sit in that left cluster — different feature sets, same job: hold the list for you, forever. Trevor AI gets closer, coaching and auto-scheduling, but it never lets go of the wheel.
          </p>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            ASAP is the only one built to work its way out of a job. Every other product wins when you open it again tomorrow. ASAP wins when you don't need to.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 User flow */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>User flow</h2>
        <div style={{ width: '100%', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={userFlow} alt="User Flow" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e', textAlign: 'center' }}>
          One task in, one step out; AI escalates help: clarify → break down → coach only when needed.
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Synthetic vs human */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0' }}>
        <div style={{ background: '#333', padding: '56px 48px', borderRadius: '16px', color: '#fff', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500, color: '#fff' }}>Synthetic vs human</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ paddingBottom: '20px', borderBottom: '1px solid #555', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>Priya, 19<br/><span style={{ fontSize: '13px', fontWeight: 400, color: '#aaa' }}>First-gen student</span></span>
              <span style={{ fontSize: '15px', lineHeight: 1.6, color: '#ddd' }}>Felt the "Low confidence" label reflected on her, not the AI.</span>
            </div>
            <div style={{ paddingBottom: '20px', borderBottom: '1px solid #555', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>Jordan, 20<br/><span style={{ fontSize: '13px', fontWeight: 400, color: '#aaa' }}>ADHD, skeptical</span></span>
              <span style={{ fontSize: '15px', lineHeight: 1.6, color: '#ddd' }}>Needed a mid-task "I'm stuck" option.</span>
            </div>
            <div style={{ paddingBottom: '20px', borderBottom: '1px solid #555', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>Maya, 18<br/><span style={{ fontSize: '13px', fontWeight: 400, color: '#aaa' }}>First-year</span></span>
              <span style={{ fontSize: '15px', lineHeight: 1.6, color: '#ddd' }}>Missed the explainability link entirely.</span>
            </div>
          </div>
          
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#fff', fontWeight: 600 }}>
            The emotional gap: Synthetic users were logical and consistent. Real users aren't. Mood governs motivation, and AI follows logic.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 The pivot */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 500 }}>The pivot</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 700 }}>The feature we built to help was the one that caused harm.</p>
        </div>

        <div style={{ maxWidth: '800px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#dcdcdc', border: '1px solid #dcdcdc' }}>
          <div style={{ background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#888' }}>BEFORE</span>
            <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', border: '1px solid #e0e0e0', textAlign: 'center', fontWeight: 500 }}>Low confidence</div>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Clinical label to signal AI uncertainty. AI testing flagged no issues.</p>
          </div>
          <div style={{ background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#0d5c63' }}>AFTER</span>
            <div style={{ padding: '16px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', textAlign: 'center', fontWeight: 500, color: '#09474d' }}>This is my best guess</div>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Natural language that owns AI limitation without reflecting on the user.</p>
          </div>
          <div style={{ gridColumn: '1 / -1', background: '#fafafa', padding: '24px 32px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
              Priya read the label as a judgment of herself, not the AI. For a first-generation student battling imposter syndrome, it did harm. Transparency without empathy is just data.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 09 Lesson from the machine */}
      <div id="sec-09" className="cs-section" data-id="09" style={{ padding: '72px 0', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Lesson from the machine</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fff' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Ethics surface late — unless you look early</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#5f5e5e' }}>The confidence label harm only surfaced in Phase 4. One checkpoint at the start isn't enough.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fff' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Over-reliance is the core paradox — and it's unresolved</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#5f5e5e' }}>We built an AI tool to fix AI dependency. The students who need it most have to open it at the exact moment they're avoiding work.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fff' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Test with real users earlier</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#5f5e5e' }}>A human in Phase 2 would have caught the confidence label and mood-priority gaps weeks sooner.</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 10 Reflection + close */}
      <div id="sec-10" className="cs-section" data-id="10" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Reflection</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0' }}>Where AI helped</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5f5e5e', margin: 0 }}>Research synthesis in hours. A prototype in one evening. Synthetic personas that caught structural issues before any real user saw them.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0' }}>Where it fell short</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5f5e5e', margin: 0 }}>Synthetic users were emotionally flat. Figma Make broke under complexity. AI rewards shallow iteration if you let it.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0' }}>What we'd do next</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5f5e5e', margin: 0 }}>Design for the worst day. Mood &amp; energy need to be first-class inputs not edge cases. Next version needs a low-friction "I can't right now" mode.</p>
          </div>
        </div>

        <div style={{ maxWidth: '640px', margin: '48px auto 0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 500, fontStyle: 'italic', color: '#171717', lineHeight: 1.4 }}>
            "The goal is not helping students finish work faster. It is helping them eventually not need the system at all."
          </p>
        </div>
      </div>

    </CaseStudyShell>
  );
}
