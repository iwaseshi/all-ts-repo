import Client, { connect } from "@dagger.io/dagger";

connect(async (client: Client) => {
  const node = client.container().from("node:16").withExec(["node", "-v"]);
  console.log("Done get node container");

  const version = await node.stdout();

  console.log("Hello from Dagger and Node " + version);
});
