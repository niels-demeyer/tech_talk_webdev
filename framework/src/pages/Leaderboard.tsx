import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Empty() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Leaderboard</PageHeaderHeading>
      </PageHeader>
      <Card>
        <CardHeader>
          <Table>
            <TableCaption>FauxPix leaderboard</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Detective</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Images</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">John</TableCell>
                <TableCell>35 s</TableCell>
                <TableCell>
                  <a
                    href={import.meta.env.VITE_PUBLIC_URL + "/img/ai/image.png"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Image
                  </a>
                </TableCell>
                <TableCell className="text-right">4/4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardHeader>
      </Card>
    </>
  );
}
