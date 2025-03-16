import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Logo } from "@/components/logo";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
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
            <Link
              href="/products/ppe"
              className="text-sm font-medium hover:text-primary"
            >
              PPE
            </Link>
            <Link
              href="/products/fall-protection"
              className="text-sm font-medium hover:text-primary"
            >
              Fall Protection
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm">Contact Us</span>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Get in Touch with TIS Global (Pty) Ltd
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our safety equipment or need a custom
                solution? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Our customer service team is available during business
                    hours.
                  </p>
                  <p className="font-medium">Sales: (011) 609 3222</p>
                  <p className="font-medium">Support: (011) 609 3222</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                  <p className="font-normal">Sales: <span  className="font-light">(555) 123-4567</span></p>
                  <p className="font-normal">Support: <span  className="font-light">(555) 123-4567</span></p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground mb-2">
                    Visit our showroom or call during these hours.
                  </p>
                  <p className="font-medium">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="font-medium">Saturday: 9:00 AM - 2:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Product Inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Visit Our Headquarters
                </h2>
                <div className="space-y-4">
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/"
                      alt="Map location"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">
                        TIS Global (Pty) Ltd Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        74 Van Riebeeck Avenue,
                        <br />
                        Edenvale, Johanesburg <br /> 1610
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Regional Offices</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Johanesburg Office</p>
                          <p className="text-muted-foreground">
                            74 Van Riebeeck Avenue,<br /> Edenvale, <br /> Johanesburg <br /> 1610
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">
                    Do you offer custom safety solutions?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we specialize in creating custom safety solutions for
                    specific workplace environments. Our team of engineers can
                    assess your needs and design appropriate safety systems.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">
                    What are your shipping policies?
                  </h3>
                  <p className="text-muted-foreground">
                    We offer free shipping on orders over $500. Standard
                    shipping typically takes 3-5 business days, while expedited
                    options are available for urgent requirements.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">
                    Do you provide safety training?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive safety training programs for
                    proper use of our equipment. These can be conducted on-site
                    at your facility or at our training center.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">
                    What is your return policy?
                  </h3>
                  <p className="text-muted-foreground">
                    We accept returns within 30 days of purchase for unused
                    items in original packaging. Custom orders may have
                    different return policies, which will be specified at the
                    time of order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Enhance Your Workplace Safety?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact our safety specialists today to discuss your safety
              equipment needs and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Sales Team
              </Button>
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
              © {new Date().getFullYear()} TIS GLOBAL Pty (Ltd). All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="/about"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
