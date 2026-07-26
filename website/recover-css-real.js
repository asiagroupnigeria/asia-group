const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\SURFACE\\.gemini\\antigravity-ide\\brain\\5dceb1c2-3b94-449f-afac-92592e96ef39\\.system_generated\\logs\\transcript_full.jsonl';

async function extractCSS() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('.locations-grid {') && line.includes('.loc-card {') && !line.includes('cssStartMarker')) {
      try {
        const obj = JSON.parse(line);
        let content = obj.content;
        
        // Sometimes it's inside tool_calls
        if (obj.tool_calls && obj.tool_calls.length > 0) {
          const tc = obj.tool_calls[0];
          if (tc.args && tc.args.TargetContent) content = tc.args.TargetContent;
          if (tc.args && tc.args.ReplacementContent) content = tc.args.ReplacementContent;
          if (tc.args && tc.args.CodeContent) content = tc.args.CodeContent;
        }
        
        if (!content) {
            content = JSON.stringify(obj);
        }

        const start = content.indexOf('/* ── LOCATIONS GRID & CARDS ── */');
        const end = content.indexOf('/* JS-driven filter hide */');
        
        if (start !== -1 && end !== -1 && (end - start > 500)) {
          const css = content.substring(start, end + '/* JS-driven filter hide */'.length);
          fs.writeFileSync(path.join(__dirname, 'recovered_operations.css'), css);
          console.log('Successfully recovered REAL CSS! Length:', css.length);
          return;
        }
      } catch (e) {
        // ignore
      }
    }
  }
  
  // Try another approach if the above fails
  console.log('CSS not found in transcript using strict markers.');
}

extractCSS();
