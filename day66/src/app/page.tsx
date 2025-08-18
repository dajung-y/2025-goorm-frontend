import ArrayExample from "@/components/ArrayExample";
import ObjectExample from "@/components/ObjectExample";
import TotalExample from "@/components/TotalExample";

export default function Home() {
  let age : number = 25;
  return (
    <div className="p-4">
      <h1>ts 시작</h1>
      <ArrayExample />
      <ObjectExample />
      <TotalExample />
    </div>
  );
}
