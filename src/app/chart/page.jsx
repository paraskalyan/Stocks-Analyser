import { Suspense } from "react";
import ChartPage from "./chart";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ChartPage />
      </Suspense>
    </div>
  );
}
