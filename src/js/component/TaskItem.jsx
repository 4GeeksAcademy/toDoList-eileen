import React, { useState } from "react";

const TaskItem = ({taskName}) => { //({taskName})--> when theres a few items

    //const {taskName}= props; --> when theres a lot of items
    return (
        <div>{taskName}</div>
    )
}

export default TaskItem; 