import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

export default function PetClearCaseStudy() {
  const sections = [
    { id: '01', title: 'About Project' },
    { id: '02', title: 'Problem statement' },
    { id: '03', title: 'The airline audit' },
    { id: '04', title: 'User persona' },
    { id: '05', title: 'Solution + features' },
    { id: '06', title: 'User flow' },
    { id: '07', title: 'Before & after' },
    { id: '08', title: 'Impact + close' }
  ];

  const metaStrip = [
    { label: 'Role', value: 'Product Strategist' },
    { label: 'Timeline', value: '4 Months (Spring 2026)' },
    { label: 'Team', value: '[Team TBD]' },
    { label: 'Tools', value: '[Tools TBD]' },
    { label: 'Platform', value: '[Platform TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType="Evidence Story"
      projectName="PetClear"
      promiseLine="No surprises at the airport."
      metaStrip={metaStrip}
      heroVisual="https://placehold.co/1200x800/bfdbfe/111118?text=PetClear+Loading+Screen"
      sections={sections}
      prevCase={{ url: '/work/ASAP', name: 'ASAP', promise: 'Executive Functioning App' }}
      nextCase={{ url: '/work/ReturnLoop', name: 'ReturnLoop', promise: 'Frictionless Package Returns' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>About Project</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          Traveling with a pet shouldn't be a guessing game. Every country, airline, and document comes with different rules, deadlines, and requirements. PetClear gives you a personalized checklist based on your pet and travel route showing exactly what you need, where to get it, and when it's due. Everything organized. Everything tracked. No surprises at the airport.
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 Problem statement */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Problem statement</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            Airlines take the pet fee and say nothing about what comes next. Owners arrive at the airport missing a document they never knew existed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fafafa' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Information Gap</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Requirements invisible during booking — NOC, fitness certs, timing windows.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fafafa' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Trust Gap</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Airline, vet, blog, forum all disagree on what is actually required.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '8px', background: '#fafafa' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#171717' }}>Memory Gap</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Docs lost in camera rolls, every trip starts from scratch.</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 The airline audit */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Research: the airline audit</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            10 airline policy pages reviewed, r/pettravel and r/expats threads read, then every airline called directly. The same gap appeared every time — no route-specific, animal-specific document checklist anywhere.
          </p>
        </div>

        <div style={{ background: '#474747', padding: '48px', borderRadius: '16px', color: '#fff', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {/* Column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Singapore Airlines:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>Approved titre-test labs not mentioned.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Emirates:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>Checklist only after booking — too late.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>IndiGo:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>48hr fitness cert window omitted.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>United Airlines:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>"Check destination requirements" (no link).</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Lufthansa:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>No timing windows or USDA endorsement.</span>
              </div>
            </div>
            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>British Airways:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>AHC 10-day window absent.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Qatar Airways:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>Country import rules missing.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Air India:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>No NOC mention anywhere on the page.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Air France:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>No processing timelines.</span>
              </div>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid #666' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Akasa Air:</span> <span style={{ fontSize: '13px', color: '#ccc' }}>No health cert guidance.</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#333', padding: '24px', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#eee' }}>
              <strong>Verdict:</strong> Every airline listed carrier sizes and fees, none generated a route-specific checklist.
            </p>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#eee' }}>
              <strong>Verdict:</strong> 5 of 7 airlines could not or would not give complete requirements on call — Lufthansa explicitly refused, only United was clear, for domestic only.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 User persona */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>User persona</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 660px) 1fr', gap: '48px' }}>
          {/* Persona Card */}
          <div style={{ background: '#171717', color: '#fff', padding: '40px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ margin: 0, fontSize: '20px', fontStyle: 'italic', fontWeight: 500 }}>"I did everything I was supposed to do. Nobody told me there was more."</p>
            <div style={{ borderTop: '1px solid #444', paddingTop: '16px' }}>
              <span style={{ fontSize: '10.1px', textTransform: 'uppercase', letterSpacing: '0.4px', color: '#888' }}>Goal</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5 }}>Travel with pet, no last-minute surprises; one trusted source; confirmed ready before the airport.</p>
            </div>
            <div style={{ borderTop: '1px solid #444', paddingTop: '16px' }}>
              <span style={{ fontSize: '10.1px', textTransform: 'uppercase', letterSpacing: '0.4px', color: '#888' }}>Represents</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5 }}>Any age, any pet, domestic or international — always underprepared by the system.</p>
            </div>
            <div style={{ borderTop: '1px solid #444', paddingTop: '16px' }}>
              <span style={{ fontSize: '10.1px', textTransform: 'uppercase', letterSpacing: '0.4px', color: '#888' }}>Pain Points</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.5 }}>Airline website incomplete or vague. Conflicting answers across sources.</p>
            </div>
          </div>

          {/* Participant List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#3f3f3f', marginBottom: '8px' }}>Five real participants. Different failure points.</span>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Kshitij:</span> <span style={{ fontSize: '14px', color: '#555' }}>Missing NOC.</span>
            </div>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Aryan:</span> <span style={{ fontSize: '14px', color: '#555' }}>Fitness cert via WhatsApp.</span>
            </div>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Akansha:</span> <span style={{ fontSize: '14px', color: '#555' }}>4 conflicting answers.</span>
            </div>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Peter:</span> <span style={{ fontSize: '14px', color: '#555' }}>Vaccine 5 days short.</span>
            </div>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Osaris:</span> <span style={{ fontSize: '14px', color: '#555' }}>Cert expired unnoticed.</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Solution + features */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>Solution + features</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            A standalone tool, not a feature inside an airline app. Enter pet and route, get exact documents, sources and lead times.
          </p>
        </div>

        <div style={{ padding: '24px', border: '1px solid #0d5c63', borderRadius: '8px', background: '#f2f7f7', maxWidth: '720px' }}>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#093f44', fontWeight: 600 }}>
            PetClear does not change any regulation. It makes existing requirements visible, organised, and timely — at the right moment.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src="https://placehold.co/240x480/bfdbfe/111?text=AI+Pet+Scan" alt="AI Pet Scan" style={{ width: '100%', borderRadius: '16px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>AI pet scan</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Identifies breed, route checklist with lead times.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src="https://placehold.co/240x480/bfdbfe/111?text=Trip+Checkpoint" alt="Trip Checkpoint" style={{ width: '100%', borderRadius: '16px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>Trip checkpoint</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Expiry alerts and country validity.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src="https://placehold.co/240x480/bfdbfe/111?text=Vaccine+Tracker" alt="Vaccine Tracker" style={{ width: '100%', borderRadius: '16px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>Vaccine tracker</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>One place, always current.</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src="https://placehold.co/240x480/bfdbfe/111?text=Document+Vault" alt="Document Vault" style={{ width: '100%', borderRadius: '16px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>Document vault</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>Real travellers, same route.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 User flow */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>User flow</h2>
        
        <div style={{ width: '100%', height: '160px', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '13px', color: '#888' }}>[User Flow SVG Placeholder (521x72)]</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '16px' }}>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>
            <strong>One entry, one profile:</strong> Sign-up and login converge fast.
          </p>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>
            <strong>The scan is the trigger:</strong> Everything upstream is setup, downstream is the live trip.
          </p>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#5f5e5e' }}>
            <strong>Branch to track, merge to remember:</strong> Destination and document tracking run parallel, then fold into shared history.
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Before & after */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Before &amp; after</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          {/* Row 1 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#888', display: 'block', marginBottom: '8px' }}>BEFORE</span>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>Search across 5 sources →</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#0d5c63', display: 'block', marginBottom: '8px' }}>WITH PETCLEAR</span>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>Scan pet, profile started, route checklist generated</p>
          </div>
          {/* Row 2 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>Pay pet fee, no requirements shown →</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>Missing docs flagged with sources and lead times</p>
          </div>
          {/* Row 3 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>Arrive at airport → first time hearing about the document →</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>Upload docs, vault tracks automatically</p>
          </div>
          {/* Row 4 */}
          <div style={{ padding: '24px', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>Denied boarding, pet left behind.</p>
          </div>
          <div style={{ padding: '24px', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#0d5c63', fontWeight: 700 }}>Arrive verified, pet travels.</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 Impact + close */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>Impact</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>Transparency</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>No surprises at the check-in counter.</span>
          </div>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>Less confusion</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>One source, one checklist.</span>
          </div>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>Safer travel</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>Fewer denied boardings, fewer pets left behind.</span>
          </div>
          <div style={{ padding: '20px 0', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>Confidence</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>Owners who avoided travel now have clarity to go ahead.</span>
          </div>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, fontStyle: 'italic', color: '#171717', lineHeight: 1.5 }}>
            "The problem was never the rules. It was that nobody made them visible."
          </p>
        </div>
      </div>

    </CaseStudyShell>
  );
}
