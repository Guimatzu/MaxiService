import { useState } from 'react'
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.contact.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href="tel:+17874331355"
              className="flex items-center gap-4 p-2 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.contact.callUs}</p>
                <p className="text-primary font-medium">(787) 433-1355</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/17874331355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-2 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp</p>
                <p className="text-primary font-medium">{t.contact.messageUs}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:maxiservicepr@gmail.com"
              className="flex items-center gap-4 p-2 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.common.email}</p>
                <p className="text-primary font-medium">maxiservicepr@gmail.com</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-4 p-2 bg-background rounded-xl border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.common.hours}</p>
                <p className="text-muted-foreground text-sm">{t.contact.monFri}: 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">{t.contact.sendUsMessage}</h2>
              <p className="text-muted-foreground mb-8">
                {t.contact.formDesc}
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.common.messageSent}</h3>
                  <p className="text-muted-foreground">
                    {t.common.thankYou}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t.common.phone} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={t.contact.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.common.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.vehicle}
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formState.vehicle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={t.contact.vehiclePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.serviceNeeded}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">{t.contact.selectService}</option>
                        <option value="transmission">{t.contact.transmissionRepair}</option>
                        <option value="cvt">{t.contact.cvtRepair}</option>
                        <option value="diagnostics">{t.contact.diagnostics}</option>
                        <option value="mechanic">{t.contact.lightMechanic}</option>
                        <option value="bodywork">{t.contact.bodywork}</option>
                        <option value="other">{t.contact.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    {t.common.sendMessage}
                  </button>
                </form>
              )}
            </div>

            {/* Location Info */}
            <div className="flex flex-col gap-6">
              {/* Map Placeholder */}
              <div className="flex-1 min-h-[300px] bg-card rounded-2xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.2359392205108!2d-66.15767699999999!3d18.382109999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDIyJzU1LjYiTiA2NsKwMDknMjcuNiJX!5e0!3m2!1sen!2sus!4v1778168453440!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAXI SERVICE AL inc Location Map"
                />
              </div>

              {/* Address & Hours Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{t.common.address}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Ave. Zinia #2006-A<br />
                      Bayamon<br />
                      Puerto Rico 00959
                    </p>
                    <a
                      href="https://maps.app.goo.gl/fFgoM8doCho5wN6z5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
                    >
                      {t.common.getDirections}
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{t.common.businessHours}</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>{t.contact.monFri}</span>
                        <span className="text-foreground">8:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>{t.contact.saturday}</span>
                        <span className="text-foreground">{t.contact.closed}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>{t.contact.sunday}</span>
                        <span className="text-foreground">{t.contact.closed}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t.contact.preferToTalk}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {t.contact.preferToTalkDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17875551234"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              (787) 433-1355
            </a>
            <a
              href="https://wa.me/17874331355"
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
