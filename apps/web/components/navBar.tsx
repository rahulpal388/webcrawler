import { Button } from "@repo/ui/components/button";
import { SearchBar } from "./searchBar";


export function NavBar() {

    return <>
        <div className=" h-full flex items-center justify-between px-8   border-b border-border ">
            <div>
                <p className=" text-xl font-semibold italic tracking-wide  ">Crawllytics</p>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className=" flex gap-4  ">
                <Button variant="secondary" >Login</Button>
            </div>
        </div>
    </>
}