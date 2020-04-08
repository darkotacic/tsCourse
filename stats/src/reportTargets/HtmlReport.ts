import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}
  print(report: string): void {
    const data = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;
    this.fileName = this.fileName.concat('.html');
    fs.writeFileSync(this.fileName, data);
  }
}
