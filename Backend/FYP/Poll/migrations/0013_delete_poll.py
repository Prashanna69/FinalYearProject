# Generated by Django 5.0.1 on 2024-05-21 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Poll', '0012_remove_pollcode_session_pollcode_active'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Poll',
        ),
    ]
