# Generated by Django 3.2.4 on 2021-06-19 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('short_decription', models.CharField(max_length=240)),
                ('long_description', models.TextField()),
                ('author', models.CharField(max_length=45)),
                ('category1', models.CharField(max_length=45)),
                ('category2', models.CharField(max_length=45)),
                ('category3', models.CharField(blank=True, max_length=45, null=True)),
                ('category4', models.CharField(blank=True, max_length=45, null=True)),
                ('topgame', models.BooleanField(default=False)),
            ],
        ),
    ]
