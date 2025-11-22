import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="footer-widgets grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-white/70 mb-4">
              A community project helping volunteers observe and document water drainage patterns in the Dartington and Totnes area.
            </p>
            <a 
              href="https://bidwellbrook.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-[var(--primary-accent)] transition-colors"
            >
              Visit Bidwell Brook Partnership →
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/observe" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Make Observation
                </Link>
              </li>
              <li>
                <Link 
                  href="/observations" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  View Observations
                </Link>
              </li>
              <li>
                <Link 
                  href="/locations" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Observation Locations
                </Link>
              </li>
              <li>
                <Link 
                  href="/signup" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Become a Monitor
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  About the Project
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="text-sm text-white/70 hover:text-[var(--primary-accent)] transition-colors"
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/70 mb-2">
              Questions about the project?
            </p>
            <a 
              href="mailto:info@bidwellbrook.org" 
              className="text-sm hover:text-[var(--primary-accent)] transition-colors"
            >
              info@bidwellbrook.org
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-credits border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Bidwell Brook Partnership. Built with ❤️ for the Bidwell monitors.
          </p>
        </div>
      </div>
    </footer>
  );
}
