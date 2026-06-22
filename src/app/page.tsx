import { ContactForm } from "./ContactForm";
import checkdinImage from "../../media/checkdin.png";
import parrtoImage from "../../media/parrot.png";
import learnifyImage from "../../media/learinfy.png";

const credibility = ["CS Graduate", "Full Stack", "Open to Work"];

const projects = [
  {
    name: "Checkdin",
    file: "projects/checkdin.ts",
    status: "Work project / live product",
    image: checkdinImage.src,
    problem: "Teams need a simpler way to manage attendance, check-ins, and daily workforce visibility.",
    built:
      "Built with another developer as a full stack registration and check-in platform, including event workflows and Stripe-powered payments.",
    outcome:
      "Supports a live product used around real event and operational workflows, with private implementation details kept out of this portfolio.",
    stack: ["Two-developer build", "Full stack features", "Stripe payments", "Live product"],
    links: [{ label: "Live site", href: "https://checkdin.co/" }],
  },
  {
    name: "Customer Service Hub",
    file: "projects/customer-service-hub.ts",
    status: "University project / SaaS in development",
    image: parrtoImage.src,
    problem:
      "SMEs need a centralized customer service system to manage website conversations, support workflows, and team access without stitching together multiple tools.",
    built:
      "Built a customer messaging platform with an embeddable widget, admin dashboard, backend API, and real-time messaging through WebSockets.",
    outcome:
      "Originally developed as a university project and now being extended locally into a SaaS product. Source code remains private while results are pending.",
    stack: ["WebSockets", "HTTPS API", "Admin dashboard", "Embeddable widget", "Team management"],
  },
  {
    name: "Learnify",
    file: "projects/learnify.ts",
    status: "Personal project",
    image: learnifyImage.src,
    problem:
      "Learning content is often scattered across videos, notes, and playlists instead of being easy to access through audio.",
    built:
      "A React Native audio learning app with a custom Express backend, MongoDB data storage, and cloud-based audio handling.",
    outcome:
      "Shows full stack mobile delivery, backend API design, media handling, and a clean mobile-first user experience.",
    stack: ["React Native", "Express.js", "MongoDB", "Audio streaming"],
    links: [
      { label: "Mobile repo", href: "https://github.com/alnayeem01/learnify-mobile-app" },
      { label: "Backend repo", href: "https://github.com/alnayeem01/learnify-server" },
    ],
  },
];

const services = [
  {
    name: "SaaS & Business Systems",
    description: "Dashboards, portals, CRM-style tools, and internal systems for teams that need software around real operations.",
  },
  {
    name: "Mobile Applications",
    description: "Cross-platform apps for iOS and Android, built around practical user journeys rather than just screens.",
  },
  {
    name: "AI Integrations",
    description: "Customer support assistants, workflow automation, and AI features that make existing processes faster.",
  },
  {
    name: "MVP Development",
    description: "Helping founders turn an idea into a usable first product that can be tested with real users.",
  },
];

const capabilities = [
  { layer: "frontend", tools: "React, TypeScript, Next.js, Tailwind CSS" },
  { layer: "backend", tools: "Node.js, Express, REST APIs, authentication" },
  { layer: "data", tools: "SQL, Firebase, MongoDB, schema design" },
  { layer: "delivery", tools: "Git, GitHub, Vercel, deployment, CI/CD basics" },
];

function TypedField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 border-t border-white/10 pt-3">
      <p className="font-mono text-xs text-blueprint">{label}:</p>
      <p className="text-sm leading-6 text-muted">{children}</p>
    </div>
  );
}

function PlaceholderVisual({ label, image }: { label: string; image?: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-surface">
      {image ? (
        <img className="h-full w-full object-cover" src={image} alt={label} />
      ) : (
        <div className="grid h-full place-items-center px-6 text-center">
          <div>
            <p className="font-mono text-xs text-blueprint">preview.pending</p>
            <p className="mt-2 text-sm font-semibold text-paper">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductSnapshotCard() {
  return (
    <aside className="rounded-lg border border-white/10 bg-charcoal/70 p-5 shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-sm font-semibold text-paper">nayeem.ts</p>
        <span className="rounded-md border border-blueprint/30 bg-blueprint/10 px-2.5 py-1 text-xs text-blueprint">
          .ts
        </span>
      </div>
      <div className="mt-6 rounded-md border border-white/10 bg-ink/50 p-4 font-mono text-xs leading-7 text-muted">
        <p>
          <span className="text-blueprint">type</span> Platform ={" "}
          <span className="text-sand">&quot;web&quot;</span> |{" "}
          <span className="text-sand">&quot;mobile&quot;</span>;
        </p>
        <p className="mt-2">
          <span className="text-blueprint">const</span>{" "}
          <span className="text-paper">focus</span>: Platform[] = [
          <span className="text-sand">&quot;web&quot;</span>,{" "}
          <span className="text-sand">&quot;mobile&quot;</span>];
        </p>
        <p className="mt-2 inline-block max-w-full overflow-hidden whitespace-nowrap border-r border-cyan-signal pr-1 text-cyan-signal typing-line">
          building quietly, shipping carefully
        </p>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <a href="#" className="text-sm font-semibold tracking-wide text-paper">
            Al Nayeem<span className="font-mono text-blueprint">.ts</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-paper md:hidden" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-blueprint">
            London-based full stack engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            I build simple web and mobile products.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Full stack developer with startup experience, focused on useful interfaces,
            clean backend work, and steady delivery.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-md bg-blueprint px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_0_28px_rgba(49,120,198,0.22)]" href="#work">
              View Work
            </a>
            <a className="rounded-md border border-white/15 px-5 py-3 text-center text-sm font-semibold text-paper hover:border-white/30" href="#contact">
              Start a Conversation
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {credibility.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/3 px-3 py-2 text-sm text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
        <ProductSnapshotCard />
      </section>

      <section className="border-t border-white/10 py-14" id="work">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blueprint">Selected systems</p>
            <h2 className="mt-3 text-3xl font-semibold text-paper sm:text-4xl">Products and platforms built around real needs.</h2>
            <p className="mt-3 leading-7 text-muted">
              The small structured labels are a visual nod to typed systems. The stories stay focused
              on business problems, product decisions, and what the software helps people do.
            </p>
          </div>
          <div className="mt-7 grid gap-4">
            {projects.map((project) => (
              <article key={project.name} className="grid gap-5 rounded-lg border border-white/10 bg-charcoal/70 p-4 lg:grid-cols-[0.86fr_1.14fr]">
                <PlaceholderVisual label={`${project.name} screenshot`} image={project.image} />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-mono text-xs text-cyan-signal">{project.file}</p>
                        <p className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-sand">{project.status}</p>
                      </div>
                      {"links" in project && project.links ? (
                        <div className="flex flex-wrap gap-2">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              className="rounded-md border border-sand/30 bg-sand px-3 py-1.5 text-xs font-semibold text-ink hover:bg-paper"
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-paper">{project.name}</h3>
                    <div className="mt-4 grid gap-3">
                      <TypedField label="Problem">{project.problem}</TypedField>
                      <TypedField label="Built">{project.built}</TypedField>
                      <TypedField label="Outcome">{project.outcome}</TypedField>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-white/3 px-3 py-2 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20" id="experience">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blueprint">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper">Full stack work on live products.</h2>
          </div>
          <div className="blueprint-panel rounded-lg border border-white/10 bg-charcoal/70 p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <h3 className="text-xl font-semibold text-paper">Full-Stack Developer</h3>
                <p className="mt-1 text-sm text-muted">British Institute of Technology</p>
              </div>
              <p className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-sand">Jan 2025 - Present</p>
            </div>
            <p className="mt-5 text-base leading-8 text-muted">
              I work on product features across planning, implementation, testing, and iteration.
              Much of the work is private or internal, so I focus here on the engineering process:
              understanding requirements, collaborating with other developers, and building carefully
              within real product constraints.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Product engineering", "Team delivery", "Private product work"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/3 px-3 py-2 text-sm text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20" id="services">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blueprint">Ways I can help</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.name} className="rounded-lg border border-white/10 bg-white/3 p-6">
                <h3 className="text-xl font-semibold text-paper">{service.name}</h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20" id="about">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blueprint">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper">A London-based engineer with product instincts.</h2>
            <p className="mt-5 leading-8 text-muted">
              I am a Computer Science graduate building software in a startup environment while
              developing SaaS products and AI-powered systems. TypeScript is part of my preferred
              toolkit, but the bigger focus is reliable full stack product engineering: clear interfaces,
              useful workflows, and systems strong enough to support real users.
            </p>
          </div>
          <div className="blueprint-panel rounded-lg border border-white/10 bg-charcoal/70 p-6">
            <h3 className="text-lg font-semibold text-paper">Capabilities</h3>
            <div className="mt-5 grid gap-4">
              {capabilities.map((capability) => (
                <div key={capability.layer} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <p className="font-mono font-medium text-paper">system.{capability.layer}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{capability.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20" id="contact">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blueprint">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper">Let’s start a conversation.</h2>
            <p className="mt-4 leading-7 text-muted">
              Whether it’s a role, project, or product idea, feel free to reach out.
            </p>
            <div className="mt-8 grid max-w-sm gap-2 text-sm">
              <a className="flex items-center justify-between rounded-md border border-white/10 bg-white/3 px-3 py-2 text-muted hover:border-white/25 hover:text-paper" href="mailto:nayeem2019@hotmail.com">
                <span>Email</span>
                <span className="text-xs">nayeem2019@hotmail.com</span>
              </a>
              <a className="flex items-center justify-between rounded-md border border-white/10 bg-white/3 px-3 py-2 text-muted hover:border-white/25 hover:text-paper" href="https://github.com/alnayeem01" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <span className="text-xs">alnayeem01</span>
              </a>
              <a className="flex items-center justify-between rounded-md border border-white/10 bg-white/3 px-3 py-2 text-muted hover:border-white/25 hover:text-paper" href="https://www.linkedin.com/in/al-shahriar-nayeem/" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <span className="text-xs">al-shahriar-nayeem</span>
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-charcoal/70 p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Al Shahriar Nayeem.</p>
          <div className="flex gap-4">
            <a href="mailto:nayeem2019@hotmail.com">Email</a>
            <a href="https://github.com/alnayeem01">GitHub</a>
            <a href="https://www.linkedin.com/in/al-shahriar-nayeem/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
