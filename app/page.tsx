import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

async function getPosts() {
  const res = await fetch(
    "https://gracemotorservices.in/wp-json/wp/v2/posts",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2
                className="text-2xl font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />

              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}