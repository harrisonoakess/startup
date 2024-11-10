import React from "react";
import TaskDropdown from "../Action/TaskDropdown";
import TaskTable from "../Action/TaskTable";
import EmployeeChat from "../Action/EmployeeChat";
import MessageInput from "../Action/MessageInput";

export default function TaskPage() {
  return (
    <main>
      <TaskDropdown />
      <TaskTable />
      <EmployeeChat />
      <MessageInput />
    </main>
  );
}