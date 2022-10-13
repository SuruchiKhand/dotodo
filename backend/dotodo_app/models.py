from django.db import models

# Create your models here.
class TaskList(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=255, blank=True)
    #tasks, not stored in our database but accessible in django

    def all_tasks_completed(self):
        return all((task.is_completed for task in self.tasks.all())) #list comprehension right to left

    def get_all_tasks_completed(self):
        return list(filter(lambda task: task.is_completed, self.tasks.all()))

    def __str__(self):
        return f"LIST: {self.name}"

#can one TaskList have multiple tasks? yes
class Task(models.Model):
    task = models.CharField(max_length=64)
    list = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name="tasks") #FOREIGNKEY will always be on the many side, since Task has one to many relationship with TaskList
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False) #tasks can be incomplete , boolenfield here and not on TaskList since tasklist will only be completed if and only if all tasks have been completed

    def __str__(self):
        return f"TASK: {self.task}"

