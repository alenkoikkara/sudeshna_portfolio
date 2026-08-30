const fs = require('fs');
let content = fs.readFileSync('/Users/alendennis/Documents/portfolio_s/src/pages/AsapCaseStudy.jsx', 'utf8');

const imports = `
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
`;

content = content.replace(/import asap1list from '..\/assets\/asap\/asap1list.png'\nimport container4 from '..\/assets\/asap\/Container-4.png'\nimport container6 from '..\/assets\/asap\/Container-6.png'/, imports.trim());

content = content.replace(/"https:\/\/placehold.co\/1200x800\/e9d5ff\/111118\?text=ASAP1\+Home\+Screen"/, '{asapHome}');
content = content.replace(/"https:\/\/placehold.co\/1294x900\/f8f8f8\/8a8a8a\?text=asap-lofi-auth-flow"/, '{lofiAuthFlow}');
content = content.replace(/"https:\/\/placehold.co\/1420x808\/f8f8f8\/8a8a8a\?text=asap-lofi-home-student"/, '{lofiHome}');
content = content.replace(/"https:\/\/placehold.co\/1352x1594\/f8f8f8\/8a8a8a\?text=asap-lofi-breakdown-student"/, '{lofiBreakdown}');
content = content.replace(/"https:\/\/placehold.co\/1336x830\/f8f8f8\/8a8a8a\?text=asap-lofi-breakdown-contd-student"/, '{lofiBreakdownContd}');
content = content.replace(/{asap1list}/, '{screenAssignmentList}');
content = content.replace(/{container4}/, '{screenAiReasons}');
content = content.replace(/{container6}/, '{screenAiBreakdown}'); // Focus mode row
content = content.replace(/"https:\/\/placehold.co\/320x695\/e9d5ff\/111118\?text=Timer\+Screen"/, '{screenFocusMode}');
content = content.replace(/"https:\/\/placehold.co\/320x695\/e9d5ff\/111118\?text=Independence\+Bar"/, '{screenTimer}');
content = content.replace(/<span style={{ fontSize: '13px', color: '#888' }}>\[Positioning Map Placeholder\]<\/span>/, '<img src={compMap} alt="Competitive Positioning Map" style={{ width: \'100%\', borderRadius: \'8px\' }} />');
content = content.replace(/<span style={{ fontSize: '13px', color: '#888' }}>\[User Flow SVG Placeholder\]<\/span>/, '<img src={userFlow} alt="User Flow" style={{ width: \'100%\', borderRadius: \'8px\' }} />');

fs.writeFileSync('/Users/alendennis/Documents/portfolio_s/src/pages/AsapCaseStudy.jsx', content);
