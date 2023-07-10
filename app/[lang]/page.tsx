import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-list";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });

      return posts.data;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  if (!posts) {
    notFound();
  }

  const locale = params.lang;

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard locale={locale} post={posts[0]} />
        <PostList
          locale={locale}
          posts={posts.filter((_, idx) => idx > 0 && idx < 3)}
        />
        <CTACard locale={locale} />
        <PostCard locale={locale} reverse post={posts[3]} />
        <PostList
          locale={locale}
          posts={posts.filter((_, idx) => idx > 3 && idx < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
