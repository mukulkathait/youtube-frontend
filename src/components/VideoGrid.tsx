import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
  {
    title: "Samay Raina making tier list of all his streams",
    channelImage: "channelImage.jpg",
    thumbnailImage: "thumbImage.png",
    channelName: "Mukul Kathait",
    views: "198M",
    timestamp: "13 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {VIDEOS.map((video) => (
        <VideoCard
          title={video.title}
          channelImage={video.channelImage}
          thumbnailImage={video.thumbnailImage}
          channelName={video.channelName}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
};
