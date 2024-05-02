import { ChannelActionBtn } from "./ChannelActionBtn";

export const CurrentVideo = () => {
  return (
    <div className="w-4/6 min-h-screen flex flex-col gap-2">
      <div className="w-full h-80vh bg-amber-300 rounded-2xl">Actual Video</div>
      <div className="font-bold text-lg">
        The Bear - How Jeremy Allen White Perfected Carmy Berzatto
      </div>
      <div className="flex flex-row gap-2">
        <img src="/channelImage.jpg" className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold text-base text-nowrap">
            Just an Observation
          </div>
          <div className="font-semibold text-sm text-slate-500">
            198K subscribers
          </div>
        </div>
        <div className="w-full flex justify-between ">
          <ChannelActionBtn name={"Subscribe"} />
          <div className="flex gap-x-2">
            <ChannelActionBtn name={"likedislike"} />
            <ChannelActionBtn name={"Share"} />
            <ChannelActionBtn name={"Download"} />
            <ChannelActionBtn name={"..."} />
          </div>
        </div>
      </div>
      <div>Description</div>
      <div>Comments</div>
    </div>
  );
};
