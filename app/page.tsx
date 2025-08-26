import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, DollarSign, Users, Award, Instagram } from "lucide-react"

export default function TravelAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('./travel-hero-image.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Header */}
        <header className="relative z-20 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center py-4">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="./mursing-logo-new.png"
                  alt="Mursing Travels"
                  width={144}
                  height={36}
                  className="h-36 w-auto"
                />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
                <a href="#why-advisor" className="hover:text-accent transition-colors">Why Use an Advisor</a>
                <a href="#destinations" className="hover:text-accent transition-colors">Destinations</a>
                <a href="#consultation" className="hover:text-accent transition-colors">Book Consultation</a>
                <a href="#connect" className="hover:text-accent transition-colors">Connect</a>
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
