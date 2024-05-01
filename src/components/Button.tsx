export const Button = (props: any) => {
  return (
    // <div className="p-1 text-center">
    <button className="h-10 p-2 w-full text-left hover:bg-slate-200 focus:bg-slate-200 font-medium rounded-xl">
      {props.name}
    </button>
    // </div>
  );
};
