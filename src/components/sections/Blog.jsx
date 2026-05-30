import Container from '../layout/Container'
import ArrowButtons from '../ui/ArrowButtons'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { blogPosts } from '../../data/blog'

function BlogCard({ post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="relative">
        <ImagePlaceholder
          label={post.imageLabel}
          className="aspect-[16/10] w-full"
        />
        <p className="absolute bottom-4 left-4 text-lg font-medium text-gray-900">
          <span className="rounded-sm bg-white/90 px-2 py-1">{post.category}</span>
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
          {post.title}
        </h3>
        <a
          href="#"
          className="mt-4 inline-flex text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Read more
          <span className="sr-only"> about {post.title}</span>
        </a>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <section id="resources" aria-labelledby="blog-heading" className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="blog-heading"
            className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Latest insights directly from our team
          </h2>
          <ArrowButtons label="Navigate blog posts" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
