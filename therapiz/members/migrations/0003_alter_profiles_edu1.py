# Generated by Django 5.1 on 2024-08-23 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0002_profiles_alter_therapizdetails_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profiles',
            name='edu1',
            field=models.TextField(),
        ),
    ]
