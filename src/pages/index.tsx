import { AppBar } from "@/components/AppBar";
import { CurrentVideo } from "@/components/CurrentVideo";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";
import { SuggestedVideo } from "@/components/SuggestedVideos";

export default function Home() {
  return (
    <div>
      <AppBar />
      {/* <div className="flex gap-x-15">
        <LeftBar />
        <VideoGrid />
      </div> */}
      <div className="p-5 flex gap-x-15">
        <CurrentVideo />
        <SuggestedVideo />
      </div>
    </div>
  );
}
