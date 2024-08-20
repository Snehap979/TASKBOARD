import React,{useState} from "react";
import { Box, Grid, Card, Typography } from "@mui/material";

const TaskBoard = () => {
  const initialTasks = {
    todo: [
      {
        id: 1,
        task: "TASK 1",
      },
      {
        id: 2,
        task: "TASK 2",
      },
    ],
    inProgress: [
      {
        id: 3,
        task: "TASK 3",
      },
      {
        id: 4,
        task: "TASK 4",
      },
    ],
    done: [
      {
        id: 5,
        task: "TASK 5",
      },
      {
        id: 6,
        task: "TASK 6",
      },
    ],
  };
  const [tasks,setTasks]=useState(initialTasks)

  const onDragStart=(event,taskID,column)=>{
    event.dataTransfer.setData('taskId',taskID)
    event.dataTransfer.setData('column',column)
  }

  const onDragOver=(event)=>
  {
    event.preventDefault()
  }

  const onDrop=(event,targetColumn)=>{ 
    let srctaskId=event.dataTransfer.getData('taskId')
    let srcColumn=event.dataTransfer.getData('column')
    if(targetColumn==srcColumn)
      return
    console.log("event,targetColumn",tasks,targetColumn,tasks[targetColumn])
    let targetTasks=tasks[targetColumn]
    console.log("targetTasks",targetTasks)
    let srcTasks=tasks[srcColumn]
    console.log("srcTasks",srcTasks)
    let taskToBeAppended=srcTasks.find((task)=>{
      console.log("find",task)
     return task.id==srctaskId
      
    })
    console.log("taskToBeAppended",taskToBeAppended)
    let updatedTasks=srcTasks.filter((task)=>{
      return task.id!=taskToBeAppended.id
    })
    console.log("updatedTasks",updatedTasks)
    // setTasks( [...tasks.targetColumn,tasks.srcColumn[srctaskId]])
    targetTasks=[...targetTasks,taskToBeAppended]
    setTasks({...tasks,[srcColumn]:updatedTasks,[targetColumn]:targetTasks})
    
    
  }

  return (
    <Grid container style={{ padding: 8 }} spacing={4}> 
      <Grid item>
        <Box style={{ height: 400, backgroundColor: "#f3f7f9" }} onDrop={(event)=>{onDrop(event,'todo')}} onDragOver={onDragOver}>
            <Typography textAlign="center">
            TO DO
            </Typography>
           
          {tasks.todo.map((task) => {
            return (
              <Card style={{ height: 25, width: 140, margin: 8, padding: 8 }} draggable onDragStart={(event)=>onDragStart(event,task.id,'todo')}>
               <Typography textAlign="center">
               {task.task}
            </Typography>
              </Card>
            );
          })}
        </Box>
      </Grid>
      <Grid item>
        <Box style={{ height: "400px", backgroundColor: "#f3f7f9" }} onDrop={(event)=>{onDrop(event,'inProgress')}} onDragOver={onDragOver}>
        <Typography textAlign="center">
        IN PROGRESS
            </Typography>
           
          {tasks.inProgress.map((task) => {
            return (
              <Card style={{ height: 25, width: 140, margin: 8, padding: 8 }} key={task.id} draggable onDragStart={(event)=>onDragStart(event,task.id,'inProgress')}>
              <Typography textAlign="center">
               {task.task}
            </Typography>
              </Card>
            );
          })}
        </Box>
      </Grid>
      <Grid item>
        <Box style={{ height: "400px", backgroundColor: "#f3f7f9" }} onDrop={(event)=>{onDrop(event,'done')}} onDragOver={onDragOver}>
        <Typography textAlign="center">
        DONE
            </Typography>
           
          {tasks.done.map((task) => {
            return (
              <Card style={{ height: 25, width: 140, margin: 8, padding: 8 }} draggable onDragStart={(event)=>{onDragStart(event,task.id,'done')}}>
               <Typography textAlign="center">
               {task.task}
            </Typography>
              </Card>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskBoard;
