import React from "react";

export default function TaskTable() {
  return (
    <section>
      <table value="task list">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>User Added</th>
            <th>Time/Date Added</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Talk to HR</td>
            <td>Bill Jones</td>
            <td>9/24/24 12:57pm</td>
            <td>
              <label className="custom-radio">
                <input type="radio" name="task1" value="completed" />
                Completed
              </label>
              <label className="custom-radio">
                <input type="radio" name="task1" value="not_completed" defaultChecked />
                Not Completed
              </label>
            </td>
          </tr>
          <tr>
            <td>Team meeting</td>
            <td>Jimmy Mgill</td>
            <td>9/30/24 01:34pm</td>
            <td>
              <label className="custom-radio">
                <input type="radio" name="task2" value="completed" />
                Completed
              </label>
              <label className="custom-radio">
                <input type="radio" name="task2" value="not_completed" defaultChecked />
                Not Completed
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}