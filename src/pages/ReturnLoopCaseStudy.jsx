import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

import returnLoopHome from '../assets/homescreens/returnloophome.png';
import persona1 from '../assets/allassets/returnloop-06-persona-1.png';
import persona2 from '../assets/allassets/returnloop-06-persona-2.png';
import screenScanLabel from '../assets/allassets/screens/returnloop-02-scan-label.png';
import screenPickupWindow from '../assets/allassets/screens/returnloop-03-pickup-window.png';
import screenTrackPickup from '../assets/allassets/screens/returnloop-04-track-pickup.png';
import screenChatWithDriver from '../assets/allassets/screens/returnloop-06-chat-with-driver.png';
// Unused: returnloop-01-home.png, returnloop-05-return-confirmed.png, returnloop-07-login.png, returnloop-08-signup.png
export default function ReturnLoopCaseStudy() {
  const sections = [
    { id: '01', title: 'About Project' },
    { id: '02', title: 'The Return I Never Made' },
    { id: '03', title: 'Research' },
    { id: '04', title: 'Competitive edge' },
    { id: '05', title: 'Insight → decision' },
    { id: '06', title: 'Personas' },
    { id: '07', title: 'Journey map' },
    { id: '08', title: 'Key screens' },
    { id: '09', title: 'Key takeaway' }
  ];

  const metaStrip = [
    { label: 'Role', value: 'Lead UX Designer' },
    { label: 'Timeline', value: '2 Months (Winter 2025)' },
    { label: 'Team', value: '[Team TBD]' },
    { label: 'Tools', value: '[Tools TBD]' },
    { label: 'Platform', value: '[Platform TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType="Interview Story"
      projectName="ReturnLoop"
      promiseLine="ReturnLoop connects a ready package with a driver already passing by, so the errand disappears."
      metaStrip={metaStrip}
      heroVisual={returnLoopHome}
      sections={sections}
      prevCase={{ url: '/work/PetClear', name: 'PetClear', promise: 'Interactive Pet Travel Guide' }}
      nextCase={{ url: '/work/ASAP', name: 'ASAP', promise: 'Executive Functioning App' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          Returning something online should take five minutes; in reality it takes a trip most people never find time for. ReturnLoop connects a ready package with a driver already passing by, so the errand disappears.
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 The Return I Never Made */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: '#171717' }}>
          The package sat by the door until the window closed; friends had the same story — not "I don't want to return things" but "I meant to, and then I didn't."
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 Research */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Research</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#171717', fontWeight: 600 }}>
            Is the problem that people don't know where to return things, or that the trip never fits a real day and never feels safe to hand off?
          </p>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#5f5e5e' }}>
            8 semi-structured interviews, ages 24–65, plus competitive review of Uber Return a Package, DoorDash Package Pickup, USPS/UPS/FedEx/Amazon.
          </p>
        </div>

        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>The return window is the real villain.</span>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>"If I need to print a label, I give up." — <strong>Alex</strong></span>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>A failed drop-off trip kills momentum.</span>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '14px', color: '#3f3f3f', lineHeight: 1.5 }}>Trust came up more than price did.</span>
          </div>
        </div>

        <div style={{ maxWidth: '720px', padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', borderLeft: '4px solid #0d5c63' }}>
          <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Margaret, 65</p>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#5f5e5e' }}>
            Recruited to test whether the problem differs for a less app-fluent user; for younger participants the barrier was time, for her it was confidence.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 Competitive edge */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Competitive edge</h2>
        </div>

        <div style={{ maxWidth: '880px', borderRadius: '8px', border: '1px solid #bfc8c9', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f6fafe', borderBottom: '1px solid #bfc8c9' }}>
            <div style={{ padding: '16px', fontWeight: 600, fontSize: '14px', borderRight: '1px solid #bfc8c9' }}>Uber</div>
            <div style={{ padding: '16px', fontWeight: 600, fontSize: '14px', borderRight: '1px solid #bfc8c9' }}>DoorDash</div>
            <div style={{ padding: '16px', fontWeight: 700, fontSize: '14px', background: '#e4eced', color: '#093f44' }}>ReturnLoop</div>
          </div>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #eee' }}>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Standalone</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Batched</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>Standalone</div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #eee' }}>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Photo proof</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Photo proof</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>Verification depth</div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>In-app feature</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>In-app tab</div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#093f44', background: '#f4f8f8', fontWeight: 500 }}>Purpose-built</div>
          </div>
        </div>

        <div style={{ maxWidth: '720px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', fontWeight: 600 }}>
            Neither competitor is built around the sender's experience or offers proof beyond a photo. That's the gap.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Insight → decision */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Insight → decision</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#888' }}>RESEARCH INSIGHT</span>
            <span />
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#0d5c63' }}>DESIGN DECISION</span>
          </div>
          
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              "It just sits there. I'll do it tomorrow." (Jack)
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              Flexible pickup window, not instant dispatch
            </div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              "If I need to print a label, I give up." (Alex)
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              Sender scans the digital label / barcode
            </div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eaeaea', fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>
              "Who is this, and did it arrive?" (nearly everyone)
            </div>
            <div style={{ textAlign: 'center', color: '#0d5c63', fontWeight: 700 }}>→</div>
            <div style={{ padding: '24px', background: '#e4f2f3', borderRadius: '8px', border: '1px solid #b2d5d8', fontSize: '14px', color: '#09474d', fontWeight: 500, lineHeight: 1.5 }}>
              Live tracking and independent carrier confirmation
            </div>
          </div>
        </div>

        {/* Change of mind */}
        <div style={{ maxWidth: '720px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>The Moment the Design Had to Change</h3>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
            v1 marked a return complete the instant a driver scanned it; two interview stories proved that wasn't enough, so the flow now waits for carrier confirmation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center', fontSize: '13px', color: '#888' }}>
              <strike>Carrier confirmed</strike>
            </div>
            <div style={{ padding: '16px', border: '1px solid #0d5c63', background: '#e4f2f3', borderRadius: '8px', textAlign: 'center', fontSize: '13px', color: '#09474d', fontWeight: 600 }}>
              FedEx has your package
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 Personas */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Personas</h2>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
            Personas were grouped by <em>why</em> people stalled, not by demographics, so each represents a distinct reason the process breaks down.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <img src={persona1} alt="Persona Alex" style={{ width: '100%', borderRadius: '12px', border: '1px solid #eaeaea' }} />
          <img src={persona2} alt="Persona Margaret" style={{ width: '100%', borderRadius: '12px', border: '1px solid #eaeaea' }} />
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Journey map */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Journey map</h2>

        <div style={{ overflowX: 'auto', maxWidth: '1080px' }}>
          <div style={{ minWidth: '800px', borderRadius: '8px', border: '1px solid #bfc8c9', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', background: '#f0f4f8', borderBottom: '1px solid #bfc8c9' }}>
              <div style={{ padding: '16px', borderRight: '1px solid #bfc8c9' }} />
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>Decide</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>Prepare</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>Drop-off</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid #e6e6e6' }}>Delay</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600 }}>Outcome</div>
            </div>
            {/* Row 1: Today */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, background: '#f8fafc', borderRight: '1px solid #eee' }}>Today</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Low urgency</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Prints label, packs</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Carrier closed</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555', borderRight: '1px solid #eee' }}>Sits, window ticking</div>
              <div style={{ padding: '16px', fontSize: '13px', color: '#555' }}>Makes it or gives up</div>
            </div>
            {/* Row 2: ReturnLoop */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr', background: '#0d5c63', color: '#fff' }}>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600, borderRight: '1px solid rgba(255,255,255,0.1)' }}>ReturnLoop</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>Deadline captured</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>Scans digital label</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>Driver comes to door</div>
              <div style={{ padding: '16px', fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>One booking, done</div>
              <div style={{ padding: '16px', fontSize: '13px', fontWeight: 600 }}>Refund secured</div>
            </div>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#8a8a8a', textAlign: 'center' }}>
          Where emotional low points occur and what resolves them.
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 Key screens */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Key screens</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenScanLabel} alt="Scan Label" style={{ width: '100%' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>Scanning removes printing (Alex)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenPickupWindow} alt="Pickup Window" style={{ width: '100%' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>Flexible windows replace instant dispatch (Jack)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenTrackPickup} alt="Live Tracking" style={{ width: '100%' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>Live tracking gives proof (Saddie)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={screenChatWithDriver} alt="Chat with Driver" style={{ width: '100%' }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#3f3f3f' }}>Driver chat gives a human channel (Margaret)</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 09 Key takeaway */}
      <div id="sec-09" className="cs-section" data-id="09" style={{ padding: '72px 0', maxWidth: '720px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Key takeaway</h2>
        <p style={{ margin: '0 0 16px 0', fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', textAlign: 'justify' }}>
          DoorDash built a return pickup feature in 2023 and none of the participants knew it existed. The problem wasn't a missing feature, it was a missing experience. Uber and DoorDash proved the mechanic works; what they didn't build is the trust.
        </p>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 500, lineHeight: 1.5, color: '#000', textAlign: 'justify' }}>
          People don't want a cheaper return — they want one they don't have to think about twice.
        </p>
      </div>

    </CaseStudyShell>
  );
}
