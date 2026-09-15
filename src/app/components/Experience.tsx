import { motion } from "motion/react";
import { Briefcase, Users, Trophy, Award, Star } from "lucide-react";

export default function Experience() {
  const experiences = [
    // ── Featured Professional Experience ──
    {
      type: "completed",
      icon: <Star className="w-5 h-5" />,
      title: "Frontend AI Engineering Intern",
      organization: "Flyrank | Sarajevo, Europe",
      period: "July 2026 – September 2026",
      achievement: "Completed · 10/10 Assignments · 5/5 Track Requirements · 1/1 Capstone Accepted",
      description:
        "Completed 10 practical frontend assignments and a capstone project across the Front-end AI Engineering track, spanning 21 meetings and events from July to September 2026. Built responsive interfaces using modern frontend frameworks and Tailwind CSS, applied AI-assisted development workflows, conducted browser QA and visual fidelity checks, and met all 5 track requirements.",
      technologies: "React, TypeScript, Tailwind CSS, AI-Assisted Dev, Browser QA",
    },
    {
      type: "internship",
      icon: <Star className="w-5 h-5" />,
      title: "Founder & CEO / Full-Stack Engineer / Research Lead",
      organization: "MOOVE | Philippines",
      period: "September 2025 – Present",
      achievement: "⭐ 4.93/5 Satisfaction · 93% Task Completion · 93% Recommendation Intent",
      description:
        "Founded and built MOOVE, a full-stack preventive wellness platform for student drivers featuring driving-session tracking, context-aware interventions, and wellness analytics. Led product strategy, technical architecture, full-stack development, and research validation. Completed 100% of 6 planned prototype iterations. Conducted usability testing achieving 93% continued-usage intent across participants.",
      technologies: "React 19, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Groq AI, Vercel",
    },
    {
      type: "internship",
      icon: <Star className="w-5 h-5" />,
      title: "Founder & Chief Executive Officer",
      organization: "Tanglaw | UNESCO Youth Hackathon 2026",
      period: "July 2026 – Present",
      achievement: "🌍 UNESCO Youth Hackathon 2026",
      description:
        "Founded and led Tanglaw, an offline-first AI-powered platform for Media and Information Literacy targeting digitally marginalized Filipino communities. Developed Liyab, a system combining Explainable AI, offline threat intelligence, community reporting, and crisis verification. Drove product strategy, technical architecture, and future roadmap for social impact at scale.",
      technologies: "Offline-First Architecture, Explainable AI, Community Reporting, Crisis Verification",
    },
    {
      type: "internship",
      icon: <Trophy className="w-5 h-5" />,
      title: "Frontend Engineer",
      organization: "IBM July Challenge Hackathon | Remote",
      period: "June 2026 – July 2026",
      achievement: "🏆 IBM July Challenge",
      description:
        "Built the frontend for VERSE, an AI-powered film continuity platform using IBM Granite and LangChain. Implemented collaborative dashboards, human-in-the-loop workflows, and confidence score visualizations. Applied knowledge graph integration and Explainable AI principles to surface continuity errors in a recruiter-facing interface.",
      technologies: "React, TypeScript, IBM Granite, LangChain, Knowledge Graphs, Explainable AI",
    },
    {
      type: "internship",
      icon: <Trophy className="w-5 h-5" />,
      title: "Frontend Engineer",
      organization: "Midnight Hackathon | Remote",
      period: "June 2026 – July 2026",
      achievement: "🌙 Midnight Hackathon",
      description:
        "Developed frontend for a privacy-preserving credential verification platform on the Midnight Network. Built role-based dashboards and implemented zero-knowledge proof interfaces using WebCrypto. Integrated Web3 authentication flows with a TypeScript and Tailwind CSS stack.",
      technologies: "React, TypeScript, Tailwind CSS, Web3, Zero-Knowledge Proofs, WebCrypto, Midnight Network",
    },
    // ── Additional Technical & Leadership Experience ──
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Manager | Full-Stack Project Lead",
      organization: "Joyful Bakes: CakewJoy Order Management System",
      period: "2025–2026 (SE1–SE2)",
      achievement: "🚀 Production-Deployed · 100% Client Approval · 8-Member Team",
      description:
        "Led an 8-member cross-functional team through end-to-end planning, development, UAT, and client delivery of a production-ready order management system for a real bakery business. Managed 6 user roles (Customer, Admin, Staff, Production, Baker, Sales), coordinated requirements gathering, and led client-facing validation sessions.",
      technologies: "React, TypeScript, Firebase Auth, Firebase Realtime DB, Vercel, Figma",
    },
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Project Manager, Fullstack Developer & Researcher",
      organization: "FinSight AI – BPI DataWave Hackathon 2025",
      period: "July–August 2025",
      achievement: "🏆 Top 6 Finalist · 10+ Financial Product Scenarios",
      description:
        "Led a 4-member team in building FinSight AI, an AI-powered MSME market simulation platform for Philippine banks. Developed fullstack application end-to-end: React frontend, Node.js/Express backend, OpenAI API simulation engine, and MongoDB Atlas database with JWT authentication. Conducted research on MSME financing gaps to guide system design and feature prioritization.",
      technologies: "React.js, Node.js, Express, OpenAI API, MongoDB Atlas, JWT, Render",
    },
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Frontend Developer & System Analyst",
      organization: "Verity – CSSprint Hackathon 2025",
      period: "December 2025",
      achievement: "🏆 Top 4 Finalist",
      description:
        "Led 4-member team building a corporate web system for budget anomaly detection and secure anonymous reporting with tracking codes. Designed full system architecture with role-based access control, UML diagrams, ERD, and data flow documentation.",
      technologies: "Next.js, React, Supabase, Tailwind CSS, Shadcn UI",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | ML Developer",
      organization: "Sarcasm Detection using BERT Variants",
      period: "2025–2026",
      achievement: "📊 93.51% Accuracy · 93.24% F1-score · 28,503 Headlines · 5 Models",
      description:
        "Led ML team fine-tuning and benchmarking 5 transformer architectures (BERT, RoBERTa, ALBERT, DistilBERT, ModernBERT) on 28,503 news headlines for sarcasm detection. Managed end-to-end pipeline: preprocessing, tokenization, training, and evaluation using PyTorch and HuggingFace.",
      technologies: "Python, PyTorch, HuggingFace Transformers, Scikit-learn, Google Colab",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | Data Architect | ETL Lead | BI Analyst",
      organization: "ShopZada Data Warehouse System",
      period: "2025–2026",
      achievement: "📦 500K+ Orders · 2M+ Line Items · 3 Tableau Dashboards",
      description:
        "Led end-to-end design of a Kimball-modeled data warehouse for e-commerce Order-to-Delivery analytics: 6 conformed dimensions, 4 fact tables, and SCD Type 2. Built ETL pipelines with Airflow and Docker. Delivered 3 Tableau dashboards covering campaign performance, delivery, and products.",
      technologies: "Airflow, Docker, PostgreSQL, Python, Pandas, SQL, Kimball Modeling, Tableau",
    },
    {
      type: "project",
      icon: <Award className="w-5 h-5" />,
      title: "UNLEASH Philippines Talent",
      organization: "UNLEASH Philippines Innovation Lab",
      period: "September 19–25, 2025",
      achievement: "🌟 Selected from all 18 Philippine Regions",
      description:
        "Selected as one of the UNLEASH Philippines Talents representing all 18 regions. Applied UNLEASH Innovation Methodology under the Health Equity and Biomedical Innovation track, framing real-world problems, ideating solutions, and building rapid prototypes in collaboration with the Royal Academy of Engineering LIF Launchpad.",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Member – Market Analytics Department",
      organization: "UST Technovation Society",
      period: "2025–2026",
      achievement: "Growth Marketing & Analytics",
      description:
        "Contributed data-driven analyses and growth marketing initiatives to enhance project visibility, user engagement, and organizational brand presence.",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Human Resources Staff",
      organization: "AWS Cloud Club UST",
      period: "2025–2026",
      achievement: "Member Management & Development",
      description:
        "Supported member welfare, engagement, and professional development. Assisted in organizing workshops, seminars, and hackathons promoting cloud computing skills and AWS certification pathways.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Secretary Officer of the Class (3rd Year)",
      organization: "University of Santo Tomas",
      period: "2025–2026",
      achievement: "Class Leadership",
      description:
        "Maintained accurate records, coordinated communication between students and faculty, tracked deadlines, and archived important class materials.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Executive Staff of Human Resource",
      organization: "UST ICS Student Council",
      period: "2025–2026",
      achievement: "Council Administration",
      description:
        "Provided administrative support to council officers, managed member well-being and engagement, and assisted in coordinating special committees and development initiatives.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Vice President of the Class",
      organization: "University of Santo Tomas (2nd Year)",
      period: "2024–2025",
      achievement: "Class Leadership",
      description:
        "Supported the class president, mediated conflicts, and collaborated on event planning and class coordination.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Committee Director of Crisis Management",
      organization: "UST ICS Student Council",
      period: "2024–2025",
      achievement: "Emergency Response Leadership",
      description:
        "Led crisis preparedness committee, coordinated with university crisis management team, and ensured effective communication and student safety systems.",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "completed":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "internship":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "project":
        return "bg-primary/10 text-primary border-primary/20";
      case "organization":
        return "bg-accent/30 text-accent-foreground border-accent/40";
      case "leadership":
        return "bg-secondary/50 text-secondary-foreground border-secondary";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Internships, founded ventures, hackathons, technical projects, and leadership roles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline circle - positioned relative to the timeline line, not the card */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10 -translate-x-1/2"></div>

                <div className="md:ml-20 bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0 ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-primary">{exp.title}</h3>
                          <p className="text-foreground font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">
                        {exp.achievement}
                      </p>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.split(", ").map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
