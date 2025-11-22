"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [authMethod, setAuthMethod] = useState<"magic" | "password">("magic");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMagicLinkSent(true);
      // Enable resend after 60 seconds
      setTimeout(() => setCanResend(true), 60000);
    }, 1000);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would redirect to the dashboard
      alert("Login functionality not yet implemented (frontend only)");
    }, 1000);
  };

  const handleResendLink = () => {
    setCanResend(false);
    setMagicLinkSent(false);
    // Manually trigger the same logic as form submission
    setErrors({});
    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMagicLinkSent(true);
      setTimeout(() => setCanResend(true), 60000);
    }, 1000);
  };

  const handleChangeEmail = () => {
    setMagicLinkSent(false);
    setCanResend(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-navy)]">
              Log In to Your Account
            </h1>
            <p className="text-[var(--primary-dark)]">
              Access your monitoring dashboard and make observations
            </p>
            <p className="mt-4 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Sign up
              </Link>
            </p>
          </div>

          {/* Login Form Card */}
          <div className="bg-white shadow-lg p-8">
            {/* Authentication Method Tabs */}
            <div className="flex mb-6 border-b border-gray-200">
              <button
                className={`flex-1 py-3 font-semibold transition-colors ${
                  authMethod === "magic"
                    ? "border-b-2 border-[var(--button-primary)] text-[var(--primary-navy)]"
                    : "text-[var(--secondary-grey)] hover:text-[var(--primary-dark)]"
                }`}
                onClick={() => setAuthMethod("magic")}
              >
                Magic Link
              </button>
              <button
                className={`flex-1 py-3 font-semibold transition-colors ${
                  authMethod === "password"
                    ? "border-b-2 border-[var(--button-primary)] text-[var(--primary-navy)]"
                    : "text-[var(--secondary-grey)] hover:text-[var(--primary-dark)]"
                }`}
                onClick={() => setAuthMethod("password")}
              >
                Password
              </button>
            </div>

            {/* Magic Link Form */}
            {authMethod === "magic" && !magicLinkSent && (
              <form onSubmit={handleMagicLinkSubmit}>
                <p className="text-sm text-[var(--secondary-grey)] mb-6">
                  We&apos;ll send a secure login link to your email. No password needed!
                </p>

                <div className="mb-6">
                  <label htmlFor="magic-email" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="magic-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                    } focus:border-[var(--primary-accent)] focus:outline-none transition-colors`}
                    autoFocus
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Login Link"}
                </button>
              </form>
            )}

            {/* Magic Link Sent State */}
            {authMethod === "magic" && magicLinkSent && (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary-navy)]">Check Your Email!</h3>
                  <p className="text-[var(--primary-dark)] mb-2">
                    We&apos;ve sent a login link to <strong>{email}</strong>
                  </p>
                  <p className="text-sm text-[var(--secondary-grey)] mb-4">
                    Click the link to log in. This link expires in 15 minutes.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-[var(--secondary-grey)]">
                    Didn&apos;t receive it?{" "}
                    {canResend ? (
                      <button
                        onClick={handleResendLink}
                        className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-semibold"
                      >
                        Resend link
                      </button>
                    ) : (
                      <span className="text-[var(--secondary-grey)]">(Available in 60 seconds)</span>
                    )}
                  </p>
                  <button
                    onClick={handleChangeEmail}
                    className="text-[var(--link-color)] hover:text-[var(--link-hover)] text-sm font-semibold"
                  >
                    Use different email
                  </button>
                </div>
              </div>
            )}

            {/* Password Form */}
            {authMethod === "password" && (
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-4">
                  <label htmlFor="password-email" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="password-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                    } focus:border-[var(--primary-accent)] focus:outline-none transition-colors`}
                    autoFocus
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className={`w-full px-4 py-3 border ${
                        errors.password ? "border-red-500" : "border-[var(--secondary-border-grey)]"
                      } focus:border-[var(--primary-accent)] focus:outline-none transition-colors pr-12`}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-grey)] hover:text-[var(--primary-dark)]"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[var(--primary-dark)]">Keep me logged in</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-[var(--link-color)] hover:text-[var(--link-hover)]">
                    Forgot password?
                  </Link>
                </div>

                {rememberMe && (
                  <p className="text-xs text-[var(--secondary-grey)] mb-4">
                    Don&apos;t select on shared devices
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold disabled:opacity-50"
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
              </form>
            )}
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-[var(--secondary-grey)]">
            <p>
              Having trouble logging in?{" "}
              <Link href="/help" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Get help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
