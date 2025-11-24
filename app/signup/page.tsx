"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    gdprConsent: false,
    notificationPreference: true,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};

    // Validate full name
    if (formData.fullName.length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate GDPR consent
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = "You must agree to the terms and privacy policy";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call to send magic link
    setTimeout(() => {
      setLoading(false);
      setMagicLinkSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-navy)]">
              Become a Volunteer Monitor
            </h1>
            <p className="text-[var(--primary-dark)] mb-2">
              Join our community of observers helping to understand local water drainage patterns
            </p>
            <p className="text-sm text-[var(--secondary-grey)]">
              Registration takes less than a minute. We&apos;ll send you a magic link to get started.
            </p>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Log in
              </Link>
            </p>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white shadow-lg p-8">
            {magicLinkSent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">📧</div>
                <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-navy)]">
                  Check Your Email
                </h2>
                <p className="text-[var(--primary-dark)] mb-4">
                  We&apos;ve sent a magic link to <strong>{formData.email}</strong>
                </p>
                <p className="text-[var(--secondary-grey)] mb-6">
                  Click the link in the email to complete your registration. 
                  After logging in, you&apos;ll be encouraged to set a password for easier access in the future.
                </p>
                <div className="bg-[var(--secondary-light-grey)] p-4 text-sm text-[var(--secondary-grey)]">
                  <p className="mb-2">
                    <strong>Didn&apos;t receive the email?</strong>
                  </p>
                  <ul className="list-disc list-inside text-left">
                    <li>Check your spam/junk folder</li>
                    <li>Make sure you entered the correct email address</li>
                    <li>Wait a few minutes and check again</li>
                  </ul>
                </div>
                <button
                  onClick={() => setMagicLinkSent(false)}
                  className="mt-6 text-[var(--link-color)] hover:text-[var(--link-hover)] text-sm"
                >
                  ← Back to registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Your Information</h2>

                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 border ${
                        errors.fullName ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                      } focus:border-[var(--primary-accent)] focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                      } focus:border-[var(--primary-accent)] focus:outline-none transition-colors`}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                    )}
                    <p className="mt-1 text-xs text-[var(--secondary-grey)]">
                      We&apos;ll send a magic link to this address to complete registration
                    </p>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                      Your preferred testing locations, Previous Experience with Water Monitoring or anything else you'd like to let us know (Optional)
                    </label>
                    <textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="Introduce yourself..."
                      rows={3}
                      className="w-full px-4 py-3 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                    />
                    <p className="mt-1 text-xs text-[var(--secondary-grey)]">
                      This helps us understand our monitor community better
                    </p>
                  </div>
                </div>

                {/* Consent Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Privacy & Notifications</h2>

                  <div className="mb-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.gdprConsent}
                        onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                        className="mt-1 mr-3"
                      />
                      <div className="text-sm">
                        <span className="text-[var(--primary-dark)]">
                          I agree to the{" "}
                          <Link href="/terms" className="text-[var(--link-color)] hover:text-[var(--link-hover)]" target="_blank">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-[var(--link-color)] hover:text-[var(--link-hover)]" target="_blank">
                            Privacy Policy
                          </Link>{" "}
                          *
                        </span>
                      </div>
                    </label>
                    {errors.gdprConsent && (
                      <p className="mt-2 text-sm text-red-500">{errors.gdprConsent}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notificationPreference}
                        onChange={(e) => setFormData({ ...formData, notificationPreference: e.target.checked })}
                        className="mt-1 mr-3"
                      />
                      <div className="text-sm text-[var(--primary-dark)]">
                        I want to receive email notifications when observations are needed (you can change this later)
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold disabled:opacity-50"
                >
                  {loading ? "Sending Magic Link..." : "Send Magic Link"}
                </button>

                {/* Info box about magic link */}
                <div className="mt-6 bg-[var(--secondary-light-grey)] p-4 text-sm text-[var(--secondary-grey)]">
                  <p className="mb-2">
                    <strong className="text-[var(--primary-dark)]">How it works:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Click &quot;Send Magic Link&quot; to create your account</li>
                    <li>Check your email for a secure login link</li>
                    <li>Click the link to log in automatically</li>
                    <li>You&apos;ll be encouraged to set a password for future logins (optional)</li>
                  </ol>
                  <p className="mt-3 text-xs">
                    You can always use a magic link to log in, even if you set a password later.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-[var(--secondary-grey)]">
            <p>
              Need help?{" "}
              <Link href="/help" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
