# Generated by Django 5.0.1 on 2024-04-02 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RoomInfo', '0004_rename_commnets_comments_comments_comments_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='no_upvoted_comments',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='comments',
            name='upvoted_comments',
            field=models.CharField(default='', max_length=225),
        ),
    ]
