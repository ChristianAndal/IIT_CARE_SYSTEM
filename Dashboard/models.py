from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class DashboardWidget(models.Model):
    """
    Customizable dashboard widgets for users
    """
    WIDGET_TYPES = [
        ('stats', 'Statistics'),
        ('chart', 'Chart'),
        ('list', 'List'),
        ('calendar', 'Calendar'),
    ]
    
    id = models.AutoField(primary_key=True, db_column='Id')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='dashboard_widgets', db_column='UserId')
    widget_type = models.CharField(max_length=20, choices=WIDGET_TYPES, db_column='WidgetType')
    title = models.CharField(max_length=100, db_column='Title')
    position = models.IntegerField(default=0, db_column='Position')
    is_visible = models.BooleanField(default=True, db_column='IsVisible')
    config = models.JSONField(default=dict, blank=True, db_column='Config')
    created_at = models.DateTimeField(auto_now_add=True, db_column='CreatedAt')
    updated_at = models.DateTimeField(auto_now=True, db_column='UpdatedAt')
    
    class Meta:
        db_table = 'dashboard_widget'
        verbose_name = 'Dashboard Widget'
        verbose_name_plural = 'Dashboard Widgets'
        ordering = ['position']
        unique_together = ['user', 'position']
    
    def __str__(self):
        return f"{self.user.username} - {self.title}"


class Notification(models.Model):
    """
    User notifications for the dashboard
    """
    NOTIFICATION_TYPES = [
        ('info', 'Information'),
        ('success', 'Success'),
        ('warning', 'Warning'),
        ('error', 'Error'),
    ]
    
    id = models.AutoField(primary_key=True, db_column='Id')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications', db_column='UserId')
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPES, default='info', db_column='NotificationType')
    title = models.CharField(max_length=200, db_column='Title')
    message = models.TextField(db_column='Message')
    is_read = models.BooleanField(default=False, db_column='IsRead')
    link = models.URLField(blank=True, null=True, db_column='Link')
    created_at = models.DateTimeField(auto_now_add=True, db_column='CreatedAt')
    read_at = models.DateTimeField(blank=True, null=True, db_column='ReadAt')
    
    class Meta:
        db_table = 'dashboard_notification'
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.username} - {self.title}"
    
    def mark_as_read(self):
        if not self.is_read:
            self.is_read = True
            self.read_at = timezone.now()
            self.save()
