//#region Import
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router } from "react-router-dom"

import AppRoutes from "./routes/app.routes"
//#endregion

const App = () => (
	<Router>
		<AppRoutes />

		<Toaster position='top-center' toastOptions={{ duration: 4000 }} />
	</Router>
)

export default App
