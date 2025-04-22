"use Client";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};
export default function ProvidersWrapperI(props: Props) {
  const { children } = props;
  return (
    <>
      <Toaster position="top-right" expand={true} richColors />
      {children}
    </>
  );
}
