const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\SURFACE\\.gemini\\antigravity-ide\\brain\\5dceb1c2-3b94-449f-afac-92592e96ef39\\.system_generated\\logs\\transcript_full.jsonl';

async function extractCSS() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('/* ── LOCATIONS GRID & CARDS ── */') && line.includes('/* JS-driven filter hide */')) {
      try {
        const obj = JSON.parse(line);
        const content = obj.content || (obj.tool_calls && obj.tool_calls[0] && obj.tool_calls[0].args && obj.tool_calls[0].args.TargetContent) || JSON.stringify(obj);
        
        const start = content.indexOf('/* ── LOCATIONS GRID & CARDS ── */');
        const end = content.indexOf('/* JS-driven filter hide */');
        
        if (start !== -1 && end !== -1) {
          const css = content.substring(start, end + '/* JS-driven filter hide */\n  .loc-card.hidden { display: none; }'.length);
          fs.writeFileSync(path.join(__dirname, 'recovered_operations.css'), css);
          console.log('Successfully recovered CSS!');
          return;
        }
      } catch (e) {
        // ignore JSON parse errors or other errors
      }
    }
  }
  console.log('CSS not found in transcript.');
}

extractCSS();
