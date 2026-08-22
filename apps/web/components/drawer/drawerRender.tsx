"use client";
import { useDrawerStore } from "../../store/drawerStore";
import { DrawerRegistery } from "./drawerRegistery";

export function DrawerRender() {
  const drawers = useDrawerStore((s) => s.drawers);
  console.log("drawers", drawers);
  const activeDrawer = drawers.at(-1);
  console.log("drawer", activeDrawer);

  if (!activeDrawer) {
    console.log("no active drawer");
    return null;
  }

  console.log(activeDrawer);
  console.log("open drawer");
  const DrawerComponent = DrawerRegistery[activeDrawer.type];
  return (
    <>
      <DrawerComponent />
    </>
  );
}
