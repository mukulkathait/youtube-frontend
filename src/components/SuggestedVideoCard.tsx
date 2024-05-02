export const SuggestedVideoCard = (props: any) => {
  return (
    <div className="p-2 flex flex-row w-full gap-2">
      <img src={props.image} className="w-48 rounded-xl" />
      <div>
        <div className="font-semibold text-left">{props.title}</div>
        <div className="font-lg text-sm text-slate-500">
          {props.channelName}
        </div>
        <div className="font-lg text-sm text-slate-500">
          {props.views} - {props.timestamp}
        </div>
      </div>
    </div>
  );
};
