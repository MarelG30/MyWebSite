import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#080d19] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Have a project in mind or want to collaborate? Feel free to
            reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-white/10 bg-[#111827] p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Let's discuss your ideas and create something amazing
              together.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">marelgultom58@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white">+62 812-XXXX-XXXX</p>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">North Sumatra, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-[#080d19] p-8">
            <p className="text-sm font-semibold text-blue-400">
              HAVE A PROJECT?
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-snug text-white">
              Let's turn your idea into reality.
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm open to freelance projects, collaborations, and new
              opportunities.
            </p>

            <a
              href="mailto:yourmail@example.com"
              className="mt-8 flex w-fit items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Send Me an Email
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}