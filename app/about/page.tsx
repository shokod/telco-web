import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Trophy, Users, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Logo size="md" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/products/ppe" className="text-sm font-medium hover:text-primary">
              PPE
            </Link>
            <Link href="/products/fall-protection" className="text-sm font-medium hover:text-primary">
              Fall Protection
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm">About Us</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Our Mission: Protecting Workers Since 2003
                </h1>
                <p className="text-lg text-muted-foreground">
                  TIS Global (Pty) Ltd has been at the forefront of workplace safety equipment for over two decades, dedicated to
                  providing high-quality protective gear that saves lives.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop"
                  alt="TIS Global (Pty) Ltd team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                From humble beginnings to industry leadership, our journey has been driven by a passion for workplace
                safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-bold">Founded on Safety Principles</h3>
                <p className="text-muted-foreground">
                  TIS Global (Pty) Ltd was founded in 2003 by John Harrington, a former construction safety manager who
                  recognized the need for higher quality safety equipment after witnessing preventable workplace
                  accidents.
                </p>
                <p className="text-muted-foreground">
                  What began as a small operation supplying local construction companies has grown into a nationwide
                  provider of comprehensive safety solutions, serving industries from construction and manufacturing to
                  oil and gas.
                </p>
                <p className="text-muted-foreground">
                  Throughout our growth, we&apos;ve maintained our founding principle: that every worker deserves the highest
                  quality protection to return home safely at the end of each day.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                  alt="Company history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">These principles guide everything we do at TIS Global (Pty) Ltd.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Safety Above All</h3>
                  <p className="text-muted-foreground">
                    We believe that safety is never optional. Every product we offer is designed with worker protection
                    as the top priority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Excellence</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Our rigorous testing standards exceed industry requirements to
                    ensure reliability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Customer Partnership</h3>
                  <p className="text-muted-foreground">
                    We view our customers as partners in safety, working collaboratively to develop solutions for their
                    specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We constantly research and develop new safety technologies to stay ahead of evolving workplace
                    hazards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-muted-foreground">Meet the experts behind TIS Global (Pty) Ltd's commitment to excellence.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="John Harrington"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">John Harrington</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Former construction safety manager with 30+ years of industry experience.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                    alt="Sarah Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-primary font-medium">Chief Product Officer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Engineering background with expertise in safety equipment design and testing.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                    alt="Michael Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-primary font-medium">Director of Safety Training</p>
                <p className="text-sm text-muted-foreground mt-2">
                  OSHA certified trainer with extensive experience in workplace safety protocols.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Certifications */}
        <section className="py-12 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
              <p className="text-muted-foreground">
                TIS Global (Pty) Ltd maintains the highest industry standards and certifications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="relative h-20 mb-4">
                  <Image
                    src="/"
                    alt="OSHA Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">OSHA Certified</h3>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="relative h-20 mb-4">
                  <Image
                    src="/"
                    alt="ANSI Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">ANSI Compliant</h3>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="relative h-20 mb-4">
                  <Image
                    src="/"
                    alt="ISO Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">ISO 9001:2015</h3>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="relative h-20 mb-4">
                  <Image
                    src="https://www.csagroup.org/wp-content/themes/csa/assets/images/csa-logo-blue.svg"
                    alt="CSA Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">CSA Certified</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-primary text-primary-foreground p-8 rounded-xl">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Ready to Partner with TIS Global (Pty) Ltd?</h2>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  Contact our team today to discuss how we can help improve safety standards at your workplace with our
                  premium safety equipment.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button variant="secondary">Contact Our Team</Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Visit Our Showroom
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TIS Global Pty (Ltd). All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="/about" className="text-xs text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

