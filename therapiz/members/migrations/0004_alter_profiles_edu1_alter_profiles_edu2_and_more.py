# Generated by Django 5.1 on 2024-08-24 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_alter_profiles_edu1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profiles',
            name='edu1',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profiles',
            name='edu2',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='therapizdetails',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
