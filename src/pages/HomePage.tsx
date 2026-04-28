import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Award,
  Clock,
  Car,
  Cog,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cog className="w-4 h-4" />
                <span>{t.home.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t.home.headline}
                <span className="text-primary">{t.home.headlineAccent}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.home.description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+17875551234"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  {t.common.callNow}
                </a>
                <a
                  href="https://wa.me/17875551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-all border border-border"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.common.whatsapp}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-card/80 transition-all border border-border"
                >
                  <Calendar className="w-5 h-5" />
                  {t.common.getQuote}
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                  <div className="text-center p-8">
                    <Cog className="w-24 h-24 text-primary mx-auto mb-4 animate-spin-slow" />
                    <p className="text-muted-foreground text-sm">{t.home.shopImagePlaceholder}</p>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.home.yearsExperience}</p>
                    <p className="text-sm text-muted-foreground">{t.home.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">{t.home.yearsExperience}</p>
                <p className="text-muted-foreground text-sm">{t.home.servingPR}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Car className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">{t.home.allVehicles}</p>
                <p className="text-muted-foreground text-sm">{t.home.carsAndTrucks}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">{t.home.warranty}</p>
                <p className="text-muted-foreground text-sm">{t.home.partsAndLabor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.home.whatWeDo}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t.home.whatWeDoDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cog,
                title: t.home.transmissionRepair,
                description: t.home.transmissionRepairDesc,
              },
              {
                icon: Car,
                title: t.home.lightMechanic,
                description: t.home.lightMechanicDesc,
              },
              {
                icon: Shield,
                title: t.home.diagnostics,
                description: t.home.diagnosticsDesc,
              },
              {
                icon: Award,
                title: t.home.bodywork,
                description: t.home.bodyworkDesc,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {t.common.viewAllServices}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CVT Specialist Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.home.cvtSpecialists}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.home.cvtDesc1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.home.cvtDesc2}
              </p>
              <ul className="space-y-3">
                {[
                  t.home.cvtFeature1,
                  t.home.cvtFeature2,
                  t.home.cvtFeature3,
                  t.home.cvtFeature4,
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-card rounded-xl border border-border flex items-center justify-center">
                  <div className="text-center p-4">
                    <Cog className="w-12 h-12 text-primary/50 mx-auto" />
                    <p className="text-muted-foreground text-xs mt-2">{t.home.workPhoto} {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.home.whyTrustUs}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t.home.whyTrustUsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t.home.expertTechnicians,
                description: t.home.expertTechniciansDesc,
              },
              {
                icon: Shield,
                title: t.home.honestPricing,
                description: t.home.honestPricingDesc,
              },
              {
                icon: Clock,
                title: t.home.fastTurnaround,
                description: t.home.fastTurnaroundDesc,
              },
            ].map((reason, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-xl mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t.home.whereToFindUs}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.home.locationDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{t.common.address}</p>
                    <p className="text-muted-foreground">
                      123 Main Street<br />
                      Santa Juanita, Bayamon<br />
                      Puerto Rico 00956
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{t.common.hours}</p>
                    <p className="text-muted-foreground">
                      {t.contact.monFri}: 8:00 AM - 6:00 PM<br />
                      {t.contact.saturday}: 8:00 AM - 2:00 PM<br />
                      {t.contact.sunday}: {t.contact.closed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="aspect-video bg-secondary rounded-xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">{t.home.mapPlaceholder}</p>
                <p className="text-muted-foreground text-sm">Santa Juanita, Bayamon, PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t.home.readyToFix}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.home.dontWait}
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
