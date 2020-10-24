from rest_framework import serializers

from . import models

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.NotesModel
        fields = '__all__'
