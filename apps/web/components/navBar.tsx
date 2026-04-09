import { Button } from "@repo/ui/components/button";
import { SearchBar } from "./searchBar";


export function NavBar() {

    return <>
        <div className="  flex items-center justify-between px-8 py-4  border-b border-border ">
            <div>
                <p className=" text-xl font-semibold italic tracking-wide  ">RankLens</p>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Button appName="login">Login</Button>
            </div>
        </div>
    </>
}