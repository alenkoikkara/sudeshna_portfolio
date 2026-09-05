import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

import returnLoopHero from '../assets/returnloop/returnloop-hero-visual.png';
import persona1 from '../assets/returnloop/returnloop-06-persona-1.png';
import persona2 from '../assets/returnloop/returnloop-06-persona-2.png';
import screenScanLabel from '../assets/returnloop/returnloop-02-scan-label.png';
import screenPickupWindow from '../assets/returnloop/returnloop-03-pickup-window.png';
import screenTrackPickup from '../assets/returnloop/returnloop-04-track-pickup.png';
import screenChatWithDriver from '../assets/returnloop/returnloop-06-chat-with-driver.png';
import { useCaseStudyData } from '../utils/useCaseStudyData';

export default function ReturnLoopCaseStudy() {
  const data = useCaseStudyData('returnloop');
  const sections = [
    { id: '01', title: data.s1_title || 'About Project' },
    { id: '02', title: data.s2_title || 'The Return I Never Made' },
    { id: '03', title: data.s3_title || 'Research' },
    { id: '04', title: data.s4_title || 'Competitive edge' },
    { id: '05', title: data.s5_title || 'Insight → decision' },
    { id: '06', title: data.s6_title || 'Personas' },
    { id: '07', title: data.s7_title || 'Journey map' },
    { id: '08', title: data.s8_title || 'Key screens' },
    { id: '09', title: data.s9_title || 'Key takeaway' }
  ];

  const metaStrip = [
    { label: 'Role', value: data.metaRole || 'Lead UX Designer' },
    { label: 'Timeline', value: data.metaTimeline || '2 Months' },
    { label: 'Team', value: data.metaTeam || '[Team TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType={data.projectType || "Interview Story"}
      projectName={data.projectName || "ReturnLoop"}
      promiseLine={data.promiseLine || "ReturnLoop connects a ready package with a driver already passing by, so the errand disappears."}
      metaStrip={metaStrip}
      heroVisual={returnLoopHero}
      sections={sections}
      prevCase={{ url: '/work/PetClear', name: 'PetClear', promise: 'Interactive Pet Travel Guide' }}
      nextCase={{ url: '/work/ASAP', name: 'ASAP', promise: 'Executive Functioning App' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          {data.s1_body || "Returning something online should take five minutes; in reality it takes a trip most people never find time for. ReturnLoop connects a ready package with a driver already passing by, so the errand disappears."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 The Return I Never Made */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: '#171717' }}>
          {data.s2_body || "The package sat by the door until the window closed; friends had the same story — not \"I don't want to return things\" but \"I meant to, and then I didn't.\""}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 Research */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s3_title || 'Research'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#171717', fontWeight: 600 }}>
            {data.s3_body1 || "Is the problem that people don't know where to return things, or that the trip never fits a real day and never feels safe to hand off?"}
          </p>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#5f5e5e' }}>
            {data.s3_body2 || "8 semi-structured interviews, ages 24–65, plus competitive review of Uber Return a Package, DoorDash Package Pickup, USPS/UPS/FedEx/Amazon."}
          </p>
        </div>

        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column' }}>
          {data.s3_insight_heading && (
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>{data.s3_insight_heading}</h3>
          )}
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>{data.s3_insight1 || "The return window is the real villain - several kept an item simply because time ran out."}</span>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: data.s3_insight2 || 'Label printing is a silent exit - "If I need to print a label, I give up and let the return window expire." — <strong>Alex</strong>' }} />
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>{data.s3_insight3 || "A failed drop-off trip kills momentum - over half described a wasted trip: wrong carrier, closed store, refused package."}</span>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>{data.s3_insight4 || "Trust came up more than price did - almost nobody objected to $4–5. The recurring question was who is this person, and how do I know my package arrived?"}</span>
          </div>
        </div>

        <div style={{ maxWidth: '720px', padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', borderLeft: '4px solid #0d5c63' }}>
          <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>{data.s3_persona_name || "Margaret, 65"}</p>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#5f5e5e' }}>
            {data.s3_persona_desc || "Recruited to test whether the problem differs for a less app-fluent user; for younger participants the barrier was time, for her it was confidence."}
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 Competitive edge */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s4_title || 'Competitive edge'}</h2>
        </div>

        <div style={{ maxWidth: '880px', borderRadius: '8px', border: '1px solid #bfc8c9', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', background: '#fff', borderBottom: '1px solid #bfc8c9' }}>
            <div style={{ padding: '16px', background: '#f6fafe', borderRight: '1px solid #bfc8c9' }} />
            <div style={{ padding: '16px', fontWeight: 500, fontSize: '15px', borderRight: '1px solid #bfc8c9', color: '#3f3f3f' }}>{data.s4_grid_h1 || 'Uber'}</div>
            <div style={{ padding: '16px', fontWeight: 500, fontSize: '15px', borderRight: '1px solid #bfc8c9', color: '#3f3f3f' }}>{data.s4_grid_h2 || 'DoorDash'}</div>
            <div style={{ padding: '16px', fontWeight: 500, fontSize: '15px', background: '#e4eced', color: '#093f44' }}>{data.s4_grid_h3 || 'ReturnLoop'}</div>
          </div>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', borderBottom: '1px solid #bfc8c9', background: '#fff' }}>
            <div style={{ padding: '16px', fontSize: '15px', color: '#555', background: '#f6fafe', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r1_h || 'Scope'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r1_c1 || 'Eats only'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r1_c2 || 'Any retailer'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>{data.s4_grid_r1_c3 || 'Any retailer'}</div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', borderBottom: '1px solid #bfc8c9', background: '#fff' }}>
            <div style={{ padding: '16px', fontSize: '15px', color: '#555', background: '#f6fafe', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r2_h || 'Context'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r2_c1 || 'In-app feature'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r2_c2 || 'In-app tab'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>{data.s4_grid_r2_c3 || 'Standalone'}</div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', borderBottom: '1px solid #bfc8c9', background: '#fff' }}>
            <div style={{ padding: '16px', fontSize: '15px', color: '#555', background: '#f6fafe', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r3_h || 'Logic'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r3_c1 || 'Single trip'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r3_c2 || 'Single trip'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>{data.s4_grid_r3_c3 || 'Batched'}</div>
          </div>
          {/* Row 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', background: '#fff' }}>
            <div style={{ padding: '16px', fontSize: '15px', color: '#555', background: '#f6fafe', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r4_h || 'Proof'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r4_c1 || 'Photo'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#3f3f3f', borderRight: '1px solid #bfc8c9' }}>{data.s4_grid_r4_c2 || 'Photo'}</div>
            <div style={{ padding: '16px', fontSize: '15px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>{data.s4_grid_r4_c3 || 'Multi-verify'}</div>
          </div>
        </div>

        <div style={{ maxWidth: '720px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 600 }}>
            {data.s4_takeaway || "Neither competitor is built around the sender's experience or offers proof beyond a photo. That's the gap."}
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Insight → decision */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s5_title || 'Insight → decision'}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#888' }}>{data.s5_col1 || 'RESEARCH INSIGHT'}</span>
            <span />
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#0d5c63' }}>{data.s5_col2 || 'DESIGN DECISION'}</span>
          </div>
          
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              {data.s5_r1_left || "\"It just sits there. I'll do it tomorrow.\" (Jack)"}
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              {data.s5_r1_right || "Flexible pickup window, not instant dispatch"}
            </div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              {data.s5_r2_left || "\"If I need to print a label, I give up.\" (Alex)"}
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              {data.s5_r2_right || "Sender scans the digital label / barcode"}
            </div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              {data.s5_r3_left || "\"Who is this, and did it arrive?\" (nearly everyone)"}
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              {data.s5_r3_right || "Live tracking and independent carrier confirmation"}
            </div>
          </div>
        </div>

        {/* Change of mind */}
        <div style={{ maxWidth: '720px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{data.s5_change_title || "The Moment the Design Had to Change"}</h3>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s5_change_body || "v1 marked a return complete the instant a driver scanned it; two interview stories proved that wasn't enough, so the flow now waits for carrier confirmation."}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center', fontSize: '13px', color: '#888' }}>
              <strike>{data.s5_change_old || "Carrier confirmed"}</strike>
            </div>
            <div style={{ padding: '16px', border: '1px solid #0d5c63', background: '#e4f2f3', borderRadius: '8px', textAlign: 'center', fontSize: '13px', color: '#09474d', fontWeight: 600 }}>
              {data.s5_change_new || "FedEx has your package"}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 Personas */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s6_title || 'Personas'}</h2>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }} dangerouslySetInnerHTML={{ __html: data.s6_body || "Personas were grouped by <em>why</em> people stalled, not by demographics, so each represents a distinct reason the process breaks down." }} />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <img src={persona1} alt="Persona Alex" style={{ width: '100%', borderRadius: '12px', border: '1px solid #eaeaea' }} />
          <img src={persona2} alt="Persona Margaret" style={{ width: '100%', borderRadius: '12px', border: '1px solid #eaeaea' }} />
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Journey map */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s7_title || 'Journey map'}</h2>

        <div style={{ overflowX: 'auto', maxWidth: '1080px' }}>
          <div style={{ minWidth: '800px', borderRadius: '8px', border: '1px solid #bfc8c9', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', background: '#f0f4f8', borderBottom: '1px solid #bfc8c9' }}>
              <div style={{ padding: '16px', borderRight: '1px solid #bfc8c9' }} />
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>{data.s7_h2 || 'Decide'}</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>{data.s7_h3 || 'Prepare'}</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>{data.s7_h4 || 'Drop-off'}</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>{data.s7_h5 || 'Delay'}</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600 }}>{data.s7_h6 || 'Outcome'}</div>
            </div>
            {/* Row 1: Today */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, background: '#f8fafc', borderRight: '1px solid #eee' }}>{data.s7_r1_c1 || 'Today'}</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>{data.s7_r1_c2 || 'Low urgency'}</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>{data.s7_r1_c3 || 'Prints label, packs'}</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>{data.s7_r1_c4 || 'Carrier closed'}</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>{data.s7_r1_c5 || 'Sits, window ticking'}</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555' }}>{data.s7_r1_c6 || 'Makes it or gives up'}</div>
            </div>
            {/* Row 2: ReturnLoop */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', background: '#0d5c63', color: '#fff' }}>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid rgba(255,255,255,0.1)' }}>{data.s7_r2_c1 || 'ReturnLoop'}</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>{data.s7_r2_c2 || 'Deadline captured'}</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>{data.s7_r2_c3 || 'Scans digital label'}</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>{data.s7_r2_c4 || 'Driver comes to door'}</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>{data.s7_r2_c5 || 'One booking, done'}</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600 }}>{data.s7_r2_c6 || 'Refund secured'}</div>
            </div>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#8a8a8a', textAlign: 'center' }}>
          {data.s7_caption || "Where emotional low points occur and what resolves them."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 Key screens */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s8_title || 'Key screens'}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenScanLabel} alt="Scan Label" style={{ width: '65%', margin: '0 auto', display: 'block' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s8_c1 || "Scanning removes printing (Alex)"}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenPickupWindow} alt="Pickup Window" style={{ width: '65%', margin: '0 auto', display: 'block' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s8_c2 || "Flexible windows replace instant dispatch (Jack)"}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenTrackPickup} alt="Live Tracking" style={{ width: '65%', margin: '0 auto', display: 'block' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s8_c3 || "Live tracking gives proof (Saddie)"}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenChatWithDriver} alt="Chat with Driver" style={{ width: '65%', margin: '0 auto', display: 'block' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>{data.s8_c4 || "Driver chat gives a human channel (Margaret)"}</p>
          </div>
        </div>

        <div style={{ maxWidth: '880px', marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#171717' }}>
            {data.s8_footer1 || "Welcome → Login → Home → Scan Label → Pickup Window → Live Tracking → Carrier Confirmed → Chat with Driver"}
          </p>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#5f5e5e' }}>
            {data.s8_footer2 || "Each answers a specific finding: scanning removes printing (Alex), flexible windows replace instant dispatch (Jack), live tracking gives proof (Saddie), carrier confirmation closes the loop independently, and driver chat gives a human channel (Margaret)."}
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 09 Key takeaway */}
      <div id="sec-09" className="cs-section" data-id="09" style={{ padding: '72px 0', maxWidth: '720px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s9_title || 'Key takeaway'}</h2>
        <p style={{ margin: '0 0 16px 0', fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', textAlign: 'justify' }}>
          {data.s9_body1 || "DoorDash built a return pickup feature in 2023 and none of the participants knew it existed. The problem wasn't a missing feature, it was a missing experience. Uber and DoorDash proved the mechanic works; what they didn't build is the trust."}
        </p>
      </div>

    </CaseStudyShell>
  );
}
