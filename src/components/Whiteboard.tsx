import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function Whiteboard() {
  return (
    <div className="w-96 h-96">
      <Tldraw />
    </div>
  );
}
