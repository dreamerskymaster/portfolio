// Technical terms database
export const technicalTerms: Record<string, {
  term: string;
  definition: string;
  example: string;
  industry: string;
  icon?: string;
}> = {
  'downtime-reduction': {
    term: 'Downtime Reduction',
    definition: 'The process of minimizing the time when equipment or systems are not operational due to maintenance, breakdowns, or other issues.',
    example: 'Like reducing the time your car spends in the repair shop - the less time it\'s broken, the more you can use it productively.',
    industry: 'Manufacturing',
    icon: '⏱️'
  },
  'cycle-time': {
    term: 'Cycle Time',
    definition: 'The total time required to complete one full cycle of a process, from start to finish.',
    example: 'Think of it like cooking time - from the moment you start preparing ingredients until the dish is ready to serve.',
    industry: 'Manufacturing',
    icon: '🔄'
  },
  'tpm': {
    term: 'TPM (Total Productive Maintenance)',
    definition: 'A systematic approach to equipment maintenance that aims to maximize equipment effectiveness and eliminate breakdowns.',
    example: 'Like regularly maintaining your car to prevent breakdowns - oil changes, tire rotations, and check-ups keep it running smoothly.',
    industry: 'Manufacturing',
    icon: '🔧'
  },
  'lean-manufacturing': {
    term: 'Lean Manufacturing',
    definition: 'A methodology focused on minimizing waste while maximizing productivity and value for customers.',
    example: 'Like organizing your kitchen - removing unused items, arranging tools efficiently, and having everything you need within reach.',
    industry: 'Manufacturing',
    icon: '♻️'
  },
  'six-sigma': {
    term: 'Six Sigma',
    definition: 'A data-driven methodology for eliminating defects and improving quality in processes.',
    example: 'Like ensuring 99.99966% of your products are perfect - if you made 1 million products, only 3.4 would be defective.',
    industry: 'Quality Management',
    icon: '📊'
  },
  'kaizen': {
    term: 'Kaizen',
    definition: 'A Japanese philosophy of continuous improvement through small, incremental changes.',
    example: 'Like improving your daily routine - small changes like waking up 10 minutes earlier or organizing your desk can add up to big improvements.',
    industry: 'Manufacturing',
    icon: '📈'
  },
  'poka-yoke': {
    term: 'Poka-Yoke',
    definition: 'A Japanese term meaning "mistake-proofing" - designing processes to prevent errors.',
    example: 'Like USB connectors that only fit one way, or car keys that won\'t start the engine unless the gear is in park.',
    industry: 'Manufacturing',
    icon: '🛡️'
  },
  'value-stream-mapping': {
    term: 'Value Stream Mapping',
    definition: 'A visual tool to analyze and improve the flow of materials and information through a process.',
    example: 'Like mapping your daily commute - identifying traffic jams, red lights, and detours to find the fastest route.',
    industry: 'Manufacturing',
    icon: '🗺️'
  },
  '5s-methodology': {
    term: '5S Methodology',
    definition: 'A workplace organization method: Sort, Set in Order, Shine, Standardize, and Sustain.',
    example: 'Like organizing your room: Sort (keep what you need), Set in Order (everything has a place), Shine (clean regularly), Standardize (create rules), Sustain (maintain the system).',
    industry: 'Manufacturing',
    icon: '🏠'
  },
  'root-cause-analysis': {
    term: 'Root Cause Analysis',
    definition: 'A systematic process of identifying the fundamental cause of a problem.',
    example: 'Like a detective investigating a crime - not just treating symptoms but finding the real reason why something went wrong.',
    industry: 'Problem Solving',
    icon: '🔍'
  },
  'fmea': {
    term: 'FMEA (Failure Mode and Effects Analysis)',
    definition: 'A systematic method for identifying potential failures and their effects before they occur.',
    example: 'Like checking your car before a long trip - identifying what could go wrong (flat tire, empty gas tank) and planning how to prevent or handle it.',
    industry: 'Quality Management',
    icon: '⚠️'
  },
  'spc': {
    term: 'SPC (Statistical Process Control)',
    definition: 'A method of quality control that uses statistical methods to monitor and control a process.',
    example: 'Like monitoring your body temperature - tracking patterns to know when something is normal vs. when you might be getting sick.',
    industry: 'Quality Management',
    icon: '📈'
  },
  'oee': {
    term: 'OEE (Overall Equipment Effectiveness)',
    definition: 'A measure of how effectively manufacturing equipment is being used.',
    example: 'Like measuring how much of your workday is actually productive - accounting for breaks, meetings, and interruptions.',
    industry: 'Manufacturing',
    icon: '⚡'
  },
  'kanban': {
    term: 'Kanban',
    definition: 'A visual scheduling system that controls the flow of work through a process.',
    example: 'Like a restaurant kitchen ticket system - when a dish is ordered, a ticket is created, and when it\'s ready, the ticket is removed.',
    industry: 'Manufacturing',
    icon: '🎫'
  },
  'jidoka': {
    term: 'Jidoka',
    definition: 'A principle of stopping production when a defect is detected to prevent further waste.',
    example: 'Like a smoke detector that stops you from cooking when it detects a problem - better to stop and fix the issue than continue and make it worse.',
    industry: 'Manufacturing',
    icon: '🛑'
  }
};
