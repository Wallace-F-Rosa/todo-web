import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import './globals.css'
import { TaskDTO } from "./dto/task.dto";

export default function Home() {
  let data: TaskDTO[] = [{
      id: '1',
      name: "test title",
      description: 'test description',
      createdAt: new Date(),
      userId: '',
      done: false
  }]
  return (
    <main className="w-screen h-screen bg-white2">
      <Navbar/>
      <CardContainer cardsData={data}/>
    </main>
  )
}
