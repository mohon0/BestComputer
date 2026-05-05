import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import MainHeader from "@/components/layout/header/main-header";

export default function Contact() {
  return (
    <>
      <MainHeader />
      <section className="px-4 py-20 md:py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              যোগাযোগ
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            আমাদের সাথে{" "}
            <span className="italic font-light text-muted-foreground">
              যোগাযোগ
            </span>{" "}
            করুন<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
            যেকোনো প্রশ্ন বা তথ্যের জন্য নিচের যোগাযোগের মাধ্যমে আমাদের সাথে সংযুক্ত হন।
          </p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Location */}
            <div className="group flex flex-col gap-0 rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-black/5">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                <FaLocationDot className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold leading-snug">ঠিকানা</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                রফি টাওয়ার (১০ তলা ভবনের ৫ম তলা)
                <br />
                পায়রা চত্ত্বর, ঝিনাইদহ
              </p>
              <a
                href="#map"
                className="mt-3 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                মানচিত্রে দেখুন →
              </a>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px w-5 bg-primary/40 transition-all duration-300 group-hover:w-8" />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary/60">
                  Location
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex flex-col gap-0 rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-black/5">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                <FaPhone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold leading-snug">মোবাইল</h3>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="tel:01989491248"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  01989491248
                </a>
                <a
                  href="tel:01799574570"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  01799-574570
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  সোমবার – শুক্রবার: ৯am – ৬pm
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px w-5 bg-primary/40 transition-all duration-300 group-hover:w-8" />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary/60">
                  Phone
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="group flex flex-col gap-0 rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-black/5">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                <FaEnvelope className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold leading-snug">ই-মেইল</h3>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="mailto:contact@oylkka.com"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  contact@oylkka.com
                </a>
                <a
                  href="mailto:freelancermohon01@gmail.com"
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  freelancermohon01@gmail.com
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  ২৪ ঘণ্টার মধ্যে উত্তর পাবেন
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px w-5 bg-primary/40 transition-all duration-300 group-hover:w-8" />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary/60">
                  Email
                </span>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="mt-16 rounded-2xl border border-border bg-background/50 p-8 md:p-12">
            <div className="mx-auto max-w-lg text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  সেবায় নিয়োজিত
                </span>
                <div className="h-px w-8 bg-primary" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight leading-tight">
                যোগাযোগ করতে{" "}
                <span className="italic font-light text-muted-foreground">
                  প্রস্তুত
                </span>
                <span className="text-primary">?</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                যেকোনো সমস্যা বা প্রশ্নের জন্য আমরা সবসময় আপনার সেবায় নিয়োজিত। নির্দ্বিধায়
                আমাদের সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>

          <div className="mt-20 border-b border-border" />
        </div>
      </section>
    </>
  );
}
