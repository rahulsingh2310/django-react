# Generated by Django 2.2 on 2020-10-21 04:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0004_auto_20201021_0421'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notesmodel',
            old_name='title1',
            new_name='title',
        ),
    ]
