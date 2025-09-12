let tasks = [];
let currentId = 1;
export const createTask = (req, res, next) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).send({ message: "Title is required" });
        }
        const newTask = {
            id: currentId++,
            title,
            completed: false,
        };
        tasks.push(newTask);
        res.status(201).send({ message: "Task created", task: newTask });
    }
    catch (error) {
        next(error);
    }
};
export const getTasks = (req, res, next) => {
    try {
        res.send({ message: "All tasks", tasks });
    }
    catch (error) {
        next(error);
    }
};
export const getTaskById = (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send({ message: "Id is invalid" });
        }
        const task = tasks.find((currTask) => currTask.id === id);
        if (!task) {
            return res.status(404).send({ message: "Task not found" });
        }
        res.send({ message: "Current task: ", task });
    }
    catch (error) {
        next(error);
    }
};
export const patchTask = (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id))
            return res.status(400).json({ message: "Id is invalid" });
        const index = tasks.findIndex((t) => t.id === id);
        if (index === -1)
            return res.status(404).json({ message: "Task not found" });
        const body = req.body;
        Object.assign(tasks[index], body);
        res.json({ message: "Task partially updated", task: tasks[index] });
    }
    catch (error) {
        next(error);
    }
};
export const putTask = (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id))
            return res.status(400).json({ message: "Id is invalid" });
        const index = tasks.findIndex((t) => t.id === id);
        if (index === -1)
            return res.status(404).json({ message: "Task not found" });
        const { title, completed } = req.body;
        if (title === undefined || completed === undefined) {
            return res
                .status(400)
                .json({ message: "All fields are required for PUT" });
        }
        tasks[index] = {
            ...tasks[index],
            title,
            completed,
        };
        res.json({ message: "Task fully updated", task: tasks[index] });
    }
    catch (error) {
        next(error);
    }
};
export const deleteTask = (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.status(204).send({ message: "Task deleted" });
};
//# sourceMappingURL=task.Controller.js.map