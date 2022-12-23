import { ToDoIdType, ToDoType } from "../../Screens/Tasks/types";

export interface TasksState {
  loading: boolean;
  err: string;
  data: ToDoType[];
}

export enum TasksActionTypes {
  FETCH_TASKS = "FETCH_TASKS",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
  REMOVE_TASK = "REMOVE_TASK",
  ADD_TASK = "ADD_TASK",
}

interface FetchJobsAction {
  type: TasksActionTypes.FETCH_TASKS;
}
interface FetchJobsSuccessAction {
  type: TasksActionTypes.FETCH_TASKS_SUCCESS;
  payload: {
    data: ToDoType[];
    isCompleted: boolean | null;
    userId: null | number | string;
  };
}
interface FetchJobsErrorAction {
  type: TasksActionTypes.FETCH_TASKS_ERROR;
  payload: string;
}

interface RemoveTask {
  type: TasksActionTypes.REMOVE_TASK;
  payload: ToDoIdType;
}
interface AddTask {
  type: TasksActionTypes.ADD_TASK;
  payload: ToDoType;
}

export type TasksAction =
  | FetchJobsAction
  | FetchJobsSuccessAction
  | FetchJobsErrorAction
  | RemoveTask
  | AddTask;
