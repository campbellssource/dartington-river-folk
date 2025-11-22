"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
    authMethod: "magic" as "magic" | "password",
    password: "",
    confirmPassword: "",
    organization: "",
    experience: "",
    gdprConsent: false,
    notificationPreference: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 8;

    if (isLongEnough && hasUpperCase && hasLowerCase && hasNumber) {
      return { valid: true, strength: "strong" as const };
    } else if (isLongEnough && ((hasUpperCase && hasLowerCase) || (hasNumber && (hasUpperCase || hasLowerCase)))) {
      return { valid: true, strength: "medium" as const };
    } else if (isLongEnough) {
      return { valid: false, strength: "weak" as const };
    }
    return { valid: false, strength: null };
  };

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    const result = validatePassword(password);
    setPasswordStrength(result.strength);
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

    // Validate email confirmation
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Email addresses do not match";
    }

    // Validate password if password method selected
    if (formData.authMethod === "password") {
      const passwordResult = validatePassword(formData.password);
      if (!passwordResult.valid) {
        newErrors.password = "Password must meet security requirements (min 8 chars, uppercase, lowercase, number)";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
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
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would create the account and redirect
      alert("Registration functionality not yet implemented (frontend only)");
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
              Registration takes less than 2 minutes. We&apos;ll send you a verification email to get started.
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
            <form onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Personal Information</h2>

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
                    We&apos;ll send a verification link to this address
                  </p>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmEmail" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Confirm Email Address *
                  </label>
                  <input
                    type="email"
                    id="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border ${
                      errors.confirmEmail ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                    } focus:border-[var(--primary-accent)] focus:outline-none transition-colors`}
                    autoComplete="email"
                  />
                  {errors.confirmEmail && (
                    <p className="mt-2 text-sm text-red-500">{errors.confirmEmail}</p>
                  )}
                </div>
              </div>

              {/* Authentication Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Authentication Method</h2>

                <div className="mb-4">
                  <label className="flex items-start mb-3 cursor-pointer">
                    <input
                      type="radio"
                      name="authMethod"
                      checked={formData.authMethod === "magic"}
                      onChange={() => setFormData({ ...formData, authMethod: "magic" })}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-semibold text-[var(--primary-dark)]">
                        Email verification only (magic link)
                      </div>
                      <div className="text-sm text-[var(--secondary-grey)]">
                        Log in using a secure link sent to your email each time
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="authMethod"
                      checked={formData.authMethod === "password"}
                      onChange={() => setFormData({ ...formData, authMethod: "password" })}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-semibold text-[var(--primary-dark)]">Password</div>
                      <div className="text-sm text-[var(--secondary-grey)]">
                        Create a password to log in
                      </div>
                    </div>
                  </label>
                </div>

                {formData.authMethod === "password" && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                        Create Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={formData.password}
                          onChange={(e) => handlePasswordChange(e.target.value)}
                          placeholder="Create a secure password"
                          className={`w-full px-4 py-3 border ${
                            errors.password ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                          } focus:border-[var(--primary-accent)] focus:outline-none transition-colors pr-12`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-grey)] hover:text-[var(--primary-dark)]"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      {passwordStrength && (
                        <div className="mt-2">
                          <div className="flex gap-1">
                            <div className={`h-1 flex-1 ${passwordStrength === "weak" ? "bg-red-500" : passwordStrength === "medium" ? "bg-yellow-500" : "bg-green-500"}`}></div>
                            <div className={`h-1 flex-1 ${passwordStrength === "medium" || passwordStrength === "strong" ? "bg-yellow-500" : "bg-gray-200"}`}></div>
                            <div className={`h-1 flex-1 ${passwordStrength === "strong" ? "bg-green-500" : "bg-gray-200"}`}></div>
                          </div>
                          <p className="text-xs mt-1 text-[var(--secondary-grey)]">
                            Password strength: <span className={passwordStrength === "weak" ? "text-red-500" : passwordStrength === "medium" ? "text-yellow-500" : "text-green-500"}>{passwordStrength}</span>
                          </p>
                        </div>
                      )}
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                      )}
                      <p className="mt-2 text-xs text-[var(--secondary-grey)]">
                        Must be at least 8 characters with uppercase, lowercase, and number
                      </p>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          placeholder="Confirm your password"
                          className={`w-full px-4 py-3 border ${
                            errors.confirmPassword ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                          } focus:border-[var(--primary-accent)] focus:outline-none transition-colors pr-12`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-grey)] hover:text-[var(--primary-dark)]"
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Optional Information Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">Tell Us About Yourself (Optional)</h2>
                <p className="text-sm text-[var(--secondary-grey)] mb-4">
                  This helps us understand our monitor community better
                </p>

                <div className="mb-4">
                  <label htmlFor="organization" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Organization/Affiliation
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Local environmental group"
                    className="w-full px-4 py-3 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Previous Experience with Water Monitoring
                  </label>
                  <textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Tell us about any relevant experience..."
                    rows={3}
                    className="w-full px-4 py-3 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                  />
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
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
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
