# Generated by Django 4.2 on 2023-04-29 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_books_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='image',
            field=models.ImageField(null=True, upload_to='api/media/api'),
        ),
    ]
