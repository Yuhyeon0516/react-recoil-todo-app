import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../todoAtoms";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState);

  const fomattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {fomattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
