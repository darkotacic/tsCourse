import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analzyers/WinsAnalysis';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winAnalyzer = new WinsAnalysis('Man United');
const outputTarget = new ConsoleReport();
const summary = new Summary(winAnalyzer, outputTarget);
summary.buildAndPrintReport(matchReader.matches);
