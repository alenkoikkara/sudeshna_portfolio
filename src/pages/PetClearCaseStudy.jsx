import React from 'react';
import CaseStudyShell from '../components/CaseStudyShell';

import petClearHome from '../assets/homescreens/petclearhome.png';
import screenAiPetScan from '../assets/petclear/petclear-01-ai-pet-scan.png';
import screenTripCheckpoint from '../assets/petclear/petclear-03-trip-checkpoint.png';
import screenVaccinationTracker from '../assets/petclear/petclear-04-vaccination-tracker.png';
import screenDocumentVault from '../assets/petclear/petclear-05-document-vault.png';
import { useCaseStudyData } from '../utils/useCaseStudyData';

export default function PetClearCaseStudy() {
  const data = useCaseStudyData('petclear');
  const sections = [
    { id: '01', title: data.s1_title || 'About Project' },
    { id: '02', title: data.s2_title || 'Problem statement' },
    { id: '03', title: data.s3_title || 'The airline audit' },
    { id: '04', title: data.s4_title || 'User persona' },
    { id: '05', title: data.s5_title || 'Solution + features' },
    { id: '06', title: data.s6_title || 'User flow' },
    { id: '07', title: data.s7_title || 'Before & after' },
    { id: '08', title: data.s8_title || 'Impact + close' }
  ];

  const metaStrip = [
    { label: 'Role', value: data.metaRole || 'Product Strategist' },
    { label: 'Timeline', value: data.metaTimeline || '4 Months' },
    { label: 'Team', value: data.metaTeam || '[Team TBD]' },
    { label: 'Tools', value: data.metaTools || '[Tools TBD]' },
    { label: 'Platform', value: data.metaPlatform || '[Platform TBD]' }
  ];

  return (
    <CaseStudyShell
      projectType={data.projectType || "Evidence Story"}
      projectName={data.projectName || "PetClear"}
      promiseLine={data.promiseLine || "No surprises at the airport."}
      metaStrip={metaStrip}
      heroVisual={petClearHome}
      sections={sections}
      prevCase={{ url: '/work/ASAP', name: 'ASAP', promise: 'Executive Functioning App' }}
      nextCase={{ url: '/work/ReturnLoop', name: 'ReturnLoop', promise: 'Frictionless Package Returns' }}
    >
      
      {/* 01 About Project */}
      <div id="sec-01" className="cs-section" data-id="01" style={{ maxWidth: '720px', padding: '72px 0' }}>
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f', margin: 0 }}>
          {data.s1_body || "Traveling with a pet shouldn't be a guessing game..."}
        </p>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 02 Problem statement */}
      <div id="sec-02" className="cs-section" data-id="02" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s2_title || 'Problem statement'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s2_body || "Airlines take the pet fee and say nothing about what comes next..."}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s2_c1_h || "Information Gap"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s2_c1_b || "Requirements invisible during booking — NOC, fitness certs, timing windows."}</p>
          </div>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s2_c2_h || "Trust Gap"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s2_c2_b || "Airline, vet, blog, forum all disagree on what is actually required."}</p>
          </div>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{data.s2_c3_h || "Memory Gap"}</h3>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#555' }}>{data.s2_c3_b || "Docs lost in camera rolls, every trip starts from scratch."}</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 03 The airline audit */}
      <div id="sec-03" className="cs-section" data-id="03" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s3_title || 'The airline audit'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s3_body || "10 airline policy pages reviewed, r/pettravel and r/expats threads read, then every airline called directly. The same gap appeared every time — no route-specific, animal-specific document checklist anywhere."}
          </p>
        </div>

        <div style={{ maxWidth: '1080px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r1_h || "Singapore Airlines:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r1_b || "Approved titre-test labs not mentioned."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r2_h || "Emirates:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r2_b || "Checklist only after booking — too late."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r3_h || "IndiGo:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r3_b || "48hr fitness cert window omitted."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r4_h || "United Airlines:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r4_b || '"Check destination requirements" (no link).'}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r5_h || "Lufthansa:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r5_b || "No timing windows or USDA endorsement."}</p>
          </div>

          {/* Row 2 */}
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r6_h || "British Airways:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r6_b || "AHC 10-day window absent."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r7_h || "Qatar Airways:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r7_b || "Country import rules missing."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r8_h || "Air India:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r8_b || "No NOC mention anywhere on the page."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r9_h || "Air France:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r9_b || "No processing timelines."}</p>
          </div>
          <div style={{ padding: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d94838' }}>{data.s3_r10_h || "Akasa Air:"}</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.5, color: '#555' }}>{data.s3_r10_b || "No health cert guidance."}</p>
          </div>
        </div>

        <div style={{ maxWidth: '1080px', background: '#f5f5f5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #333' }}>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#333', fontWeight: 600 }}>
            {data.s3_v1 || "Verdict: Every airline listed carrier sizes and fees, none generated a route-specific checklist."}
          </p>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: 1.6, color: '#333' }}>
            {data.s3_v2 || "Verdict: 5 of 7 airlines could not or would not give complete requirements on call — Lufthansa explicitly refused, only United was clear, for domestic only."}
          </p>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 04 User persona */}
      <div id="sec-04" className="cs-section" data-id="04" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s4_title || 'User persona'}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1080px' }}>
          <div style={{ background: '#f8f8f8', padding: '32px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#171717', fontWeight: 500, fontStyle: 'italic' }}>
              {data.s4_quote || '"I did everything I was supposed to do. Nobody told me there was more."'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#555', textTransform: 'uppercase' }}>{data.s4_g1_h || "Goal"}</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#333' }}>{data.s4_g1_b || "Travel with pet, no last-minute surprises; one trusted source; confirmed ready before the airport."}</p>
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#555', textTransform: 'uppercase' }}>{data.s4_g2_h || "Represents"}</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#333' }}>{data.s4_g2_b || "Any age, any pet, domestic or international — always underprepared by the system."}</p>
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#555', textTransform: 'uppercase' }}>{data.s4_g3_h || "Pain Points"}</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: 1.5, color: '#333' }}>{data.s4_g3_b || "Airline website incomplete or vague. Conflicting answers across sources."}</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#171717' }}>{data.s4_list_h || "Five real participants. Different failure points."}</p>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '14px', color: '#555' }}><strong>{data.s4_l1_h || "Kshitij:"}</strong> {data.s4_l1_b || "Missing NOC."}</li>
              <li style={{ fontSize: '14px', color: '#555' }}><strong>{data.s4_l2_h || "Aryan:"}</strong> {data.s4_l2_b || "Fitness cert via WhatsApp."}</li>
              <li style={{ fontSize: '14px', color: '#555' }}><strong>{data.s4_l3_h || "Akansha:"}</strong> {data.s4_l3_b || "4 conflicting answers."}</li>
              <li style={{ fontSize: '14px', color: '#555' }}><strong>{data.s4_l4_h || "Peter:"}</strong> {data.s4_l4_b || "Vaccine 5 days short."}</li>
              <li style={{ fontSize: '14px', color: '#555' }}><strong>{data.s4_l5_h || "Osaris:"}</strong> {data.s4_l5_b || "Cert expired unnoticed."}</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 05 Solution + features */}
      <div id="sec-05" className="cs-section" data-id="05" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 500 }}>{data.s5_title || 'Solution + features'}</h2>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>
            {data.s5_body || "A standalone tool, not a feature inside an airline app. Enter pet and route, get exact documents, sources and lead times."}
          </p>
        </div>

        <div style={{ background: '#fef7e1', border: '1px solid #f9da78', padding: '24px', borderRadius: '8px', maxWidth: '1080px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#8a6500', fontWeight: 500 }}>
            {data.s5_highlight || "PetClear does not change any regulation. It makes existing requirements visible, organised, and timely — at the right moment."}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1080px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <img src={screenAiPetScan} alt="AI Pet Scan" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s5_f1_h || "AI pet scan"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s5_f1_b || "Identifies breed, route checklist with lead times."}</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s5_f2_h || "Trip checkpoint"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s5_f2_b || "Expiry alerts and country validity."}</p>
            </div>
            <img src={screenTripCheckpoint} alt="Trip Checkpoint" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <img src={screenVaccinationTracker} alt="Vaccine Tracker" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s5_f3_h || "Vaccine tracker"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s5_f3_b || "One place, always current."}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 500 }}>{data.s5_f4_h || "Document vault"}</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#3f3f3f' }}>{data.s5_f4_b || "Real travellers, same route."}</p>
            </div>
            <img src={screenDocumentVault} alt="Document Vault" style={{ width: '65%', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 06 User flow */}
      <div id="sec-06" className="cs-section" data-id="06" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s6_title || 'User flow'}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', maxWidth: '1080px' }}>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
              {data.s6_b1 || "One entry, one profile: Sign-up and login converge fast."}
            </p>
          </div>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
              {data.s6_b2 || "The scan is the trigger: Everything upstream is setup, downstream is the live trip."}
            </p>
          </div>
          <div style={{ padding: '24px', background: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#3f3f3f' }}>
              {data.s6_b3 || "Branch to track, merge to remember: Destination and document tracking run parallel, then fold into shared history."}
            </p>
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '1080px', height: '300px', background: '#f5f5f5', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#aaa', fontSize: '14px' }}>[User Flow Diagram Placeholder]</span>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 07 Before & after */}
      <div id="sec-07" className="cs-section" data-id="07" style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>{data.s7_title || 'Before & after'}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', maxWidth: '1080px' }}>
          {/* Row 1 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#888', display: 'block', marginBottom: '8px' }}>{data.s7_c1_h || "BEFORE"}</span>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>{data.s7_c1_b || "Search across 5 sources →"}</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <span style={{ fontSize: '10.1px', fontWeight: 600, letterSpacing: '0.4px', color: '#0d5c63', display: 'block', marginBottom: '8px' }}>{data.s7_c2_h || "WITH PETCLEAR"}</span>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>{data.s7_c2_b || "Scan pet, profile started, route checklist generated"}</p>
          </div>
          {/* Row 2 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>{data.s7_c3_b || "Pay pet fee, no requirements shown →"}</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>{data.s7_c4_b || "Missing docs flagged with sources and lead times"}</p>
          </div>
          {/* Row 3 */}
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>{data.s7_c5_b || "Arrive at airport → first time hearing about the document →"}</p>
          </div>
          <div style={{ padding: '24px', borderBottom: '1px solid #eaeaea', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#093f44', fontWeight: 500 }}>{data.s7_c6_b || "Upload docs, vault tracks automatically"}</p>
          </div>
          {/* Row 4 */}
          <div style={{ padding: '24px', borderRight: '1px solid #eaeaea' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#8a8a8a' }}>{data.s7_c7_b || "Denied boarding, pet left behind."}</p>
          </div>
          <div style={{ padding: '24px', background: '#f4f9f9' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, color: '#0d5c63', fontWeight: 700 }}>{data.s7_c8_b || "Arrive verified, pet travels."}</p>
          </div>
        </div>
      </div>
      <div style={{ height: '0.5px', background: '#474747', width: '100%' }} />

      {/* 08 Impact + close */}
      <div id="sec-08" className="cs-section" data-id="08" style={{ padding: '72px 0', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>{data.s8_h1 || "Transparency"}</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>{data.s8_b1 || "No surprises at the check-in counter."}</span>
          </div>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>{data.s8_h2 || "Less confusion"}</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>{data.s8_b2 || "One source, one checklist."}</span>
          </div>
          <div style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>{data.s8_h3 || "Safer travel"}</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>{data.s8_b3 || "Fewer denied boardings, fewer pets left behind."}</span>
          </div>
          <div style={{ padding: '20px 0', display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, minWidth: '120px' }}>{data.s8_h4 || "Confidence"}</span>
            <span style={{ fontSize: '14px', color: '#5f5e5e', lineHeight: 1.5 }}>{data.s8_b4 || "Owners who avoided travel now have clarity to go ahead."}</span>
          </div>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, fontStyle: 'italic', color: '#171717', lineHeight: 1.5 }}>
            {data.s8_quote || '"The problem was never the rules. It was that nobody made them visible."'}
          </p>
        </div>
      </div>

    </CaseStudyShell>
  );
}
