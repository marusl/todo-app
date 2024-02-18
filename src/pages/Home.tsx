import Activity from "../components/Activity";
import NavBar from "../components/NavBar";
import TaskTable from "../components/TaskTable";
import TotalTaskCard from '../components/TotalTaskCard';

const Home = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <NavBar />

            <div className="container mx-auto">
                <div className="my-10">
                    <TotalTaskCard />
                </div>

                <div>
                    <TaskTable />
                </div>
            </div>

            <div className="container">
                <Activity/>
            </div>
        </div>
    )
}

export default Home;