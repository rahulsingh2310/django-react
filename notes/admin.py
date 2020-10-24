from django.contrib import admin

# Register your models here.
from .models import NotesModel

admin.site.register(NotesModel)
