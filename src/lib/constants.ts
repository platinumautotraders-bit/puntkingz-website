export const SITE = {
  name: "Punt Kingz",
  tagline: "NRL Match Predictions",
  description:
    "10,000 Monte Carlo simulations per match. Player-level data. Real-world adjustments. No AI guesswork.",
  url: "https://puntkingz.com",
  appUrl: "https://nrl.puntkingz.com",
} as const;

// "Start Free Trial" buttons link here. The app creates a Stripe Checkout
// session and redirects the user to it. After payment, an email with a
// magic-link login is sent automatically.
export const TRIAL_CHECKOUT_URL = "https://nrl.puntkingz.com/api/start-trial";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
] as const;

export const STATS = [
  { value: 82, suffix: "%", label: "Winner Accuracy" },
  { value: 78, suffix: "%", label: "Best Bet Rate" },
  { value: 43000, suffix: "+", label: "Player Data Points" },
  { value: 10000, suffix: "", label: "Sims Per Match" },
] as const;

export const PRICING = {
  price: "$29.90",
  period: "week",
  trialDays: 7,
  features: [
    "Match winner predictions with confidence %",
    "Predicted margins and total point bands",
    "Try scorer probability rankings",
    "Value bet identification",
    "Full adjustment transparency",
    "Every NRL round covered",
    "Round-by-round results tracking",
    "Cancel anytime, no lock-in",
  ],
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Player-Level Data",
    description:
      "43,000+ rows of per-match player statistics across 40 metrics. Every run metre, tackle break, and line break since 2020.",
  },
  {
    step: 2,
    title: "Contextual Adjustments",
    description:
      "Weather conditions, referee tendencies, home ground advantage, player fatigue, and Elo ratings modify team phase strengths before simulation.",
  },
  {
    step: 3,
    title: "10,000 Simulations",
    description:
      "Our V6 Monte Carlo engine runs 10,000 full-match simulations using statistical distributions from real player data. Not averages. Distributions.",
  },
  {
    step: 4,
    title: "Predictions and Value",
    description:
      "Winner probability, predicted margin, total point bands, try scorer rankings, and value bet identification. All from one unified engine.",
  },
] as const;

export const FEATURES = [
  {
    title: "Winner Predictions",
    description:
      "Confidence-rated match winner picks backed by 10,000 simulations. High, medium, and low tiers based on probability spread.",
    icon: "Trophy",
  },
  {
    title: "Point Band Distribution",
    description:
      "See the probability of every total points band from 0-29 through to 60+. Know where the game is likely to land.",
    icon: "BarChart3",
  },
  {
    title: "Try Scorer Probabilities",
    description:
      "Zone-by-zone try scoring rates for every player in the starting 17. Built from individual statistical profiles, not team averages.",
    icon: "Target",
  },
  {
    title: "Value Bet Detection",
    description:
      "Identify where bookmaker odds are mispriced. Our engine flags bets where the implied probability gap exceeds 5%.",
    icon: "TrendingUp",
  },
  {
    title: "Elo Rating System",
    description:
      "Team strength ratings updated every round. Provides the base probability before player-level adjustments are layered on.",
    icon: "Activity",
  },
  {
    title: "Full Transparency",
    description:
      "See every adjustment that shaped a prediction. Weather impact, referee bias, fatigue factors. Nothing hidden.",
    icon: "Eye",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is this an AI prediction tool?",
    answer:
      "No. We deliberately moved away from AI and machine learning. Our V6 engine is a Monte Carlo match simulation system. It runs 10,000 statistical simulations per match using real player data and contextual factors. Pure mathematics, not pattern matching.",
  },
  {
    question: "How does the Monte Carlo simulation work?",
    answer:
      "For every match, the engine profiles each of the 34 players using their recent match statistics. It then applies real-world adjustments (weather, referee, fatigue, home advantage) and simulates the game 10,000 times through 4 phases: forward dominance, possessions, zone-based try scoring, and defensive suppression. The winner, margin, total points, and try scorers all emerge from the same simulation output.",
  },
  {
    question: "How accurate are the predictions?",
    answer:
      "Our current season accuracy sits at 82% for match winners and 78% for best bets. We track every prediction publicly on our Results page. No cherry-picking, no hidden losses. The track record speaks for itself.",
  },
  {
    question: "What data do you use?",
    answer:
      "43,000+ rows of per-match player statistics spanning 40 metrics per player, going back to 2020. Every run metre, tackle break, line break, missed tackle, and try assist. Plus Elo ratings, referee penalty data, weather conditions, and venue-specific home advantage figures.",
  },
  {
    question: "When do predictions come out?",
    answer:
      "Predictions are generated after NRL team lists are announced on Tuesday. They update automatically as late changes are confirmed and again closer to kickoff when final conditions (weather, late withdrawals) are factored in.",
  },
  {
    question: "What sports do you cover?",
    answer:
      "Currently NRL only. MMA, NBA, and additional sports are on our roadmap. Each sport will get its own dedicated simulation engine built from the ground up.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No lock-in contracts, no cancellation fees. Your subscription runs week-to-week. Cancel before your next billing cycle and you won't be charged again.",
  },
  {
    question: "Why $29.90 per week?",
    answer:
      "Our engine processes 43,000+ data points, runs 10,000 simulations per match, and covers every game in every round. The infrastructure, data pipeline, and continuous calibration behind this costs real money to run. We price for serious punters who want a genuine mathematical edge, not a novelty.",
  },
] as const;

export const FUTURE_SPORTS = [
  { name: "NRL", active: true },
  { name: "MMA", active: false },
  { name: "NBA", active: false },
  { name: "AFL", active: false },
] as const;
