# Generated by Django 5.0.1 on 2024-02-06 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CRM', '0007_rename_name_signup_fullname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup',
            name='fullname',
            field=models.CharField(max_length=300, unique=True),
        ),
    ]
