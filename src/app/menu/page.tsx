import Header from "@/components/Header";
import Menu from "@/components/Menu";
export default function Main(){

    return(
        <>
        <div className="principal h-screen bg-gradient-to-b from-[#FE5A03] to-[#FF1A5B]">
            <div>
                <Header />
            </div>
           <Menu />
        </div>
        </>
    )
}