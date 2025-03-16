import Footer from "@/components/footer";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, PhoneCall, Shield, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo size="md" />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-primary"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <PhoneCall className="h-4 w-4 mr-2" />
                Contact Sales
              </Button>
              <Button size="sm">Shop Now</Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-2 items-center justify-items-center max-width-7xl">
          {/* Hero Section */}
          <section className="py-12 md:py-24 bg-muted/40">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  South African{" "}
                  <span className="text-primary">Safety Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Proudly South African company specializing in fall arrest,
                  rope access, and safety equipment since 2013.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Browse Catalog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Consultation
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-blue-900" />
              <Badge variant="outline" className="bg-blue-900/10"><span>SANS/EN Certified Equipment</span></Badge>
                  
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                  alt="Worker with safety equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section id="products" className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Safety Solutions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  TIS GLOBAL specializes in the supplying, design, development
                  and distribution of a full range of Fall Arrest, Rope Access
                  and Rope Rescue Equipment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* PPE Section */}
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=1974&auto=format&fit=crop"
                      alt="Personal Protective Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      Personal Protective Equipment
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      SANS/EN certified equipment for complete protection in
                      hazardous environments.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span>Safety Helmets (SANS 1397)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span>Connectors (EN 363)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span>Pulleys (EN 12278)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900 " />
                        <span>Inertia Blocks (EN 360)</span>
                      </li>
                    </ul>
                    <Link href="/products/ppe" className="w-full">
                      <Button className="w-full">Explore PPE Solutions</Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Fall Protection Section */}
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                      alt="Fall Protection Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      Fall Protection Equipment
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized solutions for working at heights safely.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span>Fall Arrest Harnesses (SANS 50361)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900 " />
                        <span>Shock Absorbing Lanyards (SANS 50354/50355)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900" />
                        <span>Work Positioning Systems (SANS 50358)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-900"/>
                        <span>Vertical & Horizontal Lifelines (EN 795)</span>
                      </li>
                    </ul>
                    <Link href="/products/fall-protection" className="w-full">
                      <Button className="w-full">
                        Explore Fall Protection
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-12 md:py-24 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose TIS GLOBAL
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We believe in building strong relationships with our
                  customers, providing quality products and services.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full w-12 h-12  bg-blue-900/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      SANS/EN Certified
                    </h3>
                    <p className="text-muted-foreground">
                      All our products meet South African Bureau of Standards
                      (SABS) and European Norms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-900/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Expert Consultation
                    </h3>
                    <p className="text-muted-foreground">
                      Our qualified team of experts provide the best services,
                      ensuring all needs are taken care of.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-900/10 w-12 h-12 flex items-center justify-center mb-4">
                      <User className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Proudly South African
                    </h3>
                    <p className="text-muted-foreground">
                      Established in 2013, serving the African continent with
                      pride.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-900/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Comprehensive Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      From equipment supply to training and skills development
                      for working at heights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                  alt="Safety equipment in use"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  About TIS GLOBAL
                </h2>
                <p className="text-muted-foreground">
                  TIS GLOBAL Pty (Ltd) is a proudly South African company
                  established in 2013. We focus on delivering a professional,
                  sustainable and reliable service to the whole of the working
                  at heights industry within the African Continent.
                </p>
                <p className="text-muted-foreground">
                  Through our broad operational experience in rope access, fall
                  arrest, traditional rock climbing, caving, industrial high
                  angle rescue and Military rope work, we can recommend the
                  correct equipment for your working requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline">Our Vision</Button>
                  <Button variant="secondary">Our Certifications</Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            id="contact"
            className="py-12 md:py-24 bg-slate-900 text-primary-foreground w-full rounded-xl"
          >
            <div className="px-4 text-center mx-auto p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Workplace Safety?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Contact our safety specialists today to discuss your safety
                equipment needs and get personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto">
                <Button variant="secondary" size="lg">
                  Request a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Sales Team
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  );
}
