import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  // console.log("🪚 ", router.pathname);
  console.log("🪚 ", router.query);

  // ______________________________________________________________________
  function loadProjectHandler() {
    // load data...
    // router.push("/clients/max/a");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projecta" },
    });
  }

  // ______________________________________________________________________
  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
