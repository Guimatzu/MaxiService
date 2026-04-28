import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  Cog,
  Gauge,
  Wrench,
  Car,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: 'transmission',
      icon: Cog,
      title: t.services.transmissionTitle,
      subtitle: t.services.transmissionSubtitle,
      description: t.services.transmissionDesc,
      features: t.services.transmissionFeatures,
      signs: t.services.transmissionSigns,
    },
    {
      id: 'diagnostics',
      icon: Gauge,
      title: t.services.diagnosticsTitle,
      subtitle: t.services.diagnosticsSubtitle,
      description: t.services.diagnosticsDesc,
      features: t.services.diagnosticsFeatures,
      signs: t.services.diagnosticsSigns,
    },
    {
      id: 'mechanic',
      icon: Wrench,
      title: t.services.mechanicTitle,
      subtitle: t.services.mechanicSubtitle,
      description: t.services.mechanicDesc,
      features: t.services.mechanicFeatures,
      signs: t.services.mechanicSigns,
    },
    {
      id: 'bodywork',
      icon: Car,
      title: t.services.bodyworkTitle,
      subtitle: t.services.bodyworkSubtitle,
      description: t.services.bodyworkDesc,
      features: t.services.bodyworkFeatures,
      signs: t.services.bodyworkSigns,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.services.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                  {/* What We Offer */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4">{t.services.whatWeOffer}</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Signs Section */}
                <div className={`bg-card rounded-xl border border-border p-6 md:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground text-lg">{t.services.signsYouNeed}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      {t.services.experiencingIssues}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {t.services.freeDiagnosis}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CVT Specialist Callout */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Cog className="w-4 h-4" />
                  <span>{t.services.ourSpecialty}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.services.whyCvtExpertise}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.services.cvtExpertiseDesc1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t.services.cvtExpertiseDesc2}
                </p>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">{t.services.cvtBrands}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Nissan Xtronic', 'Honda CVT', 'Toyota Direct Shift', 'Subaru Lineartronic', 'Jeep/Chrysler', 'Mitsubishi INVECS'].map(
                    (brand, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm">{brand}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t.services.needService}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {t.services.notSure}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17875551234"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              (787) 555-1234
            </a>
            <a
              href="https://wa.me/17875551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t.home.whatsappUs}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
