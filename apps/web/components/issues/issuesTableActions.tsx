import { IssuesTableDataType } from "@repo/config/types/apiResponseType/issuesTypes";
import { Button } from "@repo/ui/components/button";
import { useModalStore } from "../../store/modalStore";

export function IssuesTableActions({ row }: { row: IssuesTableDataType }) {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          openModal("fix-issues");
        }}
      >
        Fix Issues
      </Button>
    </>
  );
}
