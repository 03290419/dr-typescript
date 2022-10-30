{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };
  // Todo 내부 사항중 title 과 description등 일부만 사용하고 싶을 때 유용하다.
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
