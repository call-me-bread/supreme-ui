import {NavBar} from "./nav-bar.tsx";
import "../assets/main.css"
import {ProductGrid} from "./product-grid.tsx";

export const Main = () => {
    return (
        <>
            <main className="container" style={{ padding: "0", backgroundColor:"whitesmoke", flexDirection: "row", alignItems: "flex-start"}}>
                <div style={{height:"5%"}}>
                    <NavBar/>
                    <img src="/landing.jpg" alt={"hi"} style={{width: "100vh", height:"30vh"}}/>
                    <ProductGrid/>
                </div>
            </main>

        </>
    );
};
