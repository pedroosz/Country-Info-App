import { PropsWithChildren } from "react";

export default function PageContainer(props: PropsWithChildren) {
  return (
    <main className="px-4">
      <div className="h-screen max-w-7xl mx-auto py-8 space-y-4">
        {props.children}
      </div>
    </main>
  );
}
