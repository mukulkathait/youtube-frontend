import { Button } from "./Button";

export const LeftBar = () => {
  return (
    <div className="w-1/4 pl-4 flex flex-col items-start ">
      <div className="w-full flex flex-col">
        <Button name={"Home"} />
        <Button name={"Subscriptions"} />
        <Button name={"Youtube Music"} />
      </div>
      <br />
      <div className="w-full flex flex-col">
        <Button name={"Your Channel"} />
        <Button name={"History"} />
        <Button name={"Playlist"} />
        <Button name={"Your Videos"} />
        <Button name={"Watch Later"} />
        <Button name={"Liked Videos"} />
        <Button name={"Downloads"} />
      </div>
      <br />
      <div className="w-full flex flex-col">
        <Button name={"Subscriptions"} />
      </div>
    </div>
  );
};
