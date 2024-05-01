import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="p-2 flex justify-between">
      <div className="content-center h-10">
        <img src={"/yt_icon.svg"} width={"100px"} />
      </div>
      <SearchBar />
      <div>Signin</div>
    </div>
  );
};
