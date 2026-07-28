import ImageChanger from "./ImageChanger";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import TodoList from "./TodoList";
import UseCallback from "./UseCallback";
import Usememo from "./Usememo";

export const questions = [
  {
    title: "Question 1 : Image Changer",
    component: <ImageChanger />,
  },
  {
    title: "Question 2 : Todo List",
    component: <TodoList />,
  },
  {
    title: "Question 3 :Search Input ",
    component: <SearchInput />,
  },
  {
    title: "Question 4 :Pagination in Web page",
    component: <Pagination />,
  },
  {
    title: "Usememo usage",
    component: <Usememo />,
  },
  {
    title: "UseCallback usage",
    component: <UseCallback />,
  },
];
