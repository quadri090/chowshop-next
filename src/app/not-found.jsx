import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="flex h-screen items-center justify-center gap-2">
        <p className="text-6xl font-medium">404</p>
        <div className="mr-1 h-20 border border-r border-zinc-400"></div>
        <p className="">Page Not Found</p>
      </div>
    </Layout>
  );
}
