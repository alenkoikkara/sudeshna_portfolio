import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

import asapHome from '../assets/homescreens/asaphome.png';
import userFlowImg from '../assets/asap/asap-user-flow-new.png';
import compMatrixImg from '../assets/asap/asap-competitive-matrix-new.png';

import screenAssignmentList from '../assets/asap/asap-01-assignment-list.png';
import screenAiBreakdown from '../assets/asap/asap-03-ai-breakdown.png';
import screenFocusMode from '../assets/asap/asap-04-focus-mode.png';
import screenTimer from '../assets/asap/asap-04-timer.png';
import screenIndependenceBar from '../assets/asap/asap-05-independence.png';
import { useCaseStudyData } from '../utils/useCaseStudyData';

export default function AsapCaseStudy() {
  const data = useCaseStudyData('asap');
  const sections = [
    { id: '01', title: data.s1_title || 'About Project' },
    { id: '02', title: data.s2_title || 'Problem Statement' },
    { id: '03', title: data.s3_title || 'How we used AI' },
    { id: '03b', title: 'Lo-fi wireframes' },
    { id: '04', title: data.s4_title || 'Solution + screens' },
    { id: '05', title: data.s5_title || 'Competitive analysis' },
    { id: '06', title: data.s6_title || 'User flow' },
    { id: '07', title: data.s7_title || 'Synthetic vs human' },
    { id: '08', title: data.s8_title || 'The pivot' },
    { id: '09', title: data.s9_title || 'Lesson from the machine' },
    { id: '10', title: data.s10_title || 'Reflection + close' }
  ];

  const metaStrip = [
    { label: 'Role', value: data.metaRole || 'Lead Product Designer' },
    { label: 'Timeline', value: data.metaTimeline || '3 Months' },
    { label: 'Team', value: data.metaTeam || '[Team TBD]' },
    { label: 'Tools', value: data.metaTools || '[Tools TBD]' },
    { label: 'Platform', value: data.metaPlatform || '[Platform TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType={data.projectType || "Process Story"}
      projectName={data.projectName || "ASAP"}
      promiseLine={data.promiseLine || "AI-powered planning app that scaffolds executive function until the student no longer needs it."}
      metaStrip={metaStrip}
      heroVisual={asapHome}
      sections={sections}
      prevCase={{ url: '/work/ReturnLoop', name: 'ReturnLoop', promise: 'Frictionless Package Returns' }}
      nextCase={{ url: '/work/PetClear', name: 'PetClear', promise: 'Interactive Pet Travel Guide' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          {data.s1_body || "ASAP is an AI-powered mobile app designed to help college students build independent planning skills..."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 Problem Statement */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s2_subtitle || "For many students planning was never taught. It was just expected."}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s2_body || "When students move from high school to college, three external supports vanish at once..."}
          </p>
          <div style={{ background: '#f0f4f8', padding: '24px', borderRadius: '10px' }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', color: '#171717' }}>
              {data.s2_quote || "“In high school, 70% of the structure was externally provided...”"}
            </p>
          </div>
        </div>
        
        {/* Stat strip breakout 1080px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '880px', marginTop: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '32px', fontWeight: 600, color: '#0d5c63', letterSpacing: '-0.5px' }}>{data.s2_stat1_val || "25"}</span>
            <span style={{ fontSize: '13px', lineHeight: 1.4, color: '#555' }}>{data.s2_stat1_lbl || "Age when the prefrontal cortex fully matures"}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '32px', fontWeight: 600, color: '#0d5c63', letterSpacing: '-0.5px' }}>{data.s2_stat2_val || "#1"}</span>
            <span style={{ fontSize: '13px', lineHeight: 1.4, color: '#555' }}>{data.s2_stat2_lbl || "EF deficits predict first-year failure"}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '32px', fontWeight: 600, color: '#0d5c63', letterSpacing: '-0.5px' }}>{data.s2_stat3_val || "3"}</span>
            <span style={{ fontSize: '13px', lineHeight: 1.4, color: '#555' }}>{data.s2_stat3_lbl || "Supports lost at once"}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '32px', fontWeight: 600, color: '#0d5c63', letterSpacing: '-0.5px' }}>{data.s2_stat4_val || "84"}</span>
            <span style={{ fontSize: '13px', lineHeight: 1.4, color: '#555' }}>{data.s2_stat4_lbl || "Prototype versions"}</span>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 How we used AI */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s3_title || 'How we used AI'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 500 }}>
            {data.s3_subtitle || "AI accelerated every phase. We directed every decision."}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '960px' }}>
          {/* Phase 1: Research */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr 1fr', gap: '24px', paddingBottom: '24px', borderBottom: '1px solid #eaeaea' }}>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, color: '#171717' }}>{data.s3_r1_h1 || "Research"}</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{data.s3_r1_h2 || "Anara, Google Scholar, NotebookLM"}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r1_c1 || "What AI gave us:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r1_c1b || "A map of the problem space in hours. Synthesized root causes of EF deficits."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#0d5c63', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r1_c2 || "What we added:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r1_c2b || "The judgment to identify which 5 of 15 insights actually mattered for design."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#d94838', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r1_c3 || "What AI missed entirely:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r1_c3b || "Contextual empathy. Data synthesis lacks the nuance of student stress."}</p>
            </div>
          </div>

          {/* Phase 2: Prototype */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr 1fr', gap: '24px', paddingBottom: '24px', borderBottom: '1px solid #eaeaea' }}>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, color: '#171717' }}>{data.s3_r2_h1 || "Prototype"}</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{data.s3_r2_h2 || "Figma Make, Claude"}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r2_c1 || "What AI gave us:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r2_c1b || "Ideas rendered before we'd fully articulated them. Interactive flows instantly."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#0d5c63', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r2_c2 || "What we added:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r2_c2b || "The discipline to reject 83 versions and know why 84 was right."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#d94838', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r2_c3 || "What AI missed entirely:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r2_c3b || "Micro-interactions that build habit. It generates screens, not behaviors."}</p>
            </div>
          </div>

          {/* Phase 3: Testing */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr 1fr', gap: '24px' }}>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, color: '#171717' }}>{data.s3_r3_h1 || "Testing"}</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{data.s3_r3_h2 || "Claude Opus, synthetic personas"}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r3_c1 || "What AI gave us:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r3_c1b || "3 synthetic personas to run heuristic reviews before human testing."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#0d5c63', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r3_c2 || "What we added:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r3_c2b || "Real human testing that uncovered the psychological weight of UI copy."}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#d94838', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s3_r3_c3 || "What AI missed entirely:"}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s3_r3_c3b || "Emotional variability, mood-based decision-making. That required a real human."}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03b Lo-fi wireframes */}
      <div id="sec-03b" className="cs-section" data-id="03b" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s3b_title || 'Lo-fi wireframes'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s3b_body || "The wireframe boards are in the file and they are strong..."}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '1080px' }}>
          <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
            {data.s3b_c1 || "Getting in"}
          </div>
          <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
            {data.s3b_c2 || "Home, three states: empty · with task · completed"}
          </div>
          <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
            {data.s3b_c3 || "The breakdown"}
          </div>
          <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
            {data.s3b_c4 || "Breakdown continued"}
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
          {data.s3b_note || "Note: The flow was tested across four distinct groups (student, career-changer, ECP, entrepreneur) with 16 boards total."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 Solution + screens */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s4_title || 'Solution + screens'}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1080px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <img src={screenAssignmentList} alt="One Assignment" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s4_c1_h || "One assignment at a time"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s4_c1_b || "No overwhelming lists. The interface focuses the student entirely on the next immediate action."}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s4_c2_h || "AI suggests subtasks with reasons and estimates, student edits freely"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s4_c2_b || "The app breaks down complex assignments, providing estimates and rationale, but the student edits freely."}</p>
            </div>
            <img src={screenAiBreakdown} alt="AI Breakdown" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img src={screenFocusMode} alt="Focus Mode" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s4_c3_h || "Focus mode"}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s4_c3_b || "Locks everything except the current task to build momentum."}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img src={screenTimer} alt="Timer" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s4_c4_h || "Timer (standard / Pomodoro)"}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s4_c4_b || "Keeps track of time spent directly on the active task."}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img src={screenIndependenceBar} alt="Independence bar" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s4_c5_h || "Independence bar"}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s4_c5_b || "Visual indicator of progress towards fully independent planning."}</p>
              </div>
            </div>
          </div>
        </div>
        
        <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', color: '#555', textAlign: 'center', maxWidth: '1080px' }}>
          {data.s4_caption || "The success of this app is measured by the student needing it less over time."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Competitive analysis */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s5_title || 'Competitive analysis'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1080px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s5_body1 || "Google Calendar, Notion, Todoist, Apple Reminders..."}
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#171717', fontWeight: 500 }}>
              {data.s5_body2 || "ASAP is the only one built to work its way out of a job..."}
            </p>
          </div>
          <div style={{ background: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '12px', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={compMatrixImg} alt="Competitive Matrix Diagram" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 User flow */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s6_title || 'User flow'}</h2>
        <div style={{ width: '100%', maxWidth: '1080px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <img src={userFlowImg} alt="User Flow Diagram" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
        </div>
        <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', color: '#555', textAlign: 'center', maxWidth: '1080px' }}>
          {data.s6_caption || "One task in, one step out; AI escalates help: clarify → break down → coach only when needed."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Synthetic vs human */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s7_title || 'Synthetic vs human'}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '1080px' }}>
          {/* Synthetic 1 */}
          <div style={{ padding: '24px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', borderTop: '4px solid #0d5c63' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{data.s7_r1_n || "Priya, 19"}</h3>
              <span style={{ fontSize: '10px', fontWeight: 700, background: '#f1f5f5', color: '#0d5c63', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Synthetic</span>
            </div>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s7_r1_d || "First-gen student"}</p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s7_r1_b || "Felt the \"Low confidence\" label reflected on her, not the AI."}</p>
          </div>
          
          {/* Synthetic 2 */}
          <div style={{ padding: '24px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', borderTop: '4px solid #0d5c63' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{data.s7_r2_n || "Jordan, 20"}</h3>
              <span style={{ fontSize: '10px', fontWeight: 700, background: '#f1f5f5', color: '#0d5c63', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Synthetic</span>
            </div>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s7_r2_d || "ADHD, skeptical"}</p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s7_r2_b || "Needed a mid-task \"I'm stuck\" option."}</p>
          </div>
          
          {/* Synthetic 3 */}
          <div style={{ padding: '24px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', borderTop: '4px solid #0d5c63' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{data.s7_r3_n || "Maya, 18"}</h3>
              <span style={{ fontSize: '10px', fontWeight: 700, background: '#f1f5f5', color: '#0d5c63', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Synthetic</span>
            </div>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{data.s7_r3_d || "First-year"}</p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s7_r3_b || "Missed the explainability link entirely."}</p>
          </div>
          
          {/* Human */}
          <div style={{ padding: '24px', background: '#fffaf8', border: '1px solid #f7dfd4', borderRadius: '8px', borderTop: '4px solid #d94838' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#a63d17' }}>{data.s7_r4_n || "Human Name"}</h3>
              <span style={{ fontSize: '10px', fontWeight: 700, background: '#d94838', color: '#fff', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Real Human</span>
            </div>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#a63d17', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.8 }}>{data.s7_r4_d || "Human Description"}</p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s7_r4_b || "Human body content goes here."}</p>
          </div>
        </div>
        
        <div style={{ maxWidth: '720px', padding: '24px', background: '#fdf8f5', borderRadius: '8px', border: '1px solid #f7dfd4' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#a63d17', fontWeight: 500 }}>
            {data.s7_takeaway || "The emotional gap: Synthetic users were logical and consistent. Real users aren't. Mood governs motivation, and AI follows logic."}
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 The pivot */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s8_title || 'The pivot'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 600 }}>
            {data.s8_subtitle || "The feature we built to help was the one that caused harm."}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1080px' }}>
          <div style={{ background: '#f5f5f5', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: '#888', textTransform: 'uppercase' }}>{data.s8_h1 || 'BEFORE'}</span>
            <div style={{ fontSize: '20px', fontWeight: 500, color: '#3f3f3f' }}>{data.s8_h1b || "Low confidence"}</div>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s8_h1c || "Clinical label to signal AI uncertainty. AI testing flagged no issues."}</p>
          </div>
          <div style={{ background: '#e4f2f3', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #b2d5d8' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: '#0d5c63', textTransform: 'uppercase' }}>{data.s8_h2 || 'AFTER'}</span>
            <div style={{ fontSize: '20px', fontWeight: 500, color: '#09474d' }}>{data.s8_h2b || "This is my best guess"}</div>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#0d5c63' }}>{data.s8_h2c || "Natural language that owns AI limitation without reflecting on the user."}</p>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f', maxWidth: '720px' }}>
          {data.s8_caption || "Priya read the label as a judgment of herself, not the AI. For a first-generation student battling imposter syndrome, it did harm. Transparency without empathy is just data."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 09 Lesson from the machine */}
      <div id="sec-09" className="cs-section" data-id="09" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s9_title || 'Lesson from the machine'}</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '720px' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>{data.s9_h1 || "Ethics surface late — unless you look early"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s9_b1 || "The confidence label harm only surfaced in Phase 4. One checkpoint at the start isn't enough."}
            </p>
          </div>
          <div style={{ height: '1px', background: '#eaeaea' }} />
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>{data.s9_h2 || "Over-reliance is the core paradox — and it's unresolved"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s9_b2 || "We built an AI tool to fix AI dependency. The students who need it most have to open it at the exact moment they're avoiding work."}
            </p>
          </div>
          <div style={{ height: '1px', background: '#eaeaea' }} />
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>{data.s9_h3 || "Test with real users earlier"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s9_b3 || "A human in Phase 2 would have caught the confidence label and mood-priority gaps weeks sooner."}
            </p>
          </div>
          <div style={{ height: '1px', background: '#eaeaea' }} />
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>{data.s9_h4 || "Speed is real — but so is fragility"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s9_b4 || "Figma Make built a prototype in one evening, then broke under too many prompts. Fast, but brittle."}
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 10 Reflection + close */}
      <div id="sec-10" className="cs-section" data-id="10" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s10_title || 'Reflection + close'}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', maxWidth: '1080px' }}>
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600, color: '#0d5c63' }}>{data.s10_h1 || "Where AI helped"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s10_b1 || "Research synthesis in hours. A prototype in one evening. Synthetic personas that caught structural issues before any real user saw them."}
            </p>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600, color: '#d94838' }}>{data.s10_h2 || "Where it fell short"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s10_b2 || "Synthetic users were emotionally flat. Figma Make broke under complexity. AI rewards shallow iteration if you let it."}
            </p>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600, color: '#3f3f3f' }}>{data.s10_h3 || "What we'd do next"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
              {data.s10_b3 || "Design for the worst day. Mood & energy need to be first-class inputs not edge cases. Next version needs a low-friction \"I can't right now\" mode."}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '48px', padding: '48px', background: '#0d5c63', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '24px', lineHeight: 1.4, fontWeight: 500, color: '#fff', maxWidth: '800px', marginInline: 'auto' }}>
            {data.s10_quote || '"The goal is not helping students finish work faster. It is helping them eventually not need the system at all."'}
          </p>
        </div>
      </div>

    </CaseStudyShell>
  );
}
