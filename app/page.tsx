import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, DollarSign, Users, Award, Instagram } from "lucide-react"

// Import images from public folder
import heroImage from "../public/travel-hero-image.png"
import logo from "../public/mursing-logo-new.png"
import grandCayman from "../public/grand-cayman-crystal-clear-turquoise-waters-white-.png"
import tokyo from "../public/tokyo-japan-cherry-blossoms-modern-city-skyline.png"

export default function TravelAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src={heroImage}
          alt="Travel Hero"
          fill
          className="object-cover -z-10"
        />

        {/* Header */}
        <header className="relative z-20 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center py-4">
              <div className="flex items-center space-x-3 mb-4">
                <Image src={logo} alt="Mursing Travels" width={144} height={36} />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/website-option2/#home" className="hover:text-accent transition-colors">Home</a>
                <a href="/website-option2/#why-advisor" className="hover:text-accent transition-colors">Why Use an Advisor</a>
                <a href="/website-option2/#destinations" className="hover:text-accent transition-colors">Destinations</a>
                <a href="/website-option2/#consultation" className="hover:text-accent transition-colors">Book Consultation</a>
                <a href="/website-option2/#connect" className="hover:text-accent transition-colors">Connect</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-serif font-black text-4xl md:text-6xl mb-4 text-white drop-shadow-lg">
              Mursing Travels
            </h1>
            <p className="font-sans text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
              Let me craft the perfect travel experience tailored just for you
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Book A Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Use a Travel Advisor */}
      <section id="why-advisor" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-foreground mb-4">
              Why Use a Travel Advisor?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              In a world of endless options, let my expertise guide you to extraordinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Expert Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-sans">
                  Years of travel experience and destination expertise to ensure you get the most out of every trip
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Personalized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-sans">
                  Tailored itineraries that match your interests, budget, and travel style for unforgettable experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Price Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-sans">
                  I constantly check for price drops to make sure you are getting the best price
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-foreground mb-4">Featured Destinations</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover breathtaking locations handpicked for their unique charm and unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-teal-500">
                <Image src={grandCayman} alt="Grand Cayman" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2">Grand Cayman</h3>
                <p className="font-sans text-sm text-muted-foreground mb-3">
                  Crystal clear waters and pristine beaches
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <a href="https://www.foratravel.com/guides/3LX7V8/a-celiac-guide-to-grand-cayman-jonah-pregulman" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-red-500">
                <Image src={tokyo} alt="Tokyo, Japan" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2">Tokyo, Japan</h3>
                <p className="font-sans text-sm text-muted-foreground mb-3">
                  Modern metropolis meets ancient tradition
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <a href="https://www.foratravel.com/guides/FWYTFS/a-vegans-guide-to-tokyo-jonah-pregulman" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book a Consultation Section */}
      <section id="consultation" className="py-16 bg-[#fdeed9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl md:text-4xl mb-4 text-[#183f53]">Book a Consultation</h2>
            <p className="font-sans text-lg max-w-2xl mx-auto text-[#183f53]/80">
              Ready to start planning your dream vacation? Let's discuss your travel goals and create the perfect itinerary together.
            </p>
          </div>

          <div className="bg-card rounded-lg overflow-hidden">
            <iframe
              src="https://form.typeform.com/to/aJ3HzlC9"
              width="100%"
              height="800"
              frameBorder="0"
              className="w-full"
              title="Book a Consultation"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section id="connect" className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-foreground mb-4">Connect With Me</h2>
          <p className="font-sans text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions or want to start planning right away? I'm here to help make your travel dreams a reality.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-accent text-accent-foreground p-4 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Email Me</h3>
              <p className="font-sans text-muted-foreground">Jonah@MursingTravels.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-accent text-accent-foreground p-4 rounded-full mb-4">
                <Instagram className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Instagram</h3>
              <p className="font-sans text-muted-foreground">@WorldNomadTravelAgent</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Instagram className="h-5 w-5 mr-2" />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src={logo} alt="Mursing Travels" width={96} height={24} />
            <span className="font-serif font-black text-lg">Mursing Travels</span>
          </div>
          <p className="font-sans text-sm opacity-80">
            © 2024 Mursing Travels. Making travel dreams come true, one journey at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
