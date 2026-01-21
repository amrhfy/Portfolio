import type { Metadata } from 'next'
import { 
  Briefcase, 
  Code2, 
  Mail, 
  Github, 
  Linkedin, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react'
import { FloatingNote } from './components/FloatingNote'


export const metadata: Metadata = {
  title: 'Ammar Hafiy Bin Muhammad',
  description: 'Portfolio of Ammar Hafiy Bin Muhammad',
}

export default function Home() {
  return (
    <main className="selection:bg-zinc-100 mx-auto px-6 py-24 max-w-2xl font-sans text-zinc-900 selection:text-zinc-900 antialiased">
      {/* Header */}
      <header className="mb-24">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-bold text-2xl tracking-tight">
            Ammar Hafiy Bin Muhammad
          </h1>
          <span className="font-medium text-zinc-400 text-sm">25</span>
        </div>
        <div className="flex flex-col gap-2 text-zinc-500">
          <p>Web Enthusiast & Tech Learner</p>
          <p className="max-w-md text-sm leading-relaxed">
            Building systems that automate the boring stuff.
            Based in Malaysia.
          </p>
        </div>
      </header>

      <div className="space-y-24">
        {/* About */}
        <section>
          <h2 className="mb-8 font-semibold text-zinc-400 text-sm uppercase tracking-wider">
            About
          </h2>
          <div className="space-y-6 text-zinc-600 leading-7">
            <p>
              I build systems that make computers do the{" "}
              <span className="font-medium text-zinc-900">boring</span> stuff, so I
              don't have to. It is interesting how automation can improve
              efficiency and reduce human error.
            </p>
            <p>
              When I'm not coding, I enjoy
              exploring new technologies and staying updated with the latest
              trends in the tech world. (I promise).
            </p>
            <p>
              I do also think that in today's world, it's really easy to improve
              with all of these AI IDE available in the market. It felt
              threatening to a certain extent.
            </p>
          </div>
        </section>

        {/* Background */}
        <section>
          <h2 className="mb-8 font-semibold text-zinc-400 text-sm uppercase tracking-wider">
            Background
          </h2>
          <p className="text-zinc-600 leading-7">
            I was born in Kelantan, Malaysia. I'm the only one among my family
            that has an interest in{" "}
            <span className="font-medium text-zinc-900">Computer Science</span>.
            Lucky enough got through everything and now I'm here living my
            dream, praise to God.
          </p>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-zinc-400">
            <h2 className="font-semibold text-sm uppercase tracking-wider">
              Experience
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="last:before:hidden before:top-2 before:left-0 before:absolute relative before:bg-zinc-100 pl-8 before:w-[1px] before:h-full">
              <div className="top-2.5 left-[-2.5px] absolute bg-zinc-200 rounded-full w-1.5 h-1.5" />
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-zinc-900">Wegrow Global Sdn. Bhd.</h3>
                <span className="font-mono text-zinc-400 text-sm">2023 — Present</span>
              </div>
              <p className="mb-4 text-zinc-500 text-xs uppercase tracking-wide">
                Full Stack Web Developer & IT Executive
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Provided web development services mainly focused on Internal-System using Laravel 
                and other small projects using HTML, CSS, WordPress, and Figma while also offering 
                IT software & hardware support.
              </p>
            </div>

            <div className="last:before:hidden before:top-2 before:left-0 before:absolute relative before:bg-zinc-100 pl-8 before:w-[1px] before:h-full">
              <div className="top-2.5 left-[-2.5px] absolute bg-zinc-200 rounded-full w-1.5 h-1.5" />
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-zinc-900">Cloudix Digital Sdn. Bhd.</h3>
                <span className="font-mono text-zinc-400 text-sm">2025 — Present</span>
              </div>
              <p className="mb-4 text-zinc-500 text-xs uppercase tracking-wide">
                Part-Time WordPress Developer
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Assigned to help a full-time developer to complete WordPress design ranging from 
                simple all the way to complex design. Mainly using Elementor, WooCommerce, ACF 
                and other major WordPress plugins.
              </p>
            </div>

            <div className="last:before:hidden before:top-2 before:left-0 before:absolute relative before:bg-zinc-100 pl-8 before:w-[1px] before:h-full">
              <div className="top-2.5 left-[-2.5px] absolute bg-zinc-200 rounded-full w-1.5 h-1.5" />
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-zinc-900">Ar-Rifqi Sdn. Bhd.</h3>
                <span className="font-mono text-zinc-400 text-sm">2022 — 2023</span>
              </div>
              <p className="mb-4 text-zinc-500 text-xs uppercase tracking-wide">
                Web Designer & IT Technical Support
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Managed day-to-day IT technical issues for government projects. Mainly handling 
                backup solutions for University Malaya and other small contributions to big projects. 
                At the same time designing corporate and small clients' websites.
              </p>
            </div>

            <div className="last:before:hidden before:top-2 before:left-0 before:absolute relative before:bg-zinc-100 pl-8 before:w-[1px] before:h-full">
              <div className="top-2.5 left-[-2.5px] absolute bg-zinc-200 rounded-full w-1.5 h-1.5" />
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-zinc-900">Telekom Malaysia</h3>
                <span className="font-mono text-zinc-400 text-sm">2021 — 2022</span>
              </div>
              <p className="mb-4 text-zinc-500 text-xs uppercase tracking-wide">
                Internship (UI/UX Designer)
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Focused on user interface and user experience design, utilizing HTML, CSS, 
                web design principles, Figma, and Adobe XD to create intuitive digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-zinc-400">
            <h2 className="font-semibold text-sm uppercase tracking-wider">
              Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML", "CSS", "JS", "TS", "PHP", "Java", "Python", "C++",
              "Laravel", "Next.js", "WordPress", "WebFlow", 
              "GitHub", "GitLab", "Figma", "Adobe XD", "Adobe Photoshop",
              "VS Code", "Cursor", "Notion", "Claude", "Bricks Builder", "Elementor"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 border border-zinc-200 hover:border-zinc-300 rounded-md text-zinc-600 text-xs transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="mb-8 font-semibold text-zinc-400 text-sm uppercase tracking-wider">
            Selected Work
          </h2>
          <div className="gap-x-12 gap-y-4 grid grid-cols-1 sm:grid-cols-2">
            {[
              "Wegrow Global Sdn. Bhd.",
              "Dinosaur Encounter",
              "Pautly",
              "Malaysia Heritage Studios",
              "Zoo Teruntum",
              "Mayin Digital Sdn. Bhd.",
              "Reconcarz",
              "Vircast Medic Sdn. Bhd."
            ].map((item) => (
              <div key={item} className="group flex justify-between items-center gap-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-200 group-hover:bg-zinc-400 rounded-full w-1.5 h-1.5 transition-colors" />
                  <span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
                    {item}
                  </span>
                </div>
                <ExternalLink className="opacity-0 group-hover:opacity-100 w-3 h-3 text-zinc-300 group-hover:text-zinc-500 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-zinc-400">
            <h2 className="font-semibold text-sm uppercase tracking-wider">
              Connect
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mb-4 max-w-lg text-zinc-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ammarhaffyler@gmail.com"
                className="group flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 px-4 py-2 border border-zinc-200 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
                <span className="font-medium text-zinc-600 group-hover:text-zinc-900 text-sm">Email Me</span>
              </a>
              <a
                href="https://github.com/amrhfy"
                className="group flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 px-4 py-2 border border-zinc-200 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
                <span className="font-medium text-zinc-600 group-hover:text-zinc-900 text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amrhfy/"
                className="group flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 px-4 py-2 border border-zinc-200 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
                <span className="font-medium text-zinc-600 group-hover:text-zinc-900 text-sm">LinkedIn</span>
              </a>
              <a
                href="https://wa.me/60142175632"
                className="group flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 px-4 py-2 border border-zinc-200 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
                <span className="font-medium text-zinc-600 group-hover:text-zinc-900 text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Status / Note */}
      <FloatingNote />
    </main>
  )
}
