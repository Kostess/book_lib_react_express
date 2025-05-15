import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "@pages/Home/Home.jsx";
import NotFound from "@pages/NotFound/NotFound.jsx";

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />}/>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp