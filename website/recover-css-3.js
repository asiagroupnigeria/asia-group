const fs = require('fs');

const logPath = 'C:\\Users\\SURFACE\\.gemini\\antigravity-ide\\brain\\5dceb1c2-3b94-449f-afac-92592e96ef39\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(logPath, 'utf8').split('\n');

for (const line of lines) {
  if (line.includes('/* ── LOCATIONS GRID & CARDS ── */') && line.includes('.loc-card {')) {
    // line is a json object, let's un-stringify it
    try {
      const obj = JSON.parse(line);
      let text = '';
      if (obj.content) text = obj.content;
      else if (obj.output) text = obj.output;
      else text = JSON.stringify(obj);
      
      const start = text.indexOf('/* ── LOCATIONS GRID & CARDS ── */');
      const end = text.indexOf('/* JS-driven filter hide */');
      if (start !== -1 && end !== -1) {
         let css = text.substring(start, end);
         // Clean up line numbers if they exist
         css = css.replace(/^\d+:\s/gm, '');
         fs.writeFileSync('recovered_operations.css', css);
         console.log('Found it!');
         return;
      }
    } catch(e) {
      
    }
  }
}
console.log('Still not found');
