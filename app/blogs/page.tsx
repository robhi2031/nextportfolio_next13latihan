import CardList from "../components/Blogs/CardList";
import Header from "../components/Layouts/Frontend/Header";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
interface Ipost {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Blogs = async() => {
  const resPost = await fetch(apiUrl);
  const posts: Ipost[] = await resPost.json();
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
                  The Nuxt Blog
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
            <div className="lg:col-span-10">
              <div className="mt-8 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  { posts.map((post) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <CardList>{post}</CardList>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blogs