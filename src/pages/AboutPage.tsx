import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  Award,
  Clock,
  Users,
  Shield,
  CheckCircle2,
  Cog,
  Heart,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.about.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.about.intro1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.intro2}
              </p>
            </div>
            {/* Team Image Placeholder */}
            <div className="aspect-[4/3] bg-card rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <Users className="w-20 h-20 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">{t.about.teamPhotoPlaceholder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t.about.ourStory}</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t.about.story1}</p>
              <p>{t.about.story2}</p>
              <p>{t.about.story3}</p>
              <p>{t.about.story4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: t.about.yearsInBusiness, icon: Clock },
              { number: '5,000+', label: t.about.transmissionsRepaired, icon: Cog },
              { number: '4.9', label: t.about.googleRating, icon: Award },
              { number: '100%', label: t.about.customerFocus, icon: Heart },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t.about.whyDifferent}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: t.about.transmissionSpecialists,
                description: t.about.transmissionSpecialistsDesc,
              },
              {
                icon: Shield,
                title: t.about.noUpselling,
                description: t.about.noUpsellingDesc,
              },
              {
                icon: Award,
                title: t.about.realWarranty,
                description: t.about.realWarrantyDesc,
              },
              {
                icon: Clock,
                title: t.about.fastTurnaround,
                description: t.about.fastTurnaroundDesc,
              },
              {
                icon: Users,
                title: t.about.familyAtmosphere,
                description: t.about.familyAtmosphereDesc,
              },
              {
                icon: Heart,
                title: t.about.communityFirst,
                description: t.about.communityFirstDesc,
              },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.about.ourExpertise}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.about.expertiseDesc}
              </p>
              <ul className="space-y-4">
                {t.about.expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                    <p className="text-muted-foreground text-xs mt-2">{t.about.certification} {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t.about.readyToExperience}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {t.about.comeAndSee}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17874331355"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              (787) 433-1355
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t.about.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
