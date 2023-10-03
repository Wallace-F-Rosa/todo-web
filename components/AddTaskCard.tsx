import { Card } from "flowbite-react";
import {GrAdd} from 'react-icons/gr'

export default function AddTaskCard() {
    return (
        <Card className="border-dashed border-secondary-dark bg-white2 items-center hover:bg-primary-dark">
            <GrAdd size={28}/>
        </Card>
    )
}