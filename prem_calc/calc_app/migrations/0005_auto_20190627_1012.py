# Generated by Django 2.1.7 on 2019-06-27 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calc_app', '0004_auto_20190627_1006'),
    ]

    operations = [
        migrations.AlterField(
            model_name='membersmodel',
            name='member_id',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='useridmodel',
            name='enter_id',
            field=models.CharField(max_length=13),
        ),
    ]
