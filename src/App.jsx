import './App.css'
import UserData from "./components/base.jsx";


function App() {
    const user = {name: "洪玮泽", email: "1742093234@qq.com"};
    return (
        <>
            <UserData userId="123" user={user}/>

        </>
    )
}

export default App
