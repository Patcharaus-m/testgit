import todoList from "@/modal/todoList"
import { ITodoList } from "@/types/todoList"
import { successRes} from "@/controller/main"

export default async function create(data: ITodoList): Promise<ITypeReturnResponse<ITodoList | null>> {
    try {
        const newTodoList = await todoList.create(data)
        return successRes(newTodoList)
    } catch (error) {
        return successRes(null)
    }
    
}