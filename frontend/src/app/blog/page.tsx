import { Header } from "../components/header";
import { Post } from "../components/posts";
import { Input } from "@/components/ui/input";

interface Post {
  title: string;
  publishedDate: string;
  shortContent: string;
}

export default function Blog() {
  const Posts: Post[] = [
    {
      title: "First Post",
      publishedDate: "2022-01-01",
      shortContent: "This is the first post on this blog",
    },
    {
      title: "Second Post",
      publishedDate: "2022-01-02",
      shortContent: "This is the second post on this blog",
    },
  ]

  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <Header />
      <main className="flex flex-col mx-24 sm:mx-32 lg:mx-72">
        <div className="flex flex-col pt-12 gap-4 pb-6">
          <h1 className="font-bold text-white text-5xl">All Posts</h1>
          <Input placeholder="Search posts" className="max-w-[25rem] text-white" />
        </div>
        <hr />
        <ul>
          {Posts.map((post, index) => (
            <li key={index}>
              <Post title={post.title} publishedDate={post.publishedDate} shortContent={post.shortContent} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
