export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.thumbnailImage} className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.channelImage} className="rounded-full" />
        </div>
        <div className="col-span-11 pl-2">
          <div className="font-bold">{props.title}</div>
          <div>
            <div className="col-span-11 text-grey-400 text-base">
              {props.channelName}
            </div>
            <div className="col-span-11 text-grey-400 text-base">
              {props.views} | {props.timestamp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
