import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log("🪚 router:", router);

  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  );
}

export default BlogPostPage;
