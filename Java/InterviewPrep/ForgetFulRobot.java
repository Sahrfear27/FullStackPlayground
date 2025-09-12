package InterviewPrep;

import java.util.Stack;

/**
 * Scenario: In Codeville, Robbie the Robot was programmed to remember tasks,
 * but due to a bug, he keeps forgetting them. You need to help by creating a
 * TaskManager class for Robbie that can store and retrieve tasks.
 * 
 * Question: Design a TaskManager class for Robbie that allows him to add tasks
 * and recall the last task he was supposed to do.
 **/
public class ForgetFulRobot {
    public static void main(String[] args) {
        TaskManager taskObject = new TaskManager();
        taskObject.addTask("Walk a Dog");
        taskObject.addTask("Study");
        taskObject.addTask("Mediatate");
        taskObject.recall();

        System.out.println("\n");
        System.out.println(taskObject.viewAllTaks());
    }
}

class TaskManager {
    Stack<String> tasks = new Stack<>();

    public void addTask(String task) {
        tasks.push(task);
        System.out.println("New Task: " + task);
    }

    public void recall() {
        if (this.tasks.isEmpty()) {
            System.out.println("No Task to recall");
        } else {
            System.out.println("Previous Task: " + this.tasks.peek());
        }
    }

    public String viewAllTaks() {
        return ("Taks" + this.tasks);
    }
}