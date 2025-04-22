import Image from "next/image";
import Navbar from "@/components/navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Form from "@/components/form";
import { CardDescription, CardTitle } from "@/components/ui/card";
import TaskList from "@/components/tasklist";
import Chart from "@/components/chart";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <ResizablePanelGroup
        className="h-full w-full border"
        direction="horizontal"
      >
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel className="max-h-[30vh]">
              <div className="h-full flex flex-col justify-center p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold">
                    Create a new task
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    What do you have to do today
                  </CardDescription>
                </div>
                <Form />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="min-h-[30vh] h-full">
              <Chart />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="max-w-[75vw] min-w-[30vw]">
          <div className="h-full overflow-y-auto p-6">
            <TaskList />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
