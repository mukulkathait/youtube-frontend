export const ChannelActionBtn = (props: any) => {
  return (
    <div>
      <button className="bg-slate-200 p-3 rounded-3xl text-center items-center font-semibold">
        {props.name}
      </button>
    </div>
  );
};
