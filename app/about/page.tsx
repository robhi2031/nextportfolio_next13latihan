import Header from "../components/Layouts/Frontend/Header"

const About = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="min-h-[calc(100vh-var(--header-height))] dark:bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="py-8 sm:py-16">
            <div className="gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                  Ini Adalah Halaman About
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About