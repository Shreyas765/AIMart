# Generated by Django 5.1.4 on 2024-12-29 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aimodel',
            name='performance_metrics',
            field=models.JSONField(default=dict),
        ),
    ]
