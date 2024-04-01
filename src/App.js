import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AsideBar from "./AsideBar";
import MessagePane from "./MessagePane";

export default function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <header className="text-center">
                    <h1>Know Me</h1>
                    <hr />
                </header>
            </div>
            <div className="row">
                <div className="col-3">
                    <aside>
                        <AsideBar />
                    </aside>
                </div>
                <div className="col-9">
                    <main>
                        <MessagePane/>
                    </main>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    )
}