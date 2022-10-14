from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *

#viewsets are DRF magic
#viewsets will handle incoming requests from the client, process them and send JSON requests
#handles list, create, detail, update, partial update, delete
class TaskListViewSet(ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

