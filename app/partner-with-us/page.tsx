import { Badge } from "@/components/ui/badge"
import { Building2, ClipboardCheck, Users, ShieldCheck } from "lucide-react"
import { PartnerForm } from "@/components/PartnerForm"

export default function PartnerWithUsPage() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Reliable Payments",
      description: "We value our partners and ensure timely payments for all completed work.",
    },
    {
      icon: Building2,
      title: "Quality Projects",
      description: "Access to prestigious commercial and residential development projects.",
    },
    {
      icon: Users,
      title: "Growth Opportunity",
      description: "Build a long-term relationship with a growing leader in the industry.",
    },
    {
      icon: ClipboardCheck,
      title: "Professional Support",
      description: "Clear communication and professional project management on every site.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
              Contractor Opportunities
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partner With Kinch Enterprises</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We are always looking for skilled subcontractors and professional partners to join us in building
              high-quality communities and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Value Proposition */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  At Kinch Enterprises, we believe in the power of strong partnerships. We work with dedicated
                  subcontractors who share our commitment to excellence, safety, and community transformation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="space-y-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Required Documentation</h3>
                <ul className="space-y-3">
                  {[
                    "W-9 Form",
                    "Certificate of Insurance (COI)",
                    "Workers' Compensation Insurance",
                    "General Liability Insurance",
                    "Professional Licenses (where applicable)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="h-1.5 w-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div id="application-form">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Subcontractor Inquiry</h2>
                  <p className="text-slate-600">
                    Please fill out the form below and our team will be in touch shortly.
                  </p>
                </div>
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center italic text-slate-600 text-xl leading-relaxed">
            &quot;Our success is built on the strength of our relationships with local trades and professionals. We
            prioritize partners who bring craftsmanship and integrity to every job site.&quot;
          </div>
        </div>
      </section>
    </div>
  )
}
