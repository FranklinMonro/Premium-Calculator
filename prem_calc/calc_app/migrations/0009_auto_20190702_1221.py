# Generated by Django 2.1.7 on 2019-07-02 10:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calc_app', '0008_auto_20190702_0703'),
    ]

    operations = [
        migrations.DeleteModel(
            name='NonMemberCalcModel',
        ),
        migrations.DeleteModel(
            name='UserNameModel',
        ),
    ]
