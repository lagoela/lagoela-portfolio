export interface PostProps {
  title: string;
  publishedDate: string;
  shortContent: string;
  slug: string;
}

export function Post({ title, publishedDate, shortContent, slug }: PostProps) {
  return (
      <div className="pt-2 pb-4 space-y-2 xl:grid xl:grid-cols-4 border-b-[1px] border-zinc-500">
        <div>
          <p className="text-zinc-400 pt-2">{publishedDate}</p>
        </div>
        <div className="col-span-3">
          <a href={`/blog/${slug}`}>
            <h3 className="font-semibold text-white text-2xl ">{title}</h3>
            <p className="text-zinc-400 col-span-3">{shortContent}</p>
          </a>
        </div>
      </div>
  );
}
