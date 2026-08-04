const fs = require('fs');
let p = fs.readFileSync('c:/Users/SURFACE/Asia Group/website/src/app/[locale]/csr/page.tsx', 'utf8');

const imports = `import { Utensils, GraduationCap, HeartPulse, HandsHelping, Users, HardHat } from 'lucide-react';\n`;

if (!p.includes('lucide-react')) {
  // Find the last import statement or the beginning of the file
  let lastImportIdx = p.lastIndexOf('import ');
  if (lastImportIdx !== -1) {
    let nextNewline = p.indexOf('\n', lastImportIdx);
    p = p.substring(0, nextNewline + 1) + imports + p.substring(nextNewline + 1);
  } else {
    p = imports + p;
  }
}

const programmesStart = p.indexOf('<!-- ═══ OTHER PROGRAMMES ═══ -->');
const impactStart = p.indexOf('<!-- ═══ IMPACT NUMBERS ═══ -->');

let beforeProgrammes = p.substring(0, programmesStart);
let impactAndAfter = p.substring(impactStart);

beforeProgrammes = beforeProgrammes + '` }} />\n\n';
impactAndAfter = '<div dangerouslySetInnerHTML={{ __html: `\n' + impactAndAfter;

const programmesJSX = `
<section className="programmes-section">
  <div className="programmes-inner">
    <h2>A Complete Commitment<br/>to Community</h2>
    <div className="programmes-grid">
      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Daily Meals Programme</div>
        </div>
        <Utensils className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Daily Feeding Programme</div>
        <p className="programme-desc">4,000 free meals served daily to the people of Kano — 2,000 in the afternoon and 2,000 in the evening. One of the largest private food security initiatives in Northern Nigeria, running continuously since [ year ].</p>
        <div className="programme-metric">
          <div className="programme-metric-n">4,000</div>
          <div className="programme-metric-l">Meals Per Day</div>
        </div>
      </div>

      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Education Programme</div>
        </div>
        <GraduationCap className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Education & Scholarships</div>
        <p className="programme-desc">Asia Group's commitment to education includes [ scholarship programme details, school support initiatives, and youth empowerment activities — to be confirmed with Group Chairman in CEO interview session ].</p>
        <div className="programme-metric">
          <div className="programme-metric-n">[ # ]</div>
          <div className="programme-metric-l">Students Supported</div>
        </div>
      </div>

      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Healthcare Programme</div>
        </div>
        <HeartPulse className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Healthcare Access</div>
        <p className="programme-desc">Through Asia Pharmacy and the Group's healthcare network, Asia Group supports [ healthcare access initiatives — free medical outreach, medicine donations, community health campaigns — to be confirmed with Chairman and Pharmacy MD ].</p>
        <div className="programme-metric">
          <div className="programme-metric-n">[ # ]</div>
          <div className="programme-metric-l">Beneficiaries Reached</div>
        </div>
      </div>

      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Community & Religious Support</div>
        </div>
        <HandsHelping className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Community & Religious Support</div>
        <p className="programme-desc">[ Religious community support activities — mosque contributions, Ramadan programmes, Eid distributions, and other faith-community initiatives — to be confirmed with Chairman in CEO interview ].</p>
        <div className="programme-metric">
          <div className="programme-metric-n">[ # ]</div>
          <div className="programme-metric-l">Communities Reached</div>
        </div>
      </div>

      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Youth Empowerment</div>
        </div>
        <Users className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Youth Empowerment</div>
        <p className="programme-desc">[ Youth skills training, apprenticeship, entrepreneurship support, and employment creation initiatives — to be confirmed. Note: Asia Group's 19 locations employ hundreds of young people across Kano — this itself is a youth empowerment story. ]</p>
        <div className="programme-metric">
          <div className="programme-metric-n">[ # ]</div>
          <div className="programme-metric-l">Young People Employed</div>
        </div>
      </div>

      <div className="programme-card">
        <div className="programme-photo">
          <div className="programme-photo-placeholder">MEDIA: Infrastructure & Development</div>
        </div>
        <HardHat className="programme-icon" size={32} style={{ marginBottom: '16px', display: 'block' }} color="var(--gold-light)" />
        <div className="programme-name">Infrastructure & Development</div>
        <p className="programme-desc">[ Community infrastructure contributions — roads, boreholes, public facilities, market infrastructure — to be confirmed with Chairman. Many major traders in Kano have made significant physical contributions to market and community infrastructure. ]</p>
        <div className="programme-metric">
          <div className="programme-metric-n">[ # ]</div>
          <div className="programme-metric-l">Projects Completed</div>
        </div>
      </div>
    </div>
  </div>
</section>
\n\n`;

const finalFile = beforeProgrammes + programmesJSX + impactAndAfter;
fs.writeFileSync('c:/Users/SURFACE/Asia Group/website/src/app/[locale]/csr/page.tsx', finalFile);
console.log('Successfully injected JSX and Lucide icons');
