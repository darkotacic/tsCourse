import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analzyers/WinsAnalysis';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(
    teamName: string,
    fileName: string
  ): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport(fileName));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
