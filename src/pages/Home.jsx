import { Carrosel } from "../components/Carrosel";

export function Home(){
    return(
        <>
        <main>
            <Carrosel/>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class = "col">
                        <div class="p-3"><a href=""><img src="src/img/002.webp" alt="" /></a></div>
                    </div>
                    <div class ="col">
                        <div class ="p-3"><img src="src/img/002.webp" alt="" /></div>
                    </div>
                </div>

            </div>
        </main> 
        </>
    )
}