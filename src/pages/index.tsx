import { AppBar } from "@/components/AppBar";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="flex gap-x-15">
        <LeftBar />
        <VideoGrid />
      </div>
    </div>
  );
}
