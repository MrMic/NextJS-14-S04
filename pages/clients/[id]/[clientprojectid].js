import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  // console.log("🪚 ", router.pathname);
  console.log("🪚 ", router.query);

  return (
    <div>
      <h1>The Project Page for a specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
