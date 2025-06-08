import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Database,
  Shield,
  Zap,
  Github,
  ArrowRight,
  HardDrive,
  Brain,
  Globe,
  Play,
  MessageSquare,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import navigationData from "@/data/navigation.json"
import featuresData from "@/data/features.json"
import testimonialsData from "@/data/testimonials.json"
import footerData from "@/data/footer.json"
import { TwitterUsernameInput } from "@/components/twitter-username-input"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative">
      <div className="fixed inset-0 bg-[#0f0f0f] -z-10"></div>
      {/* Header */}
      <header className="border-b border-gray-800/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/twitter-logo.svg"
                  alt="Twitter Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold">xai</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                {navigationData.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {navigationData.socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white flex items-center space-x-1"
                >
                  {item.icon === "github" && (
                    <>
                      <Github className="w-4 h-4" />
                      <span className="text-sm">{item.count}</span>
                    </>
                  )}
                  {!item.icon && <span className="text-sm">{item.title}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="mb-8">
            <Badge
              variant="outline"
              className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
            >
              Twitter AI Platform 2024
              <Link href="#" className="ml-2 text-emerald-400 hover:text-emerald-300 flex items-center">
                Take the survey <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Enhance Your Twitter
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Game With AI-Powered Tools
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your Twitter presence with our AI-powered platform.
              <br />
              Generate engaging content, track analytics, schedule posts,
              <br />
              and grow your audience with intelligent automation.
            </p>
            <br/>
            <br/>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <TwitterUsernameInput />
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuresData.features.map((feature) => (
              <Card key={feature.title} className="bg-gray-900/20 border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {feature.icon === "database" && <Database className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "shield" && <Shield className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "zap" && <Zap className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "hardDrive" && <HardDrive className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "brain" && <Brain className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "globe" && <Globe className="w-6 h-6 text-emerald-400 mr-3" />}
                    {feature.icon === "play" && <Play className="w-6 h-6 text-emerald-400 mr-3" />}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.highlights && (
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      {feature.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center">
                          <span className="text-emerald-400 mr-2">✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16 border-t border-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 mb-4">
              SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Growing Twitter presence with AI</h2>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the community</h2>
            <p className="text-gray-300 text-lg">
              Discover what our community has to say about their xai experience.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6">
              <Link href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Github className="w-5 h-5" />
                <span>GitHub discussions</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <MessageSquare className="w-5 h-5" />
                <span>Discord</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
                <span>X</span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonialsData.testimonials.map((testimonial) => (
              <Card key={testimonial.username} className="bg-gray-900/20 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Twitter className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm text-gray-400">{testimonial.username}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Enhance your Twitter game, scale your influence</h2>
          <div className="text-sm text-gray-400 space-y-1">
            <p>We protect your data. More on Security</p>
            <p>SOC2 Type 2 Certified ✓ GDPR Compliant</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {footerData.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
