import React from "react";
import TaskDropdown from "../components/TaskDropdown";
import TaskTable from "../components/TaskTable";
import EmployeeChat from "../components/EmployeeChat";
import MessageInput from "../components/MessageInput";

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