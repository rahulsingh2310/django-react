from rest_framework import generics

from . import models
from . import serializers

class NoteList(generics.ListCreateAPIView):
  queryset = models.NotesModel.objects.all().order_by('-created_at', '-updated_at')
  serializer_class = serializers.NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = models.NotesModel.objects.all()
  serializer_class = serializers.NoteSerializer
