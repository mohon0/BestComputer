import MainHeader from "@/components/layout/header/main-header";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
	return (
		<>
			<MainHeader />
			<section className="relative px-4 py-16 md:py-24">
				<div className="mx-auto max-w-6xl">
					{/* Header */}
					<div className="mb-16 text-center">
						<h2 className="text-balance text-4xl font-bold text-gray-900 md:text-5xl">
							আমাদের সাথে যোগাযোগ করুন
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							যেকোনো প্রশ্ন বা তথ্যের জন্য নিচের যোগাযোগের মাধ্যমে আমাদের সাথে সংযুক্ত হন।
						</p>
					</div>

					{/* Contact Cards Grid */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{/* Location Card */}
						<div className="group rounded-2xl border border-purple-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-100">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-purple-50 transition-transform group-hover:scale-110">
								<FaLocationDot className="text-3xl text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">ঠিকানা</h3>
							<p className="mt-4 leading-relaxed text-gray-600">
								রফি টাওয়ার (১০ তলা ভবনের ৫ম তলা)
								<br />
								পায়রা চত্ত্বর, ঝিনাইদহ
							</p>
							<a
								href="#map"
								className="mt-4 inline-block font-semibold text-purple-600 transition-colors hover:text-purple-700"
							>
								মানচিত্রে দেখুন →
							</a>
						</div>

						{/* Phone Card */}
						<div className="group rounded-2xl border border-cyan-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-cyan-100 to-cyan-50 transition-transform group-hover:scale-110">
								<FaPhone className="text-3xl text-cyan-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">মোবাইল</h3>
							<div className="mt-4 space-y-3">
								<a
									href="tel:01989491248"
									className="block text-lg font-semibold text-gray-900 transition-colors hover:text-cyan-600"
								>
									01989491248
								</a>
								<a
									href="tel:01799574570"
									className="block text-lg font-semibold text-gray-900 transition-colors hover:text-cyan-600"
								>
									01799-574570
								</a>
							</div>
							<p className="mt-4 text-sm text-gray-500">
								সোমবার - শুক্রবার: ৯am - ৬pm
							</p>
						</div>

						{/* Email Card */}
						<div className="group rounded-2xl border border-purple-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-100">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-purple-50 transition-transform group-hover:scale-110">
								<FaEnvelope className="text-3xl text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">ই-মেইল</h3>
							<div className="mt-4 space-y-3">
								<a
									href="mailto:contact@oylkka.com"
									className="block font-semibold text-gray-900 transition-colors hover:text-purple-600"
								>
									contact@oylkka.com
								</a>
								<a
									href="mailto:freelancermohon01@gmail.com"
									className="block font-semibold text-gray-900 transition-colors hover:text-purple-600"
								>
									freelancermohon01@gmail.com
								</a>
							</div>
							<p className="mt-4 text-sm text-gray-500">
								২৪ ঘণ্টার মধ্যে উত্তর পাবেন
							</p>
						</div>
					</div>

					{/* Info Banner */}
					<div className="mt-16 rounded-2xl bg-linear-to-r from-purple-50 to-cyan-50 p-8 md:p-12">
						<div className="text-center">
							<h3 className="mb-2 text-2xl font-bold text-gray-900">
								আমাদের সাথে যোগাযোগ করতে প্রস্তুত?
							</h3>
							<p className="text-gray-600">
								যেকোনো সমস্যা বা প্রশ্নের জন্য আমরা সবসময় আপনার সেবায় নিয়োজিত। নির্দ্বিধায়
								আমাদের সাথে যোগাযোগ করুন।
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
