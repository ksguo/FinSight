import { heroImage } from "@/assets/assets"

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              Welcome to FinSight
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              Your one-stop solution for financial insights and investment tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <img 
              src={heroImage} 
              alt="Financial Dashboard Preview" 
              className="w-full max-w-md lg:max-w-2xl rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero