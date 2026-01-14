import { Layout } from "@/components/layout/Layout";
import { GetStarted } from "@/components/GetStarted";
import { useNavigate } from "react-router-dom";

export default function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-8 sm:py-16 px-4">
        <GetStarted onComplete={() => navigate("/")} />
      </div>
    </Layout>
  );
}
