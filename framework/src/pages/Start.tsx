import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Starting page</PageHeaderHeading>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">FauxPix</CardTitle>
          <CardDescription className="text-center">
            Join the quest for pixel-perfect truth! In FauxPix, explore a
            gallery of mesmerizing images and test your skills against
            AI-generated art - will you outsmart the robots or get duped by
            their digital derring-do?
          </CardDescription>
          <div className="flex items-center justify-center">
            <Button
              className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg"
              onClick={() => navigate("/dashboard")}
            >
              Start
            </Button>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
