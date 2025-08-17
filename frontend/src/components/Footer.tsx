

const Footer = () => {
  return (
    <div className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} FinSight. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
