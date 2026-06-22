const l = require('lucide-react');
const toCheck = [
  'Zap','BookOpen','Globe','TrendingUp','BarChart2','Clock',
  'DollarSign','Heart','Rocket','Users','MessageSquare','CheckCircle',
  'Star','ArrowUpRight','TrendingDown','Bot','Send','RefreshCw',
  'Sparkles','User','Phone','Video','Minimize2','MoreVertical',
  'Menu','X','Sun','Moon','ArrowRight','Play','CheckCircle2','Building2',
  'Quote','ChevronLeft','ChevronRight','MapPin','Mail','MessageSquareShare',
  'Check','Zap','LucideIcon'
];
toCheck.forEach(n => console.log(n + ': ' + (!!l[n] ? 'OK' : 'MISSING')));
