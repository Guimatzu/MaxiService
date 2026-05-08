import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/maxi-ICON.png" 
                  alt="Maxi Service Logo" 
                  className="h-10 w-auto flex items-center justify-center" />
              <div>
                <span className="font-bold text-lg text-primary">MAXI</span>
                <span className="font-bold text-lg text-foreground"> SERVICE</span>
                <span className="text-lg text-foreground"> Al, inc.</span>
                <span className="text-xs block text-muted-foreground -mt-1">{t.brand.tagline}</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.common.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.common.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+17874331355" className="text-muted-foreground hover:text-primary transition-colors">
                  (787) 433-1355
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/17874331355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Ave. Zinia #2006-A<br />
                  Bayamón<br />
                  Puerto Rico 00959
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.common.businessHours}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>{t.contact.monFri}: 8:00 AM - 5:00 PM</p>
                  <p>{t.contact.saturday}: {t.contact.closed}</p>
                  <p>{t.contact.sunday}: {t.contact.closed}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {t.brand.name}. {t.common.allRightsReserved}
            </p>
            <p className="text-muted-foreground text-sm">
               Página bajo construcción 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
